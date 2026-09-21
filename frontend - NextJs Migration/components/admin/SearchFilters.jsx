import React from "react";

export default function SearchFilters({
    searchTerm,
    onSearchChange,
    statusFilter,
    onStatusFilterChange,
    statusOptions,
}) {
    return (
        <section className="flex flex-col gap-3 rounded-sm border border-line bg-surface px-3 py-3 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
                <label className="block text-xs font-medium text-muted">
                    Search
                </label>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search by name, email, or phone"
                    className="mt-1 w-full rounded-xs border border-edge bg-surface px-2 py-1 text-xs text-ink placeholder:text-muted/70 focus:border-muted focus:outline-none focus:ring-0"
                />
            </div>

            <div className="w-full md:w-52">
                <label className="block text-xs font-medium text-muted">
                    Status
                </label>
                <select
                    value={statusFilter}
                    onChange={(e) => onStatusFilterChange(e.target.value)}
                    className="mt-1 w-full rounded-xs border border-edge bg-surface px-2 py-1 text-xs text-ink focus:border-muted focus:outline-none focus:ring-0"
                >
                    {statusOptions.map((status) => (
                        <option key={status} value={status}>
                            {status === "all"
                                ? "All statuses"
                                : status.charAt(0).toUpperCase() + status.slice(1)}
                        </option>
                    ))}
                </select>
            </div>
        </section>
    );
}
