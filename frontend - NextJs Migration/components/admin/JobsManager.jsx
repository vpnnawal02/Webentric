import React, { useState } from "react";
import JobPostModal from "./JobPostModal";

export default function JobsManager({ jobs, onCreate, onUpdate, onDelete, onToggleActive }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [saving, setSaving] = useState(false);

  const openCreate = () => {
    setEditing(null);
    setModalOpen(true);
  };
  const openEdit = (job) => {
    setEditing(job);
    setModalOpen(true);
  };

  const handleSave = async (values) => {
    setSaving(true);
    try {
      if (editing) await onUpdate(editing.id, values);
      else await onCreate(values);
      setModalOpen(false);
      setEditing(null);
    } finally {
      setSaving(false);
    }
  };

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs text-muted">
          {jobs.length} position{jobs.length === 1 ? "" : "s"} ·{" "}
          {jobs.filter((j) => j.is_active).length} active on the site
        </p>
        <button
          onClick={openCreate}
          className="rounded-xs border border-edge bg-accent px-3 py-1.5 text-xs font-medium text-on-accent hover:bg-accent/85"
        >
          + New position
        </button>
      </div>

      <div className="rounded-sm border border-line bg-surface">
        <div className="max-h-[70vh] overflow-auto">
          <table className="min-w-full border-collapse text-xs">
            <thead className="sticky top-0 bg-subtle">
              <tr className="border-b border-line text-left text-[11px] uppercase tracking-wide text-muted">
                <th className="px-3 py-2">Title</th>
                <th className="px-3 py-2">Location</th>
                <th className="px-3 py-2">Type</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-3 py-6 text-center text-xs text-muted">
                    No positions yet. Publish your first opening.
                  </td>
                </tr>
              ) : (
                jobs.map((job) => (
                  <tr key={job.id} className="border-b border-line hover:bg-subtle">
                    <td className="px-3 py-2 align-top text-xs font-medium text-ink">{job.title}</td>
                    <td className="px-3 py-2 align-top text-xs text-ink/80">{job.location}</td>
                    <td className="px-3 py-2 align-top text-xs text-ink/80">{job.type}</td>
                    <td className="px-3 py-2 align-top">
                      <button
                        onClick={() => onToggleActive(job)}
                        title={job.is_active ? "Hide from careers page" : "Show on careers page"}
                        className={`inline-flex items-center rounded-xs border px-2 py-[2px] text-[11px] font-medium ${
                          job.is_active
                            ? "bg-green-50 text-green-700 border-green-100"
                            : "bg-subtle text-ink/60 border-line"
                        }`}
                      >
                        {job.is_active ? "Active" : "Hidden"}
                      </button>
                    </td>
                    <td className="px-3 py-2 align-top">
                      <div className="flex justify-end gap-1">
                        <button
                          onClick={() => openEdit(job)}
                          className="h-7 px-2 rounded-xs border border-edge text-[11px] text-ink/80 hover:bg-subtle"
                          title="Edit"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete "${job.title}"? Applications for it are kept.`)) {
                              onDelete(job.id);
                            }
                          }}
                          className="h-7 w-7 rounded-xs border border-edge text-[11px] text-red-600 hover:bg-red-50"
                          title="Delete"
                        >
                          ×
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {modalOpen && (
        <JobPostModal
          initial={editing}
          saving={saving}
          onClose={() => {
            setModalOpen(false);
            setEditing(null);
          }}
          onSave={handleSave}
        />
      )}
    </section>
  );
}
