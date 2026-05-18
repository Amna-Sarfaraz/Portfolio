import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { NoirShell } from "@/components/NoirShell";

export const Route = createFileRoute("/lab")({
  component: Lab,
  head: () => ({
    meta: [
      { title: "Fingerprint Lab | The Detective" },
      { name: "description", content: "Forensic analysis of technical skills and tools." },
    ],
  }),
});

const skills = [
  { name: "React", match: 98, notes: "Primary weapon. Decisive in 71 cases." },
  { name: "TypeScript", match: 96, notes: "Strict mode. No witnesses left behind." },
  { name: "Next.js", match: 92, notes: "Preferred for ambush deployments." },
  { name: "Python", match: 94, notes: "Used in interrogation of large datasets." },
  { name: "ASP.NET", match: 84, notes: "Enterprise-grade fingerprint." },
  { name: "PostgreSQL", match: 91, notes: "Knows where the bodies are stored." },
  { name: "Machine Learning", match: 80, notes: "Predicts the suspect's next move." },
  { name: "Docker", match: 88, notes: "Containment specialist." },
  { name: "Git", match: 99, notes: "Tracks every footprint." },
];

function Lab() {
  return (
    <NoirShell>
      <section className="px-4 max-w-6xl mx-auto magnify-cursor">
        <header className="text-center mb-10">
          <p className="typewriter text-noir-gold tracking-[0.5em] text-xs">SECTION III</p>
          <h1 className="headline-serif text-5xl md:text-6xl mt-2">Fingerprint Lab</h1>
          <p className="typewriter text-noir-gold/60 mt-3 text-sm">// FORENSIC ANALYSIS — HOVER TO MAGNIFY</p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="relative bg-noir-charcoal border border-noir-gold/30 p-5 overflow-hidden group"
            >
              <div className="scan-line" />
              <div className="absolute top-2 right-2 typewriter text-[9px] text-noir-gold/60 tracking-widest">
                EVIDENCE #{String(i + 1).padStart(3, "0")}
              </div>

              {/* Fingerprint */}
              <div className="flex items-start gap-4">
                <svg viewBox="0 0 64 64" className="w-14 h-14 text-noir-gold flex-shrink-0">
                  <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                    <path d="M32 8 C18 8 12 20 12 32 C12 44 16 52 18 56" />
                    <path d="M32 14 C22 14 18 22 18 32 C18 44 22 50 24 54" />
                    <path d="M32 20 C26 20 24 26 24 32 C24 40 26 46 28 52" />
                    <path d="M32 26 C30 26 30 30 30 34 C30 42 32 48 32 50" />
                    <path d="M32 8 C46 8 52 20 52 32 C52 44 48 52 46 56" />
                    <path d="M32 14 C42 14 46 22 46 32 C46 44 42 50 40 54" />
                    <path d="M32 20 C38 20 40 26 40 32 C40 40 38 46 36 52" />
                  </g>
                </svg>
                <div className="flex-1">
                  <h3 className="typewriter text-noir-paper text-lg tracking-wide">{s.name}</h3>
                  <p className="typewriter text-[10px] text-noir-gold/70 tracking-widest mt-1">
                    MATCH: {s.match}%
                  </p>
                </div>
              </div>

              {/* Evidence bar */}
              <div className="mt-4 h-2 bg-black/60 border border-noir-gold/30 relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.match}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.06 }}
                  className="h-full bg-gradient-to-r from-noir-blood via-noir-gold to-noir-gold"
                />
              </div>

              <p className="handwritten text-noir-gold/90 mt-3 text-lg leading-tight opacity-0 group-hover:opacity-100 transition">
                {s.notes}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </NoirShell>
  );
}
