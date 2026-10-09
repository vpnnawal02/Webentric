import React from "react";
import StatusPill from "./StatusPill";

export default function ApplicationsTable({ applications, onView, onDelete }) {
    if (applications.length === 0) {
        return (
            <section className="rounded-sm border border-line bg-surface px-3 py-6 text-center text-xs text-muted">
                No applications yet.
            </section>
        );
    }

    return (
        <>
            {/* Mobile cards */}
            <section className="space-y-3 md:hidden" aria-label="Applications">
                {applications.map((app) => (
                    <article
                        key={app.id}
                        className="rounded-sm border border-line bg-surface p-4"
                    >
                        <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                                <h3 className="truncate text-sm font-semibold text-ink">
                                    {app.name || "-"}
                                </h3>
                                <p className="mt-0.5 truncate text-[11px] text-muted">
                                    {app.job_title || "-"}
                                </p>
                            </div>
                            <StatusPill status={app.status} kind="application" />
                        </div>

                        <div className="mt-3 space-y-1 text-sm">
                            {app.phone && (
                                <a href={`tel:${app.phone}`} className="block font-medium text-ink">
                                    ☎ {app.phone}
                                </a>
                            )}
                            {app.email && (
                                <p className="truncate text-xs text-ink/70">{app.email}</p>
                            )}
                            <p className="text-[11px] text-muted">
                                {app.created_at ? new Date(app.created_at).toLocaleString() : "-"}
                            </p>
                        </div>

                        <div className="mt-3 flex gap-2 border-t border-line pt-3">
                            <button
                                onClick={() => onView(app)}
                                className="flex-1 rounded-xs border border-edge px-3 py-2 text-xs font-medium text-ink/80 active:bg-subtle"
                            >
                                View
                            </button>
                            <button
                                onClick={() => {
                                    if (window.confirm(`Delete application from "${app.name}"?`)) {
                                        onDelete(app.id);
                                    }
                                }}
                                className="rounded-xs border border-edge px-3 py-2 text-xs font-medium text-red-600 active:bg-red-50"
                            >
                                Delete
                            </button>
                        </div>
                    </article>
                ))}
            </section>

            {/* Desktop table */}
            <section className="hidden rounded-sm border border-line bg-surface md:block">
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
                            {applications.map((app) => (
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
                                        <StatusPill status={app.status} kind="application" />
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
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}
