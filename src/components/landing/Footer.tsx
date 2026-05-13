import { EVENT } from "./data";

export function Footer() {
  return (
    <footer className="px-4 py-8 bg-secondary border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-2xl font-display font-bold">
            <span className="line-through opacity-50 text-base">{EVENT.pricePrev}</span>{" "}
            <span className="text-primary">{EVENT.price}</span>
          </div>
          <p className="text-xs text-muted-foreground">Christmas & New Year Offer ends in 11 hrs 52 mins</p>
        </div>
        <button
          className="rounded-full px-10 py-3 text-white font-semibold shadow-[0_8px_24px_-8px_var(--primary)]"
          style={{ background: "var(--gradient-cta)" }}
        >
          Register Now
        </button>
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        © 2026 Gayathri Shivaram. All rights reserved.
      </p>
    </footer>
  );
}
