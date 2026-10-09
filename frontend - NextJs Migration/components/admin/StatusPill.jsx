import React from "react";

const LEAD_COLORS = {
  new: "bg-blue-50 text-blue-700 border-blue-100",
  contacted: "bg-yellow-50 text-yellow-700 border-yellow-100",
  negotiation: "bg-purple-50 text-purple-700 border-purple-100",
  closed: "bg-green-50 text-green-700 border-green-100",
  lost: "bg-red-50 text-red-700 border-red-100",
};

const APP_COLORS = {
  new: "bg-blue-50 text-blue-700 border-blue-100",
  reviewing: "bg-yellow-50 text-yellow-700 border-yellow-100",
  shortlisted: "bg-purple-50 text-purple-700 border-purple-100",
  hired: "bg-green-50 text-green-700 border-green-100",
  rejected: "bg-red-50 text-red-700 border-red-100",
};

export default function StatusPill({ status, kind = "lead" }) {
  const value = status || "new";
  const map = kind === "application" ? APP_COLORS : LEAD_COLORS;
  const color = map[value] || "bg-subtle text-ink/80 border-line";
  return (
    <span
      className={`inline-flex items-center rounded-xs border px-2 py-[2px] text-[11px] font-medium ${color}`}
    >
      {value.charAt(0).toUpperCase() + value.slice(1)}
    </span>
  );
}
