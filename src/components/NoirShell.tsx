import { EvidenceNav } from "./EvidenceNav";

export function NoirShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="film-grain vignette min-h-screen bg-noir-black text-noir-paper overflow-x-hidden">
      <EvidenceNav />
      <main className="pt-24 pb-24">{children}</main>
      <footer className="border-t border-noir-blood/30 px-6 py-8 typewriter text-xs text-noir-gold/60 text-center tracking-widest">
        ◆ OFFICIAL CASE RECORD ◆ PROPERTY OF AMNA MUHAMMAD ◆ ALL RIGHTS RESERVED ◆
      </footer>
    </div>
  );
}
