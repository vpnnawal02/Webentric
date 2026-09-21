"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";

export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) router.replace("/admin");
        });
    }, [router]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
        } else {
            // Redirect to dashboard
            router.replace("/admin");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-page flex items-center justify-center px-4">
            <div className="max-w-md w-full space-y-8 bg-surface rounded-sm border border-line p-8">
                <div>
                    <h1 className="mt-6 text-center text-2xl font-semibold text-ink">
                        Webentric Admin
                    </h1>
                    <p className="mt-2 text-center text-sm text-muted">
                        Sign in to your admin account
                    </p>
                </div>

                <form className="mt-8 space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-sm font-medium text-ink/80 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-xs border border-edge px-3 py-2 text-sm focus:border-muted focus:outline-none focus:ring-0"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-ink/80 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-xs border border-edge px-3 py-2 text-sm focus:border-muted focus:outline-none focus:ring-0"
                            required
                        />
                    </div>

                    {error && (
                        <p className="text-red-600 text-xs text-center">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-accent text-on-accent py-2 px-4 rounded-xs text-sm font-medium hover:bg-accent/85 disabled:opacity-50"
                    >
                        {loading ? "Signing in..." : "Sign in"}
                    </button>
                </form>
            </div>
        </div>
    );
}
