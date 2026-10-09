'use client';

// Fire-and-forget owner notification after a lead form saves to Supabase.
// Never blocks or breaks the form UX — failures only log to console.
export function notifyLead(payload) {
  try {
    fetch('/api/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (!data.emailSent && data.emailError) {
          console.warn('Owner notification not sent:', data.emailError);
        }
      })
      .catch((err) => console.warn('Owner notification failed:', err));
  } catch (err) {
    console.warn('Owner notification failed:', err);
  }
}
