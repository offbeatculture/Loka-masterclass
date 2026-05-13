import { EVENT } from "./data";

export function CTAButton({ className = "", label = "Register For Masterclass At" }: { className?: string; label?: string }) {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <button
        className="w-full max-w-xl rounded-full px-8 py-4 text-white font-semibold tracking-wide shadow-[0_8px_24px_-8px_var(--primary)] hover:scale-[1.02] transition-transform"
        style={{ background: "var(--gradient-cta)" }}
      >
        {label} <span className="line-through opacity-70 mx-1">{EVENT.pricePrev}</span> {EVENT.price}
      </button>
      <p className="text-xs text-muted-foreground italic">Christmas & New Year Offer</p>
    </div>
  );
}
