import { Calendar, Clock, Hourglass, Languages, Instagram } from "lucide-react";
import coachImg from "@/assets/coach.jpg";
import { CTAButton } from "./CTAButton";
import { COACH, EVENT } from "./data";

const details = [
  { icon: Calendar, label: "Date", value: EVENT.date },
  { icon: Clock, label: "Time", value: EVENT.time },
  { icon: Hourglass, label: "Duration", value: EVENT.duration },
  { icon: Languages, label: "Language", value: EVENT.language },
];

export function HeroSection() {
  return (
    <section className="px-4 py-10 md:py-14 bg-secondary/50">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="font-display text-2xl md:text-4xl font-bold leading-tight">
          <span className="text-primary">Master Powerful Techniques</span> To Heal From The
          <br className="hidden md:block" /> Past And <span className="text-primary">Manifest Your Dream Life</span>
        </h1>
        <p className="mt-3 text-sm md:text-base text-muted-foreground">
          More Than 2 Lakh+ People Have Experienced Big Transformation
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6 items-center">
          <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-card)] flex flex-col items-center">
            <div className="rounded-full p-1 border-2 border-dashed border-primary/40">
              <img src={coachImg} alt={COACH.name} className="w-44 h-44 rounded-full object-cover" width={176} height={176} />
            </div>
            <h3 className="mt-4 font-display text-xl font-bold">{COACH.name}</h3>
            <p className="text-xs text-muted-foreground text-center">
              {COACH.role}<br />{COACH.experience}
            </p>
            <div className="mt-3 flex items-center gap-2 bg-secondary px-4 py-1.5 rounded-full text-sm font-medium">
              <Instagram className="w-4 h-4 text-primary" /> {COACH.followers}
            </div>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              {details.map((d) => (
                <div key={d.label} className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-[var(--shadow-card)]">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <d.icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] text-muted-foreground">{d.label}</div>
                    <div className="text-sm font-semibold">{d.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
}
