"use client";

import React, { useEffect, useMemo, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import StatsCards from "../../components/admin/StatsCards";
import SearchFilters from "../../components/admin/SearchFilters";
import LeadsTable from "../../components/admin/LeadsTable";
import LeadModal from "../../components/admin/LeadModal";
import JobsManager from "../../components/admin/JobsManager";
import ApplicationsTable from "../../components/admin/ApplicationsTable";
import ApplicationModal from "../../components/admin/ApplicationModal";

/*
 * NOTE: /admin and /admin/login are excluded from app/sitemap.js and blocked
 * in app/robots.js — the admin area must never be indexed.
 */
const STATUS_OPTIONS = ["new", "contacted", "negotiation", "closed", "lost"];
const APP_STATUS_OPTIONS = ["new", "reviewing", "shortlisted", "hired", "rejected"];

const TABS = [
  { key: "leads", label: "Leads" },
  { key: "jobs", label: "Job Posts" },
  { key: "applications", label: "Applications" },
];

export default function AdminDashboardPage() {
    const router = useRouter();
    const [session, setSession] = useState(null);
    const [tab, setTab] = useState("leads");

    // Leads
    const [leads, setLeads] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [selectedLead, setSelectedLead] = useState(null);

    // Careers
    const [jobs, setJobs] = useState([]);
    const [applications, setApplications] = useState([]);
    const [appSearch, setAppSearch] = useState("");
    const [selectedApp, setSelectedApp] = useState(null);
    const [careersError, setCareersError] = useState("");

    const [loading, setLoading] = useState(true);

    const filteredLeads = useMemo(() => {
        if (loading || leads.length === 0) return [];
        return leads.filter((lead) => {
            const term = searchTerm.trim().toLowerCase();
            const matchesSearch =
                !term ||
                lead.name?.toLowerCase().includes(term) ||
                lead.email?.toLowerCase().includes(term) ||
                lead.phone?.toLowerCase().includes(term) ||
                lead.details?.toLowerCase().includes(term);
            const matchesStatus =
                statusFilter === "all" || (lead.status || "new") === statusFilter;
            return matchesSearch && matchesStatus;
        });
    }, [leads, searchTerm, statusFilter, loading]);

    const filteredApplications = useMemo(() => {
        if (applications.length === 0) return [];
        const term = appSearch.trim().toLowerCase();
        if (!term) return applications;
        return applications.filter(
            (app) =>
                app.name?.toLowerCase().includes(term) ||
                app.email?.toLowerCase().includes(term) ||
                app.phone?.toLowerCase().includes(term) ||
                app.job_title?.toLowerCase().includes(term) ||
                app.status?.toLowerCase().includes(term),
        );
    }, [applications, appSearch]);

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

    const fetchCareers = useCallback(async () => {
        const [{ data: jobsData, error: jobsError }, { data: appsData, error: appsError }] =
            await Promise.all([
                supabase.from("job_posts").select("*").order("created_at", { ascending: false }),
                supabase.from("job_applications").select("*").order("created_at", { ascending: false }),
            ]);
        if (jobsError || appsError) {
            // Tables don't exist until supabase/careers.sql is run
            setCareersError("Careers tables not found. Run supabase/careers.sql in the Supabase SQL Editor.");
            return;
        }
        setCareersError("");
        if (jobsData) setJobs(jobsData);
        if (appsData) setApplications(appsData);
    }, []);

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

            fetchCareers();
        });

        // Realtime (ignore websocket error for now - doesn't break anything)
        const channel = supabase
            .channel("quote_requests")
            .on("postgres_changes", { event: "INSERT", schema: "public", table: "quote_requests" }, (payload) => {
                setLeads((prev) => [payload.new, ...prev]);
            })
            .on("postgres_changes", { event: "INSERT", schema: "public", table: "job_applications" }, (payload) => {
                setApplications((prev) => [payload.new, ...prev]);
            })
            .subscribe();

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            if (!session) router.replace("/admin/login");
        });

        return () => {
            supabase.removeChannel(channel);
            authListener.subscription.unsubscribe();
        };
    }, [router, fetchCareers]);

    const handleRefresh = useCallback(async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("quote_requests")
            .select("*")
            .order("created_at", { ascending: false });
        if (!error && data) setLeads(data);
        await fetchCareers();
        setLoading(false);
    }, [fetchCareers]);

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

    // ── Job posts CRUD ──────────────────────────────────────
    const handleJobCreate = useCallback(async (values) => {
        const { data, error } = await supabase.from("job_posts").insert([values]).select().single();
        if (error) {
            alert(`Could not create position: ${error.message}`);
            return;
        }
        if (data) setJobs((prev) => [data, ...prev]);
    }, []);

    const handleJobUpdate = useCallback(async (id, values) => {
        const prev = jobs;
        setJobs((current) => current.map((j) => (j.id === id ? { ...j, ...values } : j)));
        const { error } = await supabase.from("job_posts").update(values).eq("id", id);
        if (error) {
            setJobs(prev);
            alert(`Could not save position: ${error.message}`);
        }
    }, [jobs]);

    const handleJobDelete = useCallback(async (id) => {
        const prev = jobs;
        setJobs((current) => current.filter((j) => j.id !== id));
        const { error } = await supabase.from("job_posts").delete().eq("id", id);
        if (error) {
            setJobs(prev);
            alert(`Could not delete position: ${error.message}`);
        }
    }, [jobs]);

    const handleJobToggle = useCallback(
        (job) => handleJobUpdate(job.id, { is_active: !job.is_active }),
        [handleJobUpdate],
    );

    // ── Applications ────────────────────────────────────────
    const handleAppDelete = useCallback(async (id) => {
        const prev = applications;
        setApplications((current) => current.filter((app) => app.id !== id));
        const { error } = await supabase.from("job_applications").delete().eq("id", id);
        if (error) {
            setApplications(prev);
            alert(`Could not delete application: ${error.message}`);
        }
    }, [applications]);

    const handleAppStatus = useCallback(async (id, status) => {
        const prev = applications;
        setApplications((current) => current.map((app) => (app.id === id ? { ...app, status } : app)));
        const { error } = await supabase.from("job_applications").update({ status }).eq("id", id);
        if (error) {
            setApplications(prev);
            alert(`Could not update status: ${error.message}`);
        }
    }, [applications]);

    const handleLogout = useCallback(() => {
        supabase.auth.signOut().then(() => router.replace("/admin/login"));
    }, [router]);

    const newAppCount = applications.filter((a) => (a.status || "new") === "new").length;

    return (
        <div className="min-h-screen bg-subtle text-ink">
            <div className="mx-auto max-w-6xl px-4 py-6">
                <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                        <h1 className="truncate text-lg font-semibold tracking-tight sm:text-xl">
                            Webentric Admin
                        </h1>
                        <p className="mt-1 truncate text-xs text-muted">
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

                {/* Tabs */}
                <div className="mb-6 flex gap-1 overflow-x-auto rounded-sm border border-line bg-surface p-1">
                    {TABS.map((t) => (
                        <button
                            key={t.key}
                            onClick={() => setTab(t.key)}
                            className={`flex-1 whitespace-nowrap rounded-xs px-2 py-2 text-xs font-medium transition-colors sm:px-3 ${
                                tab === t.key
                                    ? "bg-accent text-on-accent"
                                    : "text-muted hover:text-ink"
                            }`}
                        >
                            {t.label}
                            {t.key === "applications" && newAppCount > 0 && (
                                <span
                                    className={`ml-1.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-semibold ${
                                        tab === "applications" ? "bg-on-accent/20 text-on-accent" : "bg-accent text-on-accent"
                                    }`}
                                >
                                    {newAppCount}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="text-center py-12">
                        <div className="text-lg mb-2 animate-pulse">Loading dashboard...</div>
                        <div className="text-sm text-muted">Please wait</div>
                    </div>
                ) : tab === "leads" ? (
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
                ) : tab === "jobs" ? (
                    careersError ? (
                        <p className="rounded-sm border border-line bg-surface px-4 py-6 text-center text-xs text-muted">
                            {careersError}
                        </p>
                    ) : (
                        <JobsManager
                            jobs={jobs}
                            onCreate={handleJobCreate}
                            onUpdate={handleJobUpdate}
                            onDelete={handleJobDelete}
                            onToggleActive={handleJobToggle}
                        />
                    )
                ) : careersError ? (
                    <p className="rounded-sm border border-line bg-surface px-4 py-6 text-center text-xs text-muted">
                        {careersError}
                    </p>
                ) : (
                    <>
                        <section className="mb-4 flex flex-col gap-3 rounded-sm border border-line bg-surface px-3 py-3">
                            <div className="flex-1">
                                <label className="block text-xs font-medium text-muted">Search applications</label>
                                <input
                                    type="text"
                                    value={appSearch}
                                    onChange={(e) => setAppSearch(e.target.value)}
                                    placeholder="Search by name, email, phone, position, or status"
                                    className="mt-1 w-full rounded-xs border border-edge bg-surface px-2 py-1 text-xs text-ink placeholder:text-muted/70 focus:border-muted focus:outline-none focus:ring-0"
                                />
                            </div>
                        </section>
                        <ApplicationsTable
                            applications={filteredApplications}
                            onView={(app) => setSelectedApp(app)}
                            onDelete={handleAppDelete}
                        />
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

            {selectedApp && (
                <ApplicationModal
                    application={selectedApp}
                    onClose={() => setSelectedApp(null)}
                    onStatusChange={handleAppStatus}
                    statusOptions={APP_STATUS_OPTIONS}
                />
            )}
        </div>
    );
}
