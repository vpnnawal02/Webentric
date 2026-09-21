import React, { useState } from "react";

export default function LeadModal({
    lead,
    onClose,
    onStatusChange,
    statusOptions,
}) {
    const [status, setStatus] = useState(lead.status || "new");
    const [notes, setNotes] = useState(lead.internal_notes || "");

    const createdAt = lead.created_at
        ? new Date(lead.created_at).toLocaleString()
        : "-";

    const handleStatusSave = () => {
        if (status !== lead.status) {
            onStatusChange(lead.id, status);
        }
    };

    return (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30">
            <div className="w-full max-w-md rounded-sm border border-line bg-surface p-4 shadow-sm">
                <header className="mb-3 flex items-center justify-between">
                    <h2 className="text-sm font-semibold text-ink">
                        Lead Details
                    </h2>
                    <button
                        onClick={onClose}
                        className="h-6 w-6 rounded-xs border border-edge text-xs text-ink/80 hover:bg-subtle"
                    >
                        ×
                    </button>
                </header>

                <div className="space-y-2 text-xs">
                    <DetailRow label="Name" value={lead.name || "-"} />
                    <DetailRow label="Email" value={lead.email || "-"} />
                    <DetailRow label="Phone" value={lead.phone || "-"} />
                    <DetailRow label="Created At" value={createdAt} />
                    <div>
                        <p className="mb-1 text-[11px] font-medium text-muted">
                            Details
                        </p>
                        <div className="rounded-xs border border-line bg-subtle px-2 py-2 text-xs text-ink">
                            {lead.details || "-"}
                        </div>
                    </div>

                    <div>
                        <p className="mb-1 text-[11px] font-medium text-muted">
                            Status
                        </p>
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

                    <div>
                        <p className="mb-1 text-[11px] font-medium text-muted">
                            Internal Notes
                        </p>
                        <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            rows={3}
                            className="w-full rounded-xs border border-edge bg-surface px-2 py-1 text-xs text-ink focus:border-muted focus:outline-none focus:ring-0"
                            placeholder="Add internal notes (optional)"
                        />
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
                            handleStatusSave();
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
            <p className="w-24 text-[11px] font-medium text-muted">
                {label}
            </p>
            <p className="flex-1 text-xs text-ink">{value}</p>
        </div>
    );
}
