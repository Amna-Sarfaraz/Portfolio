import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { NoirShell } from "@/components/NoirShell";

export const Route = createFileRoute("/dossier")({
  component: Dossier,
  head: () => ({
    meta: [
      { title: "The Dossier | The Detective" },
      { name: "description", content: "Classified personal dossier of the detective-engineer." },
    ],
  }),
});

const stats = [
  { label: "Cases Solved", value: "84" },
  { label: "Years Investigating", value: "07" },
  { label: "Technologies Mastered", value: "29" },
  { label: "Active Operations", value: "03" },
];

function Dossier() {
  return (
    <NoirShell>
      <section className="px-4 max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <p className="typewriter text-noir-gold tracking-[0.5em] text-xs">SECTION II</p>
          <h1 className="headline-serif text-5xl md:text-6xl mt-2">The Dossier</h1>
        </header>

        <motion.article
          initial={{ rotate: -1.5, y: 40, opacity: 0 }}
          whileInView={{ rotate: -0.5, y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="paper relative p-8 md:p-12"
        >
          <div className="tape absolute -top-4 left-12 w-28 h-7" />
          <div className="tape absolute -top-4 right-16 w-24 h-7" style={{ transform: "rotate(4deg)" }} />

          <div className="flex flex-wrap justify-between gap-4 border-b-2 border-noir-ink/30 pb-3">
            <div className="typewriter text-xs tracking-widest">SUBJECT FILE — 7C/AX-1138</div>
            <div className="typewriter text-xs tracking-widest">CLASSIFIED</div>
          </div>

          <div className="grid md:grid-cols-[200px_1fr] gap-8 mt-8">
            <div className="relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8">
                <div className="w-8 h-8 rounded-full bg-zinc-400 ring-2 ring-zinc-700 shadow" />
              </div>
              <div className="bg-noir-ink aspect-[3/4] flex items-end p-2 shadow-xl" style={{ transform: "rotate(-2deg)" }}>
                <div className="w-full h-full bg-gradient-to-b from-zinc-700 to-zinc-900 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-noir-gold/40 text-7xl">?</div>
                  <div className="absolute bottom-0 inset-x-0 bg-black/80 text-noir-paper text-[10px] typewriter p-1 text-center tracking-widest">
                    MORENO, J.
                  </div>
                </div>
              </div>
              <p className="handwritten text-xl text-noir-blood mt-2 text-center">"the consultant"</p>
            </div>

            <div className="space-y-4 typewriter text-noir-ink">
              <div className="flex items-center justify-between">
                <h2 className="headline-serif text-3xl">CASE PROFILE</h2>
                <span className="stamp stamp-cleared">CLEARED FOR HIRE</span>
              </div>
              <p className="leading-relaxed">
                <strong>Subject</strong> operates under the alias <em>"consulting engineer"</em>. Specializes
                in extracting confessions from stubborn codebases. Known associates include React, Python,
                and a particularly chatty PostgreSQL database.
              </p>
              <p className="leading-relaxed">
                Last seen pursuing a memory leak across three continents. Reportedly armed with
                a debugger and an unhealthy quantity of black coffee. Approach with interesting problems.
              </p>
              <p className="handwritten text-2xl text-noir-blood">
                "Every bug leaves a trail. You just have to know where to look."
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                {stats.map((s) => (
                  <div key={s.label} className="border-2 border-noir-ink/40 p-3 bg-noir-paper-dark/40">
                    <div className="headline-serif text-3xl text-noir-blood">{s.value}</div>
                    <div className="typewriter text-[10px] tracking-widest mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </section>
    </NoirShell>
  );
}
