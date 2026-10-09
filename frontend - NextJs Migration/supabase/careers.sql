-- ============================================================
-- Webentric Careers — Supabase migration
-- Run this once in Supabase Dashboard → SQL Editor → New query.
-- Creates: job_posts, job_applications (+ RLS mirroring quote_requests)
-- ============================================================

-- ── Job posts (managed from /admin) ──────────────────────────
create table if not exists public.job_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  location text not null default 'New Delhi, India',
  type text not null default 'Full-time',
  description text not null default '',
  requirements text not null default '',
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- ── Job applications (public form → /admin) ──────────────────
create table if not exists public.job_applications (
  id uuid primary key default gen_random_uuid(),
  job_id uuid references public.job_posts (id) on delete set null,
  job_title text not null default '',
  name text not null,
  email text not null,
  phone text not null,
  resume_url text,
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

-- ── Row Level Security ───────────────────────────────────────
alter table public.job_posts enable row level security;
alter table public.job_applications enable row level security;

-- Public site: anyone can read ACTIVE posts (used by /careers page)
drop policy if exists "public read active posts" on public.job_posts;
create policy "public read active posts"
  on public.job_posts for select
  to anon
  using (is_active = true);

-- Public form: anyone can submit an application (API route uses anon key)
drop policy if exists "public insert applications" on public.job_applications;
create policy "public insert applications"
  on public.job_applications for insert
  to anon
  with check (true);

-- Admin (logged-in Supabase auth users): full access, mirroring quote_requests
drop policy if exists "admin all job_posts" on public.job_posts;
create policy "admin all job_posts"
  on public.job_posts for all
  to authenticated
  using (true)
  with check (true);

drop policy if exists "admin all job_applications" on public.job_applications;
create policy "admin all job_applications"
  on public.job_applications for all
  to authenticated
  using (true)
  with check (true);

-- ── Realtime (optional, for live admin updates) ──────────────
-- Run only if you want instant new-application alerts in /admin:
-- alter publication supabase_realtime add table public.job_applications;
-- alter publication supabase_realtime add table public.job_posts;
