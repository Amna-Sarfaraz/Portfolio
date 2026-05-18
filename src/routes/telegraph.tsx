import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { NoirShell } from "@/components/NoirShell";

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
  return (
    <NoirShell>
      <section className="px-4 max-w-3xl mx-auto">
        <header className="text-center mb-10">
          <p className="typewriter text-noir-gold tracking-[0.5em] text-xs">SECTION VI</p>
          <h1 className="headline-serif text-5xl md:text-6xl mt-2">Send a Telegraph</h1>
        </header>

        <motion.div
          initial={{ y: 40, opacity: 0, rotate: 1 }}
          whileInView={{ y: 0, opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          className="paper relative p-8"
        >
          <div className="tape absolute -top-4 left-10 w-28 h-7" />
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
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="mt-6 space-y-5"
            >
              {[
                { label: "FROM (NAME)", name: "name", type: "text" },
                { label: "RETURN ADDRESS (EMAIL)", name: "email", type: "email" },
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
                  required rows={6}
                  className="mt-1 w-full bg-transparent border-2 border-noir-ink/40 typewriter text-noir-ink p-3 focus:outline-none focus:border-noir-blood resize-none"
                  placeholder="STATE YOUR CASE.  STOP.  BE CONCISE.  STOP."
                />
              </label>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-3">
                  {/* wax seal */}
                  <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-noir-blood to-red-950 ring-2 ring-noir-ink/40 flex items-center justify-center shadow-lg">
                    <span className="headline-serif text-noir-paper text-xl">JM</span>
                  </div>
                  <span className="handwritten text-noir-ink text-lg">sealed in confidence</span>
                </div>
                <button
                  type="submit"
                  className="typewriter bg-noir-black text-noir-paper px-6 py-3 text-xs tracking-[0.3em] hover:bg-noir-blood transition shadow-lg"
                >
                  DISPATCH MESSAGE →
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
                {"YOUR MESSAGE HAS BEEN RECEIVED. STOP.".split("").map((ch, i) => (
                  <motion.span key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.025 }}>{ch}</motion.span>
                ))}
              </p>
              <p className="handwritten text-noir-blood text-2xl mt-4">
                The detective will respond within 24 hours.
              </p>
            </motion.div>
          )}
        </motion.div>
      </section>
    </NoirShell>
  );
}
