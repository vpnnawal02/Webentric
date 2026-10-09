-- ============================================================
-- Webentric Careers — resume file uploads
-- Run once in Supabase Dashboard → SQL Editor AFTER careers.sql.
-- Creates: private `resumes` bucket + upload/read rules + columns.
-- Safe to re-run (uses IF NOT EXISTS / DROP IF EXISTS).
-- ============================================================

-- ── Private bucket for resumes ───────────────────────────────
insert into storage.buckets (id, name, public)
values ('resumes', 'resumes', false)
on conflict (id) do nothing;

-- ── Storage access rules ─────────────────────────────────────
-- Public form (anon key, via the /api/careers/apply route): upload only
drop policy if exists "public upload resumes" on storage.objects;
create policy "public upload resumes"
  on storage.objects for insert
  to anon
  with check (bucket_id = 'resumes');

-- Admin (logged-in): download + delete resumes
drop policy if exists "admin read resumes" on storage.objects;
create policy "admin read resumes"
  on storage.objects for select
  to authenticated
  using (bucket_id = 'resumes');

drop policy if exists "admin delete resumes" on storage.objects;
create policy "admin delete resumes"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'resumes');

-- ── Track the stored file on each application ────────────────
alter table public.job_applications
  add column if not exists resume_path text;
alter table public.job_applications
  add column if not exists resume_name text;
