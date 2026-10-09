import { smtpConfigured, leadEmail, sendNotification } from '../../../lib/mailer.js';

export const dynamic = 'force-dynamic';

// Generic lead notification for all quote/contact forms.
// Sends ONLY to the site owner's fixed address — the recipient is never
// taken from user input, so this endpoint can't be used to spam others.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (body.honeypot) return Response.json({ ok: true });

  const source = String(body.source || 'Website form').slice(0, 80);
  const name = String(body.name || '').trim().slice(0, 200);
  const email = String(body.email || '').trim().slice(0, 200);
  const phone = String(body.phone || '').trim().slice(0, 40);
  const details = String(body.details || '').trim().slice(0, 5000);

  if (!name) return Response.json({ error: 'Name is required.' }, { status: 400 });
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  if (!smtpConfigured()) {
    console.warn('Lead notification skipped: SMTP not configured.');
    return Response.json({
      ok: true,
      emailSent: false,
      emailError: 'SMTP not configured (need SMTP_HOST, SMTP_USER and SMTP_PASS/SMTP_PASSWORD).',
    });
  }

  try {
    await sendNotification({
      ...leadEmail({ source, name, email, phone, details }),
      replyTo: email || undefined,
    });
    return Response.json({ ok: true, emailSent: true });
  } catch (err) {
    const emailError = err?.message || String(err);
    console.error('Lead notification email failed:', err);
    return Response.json({ ok: true, emailSent: false, emailError });
  }
}
