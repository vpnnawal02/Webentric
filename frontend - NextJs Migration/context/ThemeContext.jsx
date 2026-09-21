'use client';
import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { flushSync } from 'react-dom';

const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} });

const STORAGE_KEY = 'webentric-theme';
const ANIM_MS = 500;
const REVEAL_MS = 650;
const REVEAL_EASE = 'cubic-bezier(0.32, 0.72, 0, 1)';

// Layout effect on the client only — no-op on the server (avoids the
// "useLayoutEffect does nothing on the server" dev warning).
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

function prefersReducedMotion() {
    return (
        typeof window !== 'undefined' &&
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
}

export function ThemeProvider({ children }) {
    // Always start at 'dark' so the first client render matches the
    // prerendered server HTML (avoids hydration mismatches in consumers
    // like ThemeToggle that render theme-dependent attributes).
    // The real theme is adopted on mount (see below) before paint.
    const [theme, setTheme] = useState('dark');
    // Writer effect stays idle until the mounted theme is adopted, so it
    // never writes the pre-sync value over the pre-painted DOM.
    const [adopted, setAdopted] = useState(false);

    // Adopt whatever the pre-paint theme guard applied to <html>
    // (it runs before React loads, so the page itself never flashes).
    // Layout effect => state settles before the browser paints.
    useIsomorphicLayoutEffect(() => {
        setTheme(document.documentElement.classList.contains('light') ? 'light' : 'dark');
        setAdopted(true);
    }, []);

    useEffect(() => {
        if (!adopted) return;
        const light = theme === 'light';
        document.documentElement.classList.toggle('light', light);
        try {
            window.localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            /* storage unavailable — theme still applies for the session */
        }
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', light ? '#fafafa' : '#000000');
    }, [theme, adopted]);

    const toggleTheme = useCallback(
        (origin) => {
            const next = theme === 'light' ? 'dark' : 'light';

            const canReveal =
                !prefersReducedMotion() &&
                typeof document !== 'undefined' &&
                typeof document.startViewTransition === 'function';

            if (canReveal) {
                // Default origin: top-right corner (where the toggle lives).
                const x = origin && origin.x ? origin.x : window.innerWidth;
                const y = origin && origin.y ? origin.y : 0;
                const endRadius = Math.hypot(
                    Math.max(x, window.innerWidth - x),
                    Math.max(y, window.innerHeight - y)
                );

                const transition = document.startViewTransition(() => {
                    flushSync(() => {
                        setTheme(next);
                    });
                    // Guarantee the class is applied synchronously so the
                    // "new" snapshot captures the incoming theme.
                    document.documentElement.classList.toggle('light', next === 'light');
                });

                transition.ready
                    .then(() => {
                        document.documentElement.animate(
                            {
                                clipPath: [
                                    `circle(0px at ${x}px ${y}px)`,
                                    `circle(${endRadius}px at ${x}px ${y}px)`,
                                ],
                            },
                            {
                                duration: REVEAL_MS,
                                easing: REVEAL_EASE,
                                pseudoElement: '::view-transition-new(root)',
                            }
                        );
                    })
                    .catch(() => {
                        /* transition skipped — new theme already applied */
                    });
                return;
            }

            // Fallback: calm cross-fade (or instant under reduced motion).
            if (!prefersReducedMotion()) {
                const root = document.documentElement;
                root.classList.add('theme-anim');
                window.setTimeout(() => root.classList.remove('theme-anim'), ANIM_MS);
            }
            setTheme(next);
        },
        [theme]
    );

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
