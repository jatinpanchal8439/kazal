import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Krizal World" },
      { name: "description", content: "Krizal World is a creative, tech and AI studio building digital experiences that grow brands." },
      { property: "og:title", content: "About — Krizal World" },
      { property: "og:description", content: "We help brands grow through creative solutions." },
    ],
  }),
  component: AboutPage,
});

const FAQS = [
  { q: "What services does Krizal World offer?", a: "We offer branding, digital product design, website design & development, content creation, motion & video, and AI-driven creative solutions." },
  { q: "How can I start a project with you?", a: "Reach out via the contact page or email krizalworld@gmail.com. We'll set up a discovery call within 48 hours." },
  { q: "What industries do you work with?", a: "Fintech, B2B SaaS, technology, e-commerce, healthcare, F&B, real estate, mobility, and more." },
  { q: "What is your pricing?", a: "Projects are scoped individually based on goals, timeline and complexity. Typical engagements start from $5k." },
  { q: "Do you work with clients outside India?", a: "Yes — we work with brands globally, fully remote with regular video sync." },
];

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="container-x pt-10 md:pt-16 pb-16">
        <h1 className="display-xl max-w-4xl">We help brands grow through creative solutions</h1>
        <p className="mt-6 max-w-2xl text-muted-foreground text-lg">
          A full-service creative agency offering design, video editing, and digital marketing to help your brand stand out, engage and scale.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { k: "Founded", v: "2024" },
            { k: "Projects delivered", v: "120+" },
            { k: "Industries", v: "12+" },
          ].map((s) => (
            <div key={s.k} className="card-soft p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.k}</div>
              <div className="mt-2 text-3xl font-bold">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-[oklch(0.18_0.04_260)] text-white p-8 md:p-12">
          <h2 className="display-lg">FAQ.</h2>
          <div className="mt-8 divide-y divide-white/10">
            {FAQS.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-4">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between text-left">
        <span className="text-base md:text-lg">{q}</span>
        <ChevronDown className={`h-5 w-5 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="mt-3 text-sm text-white/70 max-w-3xl">{a}</p>}
    </div>
  );
}
