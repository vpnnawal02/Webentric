import React from "react";
import LeadRow from "./LeadRow";
import StatusPill from "./StatusPill";

export default function LeadsTable({
    leads,
    onView,
    onDelete,
    onStatusChange,
}) {
    if (leads.length === 0) {
        return (
            <section className="rounded-sm border border-line bg-surface px-3 py-6 text-center text-xs text-muted">
                No leads found.
            </section>
        );
    }

    return (
        <>
            {/* Mobile cards */}
            <section className="space-y-3 md:hidden" aria-label="Leads">
                {leads.map((lead) => (
                    <article
                        key={lead.id}
                        className="rounded-sm border border-line bg-surface p-4"
                    >
                        <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                                <h3 className="truncate text-sm font-semibold text-ink">
                                    {lead.name || "-"}
                                </h3>
                                <p className="mt-0.5 text-[11px] text-muted">
                                    {lead.created_at
                                        ? new Date(lead.created_at).toLocaleString()
                                        : "-"}
                                </p>
                            </div>
                            <StatusPill status={lead.status} />
                        </div>

                        {(lead.phone || lead.email) && (
                            <div className="mt-3 space-y-1 text-sm">
                                {lead.phone && (
                                    <a
                                        href={`tel:${lead.phone}`}
                                        className="block font-medium text-ink"
                                    >
                                        ☎ {lead.phone}
                                    </a>
                                )}
                                {lead.email && (
                                    <a
                                        href={`mailto:${lead.email}`}
                                        className="block truncate text-xs text-ink/70"
                                    >
                                        {lead.email}
                                    </a>
                                )}
                            </div>
                        )}

                        {lead.details && (
                            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-ink/70">
                                {lead.details}
                            </p>
                        )}

                        <div className="mt-3 flex gap-2 border-t border-line pt-3">
                            <button
                                onClick={() => onView(lead)}
                                className="flex-1 rounded-xs border border-edge px-3 py-2 text-xs font-medium text-ink/80 active:bg-subtle"
                            >
                                View
                            </button>
                            {lead.phone && (
                                <a
                                    href={`https://wa.me/${lead.phone.replace(/\D/g, "")}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 rounded-xs border border-edge px-3 py-2 text-center text-xs font-medium text-ink/80 active:bg-subtle"
                                >
                                    WhatsApp
                                </a>
                            )}
                            <button
                                onClick={() => onDelete(lead.id)}
                                aria-label={`Delete lead ${lead.name || ""}`}
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
                                <th className="px-3 py-2">Name</th>
                                <th className="px-3 py-2">Email</th>
                                <th className="px-3 py-2">Phone</th>
                                <th className="px-3 py-2 w-64">Details</th>
                                <th className="px-3 py-2">Created At</th>
                                <th className="px-3 py-2">Status</th>
                                <th className="px-3 py-2 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leads.map((lead) => (
                                <LeadRow
                                    key={lead.id}
                                    lead={lead}
                                    onView={onView}
                                    onDelete={onDelete}
                                    onStatusChange={onStatusChange}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}
