"use client";

import React, { useEffect, useMemo, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import StatsCards from "../../components/admin/StatsCards";
import SearchFilters from "../../components/admin/SearchFilters";
import LeadsTable from "../../components/admin/LeadsTable";
import LeadModal from "../../components/admin/LeadModal";

/*
 * NOTE: /admin and /admin/login are excluded from app/sitemap.js and blocked
 * in app/robots.js — the admin area must never be indexed.
 */
const STATUS_OPTIONS = ["new", "contacted", "negotiation", "closed", "lost"];

export default function AdminDashboardPage() {
    const router = useRouter();
    const [session, setSession] = useState(null);
    const [leads, setLeads] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [selectedLead, setSelectedLead] = useState(null);
    const [loading, setLoading] = useState(true);

    const filteredLeads = useMemo(() => {
        if (loading || leads.length === 0) return [];
        return leads.filter((lead) => {
            const term = searchTerm.trim().toLowerCase();
            const matchesSearch =
                !term ||
                lead.name?.toLowerCase().includes(term) ||
                lead.email?.toLowerCase().includes(term) ||
                lead.phone?.toLowerCase().includes(term);
            const matchesStatus =
                statusFilter === "all" || (lead.status || "new") === statusFilter;
            return matchesSearch && matchesStatus;
        });
    }, [leads, searchTerm, statusFilter, loading]);

    const stats = useMemo(() => {
        if (loading || leads.length === 0) return { total: 0, newLeads: 0, contacted: 0, closed: 0 };
        const total = leads.length;
        return {
            total,
            newLeads: leads.filter((l) => (l.status || "new") === "new").length,
            contacted: leads.filter((l) => l.status === "contacted").length,
            closed: leads.filter((l) => l.status === "closed").length,
        };
    }, [leads, loading]);

    // Auth + data
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session) {
                router.replace("/admin/login");
                return;
            }
            setSession(session);

            supabase
                .from("quote_requests")
                .select("*")
                .order("created_at", { ascending: false })
                .then(({ data, error }) => {
                    if (!error && data) setLeads(data);
                    setLoading(false);
                });
        });

        // Realtime (ignore websocket error for now - doesn't break anything)
        const channel = supabase
            .channel("quote_requests")
            .on("postgres_changes", { event: "INSERT", schema: "public", table: "quote_requests" }, (payload) => {
                setLeads((prev) => [payload.new, ...prev]);
            })
            .subscribe();

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            if (!session) router.replace("/admin/login");
        });

        return () => {
            supabase.removeChannel(channel);
            authListener.subscription.unsubscribe();
        };
    }, [router]);

    const handleRefresh = useCallback(async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("quote_requests")
            .select("*")
            .order("created_at", { ascending: false });
        if (!error && data) setLeads(data);
        setLoading(false);
    }, []);

    const handleDelete = useCallback(async (id) => {
        const prev = leads;
        setLeads((current) => current.filter((lead) => lead.id !== id));
        const { error } = await supabase.from("quote_requests").delete().eq("id", id);
        if (error) setLeads(prev);
    }, [leads]);

    const handleStatusUpdate = useCallback(async (id, status) => {
        const prev = leads;
        setLeads((current) => current.map((lead) => (lead.id === id ? { ...lead, status } : lead)));
        const { error } = await supabase.from("quote_requests").update({ status }).eq("id", id);
        if (error) setLeads(prev);
    }, [leads]);

    const handleLogout = useCallback(() => {
        supabase.auth.signOut().then(() => router.replace("/admin/login"));
    }, [router]);

    return (
        <div className="min-h-screen bg-subtle text-ink">
            <div className="mx-auto max-w-6xl px-4 py-6">
                <header className="mb-6 flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-semibold tracking-tight">
                            Webentric Admin Dashboard
                        </h1>
                        <p className="mt-1 text-xs text-muted">
                            {session?.user?.email || "Loading..."}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleRefresh}
                            disabled={loading}
                            className="inline-flex items-center rounded-sm border border-edge px-2.5 py-1 text-xs font-medium text-ink/80 hover:bg-subtle disabled:opacity-50"
                        >
                            {loading ? "Loading..." : "Refresh"}
                        </button>
                        <button
                            onClick={handleLogout}
                            className="inline-flex items-center rounded-sm border border-edge px-2.5 py-1 text-xs font-medium text-ink/80 hover:bg-subtle"
                        >
                            Logout
                        </button>
                    </div>
                </header>

                {loading ? (
                    <div className="text-center py-12">
                        <div className="text-lg mb-2 animate-pulse">Loading dashboard...</div>
                        <div className="text-sm text-muted">Please wait</div>
                    </div>
                ) : (
                    <>
                        <StatsCards stats={stats} />
                        <SearchFilters
                            searchTerm={searchTerm}
                            onSearchChange={setSearchTerm}
                            statusFilter={statusFilter}
                            onStatusFilterChange={setStatusFilter}
                            statusOptions={["all", ...STATUS_OPTIONS]}
                        />
                        <div className="mt-6">
                            <LeadsTable
                                leads={filteredLeads}
                                onView={(lead) => setSelectedLead(lead)}
                                onDelete={handleDelete}
                                onStatusChange={handleStatusUpdate}
                            />
                        </div>
                    </>
                )}
            </div>

            {selectedLead && (
                <LeadModal
                    lead={selectedLead}
                    onClose={() => setSelectedLead(null)}
                    onStatusChange={handleStatusUpdate}
                    statusOptions={STATUS_OPTIONS}
                />
            )}
        </div>
    );
}
