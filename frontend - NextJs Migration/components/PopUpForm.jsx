'use client';
import React, { useEffect, useRef, useState } from "react";
import { icons } from '../lib/assets.js';
import { supabase } from '../lib/supabase.js';

const CrossIcon = icons.cross_icon;

export default function PopUpForm({ open, setOpen }) {
    const overlayRef = useRef(null);

    const initialForm = {
        name: "",
        email: "",
        phone: "",
        details: "",
    };

    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState(null);
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setOpen(false);
        };

        if (open) document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, setOpen]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        if (!open) {
            const timer = setTimeout(() => {
                setSubmitted(false);
                setSubmitting(false);
                setStatus(null);
                setForm(initialForm);
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [open]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
        setStatus(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setSubmitting(true);
            setStatus(null);

            const { error } = await supabase.from("quote_requests").insert([
                {
                    name: form.name.trim(),
                    email: form.email.trim() || null,
                    phone: form.phone.trim(),
                    details: form.details.trim() || null,
                },
            ]);

            if (error) {
                console.error(error);
                setStatus({
                    type: "error",
                    message: "Submission failed. Please try again.",
                });
                return;
            }

            setSubmitted(true);
            setStatus({
                type: "success",
                message: "Request submitted successfully.",
            });
        } catch (err) {
            console.error(err);
            setStatus({
                type: "error",
                message: "Something went wrong. Please try again.",
            });
        } finally {
            setSubmitting(false);
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === overlayRef.current) setOpen(false);
    };

    if (!open) return null;

    return (
        <div
            ref={overlayRef}
            onClick={handleOverlayClick}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div className="relative w-full max-w-md bg-surface border border-line shadow-[0_20px_80px_rgba(0,0,0,0.45)] animate-in zoom-in-95 fade-in duration-200 max-h-[90vh] overflow-y-auto">
                <div className="flex items-start justify-between p-6 pb-4 border-b border-line">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-ink/40 mb-2">
                            Project Enquiry
                        </p>
                        <h2 id="modal-title" className="text-xl font-medium text-ink tracking-[-0.03em]">
                            Get a Project Quote
                        </h2>
                        <p className="text-sm text-ink/45 mt-2 leading-relaxed max-w-xs">
                            Tell us a few details about your project and we&apos;ll get back to you
                            with a customized quote.
                        </p>
                    </div>

                    <button
                        onClick={() => setOpen(false)}
                        className="ml-4 mt-0.5 flex-shrink-0 w-9 h-9 flex items-center justify-center border border-line text-ink/55 hover:text-ink hover:bg-ink/5 transition-colors"
                        aria-label="Close modal"
                    >
                        <CrossIcon className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6">
                    {submitted ? (
                        <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-surface border border-line flex items-center justify-center">
                                <svg
                                    className="w-8 h-8 text-ink"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.8}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-ink mb-1 tracking-[-0.02em]">
                                    Quote Request Sent
                                </h3>
                                <p className="text-sm text-ink/50">
                                    Thanks,{" "}
                                    <span className="font-medium text-ink/80">
                                        {form.name || "there"}
                                    </span>
                                    . We&apos;ll review your project and get back to you within 24 hours.
                                </p>
                            </div>

                            <button
                                onClick={() => setOpen(false)}
                                className="mt-2 px-6 py-2.5 bg-accent text-on-accent text-sm font-medium hover:bg-accent/85 transition-colors"
                            >
                                Done
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-ink/75 mb-1.5">
                                    Full Name <span className="text-ink/35">*</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="w-full border border-line bg-page px-3.5 py-3 text-sm text-ink placeholder:text-ink/25 focus:outline-none focus:border-edge focus:bg-page transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-ink/75 mb-1.5">
                                    Phone / WhatsApp <span className="text-ink/35">*</span>
                                </label>
                                <input
                                    required
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Enter phone number"
                                    className="w-full border border-line bg-page px-3.5 py-3 text-sm text-ink placeholder:text-ink/25 focus:outline-none focus:border-edge focus:bg-page transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-ink/75 mb-1.5">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="w-full border border-line bg-page px-3.5 py-3 text-sm text-ink placeholder:text-ink/25 focus:outline-none focus:border-edge focus:bg-page transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-ink/75 mb-1.5">
                                    Project Details
                                </label>
                                <textarea
                                    name="details"
                                    value={form.details}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Describe your project, features you need, or any references."
                                    className="w-full border border-line bg-page px-3.5 py-3 text-sm text-ink placeholder:text-ink/25 focus:outline-none focus:border-edge focus:bg-page transition-all resize-none"
                                />
                            </div>

                            {status?.type === "error" && (
                                <p className="text-sm text-red-400">{status.message}</p>
                            )}

                            <div className="pt-1">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full bg-accent text-on-accent hover:bg-accent/85 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed font-medium py-3 px-4 transition-all duration-200 text-sm"
                                >
                                    {submitting ? "Submitting..." : "Get My Quote"}
                                </button>

                                <p className="text-center text-xs text-ink/32 mt-3">
                                    We usually respond within 24 hours.
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}