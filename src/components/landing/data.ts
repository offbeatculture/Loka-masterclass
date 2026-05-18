import { Brain, Sparkles, Heart, Target, type LucideIcon } from "lucide-react";

export const EVENT = {
  date: "15th May 2026",
  time: "6:00 AM to 12:30 PM IST",
  duration: "90 mins",
  language: "English",
  pricePrev: "₹1299",
  price: "₹99",
};

export const COACH = {
  name: "Gayathri Shivaram",
  role: "Healing & Manifestation Coach",
  experience: "10+ Years of Experience",
  followers: "1.5 Million followers",
};

export const WANT_POINTS: string[] = [
  "Wake up with Clarity and Purpose Every Morning",
  "Attract Wealth, Abundance and Opportunities",
  "Feel More Confident While Making Decisions",
  "Overcome Stress, Anxiety and Overthinking",
  "Have a Healthy, Happy and Loving Relationship",
  "See a Positive Change in Health and Mindset",
];

// export type Learning = { icon: LucideIcon; title: string; desc: string };
// export const LEARNINGS: Learning[] = [
//   { icon: Brain, title: " Your Current Financial Realty", desc: "You will see the exact connection between what you believe about money and what your financial reality looks like." },
//   { icon: Sparkles, title: "Master the Art of Manifestation", desc: "Learn the exact mindset, energy and daily rituals to bring your dream life into reality, faster than you think." },
//   { icon: Heart, title: "Attract Healthy Relationships", desc: "Reconnect with your inner self and create deep, loving and lasting bonds — both romantic and platonic." },
//   { icon: Target, title: "Proven 7-Step Formula to Achieve Any Goal", desc: "A clear, repeatable framework to set, pursue and accomplish goals in any area of your life with confidence." },
// ];
export type Learning = {
  image?: string;
  title: string;
  desc: string;
};

export const LEARNINGS: Learning[] = [
  {
    image: "",
    title: "Your Current Financial Reality",
    desc: "You will see the exact connection between what you believe about money and what your financial reality looks like.",
  },
  {
    image: "",
    title: "Master the Art of Manifestation",
    desc: "Learn the exact mindset, energy and daily rituals to bring your dream life into reality, faster than you think.",
  },
  {
    image: "",
    title: "Attract Healthy Relationships",
    desc: "Reconnect with your inner self and create deep, loving and lasting bonds — both romantic and platonic.",
  },
  {
    image: "",
    title: "Proven 7-Step Formula to Achieve Any Goal",
    desc: "A clear, repeatable framework to set, pursue and accomplish goals in any area of your life with confidence.",
  },
];

export type Bonus = { title: string; desc: string; value: string };
export const BONUSES: Bonus[] = [
  { title: "7-Day Abundance Challenge", desc: "A guided week to rewire your money mindset and open the doors to receiving.", value: "₹1999" },
  { title: "No-Question Meditation", desc: "A powerful daily practice to silence doubt and connect with your inner power.", value: "₹1499" },
  { title: "30 Days Manifestation Challenge", desc: "An intensive month-long journey to manifest a goal that truly matters to you.", value: "₹2499" },
  { title: "21-Day Challenge to Beat Procrastination", desc: "Daily prompts and exercises to build unstoppable momentum and productivity.", value: "₹1799" },
  { title: "100% Energy & Abundance (10 Day Challenge)", desc: "An advanced energy routine to feel vibrant, abundant and aligned every single day.", value: "₹2999" },
];

export type Story = { name: string; role: string; city: string; text: string };
export const STORIES: Story[] = [
  { name: "Vignesh", role: "Data Analyst", city: "Bangalore", text: "Before attending the masterclass I was overwhelmed and uncertain about my future. Gayathri's techniques helped me find clarity, calm and a roadmap I could actually follow. My life has shifted in ways I never thought possible." },
  { name: "Ananya Singh", role: "Software Engineer", city: "Delhi", text: "I have used a lot of personal-development tools but this masterclass changed how I see myself, my goals and my relationships. The 7-step formula alone is worth ten times what I paid." },
  { name: "Vinodhini Shivam", role: "Research Analyst", city: "USA", text: "Living overseas, it is easy to drift away from your roots and your peace. This session brought me back to myself. I feel grounded, abundant and excited about life again." },
  { name: "Nivedita Rao", role: "Travel Founder", city: "Bangalore", text: "I came in skeptical and left a complete believer. The practical tools Gayathri shared are simple, effective and worked from week one. My anxiety is gone and my business is thriving." },
  { name: "Karthikeyan Ravi", role: "Account Manager", city: "Coimbatore", text: "The 30-day program is one of the best self-development experiences out there. It is honest, deep and full of love. Gayathri shows up for her students like nobody else." },
];

export type Faq = { q: string; a: string };
export const FAQS: Faq[] = [
  { q: "Will I get a recording of the masterclass?", a: "We don't provide recordings. We recommend you clear your calendar for the live session to get the best experience." },
  { q: "Who can attend the masterclass?", a: "This masterclass is open to anyone looking to improve their life, manifest their dreams, and attract abundance." },
  { q: "How can I make the payment?", a: "You can make payments via credit/debit cards, UPI, or other online methods." },
  { q: "I made the payment but did not receive any email.", a: "Please check your spam folder. If you still cannot find it, write to our support team and we will help you within 24 hours." },
  { q: "How will I join the masterclass?", a: "Once you register, we'll send you a link to join the live session via email and WhatsApp." },
  { q: "When will I get the bonuses?", a: "You will receive the bonuses after attending the masterclass." },
];


export const BREAK_FREE_POINTS = [
  "The same financial struggle repeating month after month",
  "The shame of never being able to talk about money openly",
  "Feeling small every time money comes up",
  "The exhaustion of giving to everyone — and having nothing left for yourself",
  "Working hard your whole life, and still feeling behind",
  "Watching your salary disappear before you can do anything with it",
  "The generational story that people like us don’t become wealthy",
];
export const LIFE_RIGHT_NOW = [
  {
    title: "It’s very hard to earn money.",
    desc: "You believe money only comes through extreme hard work. You’ve done that. And it still feels out of reach.",
  },
  {
    title: "I can’t be rich.",
    desc: "Somewhere you accepted a limit for yourself. A certain income. A certain house. A certain life. Anything beyond that feels like it’s not meant for you.",
  },
  {
    title: "I guess this is my life story.",
    desc: "Your parents struggled. Their parents struggled. And without anyone telling you — you decided this was going to be your story too.",
  },
  {
    title: "I am not lucky enough.",
    desc: "You studied. You worked hard. You did everything right. But the money that came to others — somehow never came to you.",
  },
  {
    title: "Money is not in my fate.",
    desc: "You’ve prayed. You’ve done everything it takes. And still — you’ve quietly accepted that this is what is written for you.",
  },
  {
    title: "Money is not something to discuss openly.",
    desc: "In your home, money was never a conversation. It was either a fight or a silence. You grew up never learning. And now you carry that silence alone.",
  },
  {
    title: "Receiving money feels wrong.",
    desc: "A bonus. A gift. An unexpected windfall. And immediately something inside tightens. Like it doesn’t belong to you. Like you need to give it away before someone notices.",
  },
];