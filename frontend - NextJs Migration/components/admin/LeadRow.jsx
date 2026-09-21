import React from "react";

const statusColors = {
    new: "bg-blue-50 text-blue-700 border-blue-100",
    contacted: "bg-yellow-50 text-yellow-700 border-yellow-100",
    negotiation: "bg-purple-50 text-purple-700 border-purple-100",
    closed: "bg-green-50 text-green-700 border-green-100",
    lost: "bg-red-50 text-red-700 border-red-100",
};

export default function LeadRow({
    lead,
    onView,
    onDelete,
}) {
    const status = lead.status || "new";
    const colorClass =
        statusColors[status] || "bg-subtle text-ink/80 border-line";

    const createdAt = lead.created_at
        ? new Date(lead.created_at).toLocaleString()
        : "-";

    const emailHref = lead.email ? `mailto:${lead.email}` : undefined;
    const phoneHref = lead.phone ? `tel:${lead.phone}` : undefined;
    const whatsappHref = lead.phone
        ? `https://wa.me/${lead.phone.replace(/\D/g, "")}`
        : undefined;

    return (
        <tr className="border-b border-line hover:bg-subtle">
            <td className="px-3 py-2 align-top text-xs text-ink">
                {lead.name || "-"}
            </td>
            <td className="px-3 py-2 align-top text-xs text-ink/80">
                {lead.email || "-"}
            </td>
            <td className="px-3 py-2 align-top text-xs text-ink/80">
                {lead.phone || "-"}
            </td>
            <td className="px-3 py-2 align-top text-xs text-ink/80">
                <p className="line-clamp-2 max-w-xs truncate">
                    {lead.details || "-"}
                </p>
            </td>
            <td className="px-3 py-2 align-top text-[11px] text-muted">
                {createdAt}
            </td>
            <td className="px-3 py-2 align-top">
                <span
                    className={`inline-flex items-center rounded-xs border px-2 py-[2px] text-[11px] font-medium ${colorClass}`}
                >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
            </td>
            <td className="px-3 py-2 align-top">
                <div className="flex justify-end gap-1">
                    <button
                        onClick={() => onView(lead)}
                        className="h-7 w-7 rounded-xs border border-edge text-[11px] text-ink/80 hover:bg-subtle"
                        title="View"
                    >
                        V
                    </button>
                    {emailHref && (
                        <a
                            href={emailHref}
                            className="flex h-7 w-7 items-center justify-center rounded-xs border border-edge text-[11px] text-ink/80 hover:bg-subtle"
                            title="Email"
                        >
                            @
                        </a>
                    )}
                    {phoneHref && (
                        <a
                            href={phoneHref}
                            className="flex h-7 w-7 items-center justify-center rounded-xs border border-edge text-[11px] text-ink/80 hover:bg-subtle"
                            title="Call"
                        >
                            ☎
                        </a>
                    )}
                    {whatsappHref && (
                        <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-7 w-7 items-center justify-center rounded-xs border border-edge text-[11px] text-ink/80 hover:bg-subtle"
                            title="WhatsApp"
                        >
                            W
                        </a>
                    )}
                    <button
                        onClick={() => onDelete(lead.id)}
                        className="h-7 w-7 rounded-xs border border-edge text-[11px] text-red-600 hover:bg-red-50"
                        title="Delete"
                    >
                        ×
                    </button>
                </div>
            </td>
        </tr>
    );
}
