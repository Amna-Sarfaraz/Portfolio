import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { NoirShell } from "@/components/NoirShell";
import { Typewriter } from "@/components/Typewriter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Case Opens | The Detective" },
      { name: "description", content: "A problem has been reported. The suspect: complex software. Enter the case." },
    ],
  }),
});

function Index() {
  const [opened, setOpened] = useState(false);
  return (
    <NoirShell>
      <section className="relative min-h-[88vh] flex items-center justify-center px-4">
        {/* Rain behind */}
        <div className="rain" />
        {/* Desk lamp glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="lamp-glow"
        />
        <div className="relative z-10 max-w-3xl text-center space-y-10">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="typewriter tracking-[0.5em] text-noir-gold text-xs"
          >
            FILE No. 0451 — CONFIDENTIAL
          </motion.p>

          <Typewriter
            lines={[
              "A problem has been reported.",
              "The suspect: complex software.",
              "The detective: J. MORENO.",
            ]}
            startDelay={1200}
            onDone={() => setOpened(true)}
          />

          <motion.div
            initial={{ y: 80, opacity: 0, rotate: -2 }}
            animate={opened ? { y: 0, opacity: 1, rotate: -1 } : {}}
            transition={{ type: "spring", stiffness: 60, damping: 14 }}
            className="manila mx-auto max-w-md p-6 text-left"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-12 tape w-24 h-6" />
            <div className="border-b-2 border-noir-blood/40 pb-2 mb-3 flex items-center justify-between">
              <span className="typewriter text-[10px] tracking-widest">CASE FILE</span>
              <span className="typewriter text-[10px] tracking-widest">EYES ONLY</span>
            </div>
            <h1 className="headline-serif text-3xl md:text-4xl font-black leading-tight text-noir-ink">
              The Mystery of the<br/>Misbehaving Machine
            </h1>
            <p className="handwritten text-2xl text-noir-blood mt-3">
              — files attached, proceed with caution.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/cases" className="typewriter bg-noir-black text-noir-paper px-5 py-2 text-xs tracking-widest hover:bg-noir-blood transition">
                OPEN CASE FILES →
              </Link>
              <Link to="/lab" className="typewriter border-2 border-noir-ink px-5 py-2 text-xs tracking-widest hover:bg-noir-ink hover:text-noir-paper transition">
                VIEW EVIDENCE
              </Link>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={opened ? { opacity: 0.6 } : {}}
            transition={{ delay: 0.6 }}
            className="typewriter text-[10px] tracking-[0.4em] text-noir-gold"
          >
            ▼ SCROLL TO DESCEND ▼
          </motion.p>
        </div>
      </section>
    </NoirShell>
  );
}
