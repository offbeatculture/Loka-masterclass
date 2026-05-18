import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screenshots = [
  "/screenshots/sc1.jpeg",
  "/screenshots/sc2.jpeg",
  "/screenshots/sc3.jpeg",
  "/screenshots/sc4.jpeg",
  "/screenshots/sc5.jpeg",
  "/screenshots/sc6.jpeg",
  "/screenshots/sc7.jpeg",
];

export function TestimonialScreenshotSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const desktopSlides = [
    screenshots[current],
    screenshots[(current + 1) % screenshots.length],
    screenshots[(current + 2) % screenshots.length],
  ];

  return (
    <section className="relative overflow-hidden bg-[#fbf6ee] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-[34px] font-extrabold leading-tight text-[#062453] md:text-[42px]"> పాల్గొన్న వారి{" "} <span className="text-[#ad284c]">ఫీడ్‌బ్యాక్</span> </h2>
        <div className="mx-auto mt-5 h-[4px] w-[195px] bg-[#ad284c]" />

        <div className="relative mx-auto mt-10">
          {/* Mobile: one image */}
          <div className="mx-auto max-w-[760px] md:hidden">
            <div className="overflow-hidden rounded-[24px] bg-white p-3 shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
              <img
                src={screenshots[current]}
                alt={`Testimonial ${current + 1}`}
                className="mx-auto max-h-[620px] w-full rounded-[18px] object-contain"
              />
            </div>
          </div>

          {/* Desktop: three images */}
          <div className="hidden grid-cols-3 gap-6 md:grid">
            {desktopSlides.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="overflow-hidden rounded-[24px] bg-white p-3 shadow-[0_14px_34px_rgba(0,0,0,0.14)]"
              >
                <img
                  src={src}
                  alt={`Testimonial ${index + 1}`}
                  className="h-[520px] w-full rounded-[18px] object-contain"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-[-12px] top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#ad284c] text-white shadow-lg md:left-[-56px]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-[-12px] top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#ad284c] text-white shadow-lg md:right-[-56px]"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-all ${
                  current === index
                    ? "w-8 bg-[#ad284c]"
                    : "w-3 bg-[#ad284c]/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}