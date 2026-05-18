import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { FormEvent } from "react";
import { useState } from "react";
import { NoirShell } from "@/components/NoirShell";

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const RECIPIENT_NAME = import.meta.env.VITE_CONTACT_RECIPIENT_NAME ?? "Amna Muhammad";
const RECIPIENT_EMAIL = import.meta.env.VITE_CONTACT_RECIPIENT_EMAIL ?? "mohammadamna54@gmail.com";

export const Route = createFileRoute("/telegraph")({
  component: Telegraph,
  head: () => ({
    meta: [
      { title: "Send a Telegraph | The Detective" },
      { name: "description", content: "Dispatch a confidential message to the detective." },
    ],
  }),
});

function Telegraph() {
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("from_name") ?? "").trim();
    const email = String(formData.get("reply_to") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    setError(null);
    setIsSending(true);

    try {
      if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
        throw new Error("Email service is not configured.");
      }

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            to_name: RECIPIENT_NAME,
            to_email: RECIPIENT_EMAIL,
            from_name: name,
            reply_to: email,
            from_email: email,
            subject,
            title: subject,
            case_subject: subject,
            message,
            name,
            email,
          },
        }),
      });

      if (!response.ok) {
        const details = (await response.text()).trim();
        throw new Error(details || "EmailJS rejected the request.");
      }

      form.reset();
      setSent(true);
    } catch (caughtError) {
      const message =
        caughtError instanceof Error && caughtError.message
          ? caughtError.message
          : "Transmission failed.";

      setError(`${message} If this continues, email me directly at ${RECIPIENT_EMAIL}.`);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <NoirShell>
      <section className="px-4 max-w-3xl mx-auto">
        <header className="text-center mb-10">
          <p className="typewriter text-noir-gold tracking-[0.5em] text-xs">SECTION VI</p>
          <h1 className="headline-serif text-3xl sm:text-5xl md:text-6xl mt-2">Send a Telegraph</h1>
        </header>

        <motion.div
          initial={{ y: 40, opacity: 0, rotate: 1 }}
          whileInView={{ y: 0, opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          className="paper relative p-5 sm:p-8"
        >
          <div className="tape absolute -top-4 left-6 sm:left-10 w-20 sm:w-28 h-6 sm:h-7" />
          <div className="border-b-4 border-double border-noir-ink/40 pb-3 flex justify-between">
            <div>
              <p className="typewriter text-[10px] tracking-[0.4em]">WESTERN UNION</p>
              <p className="headline-serif text-2xl">— TELEGRAM —</p>
            </div>
            <div className="text-right">
              <p className="typewriter text-[10px] tracking-widest">PRIORITY: URGENT</p>
              <p className="typewriter text-[10px] tracking-widest">RATE: NIGHT LETTER</p>
            </div>
          </div>

          {!sent ? (
            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >
              {[
                { label: "FROM (NAME)", name: "from_name", type: "text" },
                { label: "RETURN ADDRESS (EMAIL)", name: "reply_to", type: "email" },
                { label: "CASE SUBJECT", name: "subject", type: "text" },
              ].map((f) => (
                <label key={f.name} className="block">
                  <span className="typewriter text-[10px] tracking-[0.3em] text-noir-ink/70">{f.label}</span>
                  <input
                    required name={f.name} type={f.type}
                    className="mt-1 w-full bg-transparent border-b-2 border-dashed border-noir-ink/60 typewriter text-noir-ink py-1 focus:outline-none focus:border-noir-blood"
                  />
                </label>
              ))}
              <label className="block">
                <span className="typewriter text-[10px] tracking-[0.3em] text-noir-ink/70">MESSAGE</span>
                <textarea
                  required
                  name="message"
                  rows={6}
                  className="mt-1 w-full bg-transparent border-2 border-noir-ink/40 typewriter text-noir-ink p-3 focus:outline-none focus:border-noir-blood resize-none"
                  placeholder="STATE YOUR CASE."
                />
              </label>

              {error ? (
                <p className="typewriter text-[10px] tracking-[0.2em] text-noir-blood">
                  {error}
                </p>
              ) : null}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-3">
                  {/* wax seal */}
                  <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-noir-blood to-red-950 ring-2 ring-noir-ink/40 flex items-center justify-center shadow-lg">
                    <span className="headline-serif text-noir-paper text-xl">A.M.</span>
                  </div>
                  <span className="handwritten text-noir-ink text-base sm:text-lg">sealed in confidence</span>
                </div>
                <button
                  type="submit"
                  disabled={isSending}
                  className="typewriter bg-noir-black text-noir-paper px-5 sm:px-6 py-3 text-xs tracking-[0.3em] hover:bg-noir-blood transition shadow-lg w-full sm:w-auto text-center"
                >
                  {isSending ? "TRANSMITTING..." : "DISPATCH MESSAGE →"}
                </button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 text-center py-10"
            >
              <div className="stamp stamp-cleared text-xl mb-4 inline-block">TRANSMITTED</div>
              <p className="typewriter text-noir-ink text-lg leading-loose">
                {"YOUR MESSAGE HAS BEEN RECEIVED.".split("").map((ch, i) => (
                  <motion.span key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.025 }}>{ch}</motion.span>
                ))}
              </p>
            </motion.div>
          )}
        </motion.div>
      </section>
    </NoirShell>
  );
}
