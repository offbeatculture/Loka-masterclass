import { Gift } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { BONUSES } from "./data";

export function BonusesSection() {
  return (
    <section className="px-4 py-14">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-center font-bold">
          Unlock <span className="text-primary">Special Bonuses Worth ₹10,795</span>{" "}
          <Gift className="inline w-7 h-7 text-primary" />
        </h2>
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {BONUSES.map((b) => (
            <div key={b.title} className="bg-white rounded-2xl p-5 shadow-[var(--shadow-card)] border-l-4 border-primary">
              <div className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                <Gift className="w-3 h-3" /> BONUS
              </div>
              <h3 className="font-display font-bold text-primary text-lg">{b.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{b.desc}</p>
              <p className="mt-3 text-sm font-semibold">Worth <span className="line-through opacity-60">{b.value}</span></p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center font-semibold">
          <span className="text-primary">Note:</span> You Will Receive The Bonuses After Attending The Masterclass.
        </p>
        <div className="mt-6"><CTAButton /></div>
      </div>
    </section>
  );
}
