'use client';
import { useRef, useState } from 'react';

/*
 * Client interactivity for /careers: position list + application form.
 * Job data comes from the server component as props (already in HTML for SEO).
 */
export default function CareersContent({ jobs }) {
  const [selectedJob, setSelectedJob] = useState(jobs[0]?.id || '');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    resume_url: '',
    message: '',
    honeypot: '',
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [error, setError] = useState('');
  const [status, setStatus] = useState(null); // 'success' | 'error'
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef(null);

  const scrollToForm = (jobId) => {
    if (jobId) setSelectedJob(jobId);
    setStatus(null);
    setError('');
    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setError('');
    setStatus(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    if (file && file.size > 5 * 1024 * 1024) {
      setError('Resume file must be under 5 MB.');
      setStatus('error');
      e.target.value = '';
      setResumeFile(null);
      return;
    }
    setResumeFile(file);
    setError('');
    setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.honeypot) return;
    try {
      setSubmitting(true);
      setError('');
      setStatus(null);
      const payload = new FormData();
      payload.append('job_id', selectedJob || '');
      payload.append('name', form.name);
      payload.append('email', form.email);
      payload.append('phone', form.phone);
      payload.append('resume_url', form.resume_url);
      payload.append('message', form.message);
      payload.append('honeypot', form.honeypot);
      if (resumeFile) payload.append('resume', resumeFile);
      const res = await fetch('/api/careers/apply', {
        method: 'POST',
        body: payload,
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Submission failed. Please try again.');
        setStatus('error');
        return;
      }
      setStatus('success');
      setForm({ name: '', email: '', phone: '', resume_url: '', message: '', honeypot: '' });
      setResumeFile(null);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full bg-transparent border border-edge px-4 py-3 text-sm text-ink placeholder:text-ink/25 outline-none transition-colors focus:border-ink/40';

  return (
    <>
      <section aria-label="Open positions">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">Open positions</h2>
        {jobs.length === 0 ? (
          <div className="bg-surface border border-line p-8 text-center">
            <p className="font-medium mb-2">No open positions right now</p>
            <p className="text-sm text-muted leading-relaxed max-w-md mx-auto">
              We hire as we grow. Send a general application below and we&apos;ll reach out
              when something fits your skills.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {jobs.map((job) => (
              <article key={job.id} className="bg-surface border border-line p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.01em]">{job.title}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                      {job.location} · {job.type}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => scrollToForm(job.id)}
                    className="shrink-0 inline-flex items-center justify-center px-6 py-2.5 bg-accent text-on-accent text-sm font-medium hover:bg-accent/85 transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {job.description && (
                  <p className="mt-4 text-sm text-muted leading-relaxed max-w-3xl">{job.description}</p>
                )}
                {job.requirements && (
                  <details className="mt-4 group">
                    <summary className="text-sm text-ink underline underline-offset-4 decoration-line hover:decoration-ink transition-colors cursor-pointer">
                      Requirements
                    </summary>
                    <p className="mt-3 text-sm text-muted leading-relaxed whitespace-pre-line max-w-3xl">
                      {job.requirements}
                    </p>
                  </details>
                )}
              </article>
            ))}
          </div>
        )}
      </section>

      <section ref={formRef} aria-label="Job application form" className="mt-16 md:mt-20 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-3">Apply now</h2>
        <p className="text-sm md:text-base text-ink/58 max-w-2xl leading-relaxed mb-8">
          Fill in your details and we&apos;ll get back to you within a few business days.
        </p>

        {status === 'success' ? (
          <div role="status" className="bg-surface border border-line p-8 text-center max-w-2xl">
            <p className="font-medium mb-2">Application received</p>
            <p className="text-sm text-muted leading-relaxed">
              Thanks for applying! We review every application and reply within a few business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl space-y-5">
            <input
              type="text"
              name="honeypot"
              value={form.honeypot}
              onChange={handleChange}
              className="hidden"
              autoComplete="off"
              tabIndex={-1}
              aria-hidden="true"
            />
            <div>
              <label htmlFor="careers-position" className="block text-[12px] uppercase tracking-[0.14em] text-ink/55 mb-2">
                Position
              </label>
              <select
                id="careers-position"
                name="position"
                value={selectedJob}
                onChange={(e) => setSelectedJob(e.target.value)}
                className="w-full bg-transparent border border-edge px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink/40"
              >
                {jobs.map((job) => (
                  <option key={job.id} value={job.id}>
                    {job.title} — {job.location}
                  </option>
                ))}
                <option value="">General application</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="careers-name" className="block text-[12px] uppercase tracking-[0.14em] text-ink/55 mb-2">
                  Name <span className="text-ink/90">*</span>
                </label>
                <input
                  id="careers-name"
                  required
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="careers-phone" className="block text-[12px] uppercase tracking-[0.14em] text-ink/55 mb-2">
                  Phone <span className="text-ink/90">*</span>
                </label>
                <input
                  id="careers-phone"
                  required
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="careers-email" className="block text-[12px] uppercase tracking-[0.14em] text-ink/55 mb-2">
                Email <span className="text-ink/90">*</span>
              </label>
              <input
                id="careers-email"
                required
                type="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="careers-resume-file" className="block text-[12px] uppercase tracking-[0.14em] text-ink/55 mb-2">
                Resume file <span className="text-ink/90">(PDF or Word, max 5 MB)</span>
              </label>
              <input
                id="careers-resume-file"
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={handleFileChange}
                className="w-full bg-transparent border border-edge px-4 py-3 text-sm text-ink/80 outline-none transition-colors focus:border-ink/40 file:mr-4 file:border-0 file:bg-ink/10 file:px-4 file:py-1.5 file:text-xs file:font-medium file:text-ink hover:file:bg-ink/15 file:transition-colors file:cursor-pointer"
              />
              {resumeFile && (
                <p className="mt-2 text-xs text-ink/60">Selected: {resumeFile.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="careers-resume" className="block text-[12px] uppercase tracking-[0.14em] text-ink/55 mb-2">
                Or resume link
              </label>
              <input
                id="careers-resume"
                type="url"
                name="resume_url"
                value={form.resume_url}
                onChange={handleChange}
                placeholder="Google Drive / Dropbox link (if no file above)"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="careers-message" className="block text-[12px] uppercase tracking-[0.14em] text-ink/55 mb-2">
                Cover note
              </label>
              <textarea
                id="careers-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your skills, experience, and why you want to join Webentric…"
                className={`${inputClass} resize-none`}
              />
            </div>
            {status === 'error' && error && (
              <p role="alert" className="text-sm text-red-400">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-on-accent text-sm font-medium hover:bg-accent/85 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {submitting ? 'Submitting…' : 'Submit application'}
            </button>
          </form>
        )}
      </section>
    </>
  );
}
