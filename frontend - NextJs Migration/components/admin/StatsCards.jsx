import React from "react";

export default function StatsCards({ stats }) {
    const cards = [
        { label: "Total Leads", value: stats.total },
        { label: "New Leads", value: stats.newLeads },
        { label: "Contacted Leads", value: stats.contacted },
        { label: "Closed Leads", value: stats.closed },
    ];

    return (
        <section className="mb-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {cards.map((card) => (
                <div
                    key={card.label}
                    className="rounded-sm border border-line bg-surface px-3 py-3"
                >
                    <p className="text-xs text-muted">{card.label}</p>
                    <p className="mt-2 text-lg font-semibold text-ink">
                        {card.value}
                    </p>
                </div>
            ))}
        </section>
    );
}
