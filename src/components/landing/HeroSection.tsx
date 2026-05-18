import { useEffect, useState } from "react";
import { Calendar, Clock,  Hourglass,Languages } from "lucide-react";


export function HeroSection() {
  const [eventData, setEventData] = useState({
    date: "",
    time: "",
    duration: "",
    language: "",
  });

  useEffect(() => {
    async function fetchEventData() {
      try {
        const csvUrl =
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQWwf7BYggOD0Sta4wo6rZsFfJuAngk3FUyDoznjIafOzF4qFb01w6VIfyMwoYrU5MfCWBpzm9xd2v8/pub?output=csv";

        const response = await fetch(csvUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch CSV");
        }

        const csvText = await response.text();

        const rows = csvText
          .trim()
          .split(/\r?\n/)
          .map(
            (row) =>
              row
                .match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g)
                ?.map((cell) => cell.replace(/^"|"$/g, "").trim()) || []
          );

        const headers = rows[0] || [];
        const firstDataRow = rows[1] || [];

        const getValue = (columnName: string) => {
          const index = headers.findIndex(
            (h) => h.toLowerCase().trim() === columnName.toLowerCase()
          );

          return index !== -1 ? firstDataRow[index] || "" : "";
        };

        setEventData({
          date: getValue("date"),
          time: getValue("time"),
          duration: getValue("duration"),
          language: getValue("language"),
        });
      } catch (error) {
        console.error("Failed to fetch event data:", error);
      }
    }

    fetchEventData();
  }, []);

  const details = [
    {
      icon: Calendar,
      label: "Date",
      value: eventData.date || "Loading...",
    },
    {
      icon: Clock,
      label: "Time",
      value: eventData.time || "Loading...",
    },
    {
      icon: Hourglass,
      label: "Duration",
      value: eventData.duration || "Loading...",
    },
    {
      icon: Languages,
      label: "Language",
      value: eventData.language || "Loading...",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#eee8e4] px-4 pt-0 pb-12 md:pb-20">
      {/* top pill */}
   <div className="mx-auto mb-7 flex min-h-[52px] w-fit max-w-[calc(100vw-32px)] items-center justify-center rounded-b-2xl bg-[#ad284c] px-5 text-center text-[16px] font-extrabold leading-tight text-white shadow-md md:h-[58px] md:min-w-[500px] md:px-16 md:text-[23px]">
  మిలియనీర్ మైండ్ యాక్టివేషన్
</div>

{/* decorative background lines */}
<div className="pointer-events-none absolute left-[-420px] top-[260px] h-[700px] w-[700px] rounded-full border border-[#b7d5c6]/70 md:left-[-260px] md:top-[155px] md:h-[820px] md:w-[820px]" />
<div className="pointer-events-none absolute left-[-395px] top-[280px] h-[660px] w-[660px] rounded-full border border-[#b7d5c6]/70 md:left-[-235px] md:top-[175px] md:h-[780px] md:w-[780px]" />
<div className="pointer-events-none absolute left-[-370px] top-[300px] h-[620px] w-[620px] rounded-full border border-[#b7d5c6]/70 md:left-[-210px] md:top-[195px] md:h-[740px] md:w-[740px]" />
<div className="pointer-events-none absolute left-[-345px] top-[320px] h-[580px] w-[580px] rounded-full border border-[#b7d5c6]/70 md:left-[-185px] md:top-[215px] md:h-[700px] md:w-[700px]" />
<div className="pointer-events-none absolute left-[-320px] top-[340px] h-[540px] w-[540px] rounded-full border border-[#b7d5c6]/70 md:left-[-160px] md:top-[235px] md:h-[660px] md:w-[660px]" />

<div className="relative z-10 mx-auto w-full max-w-[1180px] overflow-visible text-center">
  <h1 className="relative left-1/2 mx-auto w-[calc(100vw-32px)] max-w-[360px] -translate-x-1/2 text-center font-display text-[21px] font-extrabold leading-[1.36] tracking-tight text-[#062453] sm:max-w-[520px] sm:text-[30px] md:max-w-[1320px] md:text-[43px] md:leading-[1.25]">
    {/* Mobile layout */}
    <span className="block md:hidden text-[#ad284c]">
      తెలియకుండానే డబ్బును మీ జీవితంలో నుంచి దూరం చేసే
    </span>

    <span className="block md:hidden">
      ఆలోచనా విధానం నుంచి
    </span>

    <span className="block md:hidden">
      డబ్బు మీ దగ్గరికి వచ్చి,
    </span>

    <span className="block md:hidden">
      మీ దగ్గరే నిలిచిపోయేలా చేసే
    </span>

    <span className="block md:hidden">
      కొత్త Wealth Identity ని మీలో
    </span>

    <span className="block md:hidden">
      Program చేసుకునే
    </span>

    <span className="block md:hidden text-[#ad284c]">
      Powerful 90-Minute Masterclass.
    </span>

    {/* Desktop layout */}
    {/* Desktop layout */}
<span className="hidden md:block">
  <span className="text-[#ad284c]">
    తెలియకుండానే డబ్బును మీ జీవితంలో నుంచి దూరం చేసే
  </span>{" "}
  ఆలోచనా విధానం నుంచి → డబ్బు మీ దగ్గరికి వచ్చి, మీ దగ్గరే నిలిచిపోయేలా చేసే
</span>

<span className="hidden md:block">
  కొత్త Wealth Identity ని మీలో Program చేసుకునే
</span>

<span className="hidden md:block text-[#ad284c]">
  Powerful 90-Minute Masterclass.
</span>
  </h1>

  <p className="mx-auto mt-5 w-full max-w-[360px] text-center text-[14px] font-semibold leading-[1.55] text-[#062453] sm:max-w-xl md:max-w-none md:text-[22px]">
  ఉచితంగా Register చేసుకోండి{" "}
  <br className="md:hidden" />
  <span className="text-[#ad284c]">(Limited Seats available)</span>
</p>

  <p className="mx-auto mt-4 w-full max-w-[360px] text-center text-[13px] font-medium leading-[1.7] text-[#062453] sm:max-w-2xl md:max-w-4xl md:text-[20px]">
    ఈ Powerful Framework ద్వారా ఇప్పటికే 10,000+ మంది తమ Money Patterns,
    పాత ఆలోచనలు, Limiting Beliefs ని మార్చుకుని… కొత్త Money Consciousness
    లోకి అడుగుపెట్టారు.
  </p>
        <div className="mt-10 grid w-full grid-cols-1 items-start gap-10 md:mt-16 md:grid-cols-[620px_1fr] md:gap-12">
  {/* coach area */}
  <div className="mx-auto flex w-full max-w-[320px] flex-col items-center sm:max-w-[380px] md:w-[520px] md:max-w-[520px]">
    <div className="flex w-full flex-col items-center justify-center rounded-[26px] md:h-[620px]">
      {/* image circle */}
      <div className="relative z-10 flex h-[190px] w-[190px] items-center justify-center rounded-full bg-white p-[7px] sm:h-[240px] sm:w-[240px] md:h-[310px] md:w-[310px] md:p-[8px]">
        <div className="absolute inset-[-12px] rounded-full border-2 border-dashed border-[#d77b95] sm:inset-[-15px] md:inset-[-24px]" />

        <div className="relative z-10 h-full w-full overflow-hidden rounded-full">
          <img
            src="/Loka.JPG"
            alt="Loka Guruguntla"
            className="h-full w-full scale-[1.08] object-cover object-[center_35%]"
          />
        </div>
      </div>

      {/* coach details card */}
     <div className="relative z-20 -mt-3 w-full max-w-[260px] rounded-[18px] bg-white px-3.5 py-4 text-center shadow-[0_12px_30px_rgba(0,0,0,0.18)] sm:max-w-[300px] sm:px-4 sm:py-5 md:max-w-[450px] md:rounded-[22px] md:px-6 md:py-7">
  <h3 className="font-display text-[20px] font-extrabold leading-tight text-[#ad284c] sm:text-[23px] md:text-[30px]">
    Loka Guruguntla
  </h3>

  <p className="mt-2 text-[12.5px] font-semibold leading-tight text-[#062453] sm:mt-3 sm:text-[14.5px] md:text-[19px]">
    Manifestation Coach
    <br />
    Personal Growth Expert
    <br />
    8+ Years of Experience
  </p>

  <div className="mx-auto mt-3 h-[1px] w-[90px] bg-[#777] sm:mt-4 sm:w-[110px] md:w-[140px]" />

  <div className="mt-3 flex items-center justify-center sm:mt-4">
    <div className="flex items-center gap-2 rounded-full bg-[#fbf6ee] px-2.5 py-1.5 shadow-[0_8px_20px_rgba(0,0,0,0.10)] sm:gap-2.5 sm:px-3 sm:py-2 md:gap-3 md:px-4 md:py-2.5">
      <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#ad284c]/10 sm:h-[32px] sm:w-[32px] md:h-[36px] md:w-[36px]">
        <span className="text-[15px] font-black text-[#ad284c] sm:text-[18px] md:text-[21px]">
          ✓
        </span>
      </div>

      <div className="text-left">
        <p className="text-[15px] font-extrabold leading-none text-[#062453] sm:text-[18px] md:text-[22px]">
          20,000+
        </p>

        <p className="mt-1 text-[9px] font-bold leading-none text-[#062453] sm:text-[11px] md:text-[13px]">
          People Trained
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>


{/* right details area */}
<div className="mt-6 pb-0 md:mt-20 md:pb-[70px]">
  <div className="mx-auto grid w-full max-w-[520px] grid-cols-1 gap-3 md:max-w-[560px] md:gap-4">
    {details.map((d) => (
      <div
        key={d.label}
        className="flex min-h-[68px] items-center gap-3 rounded-xl bg-white px-4 py-3 text-left shadow-[0_10px_22px_rgba(0,0,0,0.14)] md:min-h-[86px] md:gap-4 md:px-5 md:py-4"
      >
        <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#ad284c] text-white md:h-[52px] md:w-[52px]">
          <d.icon className="h-5 w-5 md:h-6 md:w-6" />
        </div>

        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="text-[14px] font-extrabold leading-tight text-[#ad284c] md:text-[17px]">
            {d.label}
          </div>

          <div
            className={`mt-1 font-extrabold leading-tight text-[#062453] ${
              d.label.toLowerCase() === "time"
                ? "whitespace-nowrap text-[15px] md:text-[20px]"
                : "whitespace-nowrap text-[17px] md:text-[20px]"
            }`}
          >
            {d.value}
          </div>
        </div>
      </div>
    ))}
  </div>

  <a
    href="#register"
    className="mx-auto mt-6 flex min-h-[52px] w-full max-w-[320px] items-center justify-center rounded-full bg-[#bd2d55] px-4 text-center text-[16px] font-extrabold leading-tight text-white shadow-[0_14px_28px_rgba(189,45,85,0.35)] transition hover:bg-[#ad284c] md:mt-10 md:h-[68px] md:max-w-none md:px-8 md:text-[22px]"
  >
    Register For Masterclass{" "}
    <span className="mx-1 text-[#e7ff00] line-through">₹499</span>
    FREE
  </a>
</div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.15)] md:hidden">
        <a
          href="#register"
          className="flex h-[52px] w-full items-center justify-center rounded-full bg-[#bd2d55] text-[18px] font-extrabold text-white shadow-[0_10px_22px_rgba(189,45,85,0.35)]"
        >
          Register Now
        </a>
      </div>
    </section>
  );
}