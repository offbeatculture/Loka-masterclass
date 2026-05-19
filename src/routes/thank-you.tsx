import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const Route = createFileRoute("/thank-you")({
  component: ThankYouPage,
});

function ThankYouPage() {
  const [whatsappLink, setWhatsappLink] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");
    }
  }, []);

 useEffect(() => {
  async function fetchWhatsappLink() {
    try {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/1G-c1j0iATcTAdbHzWWI4b8-vVfrQJvNKvQ5KlyvBTkU/export?format=csv&gid=0";

      const response = await fetch(csvUrl);

      if (!response.ok) {
        throw new Error("Failed to fetch sheet");
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

      const whatsappIndex = headers.findIndex((h) => {
        const header = h.toLowerCase().trim();
        return header === "wa link" || header === "whatsapp_link";
      });

      const link =
        whatsappIndex !== -1 ? firstDataRow[whatsappIndex] || "" : "";

      setWhatsappLink(link);
    } catch (error) {
      console.error("Failed to fetch WhatsApp link:", error);
    } finally {
      setLoading(false);
    }
  }

  fetchWhatsappLink();
}, []);
  return (
    <main className="min-h-screen bg-[#eee8e4] px-4 py-16">
      <section className="mx-auto flex min-h-[80vh] max-w-3xl items-center justify-center">
        <div className="w-full rounded-[34px] bg-white px-6 py-10 text-center shadow-[0_18px_45px_rgba(0,0,0,0.18)] md:px-12 md:py-14">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#ad284c]/10 text-[#ad284c]">
            <MessageCircle className="h-10 w-10" />
          </div>

          <h1 className="mt-6 font-display text-[38px] font-extrabold leading-tight text-[#ad284c] md:text-[52px]">
            Thank You!
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[20px] font-bold leading-relaxed text-[#062453] md:text-[24px]">
            Your registration is successful.
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-[17px] font-semibold leading-relaxed text-[#062453] md:text-[19px]">
            Join the WhatsApp group to get all masterclass updates, reminders,
            and joining details.
          </p>

          {loading ? (
            <button
              disabled
              className="mx-auto mt-8 flex h-[62px] w-full max-w-[420px] items-center justify-center rounded-full bg-[#bd2d55]/70 text-[20px] font-extrabold text-white"
            >
              Loading WhatsApp Link...
            </button>
          ) : whatsappLink ? (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mx-auto mt-8 flex h-[62px] w-full max-w-[420px] items-center justify-center rounded-full bg-[#25D366] text-[20px] font-extrabold text-white shadow-[0_14px_28px_rgba(37,211,102,0.3)] transition hover:opacity-90"
            >
              Join WhatsApp Group
            </a>
          ) : (
            <p className="mt-8 text-[16px] font-bold text-[#ad284c]">
              WhatsApp link not found. Please contact support.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}