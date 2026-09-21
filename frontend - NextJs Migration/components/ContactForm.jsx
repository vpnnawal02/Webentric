'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabase.js';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setStatus(null);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.honeypot) return;

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus({
        type: 'error',
        message: 'Please fix the highlighted fields.',
      });
      return;
    }

    try {
      setSubmitting(true);
      setStatus(null);

      const { error } = await supabase.from('quote_requests').insert([
        {
          name: form.name.trim(),
          email: form.email.trim() || null,
          phone: form.phone.trim(),
          details: form.message.trim(),
        },
      ]);

      if (error) {
        console.error(error);
        setStatus({
          type: 'error',
          message: 'Submission failed. Please try again.',
        });
        return;
      }

      setStatus({
        type: 'success',
        message: 'Thanks! Your message has been sent. We’ll get back within 24 hours.',
      });

      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
        honeypot: '',
      });
      setErrors({});
    } catch (err) {
      console.error(err);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="honeypot"
        value={form.honeypot}
        onChange={handleChange}
        className="hidden"
        autoComplete="off"
        tabIndex={-1}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-[12px] uppercase tracking-[0.14em] text-ink/55 mb-2">
            Name <span className="text-ink/90">*</span>
          </label>
          <input
            required
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={`w-full bg-transparent border px-4 py-3 text-sm text-ink placeholder:text-ink/25 outline-none transition-colors ${errors.name
              ? 'border-red-400/70 focus:border-red-400'
              : 'border-edge focus:border-ink/40'
              }`}
          />
          {errors.name && (
            <p className="mt-2 text-xs text-red-300">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-[12px] uppercase tracking-[0.14em] text-ink/55 mb-2">
            Phone <span className="text-ink/90">*</span>
          </label>
          <input
            required
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={`w-full bg-transparent border px-4 py-3 text-sm text-ink placeholder:text-ink/25 outline-none transition-colors ${errors.phone
              ? 'border-red-400/70 focus:border-red-400'
              : 'border-edge focus:border-ink/40'
              }`}
          />
          {errors.phone && (
            <p className="mt-2 text-xs text-red-300">{errors.phone}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-[12px] uppercase tracking-[0.14em] text-ink/55 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@company.com"
          className={`w-full bg-transparent border px-4 py-3 text-sm text-ink placeholder:text-ink/25 outline-none transition-colors ${errors.email
            ? 'border-red-400/70 focus:border-red-400'
            : 'border-edge focus:border-ink/40'
            }`}
        />
        {errors.email && (
          <p className="mt-2 text-xs text-red-300">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-[12px] uppercase tracking-[0.14em] text-ink/55 mb-2">
          Message <span className="text-ink/90">*</span>
        </label>
        <textarea
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project, goals, required pages or features, timeline, and budget range..."
          className={`w-full bg-transparent border px-4 py-3 text-sm text-ink placeholder:text-ink/25 outline-none resize-none transition-colors ${errors.message
            ? 'border-red-400/70 focus:border-red-400'
            : 'border-edge focus:border-ink/40'
            }`}
        />
        {errors.message && (
          <p className="mt-2 text-xs text-red-300">{errors.message}</p>
        )}
      </div>

      {status && (
        <p
          className={`text-sm ${status.type === 'success' ? 'text-green-300' : 'text-red-300'
            }`}
        >
          {status.message}
        </p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center px-6 py-3.5 bg-accent text-on-accent text-sm font-medium hover:bg-accent/85 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {submitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
