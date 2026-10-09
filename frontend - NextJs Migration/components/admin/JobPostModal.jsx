import React, { useState } from "react";

const JOB_TYPES = ["Full-time", "Part-time", "Contract", "Internship", "Freelance"];

export default function JobPostModal({ initial, onClose, onSave, saving }) {
  const [form, setForm] = useState({
    title: initial?.title || "",
    location: initial?.location || "New Delhi, India",
    type: initial?.type || "Full-time",
    description: initial?.description || "",
    requirements: initial?.requirements || "",
    is_active: initial?.is_active ?? true,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      setError("Job title is required.");
      return;
    }
    onSave({
      title: form.title.trim(),
      location: form.location.trim() || "New Delhi, India",
      type: form.type,
      description: form.description.trim(),
      requirements: form.requirements.trim(),
      is_active: form.is_active,
    });
  };

  const inputClass =
    "w-full rounded-xs border border-edge bg-surface px-2 py-1.5 text-xs text-ink placeholder:text-muted/70 focus:border-muted focus:outline-none focus:ring-0";

  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center bg-black/30 sm:items-center sm:px-4">
      <div className="w-full rounded-t-xl border border-line bg-surface p-4 pb-6 shadow-sm max-h-[92vh] overflow-y-auto sm:max-w-lg sm:rounded-sm sm:pb-4">
        <header className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-ink">
            {initial ? "Edit position" : "New position"}
          </h2>
          <button
            onClick={onClose}
            className="h-6 w-6 rounded-xs border border-edge text-xs text-ink/80 hover:bg-subtle"
          >
            ×
          </button>
        </header>

        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          <div>
            <p className="mb-1 text-[11px] font-medium text-muted">Job title *</p>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Frontend Developer (React)"
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <p className="mb-1 text-[11px] font-medium text-muted">Location</p>
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="New Delhi, India"
                className={inputClass}
              />
            </div>
            <div>
              <p className="mb-1 text-[11px] font-medium text-muted">Type</p>
              <select name="type" value={form.type} onChange={handleChange} className={inputClass}>
                {JOB_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <p className="mb-1 text-[11px] font-medium text-muted">Description</p>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              placeholder="What the role involves, team, day-to-day…"
              className={`${inputClass} resize-none`}
            />
          </div>

          <div>
            <p className="mb-1 text-[11px] font-medium text-muted">Requirements</p>
            <textarea
              name="requirements"
              value={form.requirements}
              onChange={handleChange}
              rows={4}
              placeholder="Skills and experience needed…"
              className={`${inputClass} resize-none`}
            />
          </div>

          <label className="flex items-center gap-2 text-xs text-ink/80">
            <input
              type="checkbox"
              name="is_active"
              checked={form.is_active}
              onChange={handleChange}
              className="h-3.5 w-3.5 accent-current"
            />
            Active — visible on the public careers page
          </label>

          {error && <p className="text-xs text-red-600">{error}</p>}

          <footer className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xs border border-edge px-3 py-1 text-xs text-ink/80 hover:bg-subtle"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="rounded-xs border border-edge bg-accent px-3 py-1 text-xs font-medium text-on-accent hover:bg-accent/85 disabled:opacity-50"
            >
              {saving ? "Saving…" : initial ? "Save changes" : "Publish position"}
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}
