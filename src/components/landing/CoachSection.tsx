// import { Instagram } from "lucide-react";
// import coachImg from "@/assets/coach.jpg";
// import { COACH } from "./data";

// const bio = [
//   "Gayathri is a certified healing and manifestation coach with over 10 years of experience.",
//   "Over the years, she has impacted more than 2 Lakh people and personally helped 50,000+ people overcome past trauma and limiting beliefs by rewiring their brain and manifesting their goals.",
//   "She has worked with the best minds in personal development including Jack Canfield, Tony Robbins, Marisa Peer, Dr. John Demartini, Tom Beal, Andy Vargas, Rich Singer and Tobias Beck.",
//   "People know her as India's #1 Thoughts Expert with 1 Million+ followers across her Instagram. Her insights on stress, health, spirituality and relationships have inspired individuals to break out of their shells.",
//   "Now Gayathri is on a mission to help 10 Million people become the best version of themselves.",
// ];

// export function CoachSection() {
//   return (
//     <section className="px-4 py-16 bg-navy text-navy-foreground">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="font-display text-3xl md:text-4xl text-center font-bold">
//           Meet Your Coach{" "}
//           <span className="text-primary-foreground/90 underline decoration-primary decoration-4 underline-offset-8">
//             {COACH.name}
//           </span>
//         </h2>
//         <div className="mt-10 grid md:grid-cols-[280px_1fr] gap-8 items-start">
//           <div className="flex flex-col items-center">
//             <div className="rounded-full p-1 border-2 border-dashed border-primary">
//               <img src={coachImg} alt={COACH.name} loading="lazy" width={240} height={240} className="w-60 h-60 rounded-full object-cover" />
//             </div>
//             <div className="mt-4 bg-white/10 backdrop-blur rounded-xl px-5 py-3 text-center">
//               <div className="font-display font-bold">{COACH.name}</div>
//               <div className="text-xs opacity-80">{COACH.role}<br />{COACH.experience}</div>
//             </div>
//             <div className="mt-3 flex items-center gap-2 bg-white text-foreground px-4 py-1.5 rounded-full text-sm">
//               <Instagram className="w-4 h-4 text-primary" /> {COACH.followers}
//             </div>
//           </div>
//           <div className="space-y-4 text-sm md:text-base leading-relaxed opacity-95">
//             {bio.map((p, i) => <p key={i}>{p}</p>)}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { CheckCircle2, UsersRound, Building2 } from "lucide-react";

const COACH_TELUGU = {
  name: "Loka Guruguntla",
  role: "Manifestation Coach • Personal Growth Expert",
  experience: "8+ Years Experience",
};

const bio = [
  "గత 8+ సంవత్సరాలుగా, Loka 20,000+ మందికి తమ Money Relationship ని పూర్తిగా Transform చేసుకోవడంలో సహాయం చేశారు.",
  "వాళ్ల జీవితాల్లో Money ని దూరం చేసిన Limiting Beliefs, Generational Patterns, Emotional Blocks ని Heal చేసుకోవడంలో మార్గనిర్దేశం చేశారు.",
  "అది కేవలం Motivation ద్వారా కాదు. Deep Inner Transformation ద్వారా.",
];

const methods = [
  "Manifestation & Money Mindset",
  "Psychology & Nervous System Healing",
  "Meditation & Practical Transformation Tools",
];

const organisations = [
  "Air India",
  "HAL",
  "Telangana Police",
  "ICAI",
  "Mahindra Pride",
  "Suven Life Sciences",
  "TUI",
];

export function CoachSection() {
  return (
    <section className="relative overflow-hidden bg-[#101942] px-4 py-20 text-white">
      {/* decorative glow */}
      <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#ad284c]/20 blur-[90px]" />
      <div className="pointer-events-none absolute right-[-180px] bottom-[-180px] h-[420px] w-[420px] rounded-full bg-[#b7d5c6]/15 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="text-center font-display text-[34px] font-extrabold leading-tight md:text-[44px]">
          మీ Coach{" "}
          <span className="text-white underline decoration-[#ad284c] decoration-4 underline-offset-8">
            {COACH_TELUGU.name}
          </span>{" "}
          గురించి
        </h2>

        <div className="mx-auto mt-6 h-[4px] w-[195px] bg-[#ad284c]" />

        <div className="mt-12 grid gap-10 rounded-[32px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur md:grid-cols-[300px_1fr] md:p-10">
          {/* Left image area - image way unchanged */}
          <div className="flex flex-col items-center">
            <div className="rounded-full p-1 border-2 border-dashed border-[#ad284c]">
              <img
                src="/Loka.JPG"
                alt={COACH_TELUGU.name}
                loading="lazy"
                width={240}
                height={240}
                className="w-60 h-60 rounded-full object-cover"
              />
            </div>

            <div className="mt-5 w-full max-w-[270px] rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-center shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
              <div className="font-display text-[19px] font-extrabold">
                {COACH_TELUGU.name}
              </div>
              <div className="mt-1 text-[13px] font-medium leading-relaxed text-white/80">
                {COACH_TELUGU.role}
                <br />
                {COACH_TELUGU.experience}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-full border border-white/20 bg-white px-5 py-2.5 text-[#062453] shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ad284c]/10 text-[#ad284c]">
                <UsersRound className="h-5 w-5" strokeWidth={2.5} />
              </div>

              <div className="text-left leading-tight">
                <p className="text-[15px] font-extrabold">20,000+</p>
                <p className="text-[12px] font-semibold opacity-80">
                  People Trained
                </p>
              </div>
            </div>
          </div>

          {/* Right content area */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-6">
              <div className="space-y-4 text-[16px] font-medium leading-relaxed text-white/90 md:text-[17px]">
                {bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white p-6 text-[#062453] shadow-[0_12px_30px_rgba(0,0,0,0.16)]">
              <p className="font-display text-[20px] font-extrabold leading-snug text-[#ad284c]">
                ఆయన Coaching లో ఈ Powerful Methods Combination ఉంటుంది:
              </p>

              <div className="mt-5 grid gap-3">
                {methods.map((method) => (
                  <div
                    key={method}
                    className="flex items-start gap-3 rounded-xl bg-[#fbf6ee] px-4 py-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ad284c]" />
                    <p className="text-[15px] font-bold leading-snug">
                      {method}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ad284c]">
                  <Building2 className="h-5 w-5 text-white" />
                </div>

                <div>
                  <p className="text-[17px] font-extrabold leading-relaxed text-white">
                    20,000+ People Trained • India అంతటా పలువురు Organisations పై
                    Impact.
                  </p>

                  <p className="mt-4 font-display text-[19px] font-extrabold text-white">
                    Loka పనిచేసిన ప్రముఖ Organisations:
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {organisations.map((org) => (
                      <span
                        key={org}
                        className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/90"
                      >
                        {org}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}