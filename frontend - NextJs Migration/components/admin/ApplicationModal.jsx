import React, { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function ApplicationModal({ application, onClose, onStatusChange, statusOptions }) {
  const [status, setStatus] = useState(application.status || "new");
  const [downloading, setDownloading] = useState(false);

  const createdAt = application.created_at
    ? new Date(application.created_at).toLocaleString()
    : "-";

  const handleDownloadResume = async () => {
    if (!application.resume_path) return;
    try {
      setDownloading(true);
      const { data, error } = await supabase.storage
        .from("resumes")
        .download(application.resume_path);
      if (error) {
        alert(`Could not download resume: ${error.message}`);
        return;
      }
      const url = URL.createObjectURL(data);
      const a = document.createElement("a");
      a.href = url;
      a.download = application.resume_name || "resume";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 px-4">
      <div className="w-full max-w-md rounded-sm border border-line bg-surface p-4 shadow-sm max-h-[90vh] overflow-y-auto">
        <header className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-ink">Application details</h2>
          <button
            onClick={onClose}
            className="h-6 w-6 rounded-xs border border-edge text-xs text-ink/80 hover:bg-subtle"
          >
            ×
          </button>
        </header>

        <div className="space-y-2 text-xs">
          <DetailRow label="Position" value={application.job_title || "-"} />
          <DetailRow label="Name" value={application.name || "-"} />
          <DetailRow
            label="Email"
            value={
              application.email ? (
                <a href={`mailto:${application.email}`} className="underline underline-offset-2">
                  {application.email}
                </a>
              ) : (
                "-"
              )
            }
          />
          <DetailRow
            label="Phone"
            value={
              application.phone ? (
                <span>
                  <a href={`tel:${application.phone}`} className="underline underline-offset-2">
                    {application.phone}
                  </a>{" "}
                  <a
                    href={`https://wa.me/${application.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2"
                  >
                    (WhatsApp)
                  </a>
                </span>
              ) : (
                "-"
              )
            }
          />
          <div className="flex items-start justify-between gap-2">
            <p className="w-24 shrink-0 text-[11px] font-medium text-muted">Resume</p>
            <div className="flex-1 text-xs text-ink break-words">
              {application.resume_path ? (
                <button
                  onClick={handleDownloadResume}
                  disabled={downloading}
                  className="rounded-xs border border-edge bg-subtle px-2.5 py-1 text-xs font-medium text-ink hover:bg-ink/5 disabled:opacity-50"
                >
                  {downloading ? "Downloading…" : `⬇ ${application.resume_name || "Download resume"}`}
                </button>
              ) : application.resume_url ? (
                <a
                  href={application.resume_url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 break-all"
                >
                  {application.resume_url}
                </a>
              ) : (
                "-"
              )}
            </div>
          </div>
          <DetailRow label="Applied" value={createdAt} />
          <div>
            <p className="mb-1 text-[11px] font-medium text-muted">Cover note</p>
            <div className="rounded-xs border border-line bg-subtle px-2 py-2 text-xs text-ink whitespace-pre-line">
              {application.message || "-"}
            </div>
          </div>

          <div>
            <p className="mb-1 text-[11px] font-medium text-muted">Status</p>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full rounded-xs border border-edge bg-surface px-2 py-1 text-xs text-ink focus:border-muted focus:outline-none focus:ring-0"
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <footer className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="rounded-xs border border-edge px-3 py-1 text-xs text-ink/80 hover:bg-subtle"
          >
            Close
          </button>
          <button
            onClick={() => {
              if (status !== application.status) onStatusChange(application.id, status);
              onClose();
            }}
            className="rounded-xs border border-edge bg-accent px-3 py-1 text-xs font-medium text-on-accent hover:bg-accent/85"
          >
            Save
          </button>
        </footer>
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-2">
      <p className="w-24 shrink-0 text-[11px] font-medium text-muted">{label}</p>
      <p className="flex-1 text-xs text-ink break-words">{value}</p>
    </div>
  );
}
