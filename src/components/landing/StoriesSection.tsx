import { CTAButton } from "./CTAButton";
import { SectionTitle } from "./SectionTitle";
import { STORIES } from "./data";

export function StoriesSection() {
  return (
    <section className="px-4 py-14 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle highlight="Stories">Success Stories</SectionTitle>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {STORIES.map((s) => (
            <div key={s.name} className="bg-white rounded-2xl p-5 shadow-[var(--shadow-card)] flex flex-col">
              <p className="text-sm text-foreground/80 leading-relaxed flex-1">"{s.text}"</p>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="font-display font-bold text-primary">{s.name}</div>
                <div className="text-xs text-muted-foreground">{s.role} • {s.city}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10"><CTAButton /></div>
      </div>
    </section>
  );
}
