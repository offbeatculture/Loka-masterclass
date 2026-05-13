import { CTAButton } from "./CTAButton";
import { SectionTitle } from "./SectionTitle";
import { LEARNINGS } from "./data";

export function LearnSection() {
  return (
    <section className="px-4 py-14 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle highlight="You Will Learn">What You Will Learn In Masterclass</SectionTitle>
        <div className="mt-10 grid md:grid-cols-4 gap-5">
          {LEARNINGS.map((l) => (
            <div key={l.title} className="bg-white rounded-2xl p-5 shadow-[var(--shadow-card)] flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <l.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-primary font-bold text-lg leading-tight">{l.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{l.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10"><CTAButton /></div>
      </div>
    </section>
  );
}
