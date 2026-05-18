import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Bot, BriefcaseBusiness, GraduationCap, Layers3 } from "lucide-react";
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
  { label: "Projects Solved", value: "5+", icon: BriefcaseBusiness },
  { label: "Specialisation", value: "LLM · RAG · APIs", icon: Bot },
  { label: "Expected 2028", value: "B.E. SE", icon: GraduationCap },
  { label: "Active Projects", value: "3", icon: Layers3 },
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

          <div className="mt-8 space-y-5 text-noir-ink">
            <div className="flex items-center justify-between gap-4">
              <h2 className="headline-serif text-3xl">SUBJECT BRIEFING</h2>
              <span className="stamp stamp-cleared">CLEARED</span>
            </div>
            <div className="ledger-rule pb-4">
              <h3 className="headline-serif text-4xl">Amna Muhammad</h3>
            </div>
            <p className="leading-relaxed text-base md:text-lg">
              Software Engineering undergraduate at NED University, Karachi. Focused on AI systems,
              backend development, and intelligent application design. Experienced in building
              API-driven systems and integrating LLM-based features into real-world applications.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="https://github.com/Amna-Sarfaraz"
                target="_blank"
                rel="noreferrer"
                className="typewriter border border-noir-ink/30 px-3 py-1.5 text-[10px] tracking-widest text-noir-ink hover:bg-noir-ink hover:text-noir-paper transition"
              >
                GITHUB
              </a>
              <a
                href="https://linkedin.com/in/amna-muhammad123"
                target="_blank"
                rel="noreferrer"
                className="typewriter border border-noir-ink/30 px-3 py-1.5 text-[10px] tracking-widest text-noir-ink hover:bg-noir-ink hover:text-noir-paper transition"
              >
                LINKEDIN
              </a>
              <a
                href="mailto:mohammadamna54@gmail.com"
                className="typewriter border border-noir-ink/30 px-3 py-1.5 text-[10px] tracking-widest text-noir-ink hover:bg-noir-ink hover:text-noir-paper transition"
              >
                EMAIL
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {stats.map((s) => (
                <div key={s.label} className="border-2 border-noir-ink/40 p-3 bg-noir-paper-dark/40">
                  <div className="mb-3 inline-flex items-center justify-center rounded-full border border-noir-ink/30 p-2 text-noir-ink/80">
                    <s.icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <div className="headline-serif text-3xl text-noir-blood">{s.value}</div>
                  <div className="typewriter text-[10px] tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.article>
      </section>
    </NoirShell>
  );
}
