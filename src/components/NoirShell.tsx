import { EvidenceNav } from "./EvidenceNav";

export function NoirShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="film-grain vignette min-h-screen bg-noir-black text-noir-paper overflow-x-hidden">
      <EvidenceNav />
      <main className="pt-18 sm:pt-24 pb-16 sm:pb-24">{children}</main>
      <footer className="border-t border-noir-blood/30 px-4 sm:px-6 py-6 sm:py-8 typewriter text-[9px] sm:text-xs text-noir-gold/60 text-center tracking-widest leading-relaxed">
        ◆ OFFICIAL CASE RECORD ◆<br className="sm:hidden" /> PROPERTY OF AMNA MUHAMMAD ◆<br className="sm:hidden" /> ALL RIGHTS RESERVED ◆
      </footer>
    </div>
  );
}
