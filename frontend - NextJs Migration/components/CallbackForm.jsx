'use client';
import { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Phone } from 'lucide-react';
import { supabase } from '../lib/supabase.js';
import { notifyLead } from '../lib/notifyLead.js';

/*
 * Hero callback form: one phone field + "Request a call back" button.
 * Writes to the same `quote_requests` table as ContactForm/PopUpForm so
 * requests appear in the existing admin panel with no DB changes.
 * Row shape: name="Callback request", email=null, details="callback" note.
 */
export default function CallbackForm() {
  const [phone, setPhone] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState(null); // 'success' | 'error'
  const [submitting, setSubmitting] = useState(false);

  const normalize = (value) => value.replace(/[\s\-()]/g, '');

  const isValidPhone = (value) => {
    const v = normalize(value);
    // Accept: 10-digit Indian mobile, optionally prefixed with 91 / +91,
    // or a generic international number (7–15 digits, optional leading +).
    if (/^(\+91|91)?[6-9]\d{9}$/.test(v)) return true;
    return /^\+?\d{7,15}$/.test(v);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return; // spam trap
    const trimmed = phone.trim();
    if (!isValidPhone(trimmed)) {
      setError('Please enter a valid phone number.');
      setStatus('error');
      return;
    }
    try {
      setSubmitting(true);
      setError('');
      setStatus(null);
      const { error: insertError } = await supabase.from('quote_requests').insert([
        {
          name: 'Callback request',
          email: null,
          phone: normalize(trimmed),
          details: 'Callback request from homepage hero. Please call back.',
        },
      ]);
      if (insertError) {
        console.error(insertError);
        setError('Request failed. Please try again or call us directly.');
        setStatus('error');
        return;
      }
      setStatus('success');
      notifyLead({
        source: 'Homepage callback',
        name: 'Callback request',
        email: '',
        phone: normalize(trimmed),
        details: 'Callback request from homepage hero. Please call back.',
      });
      setPhone('');
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  if (status === 'success') {
    return (
      <p role="status" className="text-sm text-ink/80 leading-relaxed mb-5 sm:mb-6">
        Thanks! We&apos;ll call you back within 24 hours on business days.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 mb-5 sm:mb-6" noValidate={false}>
      <label
        htmlFor="hero-callback-phone"
        className="block text-[11px] uppercase tracking-[0.18em] text-ink/55 mb-2"
      >
        Request a callback
      </label>
      <input
        type="text"
        name="company_website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="hidden"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
      />
      <div className="flex max-w-[360px] items-stretch">
        <div className="relative min-w-0 flex-1">
          <Phone
            size={15}
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/50"
          />
          <input
            id="hero-callback-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setError('');
              setStatus(null);
            }}
            placeholder="Enter your number"
            aria-label="Enter your phone number"
            aria-invalid={status === 'error'}
            aria-describedby={status === 'error' ? 'hero-callback-error' : undefined}
            className={`w-full h-full bg-raised border border-r-0 pl-10 pr-4 py-2.5 text-[13px] text-ink placeholder:text-ink/50 outline-none transition-colors ${status === 'error' ? 'border-red-400/70' : 'border-edge focus:border-ink/60'
              }`}
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          aria-label="Submit callback request"
          className="inline-flex shrink-0 items-center justify-center bg-accent text-on-accent px-4 hover:bg-accent/85 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
        >
          {submitting ? (
            <span className="text-[13px] font-medium px-1">…</span>
          ) : (
            <FiArrowUpRight size={16} aria-hidden="true" />
          )}
        </button>
      </div>
      {status === 'error' && error && (
        <p id="hero-callback-error" role="alert" className="mt-2 text-xs text-red-400">
          {error}
        </p>
      )}

    </form>
  );
}
