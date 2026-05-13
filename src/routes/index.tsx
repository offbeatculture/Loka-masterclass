import { createFileRoute } from "@tanstack/react-router";
import { Check, Calendar, Clock, Hourglass, Languages, Instagram, Play, Gift, ChevronDown, Sparkles, Heart, Target, Brain } from "lucide-react";
import { useState } from "react";
import coachImg from "@/assets/coach.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Manifest Your Dream Life Masterclass — Gayathri Shivaram" },
      { name: "description", content: "Join 2 Lakh+ people. Master powerful techniques to heal from the past and manifest your dream life. Live masterclass with Gayathri Shivaram." },
      { property: "og:title", content: "Manifest Your Dream Life Masterclass" },
      { property: "og:description", content: "Live 3-hour masterclass on manifestation, healing & abundance with Gayathri Shivaram." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const CTA = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col items-center gap-2 ${className}`}>
    <button className="w-full max-w-xl rounded-full px-8 py-4 text-white font-semibold tracking-wide shadow-[0_8px_24px_-8px_var(--primary)] hover:scale-[1.02] transition-transform" style={{ background: "var(--gradient-cta)" }}>
      Register For Masterclass At <span className="line-through opacity-70 mx-1">₹1299</span> ₹99
    </button>
    <p className="text-xs text-muted-foreground italic">Christmas & New Year Offer</p>
  </div>
);

const SectionTitle = ({ children, highlight }: { children: string; highlight: string }) => {
  const parts = children.split(highlight);
  return (
    <h2 className="font-display text-3xl md:text-4xl text-center font-bold text-foreground">
      {parts[0]}
      <span className="relative inline-block text-primary">
        {highlight}
        <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-primary/60 rounded-full" />
      </span>
      {parts[1]}
    </h2>
  );
};

function Index() {
  const wantPoints = [
    "Wake up with Clarity and Purpose Every Morning",
    "Attract Wealth, Abundance and Opportunities",
    "Feel More Confident While Making Decisions",
    "Overcome Stress, Anxiety and Overthinking",
    "Have a Healthy, Happy and Loving Relationship",
    "See a Positive Change in Health and Mindset",
  ];

  const learnings = [
    { icon: Brain, title: "Break Free from Limiting Beliefs", desc: "Identify and dissolve the subconscious patterns that keep you stuck, so you can step into a new version of yourself." },
    { icon: Sparkles, title: "Master the Art of Manifestation", desc: "Learn the exact mindset, energy and daily rituals to bring your dream life into reality, faster than you think." },
    { icon: Heart, title: "Attract Healthy Relationships", desc: "Reconnect with your inner self and create deep, loving and lasting bonds — both romantic and platonic." },
    { icon: Target, title: "Proven 7-Step Formula to Achieve Any Goal", desc: "A clear, repeatable framework to set, pursue and accomplish goals in any area of your life with confidence." },
  ];

  const bonuses = [
    { title: "7-Day Abundance Challenge", desc: "A guided week to rewire your money mindset and open the doors to receiving.", value: "₹1999" },
    { title: "No-Question Meditation", desc: "A powerful daily practice to silence doubt and connect with your inner power.", value: "₹1499" },
    { title: "30 Days Manifestation Challenge", desc: "An intensive month-long journey to manifest a goal that truly matters to you.", value: "₹2499" },
    { title: "21-Day Challenge to Beat Procrastination", desc: "Daily prompts and exercises to build unstoppable momentum and productivity.", value: "₹1799" },
    { title: "100% Energy & Abundance (10 Day Challenge)", desc: "An advanced energy routine to feel vibrant, abundant and aligned every single day.", value: "₹2999" },
  ];

  const stories = [
    { name: "Vignesh", role: "Data Analyst", city: "Bangalore", text: "Before attending the masterclass I was overwhelmed and uncertain about my future. Gayathri's techniques helped me find clarity, calm and a roadmap I could actually follow. My life has shifted in ways I never thought possible." },
    { name: "Ananya Singh", role: "Software Engineer", city: "Delhi", text: "I have used a lot of personal-development tools but this masterclass changed how I see myself, my goals and my relationships. The 7-step formula alone is worth ten times what I paid." },
    { name: "Vinodhini Shivam", role: "Research Analyst", city: "USA", text: "Living overseas, it is easy to drift away from your roots and your peace. This session brought me back to myself. I feel grounded, abundant and excited about life again." },
    { name: "Nivedita Rao", role: "Travel Founder", city: "Bangalore", text: "I came in skeptical and left a complete believer. The practical tools Gayathri shared are simple, effective and worked from week one. My anxiety is gone and my business is thriving." },
    { name: "Karthikeyan Ravi", role: "Account Manager", city: "Coimbatore", text: "The 30-day program is one of the best self-development experiences out there. It is honest, deep and full of love. Gayathri shows up for her students like nobody else." },
  ];

  const faqs = [
    { q: "Will I get a recording of the masterclass?", a: "We don't provide recordings. We recommend you clear your calendar for the live session to get the best experience." },
    { q: "Who can attend the masterclass?", a: "This masterclass is open to anyone looking to improve their life, manifest their dreams, and attract abundance." },
    { q: "How can I make the payment?", a: "You can make payments via credit/debit cards, UPI, or other online methods." },
    { q: "I made the payment but did not receive any email.", a: "Please check your spam folder. If you still cannot find it, write to our support team and we will help you within 24 hours." },
    { q: "How will I join the masterclass?", a: "Once you register, we'll send you a link to join the live session via email and WhatsApp." },
    { q: "When will I get the bonuses?", a: "You will receive the bonuses after attending the masterclass." },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen font-sans bg-background text-foreground">
      {/* Top strip */}
      <div className="bg-primary text-primary-foreground text-center text-xs md:text-sm py-2 px-4">
        Heal and Manifest Masterclass
      </div>

      {/* HERO */}
      <section className="px-4 py-10 md:py-14 bg-secondary/50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-display text-2xl md:text-4xl font-bold leading-tight">
            <span className="text-primary">Master Powerful Techniques</span> To Heal From The
            <br className="hidden md:block" /> Past And <span className="text-primary">Manifest Your Dream Life</span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-muted-foreground">More Than 2 Lakh+ People Have Experienced Big Transformation</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6 items-center">
            {/* Coach card */}
            <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-card)] flex flex-col items-center">
              <div className="rounded-full p-1 border-2 border-dashed border-primary/40">
                <img src={coachImg} alt="Gayathri Shivaram" className="w-44 h-44 rounded-full object-cover" width={176} height={176} />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">Gayathri Shivaram</h3>
              <p className="text-xs text-muted-foreground text-center">Healing & Manifestation Coach<br />10+ Years of Experience</p>
              <div className="mt-3 flex items-center gap-2 bg-secondary px-4 py-1.5 rounded-full text-sm font-medium">
                <Instagram className="w-4 h-4 text-primary" /> 1.5 Million followers
              </div>
            </div>

            {/* Details */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Calendar, label: "Date", value: "15th May 2026" },
                  { icon: Clock, label: "Time", value: "6:00 AM to 12:30 PM IST" },
                  { icon: Hourglass, label: "Duration", value: "3 Hours" },
                  { icon: Languages, label: "Language", value: "English" },
                ].map((d, i) => (
                  <div key={i} className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-[var(--shadow-card)]">
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
              <CTA />
            </div>
          </div>
        </div>
      </section>

      {/* JOIN IF */}
      <section className="px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <SectionTitle highlight="You Want To...">Join The Masterclass If You Want To...</SectionTitle>
          <div className="mt-8 grid md:grid-cols-2 gap-3">
            {wantPoints.map((p, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-[var(--shadow-card)]">
                <div className="w-6 h-6 rounded-md bg-emerald-500 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <p className="text-sm md:text-base">{p}</p>
              </div>
            ))}
          </div>
          <div className="mt-8"><CTA /></div>
        </div>
      </section>

      {/* WHAT YOU LEARN */}
      <section className="px-4 py-14 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle highlight="You Will Learn">What You Will Learn In Masterclass</SectionTitle>
          <div className="mt-10 grid md:grid-cols-4 gap-5">
            {learnings.map((l, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-[var(--shadow-card)] flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <l.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-primary font-bold text-lg leading-tight">{l.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{l.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10"><CTA /></div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <SectionTitle highlight="Testimonials">Heartwarming Testimonials From Past Attendees</SectionTitle>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {[{ name: "Rigana", role: "Public Speaker" }, { name: "Ganambal", role: "Entrepreneur" }].map((t, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-navy text-navy-foreground shadow-[var(--shadow-card)]">
                <div className="aspect-video bg-gradient-to-br from-primary/30 to-navy flex items-center justify-center relative">
                  <div className="absolute top-3 left-3 bg-black/50 px-3 py-1 rounded-md text-xs">Testimony of {t.name}</div>
                  <button className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl hover:scale-110 transition">
                    <Play className="w-7 h-7 text-white ml-1" fill="white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10"><CTA /></div>
        </div>
      </section>

      {/* MEET COACH */}
      <section className="px-4 py-16 bg-navy text-navy-foreground">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-center font-bold">
            Meet Your Coach <span className="text-primary-foreground/90 underline decoration-primary decoration-4 underline-offset-8">Gayathri Shivaram</span>
          </h2>
          <div className="mt-10 grid md:grid-cols-[280px_1fr] gap-8 items-start">
            <div className="flex flex-col items-center">
              <div className="rounded-full p-1 border-2 border-dashed border-primary">
                <img src={coachImg} alt="Gayathri Shivaram" loading="lazy" width={240} height={240} className="w-60 h-60 rounded-full object-cover" />
              </div>
              <div className="mt-4 bg-white/10 backdrop-blur rounded-xl px-5 py-3 text-center">
                <div className="font-display font-bold">Gayathri Shivaram</div>
                <div className="text-xs opacity-80">Healing & Manifestation Coach<br />10+ Years of Experience</div>
              </div>
              <div className="mt-3 flex items-center gap-2 bg-white text-foreground px-4 py-1.5 rounded-full text-sm">
                <Instagram className="w-4 h-4 text-primary" /> 1.5 Million followers
              </div>
            </div>
            <div className="space-y-4 text-sm md:text-base leading-relaxed opacity-95">
              <p>Gayathri is a certified healing and manifestation coach with over 10 years of experience.</p>
              <p>Over the years, she has impacted more than 2 Lakh people and personally helped 50,000+ people overcome past trauma and limiting beliefs by rewiring their brain and manifesting their goals.</p>
              <p>She has worked with the best minds in personal development including Jack Canfield, Tony Robbins, Marisa Peer, Dr. John Demartini, Tom Beal, Andy Vargas, Rich Singer and Tobias Beck.</p>
              <p>People know her as India's #1 Thoughts Expert with 1 Million+ followers across her Instagram. Her insights on stress, health, spirituality and relationships have inspired individuals to break out of their shells.</p>
              <p>Now Gayathri is on a mission to help 10 Million people become the best version of themselves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BONUSES */}
      <section className="px-4 py-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-center font-bold">
            Unlock <span className="text-primary">Special Bonuses Worth ₹10,795</span> <Gift className="inline w-7 h-7 text-primary" />
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {bonuses.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-[var(--shadow-card)] border-l-4 border-primary">
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
          <div className="mt-6"><CTA /></div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="px-4 py-14 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle highlight="Stories">Success Stories</SectionTitle>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {stories.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-[var(--shadow-card)] flex flex-col">
                <p className="text-sm text-foreground/80 leading-relaxed flex-1">"{s.text}"</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="font-display font-bold text-primary">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.role} • {s.city}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10"><CTA /></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-14">
        <div className="max-w-3xl mx-auto">
          <SectionTitle highlight="Asked Questions">Frequently Asked Questions</SectionTitle>
          <div className="mt-8 space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-xl shadow-[var(--shadow-card)] overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left px-5 py-4 flex items-center justify-between gap-3">
                  <span className="font-medium">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-muted-foreground">{f.a}</div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10"><CTA /></div>
        </div>
      </section>

      {/* FOOTER STICKY */}
      <footer className="px-4 py-8 bg-secondary border-t border-border">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-2xl font-display font-bold">
              <span className="line-through opacity-50 text-base">₹1299</span> <span className="text-primary">₹99</span>
            </div>
            <p className="text-xs text-muted-foreground">Christmas & New Year Offer ends in 11 hrs 52 mins</p>
          </div>
          <button className="rounded-full px-10 py-3 text-white font-semibold shadow-[0_8px_24px_-8px_var(--primary)]" style={{ background: "var(--gradient-cta)" }}>
            Register Now
          </button>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">© 2026 Gayathri Shivaram. All rights reserved.</p>
      </footer>
    </main>
  );
}
