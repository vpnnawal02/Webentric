export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-page">
            <div className="flex w-full max-w-[180px] flex-col items-center gap-6">
                <img
                    src="/logo_circle.png"
                    alt="Webentric"
                    className="w-20 sm:w-24 object-contain opacity-95"
                />

                <div className="h-px w-full overflow-hidden rounded-full bg-ink/10">
                    <div className="h-full w-1/2 animate-[loading_1.2s_ease-in-out_infinite] bg-ink/80" />
                </div>

                <p className="text-xs uppercase tracking-[0.22em] text-ink/40">
                    Loading
                </p>
            </div>

            <style>{`
                @keyframes loading {
                    0% {
                        transform: translateX(-120%);
                    }
                    100% {
                        transform: translateX(220%);
                    }
                }
            `}</style>
        </div>
    );
}