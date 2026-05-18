// import { AlertCircle } from "lucide-react";
// import { LIFE_RIGHT_NOW } from "./data";

// export function LifeRightNowSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#eee8e4] px-4 pt-24 pb-20 border-t border-[#e2d8d1]">
//       {/* decorative lines */}
//       <div className="pointer-events-none absolute left-[-240px] top-[-120px] h-[520px] w-[520px] rounded-full border border-[#b7d5c6]/70" />
//       <div className="pointer-events-none absolute left-[-210px] top-[-90px] h-[470px] w-[470px] rounded-full border border-[#b7d5c6]/70" />
//       <div className="pointer-events-none absolute right-[-220px] bottom-[-180px] h-[520px] w-[520px] rounded-full border border-[#b7d5c6]/70" />

//       <div className="relative z-10 mx-auto max-w-6xl">
//         <h2 className="text-center font-display text-[36px] font-extrabold leading-tight text-[#062453] md:text-[42px]">
//           What's Happening In Your{" "}
//           <span className="text-[#ad284c]">Life Right Now</span>
//         </h2>

//         <div className="mx-auto mt-5 h-[4px] w-[195px] bg-[#ad284c]" />

//         <p className="mx-auto mt-5 max-w-3xl text-center text-[20px] font-semibold leading-relaxed text-[#062453]">
//           If any of these sound familiar — this masterclass is for you.
//         </p>

//         <div className="mt-10 grid gap-5 md:grid-cols-2">
//           {LIFE_RIGHT_NOW.map((item) => (
//             <div
//               key={item.title}
//               className="rounded-2xl bg-white px-6 py-5 shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ad284c]/10 text-[#ad284c]">
//                   <AlertCircle className="h-5 w-5" />
//                 </div>

//                 <div>
//                   <h3 className="font-display text-[22px] font-extrabold leading-tight text-[#ad284c]">
//                     “{item.title}”
//                   </h3>

//                   <p className="mt-3 text-[17px] font-medium leading-relaxed text-[#062453]">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <p className="mx-auto mt-10 max-w-4xl text-center text-[22px] font-extrabold leading-relaxed text-[#062453]">
//           These are not just money problems. These are hidden beliefs quietly
//           shaping your financial life.
//         </p>
//       </div>
//     </section>
//   );
// }

import { AlertCircle } from "lucide-react";

const LIFE_RIGHT_NOW_TELUGU = [
  {
    title: "డబ్బు సంపాదించడం చాలా కష్టం.",
    desc: "Money అనేది చాలా Hard Work చేస్తేనే వస్తుందని మీరు నమ్ముతున్నారు. మీరు ఇప్పటికే చాలా కష్టపడ్డారు. అయినప్పటికీ… మీరు కోరుకున్న స్థాయిలో Income, Wealth మాత్రం ఇంకా జీవితంలోకి రావడం లేదు.",
  },
  {
    title: "నేను ధనవంతుడు కాలేను.",
    desc: "ఎక్కడో ఒకచోట మీరు మీ జీవితానికి ఒక Limit పెట్టుకున్నారు. ఒక నిర్దిష్టమైన Salary… ఒక సాధారణ ఇల్లు… ఒక Average Life. దాని కంటే ఎక్కువగా జీవించడం మీ వల్ల కాదు అనిపిస్తుంది.",
  },
  {
    title: "బహుశా నా జీవితం ఇలాగే ఉంటుంది.",
    desc: "మీ తల్లిదండ్రులు కష్టపడ్డారు. వాళ్ల తల్లిదండ్రులు కూడా కష్టపడ్డారు. ఎవరూ నేరుగా చెప్పకపోయినా… “మన జీవితాలు ఇలాగే ఉంటాయి” అనే Belief మీలో నిశ్శబ్దంగా Program అయిపోయింది.",
  },
  {
    title: "నాకు అదృష్టం లేదు.",
    desc: "మీరు బాగా చదివారు. చాలా కష్టపడ్డారు. చేయాల్సిందంతా చేశారు. కానీ ఇతరుల జీవితంలోకి వచ్చిన Opportunities, Money, Growth… మీ జీవితంలోకి మాత్రం రావడం లేదనిపిస్తుంది.",
  },
  {
    title: "నా విధిరాతలో డబ్బు లేదు.",
    desc: "మీరు ప్రార్థించారు. చాలా ప్రయత్నించారు. Mindset మార్చుకోవడానికి కూడా ప్రయత్నించారు. అయినా కూడా… “బహుశా ఇదే నా Fate అయి ఉంటుంది” అని లోపల నిశ్శబ్దంగా ఒప్పుకున్నారు.",
  },
  {
    title: "డబ్బు గురించి Open గా మాట్లాడకూడదు.",
    desc: "మీ ఇంట్లో Money గురించి ఎప్పుడూ Open Discussions జరగలేదు. అది ఎప్పుడూ గొడవలకు కారణమయ్యేది… లేక పూర్తిగా Silence లో ఉండేది. డబ్బును ఎలా Handle చేయాలి, ఎలా Grow చేయాలి అనేది నేర్చుకోకుండా మీరు పెరిగారు. ఇప్పుడు ఆ Confusion ని మీరు ఒంటరిగా మోస్తున్నారు.",
  },
  {
    title: "డబ్బు తీసుకోవడం కూడా తప్పుగా అనిపిస్తుంది.",
    desc: "ఒక Bonus… ఒక Gift… అనుకోకుండా వచ్చిన Money… వెంటనే లోపల ఏదో discomfortగా అనిపిస్తుంది. “ఇది నాకు చెందదు” అన్న Feeling వస్తుంది. ఎవరైనా చూసేలోపు దాన్ని వదిలేయాలని అనిపిస్తుంది.",
  },
];

export function LifeRightNowSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#eee8e4] px-4 pt-16 pb-16 border-t border-[#e2d8d1] md:pt-24 md:pb-20">
      {/* decorative lines */}
      <div className="pointer-events-none absolute left-[-260px] top-[-140px] h-[420px] w-[420px] rounded-full border border-[#b7d5c6]/70 md:left-[-240px] md:top-[-120px] md:h-[520px] md:w-[520px]" />
      <div className="pointer-events-none absolute left-[-235px] top-[-115px] h-[380px] w-[380px] rounded-full border border-[#b7d5c6]/70 md:left-[-210px] md:top-[-90px] md:h-[470px] md:w-[470px]" />
      <div className="pointer-events-none absolute right-[-260px] bottom-[-180px] h-[420px] w-[420px] rounded-full border border-[#b7d5c6]/70 md:right-[-220px] md:bottom-[-180px] md:h-[520px] md:w-[520px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <h2 className="mx-auto max-w-[350px] text-center font-display text-[30px] font-extrabold leading-tight text-[#062453] sm:max-w-none md:text-[42px]">
          ప్రస్తుతం మీ జీవితంలో{" "}
          <span className="text-[#ad284c]">ఏమి జరుగుతోంది?</span>
        </h2>

        <div className="mx-auto mt-5 h-[4px] w-[150px] bg-[#ad284c] md:w-[195px]" />

        <p className="mx-auto mt-5 max-w-[350px] text-center text-[17px] font-semibold leading-relaxed text-[#062453] sm:max-w-3xl md:text-[20px]">
          వీటిలో ఏవైనా మీ జీవితానికి దగ్గరగా అనిపిస్తే — ఈ Masterclass మీ కోసమే.
        </p>

        <div className="mt-9 grid w-full grid-cols-1 gap-5 md:mt-10 md:grid-cols-2">
          {LIFE_RIGHT_NOW_TELUGU.map((item) => (
            <div
              key={item.title}
              className="w-full overflow-hidden rounded-2xl bg-white px-4 py-5 shadow-[0_10px_24px_rgba(0,0,0,0.12)] sm:px-6 md:py-5"
            >
              <div className="flex w-full items-start gap-3 sm:gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ad284c]/10 text-[#ad284c] sm:h-9 sm:w-9">
                  <AlertCircle className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="break-words font-display text-[24px] font-extrabold leading-[1.18] text-[#ad284c] md:text-[22px]">
                    “{item.title}”
                  </h3>

                  <p className="mt-3 break-words text-[16px] font-medium leading-[1.65] text-[#062453] md:text-[17px] md:leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-[350px] text-center text-[20px] font-extrabold leading-relaxed text-[#062453] sm:max-w-4xl md:text-[22px]">
          ఇవి కేవలం Money Problems కాదు. ఇవి మీ Financial Life ని నిశ్శబ్దంగా
          Shape చేస్తున్న Hidden Beliefs.
        </p>
      </div>
    </section>
  );
}