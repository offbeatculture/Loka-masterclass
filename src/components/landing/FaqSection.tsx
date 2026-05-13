import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { SectionTitle } from "./SectionTitle";
import { FAQS } from "./data";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-4 py-14">
      <div className="max-w-3xl mx-auto">
        <SectionTitle highlight="Asked Questions">Frequently Asked Questions</SectionTitle>
        <div className="mt-8 space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="bg-white rounded-xl shadow-[var(--shadow-card)] overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-3"
              >
                <span className="font-medium">{f.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-4 text-sm text-muted-foreground">{f.a}</div>}
            </div>
          ))}
        </div>
        <div className="mt-10"><CTAButton /></div>
      </div>
    </section>
  );
}
