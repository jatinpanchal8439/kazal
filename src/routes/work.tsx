import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import car from "@/assets/work-car.jpg";
import vr from "@/assets/work-vr.jpg";
import branding from "@/assets/branding-mockup.jpg";
import websites from "@/assets/websites-mockup.jpg";
import content3d from "@/assets/content-3d.jpg";
import healthcare from "@/assets/industry-healthcare.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Krizal World" },
      { name: "description", content: "Selected work from Krizal World — branding, websites and digital products that shape the future." },
      { property: "og:title", content: "Work — Krizal World" },
      { property: "og:description", content: "We bring your boldest ideas to life." },
    ],
  }),
  component: WorkPage,
});

const FILTERS = [
  { label: "All Work", count: 25, active: true },
  { label: "Digital Products", count: 10 },
  { label: "Websites", count: 8 },
  { label: "Branding", count: 10 },
];

const PROJECTS = [
  { title: "Lumina Systems", tag: "Brand Campaign", img: car, big: true },
  { title: "Jaipur Cardiac Centre", tag: "Digital Product / UX Strategy", img: healthcare },
  { title: "Gruhashree", tag: "Operating System / Interface Design", img: vr },
  { title: "Cafe Mint", tag: "Identity / Branding", img: branding },
  { title: "Vertex SaaS", tag: "Website / Platform", img: websites },
  { title: "Nexus Analytics", tag: "Brand & Identity", img: content3d },
];

function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="container-x pt-10 md:pt-16 pb-16">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <h1 className="display-xl">We bring your<br />boldest ideas to life</h1>
          <ul className="space-y-2 md:text-right">
            {FILTERS.map((f) => (
              <li key={f.label} className={f.active ? "font-semibold" : "text-muted-foreground"}>
                {f.active && <span className="mr-2">•</span>}
                {f.label} <span className="text-xs align-top ml-1">{f.count}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid gap-6">
          <article className="card-soft">
            <img src={PROJECTS[0].img} alt={PROJECTS[0].title} width={1280} height={720} className="w-full aspect-[21/9] object-cover" />
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{PROJECTS[0].title}</h3>
                <p className="text-sm text-muted-foreground">{PROJECTS[0].tag}</p>
              </div>
              <span className="text-xs text-muted-foreground">2026</span>
            </div>
          </article>

          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.slice(1).map((p) => (
              <article key={p.title} className="card-soft">
                <img src={p.img} alt={p.title} width={1024} height={768} loading="lazy" className="w-full aspect-[4/3] object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.tag}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-[oklch(0.22_0.02_260)] text-white p-8 md:p-12">
          <h3 className="display-lg">Archive</h3>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-6 text-sm text-white/80">
            {["Adidas","Apple","Audi","BMW","Canon","Disney","Fujifilm","Google","Hermès","Huawei","IBM","Lexus","Mercedes","Nike","Porsche","Sony","Tesla","Volvo"].map((b) => (
              <div key={b}>{b}</div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium">Start a project</Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
