// import { Check } from "lucide-react";
// // import { CTAButton } from "./CTAButton";
// import { BREAK_FREE_POINTS } from "./data";

// export function JoinSection() {
//   return (
//     <section className="bg-[#eee8e4] px-4 py-16">
//       <div className="mx-auto max-w-5xl">
//         <h2 className="text-center font-display text-[38px] font-extrabold leading-tight text-[#062453] md:text-[42px]">
//           Are You Ready To Finally{" "}
//           <span className="text-[#ad284c]">Break Free From</span>
//         </h2>

//         <div className="mx-auto mt-5 h-[4px] w-[195px] bg-[#ad284c]" />

//         <div className="mt-10 grid gap-4 md:grid-cols-2">
//           {BREAK_FREE_POINTS.map((p) => (
//             <div
//               key={p}
//               className="flex items-center gap-4 rounded-xl bg-white px-5 py-4 shadow-[0_8px_22px_rgba(0,0,0,0.12)]"
//             >
//               <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-emerald-500">
//                 <Check className="h-5 w-5 text-white" strokeWidth={3} />
//               </div>

//               <p className="text-[17px] font-semibold leading-snug text-[#062453]">
//                 {p}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* <div className="mx-auto mt-10 max-w-[850px]">
//           <CTAButton />
//         </div>

//         <p className="mt-4 text-center text-[15px] italic text-[#062453]">
//           Limited seats available
//         </p> */}
//       </div>
//     </section>
//   );
// }

import { Check } from "lucide-react";

const BREAK_FREE_POINTS_TELUGU = [
  "ప్రతి నెలా మళ్లీ మళ్లీ తిరిగి వస్తున్న అదే Financial Struggles నుంచి.",
  "డబ్బు గురించి Open గా మాట్లాడలేకపోయే ఆ Shame నుంచి.",
  "Money విషయం వచ్చిన ప్రతీసారి చిన్నవాడిలా Feel అయ్యే ఆ పరిస్థితి నుంచి.",
  "అందరికీ ఇస్తూ… చివరికి మీకోసం ఏమీ మిగలని ఆ వెలితి నుంచి.",
  "జీవితం మొత్తం Hard Work చేసినా… ఇంకా వెనకబడి ఉన్నట్టే అనిపించే బాధ నుంచి.",
  "జీవితం మొత్తం Sacrifices చేసినా… అవి మీ Bank Account లో ఎప్పుడూ కనిపించని పరిస్థితి నుంచి.",
  "మీ Salary చేతికి వచ్చిన వెంటనే… ఏం చేయకముందే మాయమైపోయే ఆ Financial Loop నుంచి.",
  "“మనలాంటి వాళ్లు Rich కాలేరు” అనే Generational Story నుంచి.",
];

export function JoinSection() {
  return (
    <section className="bg-[#eee8e4] px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-[38px] font-extrabold leading-tight text-[#062453] md:text-[42px]">
          మీరు చివరికి వీటినుంచి{" "}
          <span className="text-[#ad284c]">బయటపడేందుకు సిద్ధంగా ఉన్నారా?</span>
        </h2>

        <div className="mx-auto mt-5 h-[4px] w-[195px] bg-[#ad284c]" />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {BREAK_FREE_POINTS_TELUGU.map((p) => (
            <div
              key={p}
              className="flex items-center gap-4 rounded-xl bg-white px-5 py-4 shadow-[0_8px_22px_rgba(0,0,0,0.12)]"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-emerald-500">
                <Check className="h-5 w-5 text-white" strokeWidth={3} />
              </div>

              <p className="text-[17px] font-semibold leading-snug text-[#062453]">
                {p}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="mx-auto mt-10 max-w-[850px]">
          <CTAButton />
        </div>

        <p className="mt-4 text-center text-[15px] italic text-[#062453]">
          Limited seats available
        </p> */}
      </div>
    </section>
  );
}