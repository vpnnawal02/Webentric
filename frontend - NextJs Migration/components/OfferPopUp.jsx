'use client';
import { useEffect, useState } from "react";
import PopUpForm from "../components/PopUpForm";

let popupShownInMemory = false;

export default function OfferPopup() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (popupShownInMemory) return;

        const timer = setTimeout(() => {
            setShow(true);
            popupShownInMemory = true;
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <>
            <PopUpForm open={open} setOpen={setOpen} />

            <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-5">
                <div className="relative w-full max-w-md border border-line bg-surface text-ink p-7 sm:p-8 shadow-2xl">
                    <button
                        onClick={() => setShow(false)}
                        aria-label="Close offer popup"
                        className="absolute top-3 right-4 text-ink/45 hover:text-ink text-xl transition-colors"
                    >
                        ×
                    </button>

                    <p className="text-[11px] uppercase tracking-[0.22em] text-ink/40 mb-4">
                        [ LIMITED OFFER ]
                    </p>

                    <h2 className="text-2xl sm:text-[2rem] leading-tight tracking-[-0.04em] font-medium text-ink mb-3">
                        Exclusive launch offer for new website projects.
                    </h2>

                    <p className="text-ink/58 text-sm sm:text-base leading-relaxed mb-5 max-w-[32ch]">
                        Get a high-converting website at a reduced launch price,
                        built to help your business stand out and grow online.
                    </p>

                    <div className="border-y border-line py-5 my-6">
                        <p className="text-[2.2rem] sm:text-[2.6rem] font-medium tracking-[-0.05em] text-ink leading-none">
                            30% OFF
                        </p>
                        <p className="text-ink/42 text-xs sm:text-sm uppercase tracking-[0.14em] mt-3">
                            Limited to the first 10 clients
                        </p>
                    </div>

                    <button
                        onClick={() => setOpen(true)}
                        className="w-full px-7 py-3.5 bg-accent text-on-accent text-sm sm:text-base font-medium hover:bg-accent/85 transition-colors"
                    >
                        Claim Your Offer
                    </button>
                </div>
            </div>
        </>
    );
}