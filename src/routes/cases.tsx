import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { NoirShell } from "@/components/NoirShell";

export const Route = createFileRoute("/cases")({
  component: Cases,
  head: () => ({
    meta: [
      { title: "Case Files | The Detective" },
      { name: "description", content: "Manila folders of solved, ongoing, and cold cases." },
    ],
  }),
});

type Status = "SOLVED" | "ONGOING" | "COLD";
type CaseT = {
  id: string; title: string; status: Status;
  summary: string; stack: string[]; repo: string; demo: string; notes: string;
};

const cases: CaseT[] = [
  {
    id: "001", title: "The Vanishing Conversion Rate",
    status: "SOLVED",
    summary: "A storefront's checkout was leaking customers. Traced the bleed to a third-party script asphyxiating the main thread.",
    stack: ["Next.js", "TypeScript", "Stripe", "PostHog"],
    repo: "github.com/detective/case-001", demo: "case001.live",
    notes: "Suspect: an analytics tag from 2019. Confessed under load-testing.",
  },
  {
    id: "002", title: "The Phantom Memory Leak",
    status: "SOLVED",
    summary: "A Node service swelled past 4GB nightly. Heap snapshots revealed an event emitter with no off-switch.",
    stack: ["Node.js", "Express", "Redis", "Grafana"],
    repo: "github.com/detective/case-002", demo: "monitor.case002.dev",
    notes: "Memory recovered in full. No civilians harmed.",
  },
  {
    id: "003", title: "The Disappearing Database Row",
    status: "ONGOING",
    summary: "Records are being deleted by a process that, according to all logs, does not exist.",
    stack: ["Postgres", "Python", "FastAPI"],
    repo: "github.com/detective/case-003", demo: "—",
    notes: "Currently surveilling cron jobs at 03:17 AM nightly.",
  },
  {
    id: "004", title: "The Forgery in the Token Mint",
    status: "SOLVED",
    summary: "A counterfeit JWT slipped past validation. Re-keyed the signing chain and rotated every credential.",
    stack: ["Go", "OAuth", "Vault"],
    repo: "github.com/detective/case-004", demo: "auth.case004.io",
    notes: "Perpetrator: a leaked .env from a contractor's gist.",
  },
  {
    id: "005", title: "The Silent CSS Saboteur",
    status: "ONGOING",
    summary: "Pixel-perfect on desktop, mayhem on Safari iOS 14. Investigation in progress.",
    stack: ["React", "Tailwind", "BrowserStack"],
    repo: "github.com/detective/case-005", demo: "preview.case005.app",
    notes: "Prime suspect: a flexbox gap with an alibi.",
  },
  {
    id: "006", title: "The 2017 Microservice That Won't Die",
    status: "COLD",
    summary: "A Java 8 service deployed by a long-departed engineer still serves 11k req/min. Touching it is forbidden.",
    stack: ["Java", "Kubernetes", "Kafka"],
    repo: "—", demo: "—",
    notes: "Status: archived. Lit a candle.",
  },
];

const stampColor = (s: Status) =>
  s === "SOLVED" ? "text-emerald-700 border-emerald-700"
  : s === "ONGOING" ? "text-amber-700 border-amber-700"
  : "text-red-900 border-red-900";

function Cases() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <NoirShell>
      <section className="px-4 max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <p className="typewriter text-noir-gold tracking-[0.5em] text-xs">SECTION IV</p>
          <h1 className="headline-serif text-3xl sm:text-5xl md:text-6xl mt-2">Case Files</h1>
          <p className="typewriter text-noir-gold/60 mt-3 text-sm">// CLICK A FOLDER TO OPEN</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cases.map((c, i) => (
            <motion.button
              key={c.id}
              type="button"
              onClick={() => setOpen(c.id)}
              initial={{ opacity: 0, y: 40, rotate: (i % 2 ? -2 : 2) }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
              transition={{ delay: i * 0.05 }}
              className="manila relative p-4 sm:p-5 text-left sm:aspect-[4/3] flex flex-col"
            >
              {/* folder tab */}
              <span className="absolute -top-3 left-6 bg-[#c8a96b] border-2 border-noir-ink/30 px-4 py-1 typewriter text-[10px] tracking-widest text-noir-ink">
                CASE №{c.id}
              </span>
              <div className={`stamp ${stampColor(c.status)} self-end text-xs`}>
                {c.status}
              </div>
              <h3 className="headline-serif text-xl sm:text-2xl text-noir-ink mt-3 leading-tight">
                {c.title}
              </h3>
              <p className="typewriter text-xs text-noir-ink/80 mt-2 line-clamp-3">
                {c.summary}
              </p>
              <div className="mt-auto flex flex-wrap gap-1">
                {c.stack.slice(0, 3).map((t) => (
                  <span key={t} className="typewriter text-[9px] bg-noir-ink/80 text-noir-paper px-2 py-0.5 tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
              <span className="absolute bottom-3 right-3 typewriter text-[10px] text-noir-ink/60 tracking-widest">
                ▸ OPEN
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {open && (() => {
          const c = cases.find((x) => x.id === open)!;
          return (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-sm flex items-start sm:items-center justify-center p-3 sm:p-4 overflow-y-auto"
              onClick={() => setOpen(null)}
            >
              <motion.div
                initial={{ scale: 0.85, rotate: -3, opacity: 0 }}
                animate={{ scale: 1, rotate: -0.5, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 16 }}
                onClick={(e) => e.stopPropagation()}
                className="paper relative w-full max-w-3xl p-5 sm:p-8 my-6 sm:my-12"
              >
                <div className="tape absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-7" />
                <button
                  onClick={() => setOpen(null)}
                  className="absolute top-2 right-3 typewriter text-noir-ink hover:text-noir-blood text-2xl"
                  aria-label="Close"
                >✕</button>

                <div className="flex justify-between items-start border-b-2 border-noir-ink/30 pb-3">
                  <div>
                    <p className="typewriter text-[10px] tracking-widest">CASE №{c.id}</p>
                    <h2 className="headline-serif text-2xl sm:text-4xl mt-1">{c.title}</h2>
                  </div>
                  <div className={`stamp ${stampColor(c.status)} text-sm`}>{c.status}</div>
                </div>

                {/* fanned "polaroids" */}
                <div className="relative h-32 sm:h-48 my-4 sm:my-6">
                  {[0, 1, 2].map((k) => (
                    <motion.div
                      key={k}
                      initial={{ rotate: 0, x: 0, opacity: 0 }}
                      animate={{ rotate: (k - 1) * 8, x: (k - 1) * 70, opacity: 1 }}
                      transition={{ delay: 0.15 + k * 0.1 }}
                      className="absolute left-1/2 top-2 -translate-x-1/2 w-28 sm:w-40 bg-white p-1.5 sm:p-2 pb-4 sm:pb-6 shadow-xl"
                    >
                      <div className="w-full h-20 sm:h-28 bg-gradient-to-br from-zinc-700 via-zinc-900 to-black" />
                      <p className="handwritten text-noir-ink text-sm mt-1 text-center">exhibit {String.fromCharCode(65 + k)}</p>
                    </motion.div>
                  ))}
                </div>

                <p className="typewriter text-noir-ink leading-relaxed">{c.summary}</p>
                <p className="handwritten text-noir-blood text-xl mt-3">— {c.notes}</p>

                <div className="mt-5">
                  <p className="typewriter text-[10px] tracking-widest text-noir-ink/70 mb-2">EVIDENCE TAGS</p>
                  <div className="flex flex-wrap gap-2">
                    {c.stack.map((t) => (
                      <span key={t} className="typewriter text-[10px] bg-noir-ink text-noir-paper px-2.5 py-1 tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 border-t-2 border-noir-ink/30 pt-4">
                  <a href={`https://${c.repo}`} className="typewriter bg-noir-black text-noir-paper px-4 py-2 text-xs tracking-widest hover:bg-noir-blood transition">
                    🔍 CRIME SCENE REPORT
                  </a>
                  <a href={`https://${c.demo}`} className="typewriter border-2 border-noir-ink px-4 py-2 text-xs tracking-widest hover:bg-noir-ink hover:text-noir-paper transition">
                    📺 SURVEILLANCE FEED
                  </a>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </NoirShell>
  );
}
