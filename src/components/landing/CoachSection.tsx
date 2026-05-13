import { Instagram } from "lucide-react";
import coachImg from "@/assets/coach.jpg";
import { COACH } from "./data";

const bio = [
  "Gayathri is a certified healing and manifestation coach with over 10 years of experience.",
  "Over the years, she has impacted more than 2 Lakh people and personally helped 50,000+ people overcome past trauma and limiting beliefs by rewiring their brain and manifesting their goals.",
  "She has worked with the best minds in personal development including Jack Canfield, Tony Robbins, Marisa Peer, Dr. John Demartini, Tom Beal, Andy Vargas, Rich Singer and Tobias Beck.",
  "People know her as India's #1 Thoughts Expert with 1 Million+ followers across her Instagram. Her insights on stress, health, spirituality and relationships have inspired individuals to break out of their shells.",
  "Now Gayathri is on a mission to help 10 Million people become the best version of themselves.",
];

export function CoachSection() {
  return (
    <section className="px-4 py-16 bg-navy text-navy-foreground">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-center font-bold">
          Meet Your Coach{" "}
          <span className="text-primary-foreground/90 underline decoration-primary decoration-4 underline-offset-8">
            {COACH.name}
          </span>
        </h2>
        <div className="mt-10 grid md:grid-cols-[280px_1fr] gap-8 items-start">
          <div className="flex flex-col items-center">
            <div className="rounded-full p-1 border-2 border-dashed border-primary">
              <img src={coachImg} alt={COACH.name} loading="lazy" width={240} height={240} className="w-60 h-60 rounded-full object-cover" />
            </div>
            <div className="mt-4 bg-white/10 backdrop-blur rounded-xl px-5 py-3 text-center">
              <div className="font-display font-bold">{COACH.name}</div>
              <div className="text-xs opacity-80">{COACH.role}<br />{COACH.experience}</div>
            </div>
            <div className="mt-3 flex items-center gap-2 bg-white text-foreground px-4 py-1.5 rounded-full text-sm">
              <Instagram className="w-4 h-4 text-primary" /> {COACH.followers}
            </div>
          </div>
          <div className="space-y-4 text-sm md:text-base leading-relaxed opacity-95">
            {bio.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}
