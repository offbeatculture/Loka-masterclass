import { Play } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { SectionTitle } from "./SectionTitle";

const videos = [
  { name: "Rigana", role: "Public Speaker" },
  { name: "Ganambal", role: "Entrepreneur" },
];

export function TestimonialsSection() {
  return (
    <section className="px-4 py-14">
      <div className="max-w-4xl mx-auto">
        <SectionTitle highlight="Testimonials">Heartwarming Testimonials From Past Attendees</SectionTitle>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {videos.map((t) => (
            <div key={t.name} className="rounded-2xl overflow-hidden bg-navy text-navy-foreground shadow-[var(--shadow-card)]">
              <div className="aspect-video bg-gradient-to-br from-primary/30 to-navy flex items-center justify-center relative">
                <div className="absolute top-3 left-3 bg-black/50 px-3 py-1 rounded-md text-xs">Testimony of {t.name}</div>
                <button className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl hover:scale-110 transition" aria-label={`Play testimony of ${t.name}`}>
                  <Play className="w-7 h-7 text-white ml-1" fill="white" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10"><CTAButton /></div>
      </div>
    </section>
  );
}
