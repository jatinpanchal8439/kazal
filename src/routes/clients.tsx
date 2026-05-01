import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import vanguard from "@/assets/client-vanguard.jpg";
import ocular from "@/assets/client-ocular.jpg";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients — Krizal World" },
      { name: "description", content: "We collaborate with ambitious companies — from emerging startups to established brands." },
      { property: "og:title", content: "Clients — Krizal World" },
      { property: "og:description", content: "Partnerships built on trust and craft." },
    ],
  }),
  component: ClientsPage,
});

const FEATURED = [
  { name: "Vanguard Dynamics", tag: "Identity & Digital Platform", img: vanguard, year: "2026" },
  { name: "Ocular Systems", tag: "Global Product Launch", img: ocular, year: "2025" },
];

const ROSTER = [
  ["AETHER","TECHNOLOGY"],["SOLIS","ENERGY"],["LUMINA","RETAIL"],["AXON","LOGISTICS"],
  ["MODUS","FINANCE"],["VERVE","FASHION"],["ORBIT","AEROSPACE"],["NOVA","AI STUDIO"],
  ["PRISM","CONSULTING"],["FLUX","WEB3"],["NEXUS","HEALTHCARE"],["ZENTH","ARCHITECTURE"],
];

function ClientsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="container-x pt-10 md:pt-16 pb-16">
        <span className="eyebrow">Partnership & Trust</span>
        <h1 className="display-xl mt-4">Clients</h1>
        <p className="mt-6 max-w-xl text-muted-foreground text-lg">
          We collaborate with ambitious companies — from emerging startups to established brands — to create meaningful digital experiences and impactful creative solutions.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {FEATURED.map((f) => (
            <article key={f.name} className="card-soft">
              <img src={f.img} alt={f.name} width={1024} height={768} loading="lazy" className="w-full aspect-[4/3] object-cover grayscale" />
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{f.name}</h3>
                  <p className="text-sm text-muted-foreground">{f.tag}</p>
                </div>
                <span className="text-xs text-muted-foreground">{f.year}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-10 grid grid-cols-2 md:grid-cols-6 gap-y-8">
          {ROSTER.map(([name, tag]) => (
            <div key={name}>
              <div className="text-sm font-semibold tracking-[0.18em]">{name}</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1">{tag}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl">
          <p className="text-2xl md:text-4xl leading-snug">
            <span className="text-muted-foreground">"</span>
            Krizal World didn't just redesign our brand — they transformed how we communicate our value.
          </p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
