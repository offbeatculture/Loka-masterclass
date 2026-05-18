const testimonials = [
  {
    name: "Swathi Karnati",
    title: "డబ్బు పట్ల ఉన్న భయాలను వదిలించుకున్న గృహిణి",
    videoUrl: "/video/Swathi Karnati.mp4",
  },
  {
    name: "Harsha",
    title: "డబ్బుతో ఉన్న సంబంధాన్ని మార్చుకుని, అనుకోకుండా ₹30K పొందారు",
    videoUrl: "/video/Harsha.mp4",
  },
  {
    name: "Rohith",
    title: "అవసరమైనప్పుడు డబ్బు సులభంగా వస్తుందనే అనుభవం పొందుతున్నారు",
    videoUrl: "/video/Rohith.mp4",
  },
];

export function VideoTestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#fbf6ee] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        {/* <h2 className="text-center font-display text-[34px] font-extrabold leading-tight text-[#062453] md:text-[42px]">
          Heartwarming{" "}
          <span className="text-[#ad284c]">Video Testimonials</span>
        </h2> */}

        {/* <div className="mx-auto mt-5 h-[4px] w-[195px] bg-[#ad284c]" /> */}

        {/* <p className="mx-auto mt-5 max-w-3xl text-center text-[18px] font-semibold leading-relaxed text-[#062453] md:text-[20px]">
          Real people. Real money shifts. Real transformation.
        </p> */}

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_28px_rgba(0,0,0,0.14)]"
            >
              <div className="relative h-[250px] overflow-hidden bg-black">
                <video
                  src={t.videoUrl}
                  muted
                  loop
                  playsInline
                  preload="auto"
                  controls
                  className="h-full w-full object-cover"
                  onLoadedMetadata={(e) => {
                    e.currentTarget.currentTime = 0.1;
                  }}
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0.1;
                  }}
                />
              </div>

              <div className="px-6 py-6 text-center">
                <h3 className="font-display text-[24px] font-extrabold text-[#ad284c]">
                  {t.name}
                </h3>

                <p className="mt-3 text-[17px] font-semibold leading-relaxed text-[#062453]">
                  {t.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}