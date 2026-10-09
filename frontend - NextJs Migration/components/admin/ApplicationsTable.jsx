import React from "react";

const statusColors = {
  new: "bg-blue-50 text-blue-700 border-blue-100",
  reviewing: "bg-yellow-50 text-yellow-700 border-yellow-100",
  shortlisted: "bg-purple-50 text-purple-700 border-purple-100",
  hired: "bg-green-50 text-green-700 border-green-100",
  rejected: "bg-red-50 text-red-700 border-red-100",
};

export default function ApplicationsTable({ applications, onView, onDelete }) {
  return (
    <section className="rounded-sm border border-line bg-surface">
      <div className="max-h-[70vh] overflow-auto">
        <table className="min-w-full border-collapse text-xs">
          <thead className="sticky top-0 bg-subtle">
            <tr className="border-b border-line text-left text-[11px] uppercase tracking-wide text-muted">
              <th className="px-3 py-2">Applicant</th>
              <th className="px-3 py-2">Position</th>
              <th className="px-3 py-2">Contact</th>
              <th className="px-3 py-2">Applied</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-3 py-6 text-center text-xs text-muted">
                  No applications yet.
                </td>
              </tr>
            ) : (
              applications.map((app) => {
                const status = app.status || "new";
                const color = statusColors[status] || "bg-subtle text-ink/80 border-line";
                return (
                  <tr key={app.id} className="border-b border-line hover:bg-subtle">
                    <td className="px-3 py-2 align-top text-xs font-medium text-ink">{app.name || "-"}</td>
                    <td className="px-3 py-2 align-top text-xs text-ink/80">{app.job_title || "-"}</td>
                    <td className="px-3 py-2 align-top text-xs text-ink/80">
                      <p className="truncate max-w-[180px]">{app.email || "-"}</p>
                      <p>{app.phone || "-"}</p>
                    </td>
                    <td className="px-3 py-2 align-top text-[11px] text-muted">
                      {app.created_at ? new Date(app.created_at).toLocaleString() : "-"}
                    </td>
                    <td className="px-3 py-2 align-top">
                      <span
                        className={`inline-flex items-center rounded-xs border px-2 py-[2px] text-[11px] font-medium ${color}`}
                      >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </span>
                    </td>
                    <td className="px-3 py-2 align-top">
                      <div className="flex justify-end gap-1">
                        <button
                          onClick={() => onView(app)}
                          className="h-7 w-7 rounded-xs border border-edge text-[11px] text-ink/80 hover:bg-subtle"
                          title="View"
                        >
                          V
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete application from "${app.name}"?`)) {
                              onDelete(app.id);
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
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
