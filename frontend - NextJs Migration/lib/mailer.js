import nodemailer from 'nodemailer';

// ── Shared SMTP + notification templates for all site forms ──
// Server-side only: never import this file from a client component.

export function smtpPass() {
  // Accept both common var names — templates use SMTP_PASS,
  // many setups already have SMTP_PASSWORD.
  return process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
}

export function smtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST && process.env.SMTP_USER && smtpPass(),
  );
}

export function notifyAddress() {
  return process.env.CAREERS_NOTIFY_EMAIL || process.env.SMTP_USER;
}

function transporter() {
  // Port convention (nodemailer docs): 465 = implicit TLS (secure:true),
  // 587/25 = STARTTLS upgrade (secure:false). Derive from port unless the
  // user explicitly set SMTP_SECURE — a mismatch causes ESOCKET errors.
  const port = Number(process.env.SMTP_PORT || 587);
  const secure =
    process.env.SMTP_SECURE != null && process.env.SMTP_SECURE !== ''
      ? process.env.SMTP_SECURE === 'true'
      : port === 465;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: { user: process.env.SMTP_USER, pass: smtpPass() },
  });
}

export const esc = (v) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const SHELL_TOP = `
  <div style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:560px;margin:0 auto;padding:24px 16px;">
      <div style="background-color:#0a0a0a;border-radius:12px 12px 0 0;padding:28px 32px;text-align:center;">
        <p style="margin:0;color:#ffffff;font-size:20px;font-weight:bold;letter-spacing:4px;">WEBENTRIC<span style="color:#8a8a8a;">.</span></p>`;
const SHELL_BOTTOM = `
      <p style="text-align:center;color:#a3a3a3;font-size:11px;margin:16px 0 0;">Sent automatically from webentric.in · Replying goes to the sender</p>
    </div>
  </div>`;

const row = (label, value) => `
    <tr>
      <td style="padding:10px 16px;color:#616161;font-size:12px;text-transform:uppercase;letter-spacing:1.5px;width:110px;vertical-align:top;">${label}</td>
      <td style="padding:10px 16px;color:#101010;font-size:14px;word-break:break-word;">${value}</td>
    </tr>`;

const dash = (v) => (v ? v : '<span style="color:#616161;">—</span>');

export function leadEmail({ source, name, email, phone, details }) {
  const subject = `New enquiry — ${source} (${name})`;
  const text = [
    `A new enquiry came in via ${source} on webentric.in.`,
    '',
    `Name: ${name}`,
    `Email: ${email || '-'}`,
    `Phone: ${phone || '-'}`,
    '',
    'Details:',
    details || '-',
    '',
    'View and manage it in the admin panel: https://webentric.in/admin',
  ].join('\n');

  const html = `${SHELL_TOP}
        <p style="margin:8px 0 0;color:#a3a3a3;font-size:12px;text-transform:uppercase;letter-spacing:2px;">New enquiry · ${esc(source)}</p>
      </div>
      <div style="background-color:#ffffff;border:1px solid #e6e6e6;border-top:0;border-radius:0 0 12px 12px;padding:8px 16px 24px;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
          ${row('Name', esc(name))}
          ${row('Email', email ? `<a href="mailto:${esc(email)}" style="color:#0a0a0a;font-weight:600;">${esc(email)}</a>` : dash())}
          ${row('Phone', phone ? `<a href="tel:${esc(phone)}" style="color:#0a0a0a;font-weight:600;">${esc(phone)}</a>` : dash())}
        </table>
        <div style="margin:16px 16px 0;background-color:#fafafa;border:1px solid #e6e6e6;border-radius:8px;padding:16px;">
          <p style="margin:0 0 8px;color:#616161;font-size:12px;text-transform:uppercase;letter-spacing:1.5px;">Details</p>
          <p style="margin:0;color:#101010;font-size:14px;line-height:1.6;">${dash(esc(details).replace(/\n/g, '<br>'))}</p>
        </div>
        <div style="text-align:center;margin:24px 0 8px;">
          <a href="https://webentric.in/admin" style="display:inline-block;background-color:#0a0a0a;color:#ffffff;font-size:14px;font-weight:bold;text-decoration:none;padding:13px 36px;border-radius:8px;">Review in admin panel →</a>
        </div>
      </div>${SHELL_BOTTOM}`;

  return { subject, text, html };
}

export function careersEmail(application) {
  const resumeCell = application.resume_url
    ? `<a href="${esc(application.resume_url)}" style="color:#0a0a0a;font-weight:600;">${esc(application.resume_url)}</a>`
    : application.resume_name
      ? `<span style="display:inline-block;background:#f1f1f2;border:1px solid #e6e6e6;border-radius:6px;padding:4px 10px;font-size:13px;">📄 ${esc(application.resume_name)}</span><br><span style="color:#616161;font-size:12px;">Download it from the admin panel</span>`
      : '<span style="color:#616161;">—</span>';

  const resumeText = application.resume_name
    ? `File uploaded: ${application.resume_name}`
    : application.resume_url || '-';

  const subject = `New job application — ${application.job_title || 'General'} (${application.name})`;
  const text = [
    'A new job application was submitted on webentric.in/careers.',
    '',
    `Position: ${application.job_title || '-'}`,
    `Name: ${application.name}`,
    `Email: ${application.email}`,
    `Phone: ${application.phone}`,
    `Resume: ${resumeText}`,
    '',
    'Message:',
    application.message || '-',
    '',
    'View and manage it in the admin panel: https://webentric.in/admin',
  ].join('\n');

  const html = `${SHELL_TOP}
        <p style="margin:8px 0 0;color:#a3a3a3;font-size:12px;text-transform:uppercase;letter-spacing:2px;">New job application</p>
      </div>
      <div style="background-color:#ffffff;border:1px solid #e6e6e6;border-top:0;border-radius:0 0 12px 12px;padding:8px 16px 24px;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
          ${row('Position', `<strong>${esc(application.job_title) || '—'}</strong>`)}
          ${row('Name', esc(application.name))}
          ${row('Email', `<a href="mailto:${esc(application.email)}" style="color:#0a0a0a;font-weight:600;">${esc(application.email)}</a>`)}
          ${row('Phone', `<a href="tel:${esc(application.phone)}" style="color:#0a0a0a;font-weight:600;">${esc(application.phone)}</a>`)}
          ${row('Resume', resumeCell)}
        </table>
        <div style="margin:16px 16px 0;background-color:#fafafa;border:1px solid #e6e6e6;border-radius:8px;padding:16px;">
          <p style="margin:0 0 8px;color:#616161;font-size:12px;text-transform:uppercase;letter-spacing:1.5px;">Cover note</p>
          <p style="margin:0;color:#101010;font-size:14px;line-height:1.6;">${dash(esc(application.message).replace(/\n/g, '<br>'))}</p>
        </div>
        <div style="text-align:center;margin:24px 0 8px;">
          <a href="https://webentric.in/admin" style="display:inline-block;background-color:#0a0a0a;color:#ffffff;font-size:14px;font-weight:bold;text-decoration:none;padding:13px 36px;border-radius:8px;">Review in admin panel →</a>
        </div>
      </div>${SHELL_BOTTOM}`;

  return { subject, text, html };
}

export async function sendNotification({ subject, text, html, replyTo }) {
  const info = await transporter().sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: notifyAddress(),
    subject,
    text,
    html,
    ...(replyTo ? { replyTo } : {}),
  });
  return info;
}
