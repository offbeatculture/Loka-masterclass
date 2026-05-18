// import { CheckCircle2 } from "lucide-react";
// // import { CTAButton } from "./CTAButton";

// const afterSessionPoints = [
//   "Finally understand why money has never stayed — no matter how hard you worked",
//   "See exactly what has been keeping you financially stuck all these years",
//   "Stop feeling like wealth was meant for someone else, and not you",
//   "Have the Millionaire Belief System — the exact beliefs that separate people who build wealth from people who stay stuck",
//   "Walk away with a completely different version of yourself — one that knows wealth is possible for them",
// ];

// export function AfterSession() {
//   return (
//     <section className="relative overflow-hidden bg-[#eee8e4] px-4 pt-20 pb-24">
//       {/* decorative lines */}
//       <div className="pointer-events-none absolute left-[-260px] top-[-160px] h-[560px] w-[560px] rounded-full border border-[#b7d5c6]/70" />
//       <div className="pointer-events-none absolute left-[-230px] top-[-130px] h-[500px] w-[500px] rounded-full border border-[#b7d5c6]/70" />
//       <div className="pointer-events-none absolute right-[-240px] bottom-[-190px] h-[540px] w-[540px] rounded-full border border-[#b7d5c6]/70" />

//       <div className="relative z-10 mx-auto max-w-5xl">
//         <h2 className="text-center font-display text-[36px] font-extrabold leading-tight text-[#062453] md:text-[42px]">
//           After The Session{" "}
//           <span className="text-[#ad284c]">You Will...</span>
//         </h2>

//         <div className="mx-auto mt-5 h-[4px] w-[195px] bg-[#ad284c]" />

//         <p className="mx-auto mt-5 max-w-3xl text-center text-[20px] font-semibold leading-relaxed text-[#062453]">
//           You will walk away with clarity, confidence, and a completely new
//           relationship with money.
//         </p>

//         <div className="mt-10 space-y-5">
//           {afterSessionPoints.map((point) => (
//             <div
//               key={point}
//               className="flex items-start gap-4 rounded-2xl bg-white px-6 py-5 shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
//             >
//               <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ad284c]/10 text-[#ad284c]">
//                 <CheckCircle2 className="h-6 w-6" />
//               </div>

//               <p className="text-[18px] font-semibold leading-relaxed text-[#062453] md:text-[20px]">
//                 {point}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* <div className="mx-auto mt-12 max-w-[850px]">
//           <CTAButton />
//         </div> */}

//         {/* <p className="mt-4 text-center text-[15px] italic text-[#062453]">
//           Limited seats available
//         </p> */}
//       </div>
//     </section>
//   );
// }

import { CheckCircle2 } from "lucide-react";
// import { CTAButton } from "./CTAButton";

const afterSessionPoints = [
  "ఎంత Hard Work చేసినా… డబ్బు ఎందుకు మీ దగ్గర ఉండడం లేదో చివరికి స్పష్టంగా అర్థం చేసుకుంటారు.",
  "ఇన్నేళ్లుగా మిమ్మల్ని Financial గా Stuck చేసి ఉంచిన అసలు Reasons ఏమిటో Clear గా గుర్తిస్తారు.",
  "“Money అనేది ఇతరుల కోసమే… నా కోసం కాదు” అనే Limiting Belief నుంచి బయటపడతారు.",
  "Money ని Attract చేసే వాళ్లను… జీవితంలో అదే స్థాయిలో Stuck అయిపోయే వాళ్ల నుంచి వేరు చేసే Millionaire Mindset ని పొందుతారు.",
  "“Rich Life జీవించడం నాకు కూడా సాధ్యమే” అని లోపల నుంచి Believe చేసే ఒక Complete New Identity తో ఈ Session నుంచి బయటకు వస్తారు.",
];

export function AfterSession() {
  return (
    <section className="relative overflow-hidden bg-[#eee8e4] px-4 pt-20 pb-24">
      {/* decorative lines */}
      <div className="pointer-events-none absolute left-[-260px] top-[-160px] h-[560px] w-[560px] rounded-full border border-[#b7d5c6]/70" />
      <div className="pointer-events-none absolute left-[-230px] top-[-130px] h-[500px] w-[500px] rounded-full border border-[#b7d5c6]/70" />
      <div className="pointer-events-none absolute right-[-240px] bottom-[-190px] h-[540px] w-[540px] rounded-full border border-[#b7d5c6]/70" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <h2 className="text-center font-display text-[36px] font-extrabold leading-tight text-[#062453] md:text-[42px]">
          ఈ Session తర్వాత{" "}
          <span className="text-[#ad284c]">మీరు…</span>
        </h2>

        <div className="mx-auto mt-5 h-[4px] w-[195px] bg-[#ad284c]" />

        <p className="mx-auto mt-5 max-w-3xl text-center text-[20px] font-semibold leading-relaxed text-[#062453]">
          మీ Money Relationship గురించి Clarity, Confidence, మరియు పూర్తిగా కొత్త
          Perspective తో ముందుకు వెళ్తారు.
        </p>

        <div className="mt-10 space-y-5">
          {afterSessionPoints.map((point) => (
            <div
              key={point}
              className="flex items-start gap-4 rounded-2xl bg-white px-6 py-5 shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
            >
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ad284c]/10 text-[#ad284c]">
                <CheckCircle2 className="h-6 w-6" />
              </div>

              <p className="text-[18px] font-semibold leading-relaxed text-[#062453] md:text-[20px]">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="mx-auto mt-12 max-w-[850px]">
          <CTAButton />
        </div> */}

        {/* <p className="mt-4 text-center text-[15px] italic text-[#062453]">
          Limited seats available
        </p> */}
      </div>
    </section>
  );
}