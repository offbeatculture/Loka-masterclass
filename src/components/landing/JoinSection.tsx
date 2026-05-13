import { Check } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { SectionTitle } from "./SectionTitle";
import { WANT_POINTS } from "./data";

export function JoinSection() {
  return (
    <section className="px-4 py-14">
      <div className="max-w-4xl mx-auto">
        <SectionTitle highlight="You Want To...">Join The Masterclass If You Want To...</SectionTitle>
        <div className="mt-8 grid md:grid-cols-2 gap-3">
          {WANT_POINTS.map((p) => (
            <div key={p} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-[var(--shadow-card)]">
              <div className="w-6 h-6 rounded-md bg-emerald-500 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <p className="text-sm md:text-base">{p}</p>
            </div>
          ))}
        </div>
        <div className="mt-8"><CTAButton /></div>
      </div>
    </section>
  );
}
