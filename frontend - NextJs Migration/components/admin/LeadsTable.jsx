import React from "react";
import LeadRow from "./LeadRow";

export default function LeadsTable({
    leads,
    onView,
    onDelete,
    onStatusChange,
}) {
    return (
        <section className="rounded-sm border border-line bg-surface">
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
                        {leads.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={7}
                                    className="px-3 py-6 text-center text-xs text-muted"
                                >
                                    No leads found.
                                </td>
                            </tr>
                        ) : (
                            leads.map((lead) => (
                                <LeadRow
                                    key={lead.id}
                                    lead={lead}
                                    onView={onView}
                                    onDelete={onDelete}
                                    onStatusChange={onStatusChange}
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
