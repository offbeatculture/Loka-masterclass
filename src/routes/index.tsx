import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/landing/HeroSection";
import { JoinSection } from "@/components/landing/JoinSection";
import { LearnSection } from "@/components/landing/LearnSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { CoachSection } from "@/components/landing/CoachSection";
import { BonusesSection } from "@/components/landing/BonusesSection";
import { StoriesSection } from "@/components/landing/StoriesSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { Footer } from "@/components/landing/Footer";
import {LifeRightNowSection} from "@/components/landing/LifeRightNowSection"
import { CostSection } from "@/components/landing/CostSection";
import { AfterSession } from "@/components/landing/AfterSession";
import { RegisterForm} from "@/components/landing/RegisterForm";
import { WrittenTestimonialsSection } from "@/components/landing/WrittenTestimonialsSection";
import { VideoTestimonialsSection } from "@/components/landing/VideoTestimonialsSection";
import { TestimonialScreenshotSlider } from "@/components/landing/TestimonialScreenshotSlider";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Manifest Your Dream Life Masterclass — Gayathri Shivaram" },
      { name: "description", content: "Join 2 Lakh+ people. Master powerful techniques to heal from the past and manifest your dream life. Live 3-hour masterclass with Gayathri Shivaram." },
      { property: "og:title", content: "Manifest Your Dream Life Masterclass" },
      { property: "og:description", content: "Live 3-hour masterclass on manifestation, healing & abundance with Gayathri Shivaram." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <main className="min-h-screen font-sans bg-background text-foreground">
      {/* <div className="bg-primary text-primary-foreground text-center text-xs md:text-sm py-2 px-4">
        Heal and Manifest Masterclass
      </div> */}
      <HeroSection />
      <RegisterForm />
      <LifeRightNowSection/>
      <CostSection />
      <JoinSection />
      <LearnSection />
      <AfterSession />
      <CoachSection />
      <WrittenTestimonialsSection />
     <TestimonialScreenshotSlider /> 
      <VideoTestimonialsSection/>
      <FaqSection />
       {/* <TestimonialsSection /> */}
      {/* <BonusesSection /> */}
      {/* <StoriesSection /> */}
      {/* <FaqSection /> */}
      <Footer />
    </main>
  );
}
