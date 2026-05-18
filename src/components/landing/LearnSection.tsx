// import { LEARNINGS } from "./data";

// export function LearnSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#fbf6ee] px-4 py-16">
//       {/* right decorative circle lines */}
//       <div className="pointer-events-none absolute right-[-220px] top-[-120px] h-[520px] w-[520px] rounded-full border border-[#b7d5c6]/70" />
//       <div className="pointer-events-none absolute right-[-195px] top-[-95px] h-[480px] w-[480px] rounded-full border border-[#b7d5c6]/70" />
//       <div className="pointer-events-none absolute right-[-170px] top-[-70px] h-[440px] w-[440px] rounded-full border border-[#b7d5c6]/70" />

//       <div className="relative z-10 mx-auto max-w-[1425px]">
//      <h2 className="text-center font-display text-[42px] font-extrabold leading-tight text-[#062453]">
//   What Happens In The{" "}
//   <span className="text-[#ad284c]">Masterclass</span>
// </h2>

//         <div className="mx-auto mt-6 h-[4px] w-[195px] bg-[#ad284c]" />

//         <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
//           {LEARNINGS.map((l) => (
//             <div
//               key={l.title}
//               className="overflow-hidden rounded-xl bg-white shadow-[0_10px_24px_rgba(0,0,0,0.16)]"
//             >
//               <img
//                 src={l.image}
//                 alt={l.title}
//                 className="h-[205px] w-full object-cover"
//               />

//               <div className="px-7 pb-8 pt-8 text-center">
//                 <h3 className="font-display text-[25px] font-extrabold leading-[1.18] text-[#ad284c]">
//                   {l.title}
//                 </h3>

//                 <p className="mt-5 text-[20px] font-medium leading-[1.28] text-[#062453]">
//                   {l.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* <button className="mx-auto mt-12 flex h-[68px] w-full max-w-[1425px] items-center justify-center rounded-full bg-[#bd2d55] px-8 text-[23px] font-extrabold text-white shadow-[0_14px_28px_rgba(189,45,85,0.35)] transition hover:bg-[#ad284c]">
//           Register For Masterclass At{" "}
//           <span className="mx-1 text-[#e7ff00] line-through">₹1299</span>
//           ₹99
//         </button> */}
//       </div>
//     </section>
//   );
// }
const LEARNINGS_TELUGU = [
  {
    title: "PART 1 — మీ Financial Life ఇప్పుడు ఎందుకు ఇలా ఉంది?",
    desc: "మీరు డబ్బు గురించి ఏమి Believe చేస్తున్నారో… అదే మీ Financial Reality గా ఎలా మారిందో మీరు స్పష్టంగా అర్థం చేసుకుంటారు. ఈ Session తర్వాత… మీ మొత్తం Financial Life ని మీరు పూర్తిగా కొత్త Perspective నుంచి చూడడం ప్రారంభిస్తారు.",
  },
  {
    title: "PART 2 — మీ జీవితంలోకి Money రాకుండా ఆపి ఉంచుతున్న 5 Money Patterns",
    desc: "ఇప్పటివరకు మీ Financial Life ని లోపల నుంచి Control చేస్తున్న Patterns ఏవో మీరు స్పష్టంగా గుర్తిస్తారు. ఇంకా ఎక్కువ Hard Work చేయడం మాత్రమే ఎందుకు మీ Financial Problems ని Solve చేయలేదో అర్థం చేసుకుంటారు. ఇక్కడితో ఆ Struggle Cycle ముగుస్తుంది.",
  },
  {
    title: "PART 3 — Millionaire Mindset",
    desc: "Money Create చేసే వాళ్లను… జీవితంలో అదే స్థాయిలో Stuck అయిపోయే వాళ్ల నుంచి వేరు చేసే అసలు Difference ఏమిటో మీరు స్పష్టంగా చూస్తారు. అది Luck కాదు. Salary కాదు. ప్రతి Millionaire Success వెనుక ఉన్న ఆ Hidden Secret ఏంటో తెలుసుకుంటారు.",
  },
  {
    title:
      "PART 4 — మీలో ఉన్న Millionaire Identity ని Activate చేసే Practical Experience Session",
    desc: "ఈ మొత్తం Session లో అత్యంత Powerful భాగం ఇదే. మీ లోపల ఇప్పటికే ఉన్న అత్యంత సంపన్నమైన Version ని మీరు కలుస్తారు. దాన్ని Feel అవుతారు. Millionaire లాగా ఆలోచిస్తారు. ఆ Energy ని మీ Real Life లోకి తీసుకువస్తారు. మొదటిసారి… “Rich Life నాకు కూడా సాధ్యమే” అనే Feeling మీలో బలంగా కలుగుతుంది.",
  },
];

export function LearnSection() {
  return (
    <section className="relative overflow-hidden bg-[#fbf6ee] px-4 py-14 md:py-16">
      {/* right decorative circle lines */}
      <div className="pointer-events-none absolute right-[-260px] top-[-150px] h-[440px] w-[440px] rounded-full border border-[#b7d5c6]/70 md:right-[-220px] md:top-[-120px] md:h-[520px] md:w-[520px]" />
      <div className="pointer-events-none absolute right-[-235px] top-[-125px] h-[400px] w-[400px] rounded-full border border-[#b7d5c6]/70 md:right-[-195px] md:top-[-95px] md:h-[480px] md:w-[480px]" />
      <div className="pointer-events-none absolute right-[-210px] top-[-100px] h-[360px] w-[360px] rounded-full border border-[#b7d5c6]/70 md:right-[-170px] md:top-[-70px] md:h-[440px] md:w-[440px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1425px]">
        <h2 className="mx-auto max-w-[340px] text-center font-display text-[30px] font-extrabold leading-tight text-[#062453] sm:max-w-none sm:text-[32px] md:text-[42px]">
          ఈ Masterclass లో{" "}
          <span className="text-[#ad284c]">ఏమి జరుగుతుంది?</span>
        </h2>

        <p className="mx-auto mt-4 max-w-[340px] text-center text-[16px] font-semibold leading-relaxed text-[#062453] sm:max-w-4xl sm:text-[17px] md:text-[20px]">
          నాలుగు Parts. ఒకే Session. Money తో మీ మొత్తం Relationship మారిపోతుంది.
        </p>

        <div className="mx-auto mt-6 h-[4px] w-[150px] bg-[#ad284c] md:w-[195px]" />

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-10 md:gap-6">
          {LEARNINGS_TELUGU.map((l) => (
            <div
              key={l.title}
              className="flex h-full w-full flex-col justify-start rounded-2xl bg-white shadow-[0_10px_24px_rgba(0,0,0,0.16)]"
            >
              <div className="min-w-0 px-5 py-7 text-center sm:px-5 sm:py-8 md:px-6 md:py-9">
                <h3 className="break-words font-display text-[21px] font-extrabold leading-[1.22] text-[#ad284c] sm:text-[22px] md:text-[24px] lg:text-[25px]">
                  {l.title}
                </h3>

                <p className="mt-4 break-words text-[16px] font-medium leading-[1.6] text-[#062453] sm:text-[17px] md:mt-5 md:text-[18px] md:leading-[1.45] lg:text-[19px]">
                  {l.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* <button className="mx-auto mt-12 flex h-[68px] w-full max-w-[1425px] items-center justify-center rounded-full bg-[#bd2d55] px-8 text-[23px] font-extrabold text-white shadow-[0_14px_28px_rgba(189,45,85,0.35)] transition hover:bg-[#ad284c]">
          Register For Masterclass At{" "}
          <span className="mx-1 text-[#e7ff00] line-through">₹1299</span>
          ₹99
        </button> */}
      </div>
    </section>
  );
}