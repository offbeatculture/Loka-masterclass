const writtenTestimonials = [
  {
    name: "Bhagya Lakshmi",
    text: "Problem money లో కాదు mana thinking లో ఉందని realize అయ్యాను.",
  },
  {
    name: "Vani B",
    text: "Old habit loops break అయ్యి, unexpected money & opportunities attract అవ్వడం start అయ్యింది.",
  },
  {
    name: "Bhanu",
    text: "Your income is a mirror of your identity — ఈ one line నా money mindset ని మార్చింది.",
  },
  {
    name: "Lavanya",
    text: "Years నుంచి ఉన్న money conditioning break అయ్యి, money పట్ల clarity వచ్చింది.",
  },
  {
    name: "Vanitha",
    text: "Fear & doubt తగ్గి, money ని ఎలా handle చేయాలో నేర్చుకున్నాను.",
  },
  {
    name: "Naresh",
    text: "Money గురించి ఉన్న tension తగ్గి, life లో clarity & positive changes start అయ్యాయి.",
  },
  {
    name: "Nageswar",
    text: "Money పట్ల భయంతో కాకుండా, స్పష్టంగా ఆలోచిస్తున్నాను.",
  },
];

export function WrittenTestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#eee8e4] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-[34px] font-extrabold leading-tight text-[#062453] md:text-[42px]">
  {/* లిఖితపూర్వక{" "} */}
  <span className="text-[#ad284c]">టెస్టిమోనియల్స్</span>
</h2>

        <div className="mx-auto mt-5 h-[4px] w-[195px] bg-[#ad284c]" />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {writtenTestimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white px-6 py-6 shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
            >
              <p className="text-[18px] font-semibold leading-relaxed text-[#062453]">
                “{t.text}”
              </p>

              <h3 className="mt-5 font-display text-[22px] font-extrabold text-[#ad284c]">
                {t.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}