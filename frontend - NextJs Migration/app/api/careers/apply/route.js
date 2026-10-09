import { supabase } from '../../../../lib/supabase.js';
import { smtpConfigured, careersEmail, sendNotification } from '../../../../lib/mailer.js';

export const dynamic = 'force-dynamic';

const MAX_RESUME_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_RESUME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);
const ALLOWED_RESUME_EXTS = new Set(['pdf', 'doc', 'docx']);

export async function POST(request) {
  let form;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }
  const get = (key) => {
    const v = form.get(key);
    return typeof v === 'string' ? v : '';
  };

  // Spam trap
  if (get('honeypot')) {
    return Response.json({ ok: true });
  }

  const job_id = get('job_id') || null;
  const name = get('name').trim();
  const email = get('email').trim();
  const phone = get('phone').trim();
  const resume_url = get('resume_url').trim() || null;
  const message = get('message').trim() || null;

  if (!name) return Response.json({ error: 'Name is required.' }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (!/^\+?\d{7,15}$/.test(phone.replace(/[\s\-()]/g, ''))) {
    return Response.json({ error: 'Please enter a valid phone number.' }, { status: 400 });
  }
  if (resume_url && !/^https?:\/\/.+\..+/.test(resume_url)) {
    return Response.json({ error: 'Resume link must be a valid URL (https://…).' }, { status: 400 });
  }

  // Optional resume file (PDF / Word, max 5 MB)
  let resume_path = null;
  let resume_name = null;
  const file = form.get('resume');
  if (file && typeof file !== 'string' && file.size > 0) {
    const ext = (file.name.split('.').pop() || '').toLowerCase();
    if (!ALLOWED_RESUME_TYPES.has(file.type) && !ALLOWED_RESUME_EXTS.has(ext)) {
      return Response.json(
        { error: 'Resume must be a PDF or Word file (.pdf, .doc, .docx).' },
        { status: 400 },
      );
    }
    if (file.size > MAX_RESUME_BYTES) {
      return Response.json(
        { error: 'Resume file must be under 5 MB.' },
        { status: 400 },
      );
    }
    const safeBase = file.name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 80) || 'resume';
    const objectName = `applications/${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${safeBase}`;
    const { error: uploadError } = await supabase.storage
      .from('resumes')
      .upload(objectName, file, {
        contentType: file.type || 'application/octet-stream',
        upsert: false,
      });
    if (uploadError) {
      console.error('Resume upload failed:', uploadError);
      return Response.json(
        { error: 'Resume upload failed. Please try again or use a resume link instead.' },
        { status: 500 },
      );
    }
    resume_path = objectName;
    resume_name = file.name;
  }

  // Look up the job title for the notification + admin display
  let job_title = 'General application';
  if (job_id) {
    const { data: job } = await supabase
      .from('job_posts')
      .select('id,title,is_active')
      .eq('id', job_id)
      .eq('is_active', true)
      .maybeSingle();
    if (!job) {
      return Response.json(
        { error: 'This position is no longer accepting applications.' },
        { status: 400 },
      );
    }
    job_title = job.title;
  }

  // NOTE: no .select() chained here — a RETURNING clause would require an
  // anon SELECT policy on job_applications, which intentionally doesn't exist
  // (applications must stay private). That's what caused the 42501.
  const { error } = await supabase
    .from('job_applications')
    .insert([{ job_id, job_title, name, email, phone, resume_url, resume_path, resume_name, message }]);

  if (error) {
    console.error('Careers application insert failed:', error);
    return Response.json(
      { error: 'Submission failed. Please try again.' },
      { status: 500 },
    );
  }

  // Email is best-effort: the application is already saved, never lose it.
  // Failures are returned (message only, no credentials) so they are visible
  // instead of hiding in server logs.
  let emailSent = false;
  let emailError = null;
  if (smtpConfigured()) {
    try {
      await sendNotification({
        ...careersEmail({ job_title, name, email, phone, resume_url, resume_name, message }),
        replyTo: email,
      });
      emailSent = true;
    } catch (err) {
      emailError = err?.message || String(err);
      console.error('Careers notification email failed:', err);
    }
  } else {
    emailError = 'SMTP not configured (need SMTP_HOST, SMTP_USER and SMTP_PASS/SMTP_PASSWORD).';
    console.warn(`Careers notification email skipped: ${emailError}`);
  }

  return Response.json({ ok: true, emailSent, ...(emailError ? { emailError } : {}) });
}
