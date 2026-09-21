'use client';
import { useState } from 'react';
import PopUpForm from '../../components/PopUpForm';

export default function PortfolioCtaButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <PopUpForm open={open} setOpen={setOpen} />
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center px-7 py-3.5 bg-accent text-on-accent text-sm sm:text-base font-medium hover:bg-accent/85 transition-colors w-full sm:w-auto"
      >
        Start Your Project
      </button>
    </>
  );
}
