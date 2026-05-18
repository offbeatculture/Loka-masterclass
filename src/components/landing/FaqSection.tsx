import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "ఈ Masterclass ఎవరి కోసం?",
    a: "ఎంత hard work చేసినా కూడా money చేతిలో నిలవడం లేదని feel అయ్యే ప్రతి ఒక్కరి కోసం ఇది. ఈ page లోని ఏవైనా statements మీకు connect అయితే, ఈ session మీ కోసమే.",
  },
  {
    q: "ఇది నిజంగా FREE నా?",
    a: "అవును. ఇది completely FREE. ఎలాంటి hidden charges లేవు. Register అయి, live session కి attend అవ్వండి.",
  },
  {
    q: "నేను ఇప్పటికే చాలా things try చేశాను. ఇది ఎలా different గా ఉంటుంది?",
    a: "Budgeting, savings, investing లాంటి వాటికి solutions బయట నుండి work చేస్తాయి. కానీ ఈ session మీ లోపల నుండి పని చేస్తుంది. మీకు తెలియకుండానే మీ financial reality ని influence చేస్తున్న beliefs & subconscious patterns ని identify చేసి transform చేయడంలో ఇది help చేస్తుంది.",
  },
  {
    q: "Recording ఇస్తారా?",
    a: "లేదు. recordings ఉండవు. కాబట్టి ముందుగానే calendar లో time block చేసుకోండి.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[#eee8e4] px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-[34px] font-extrabold leading-tight text-[#062453] md:text-[42px]">
          తరచుగా అడిగే{" "}
          <span className="text-[#ad284c]">ప్రశ్నలు (FAQ)</span>
        </h2>

        <div className="mx-auto mt-5 h-[4px] w-[160px] bg-[#ad284c]" />

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7 md:py-6"
                >
                  <span className="text-[18px] font-extrabold leading-snug text-[#062453] md:text-[22px]">
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`h-6 w-6 shrink-0 text-[#ad284c] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-[#eadfd8] px-5 py-5 text-[16px] font-semibold leading-relaxed text-[#062453] md:px-7 md:text-[18px]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}