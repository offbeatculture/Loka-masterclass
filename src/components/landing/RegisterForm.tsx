import { useState } from "react";
import { User, Mail, Phone } from "lucide-react";

export function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const WEBHOOK_URL =
    "https://offbeatn8n.coachswastik.com/webhook/loka-masterclass";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("lead_name") || "").trim();
    const phone = String(formData.get("lead_phone") || "").trim();
    const email = String(formData.get("lead_email") || "").trim();

    if (!name || !phone || !email) {
      setMessage("Please fill all details.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          source: "LP Register Form",
          page_url: window.location.href,
          submitted_at: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Webhook failed");
      }

      window.location.href = "/thank-you";
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <section id="register" className="bg-[#fbf6ee] px-4 py-12 pb-28 md:py-16">
      <div className="mx-auto max-w-[560px]">
        <div className="rounded-[28px] bg-white px-5 py-8 shadow-[0_18px_45px_rgba(0,0,0,0.18)] sm:px-7 md:rounded-[34px] md:px-9 md:py-10">
          <h2 className="text-center font-display text-[34px] font-extrabold leading-[1.05] text-[#ad284c] sm:text-[40px] md:text-[44px]">
            Register for Free
          </h2>

          <p className="mx-auto mt-4 max-w-[420px] text-center text-[17px] font-extrabold leading-snug text-[#062453] sm:text-[19px] md:text-[22px]">
            మీ Seat confirm చేసుకోవడానికి details fill చేయండి.
          </p>

          <form onSubmit={handleSubmit} autoComplete="new-password" className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-left text-[16px] font-extrabold text-[#062453]">
                Name
              </label>
              <div className="flex h-[58px] items-center gap-4 rounded-2xl border border-[#d8d0ca] bg-white px-5">
                <User className="h-5 w-5 shrink-0 text-[#ad284c]" />
                <input
                  type="text"
                  name="lead_name"
                  placeholder="Enter your name"
                  autoComplete="new-password"
                  className="w-full bg-transparent text-[16px] font-semibold text-[#062453] outline-none placeholder:text-[#9aa3b2]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-left text-[16px] font-extrabold text-[#062453]">
                Email
              </label>
              <div className="flex h-[58px] items-center gap-4 rounded-2xl border border-[#d8d0ca] bg-white px-5">
                <Mail className="h-5 w-5 shrink-0 text-[#ad284c]" />
                <input
                  type="email"
                  name="lead_email"
                  placeholder="Enter your email"
                  autoComplete="new-password"
                  className="w-full bg-transparent text-[16px] font-semibold text-[#062453] outline-none placeholder:text-[#9aa3b2]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-left text-[16px] font-extrabold text-[#062453]">
                Phone
              </label>
              <div className="flex h-[58px] items-center gap-4 rounded-2xl border border-[#d8d0ca] bg-white px-5">
                <Phone className="h-5 w-5 shrink-0 text-[#ad284c]" />
                <input
                  type="tel"
                  name="lead_phone"
                  placeholder="Enter your phone number"
                  inputMode="numeric"
                  autoComplete="new-password"
                  className="w-full bg-transparent text-[16px] font-semibold text-[#062453] outline-none placeholder:text-[#9aa3b2]"
                />
              </div>
            </div>

            

            <button
              type="submit"
              disabled={loading}
              className="mt-7 flex h-[60px] w-full items-center justify-center rounded-full bg-[#bd2d55] text-[21px] font-extrabold text-white shadow-[0_14px_28px_rgba(189,45,85,0.35)] transition hover:bg-[#ad284c] disabled:cursor-not-allowed disabled:opacity-70 md:h-[64px] md:text-[24px]"
            >
              {loading ? "Submitting..." : "Register for free"}
            </button>

            {message && (
              <p className="text-center text-[15px] font-bold text-[#ad284c]">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}