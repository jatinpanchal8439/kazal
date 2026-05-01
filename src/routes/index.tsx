import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AnimatedHero } from "@/components/AnimatedHero";
import branding from "@/assets/branding-mockup.jpg";
import websites from "@/assets/websites-mockup.jpg";
import content3d from "@/assets/content-3d.jpg";
import car from "@/assets/work-car.jpg";
import vr from "@/assets/work-vr.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krizal World — Creative · Tech · AI Solutions" },
      { name: "description", content: "Krizal World is a full-service creative agency blending AI, design, and technology to grow ambitious brands." },
      { property: "og:title", content: "Krizal World — Creative · Tech · AI Solutions" },
      { property: "og:description", content: "We build digital experiences that grow your brand." },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  "Branding", "Digital Products", "Websites", "Development", "Content", "Generative AI",
];

const CLIENT_LOGOS = ["AETHER", "SOLIS", "LUMINA", "AXON", "MODUS", "VERVE", "ORBIT", "NOVA", "PRISM", "FLUX", "NEXUS", "ZENTH"];

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* HERO */}
      <section className="container-x pt-10 md:pt-20 pb-16 md:pb-28">
        <div className="card-soft">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 p-6 md:p-12 items-center">
            <div>
              <span className="pill">Creative · Tech · AI Solutions</span>
              <h1 className="display-xl mt-6">
                We Build Digital<br />Experiences<br />That Grow Your Brand
              </h1>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-contact">Start a project <ArrowRight className="ml-2 h-4 w-4" /></Link>
                <Link to="/work" className="btn-ghost-link">View our work →</Link>
              </div>
            </div>
            <div>
              <AnimatedHero />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO + SERVICES LIST */}
      <section className="container-x pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <p className="text-2xl md:text-3xl leading-snug max-w-xl">
            We build transformative digital experiences for the world's leading brands by blending AI, design and technology.
          </p>
          <div className="card-soft divide-y divide-border/60">
            {SERVICES.map((s) => (
              <Link key={s} to="/services" className="flex items-center justify-between px-5 py-4 hover:bg-muted/40 transition">
                <span className="text-base font-medium">{s}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
            <div className="px-5 py-4 text-right">
              <Link to="/work" className="btn-ghost-link">View all projects →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="container-x pb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="eyebrow">Selected Work</span>
            <h2 className="display-lg mt-3 max-w-2xl">Creating digital products that shape the future.</h2>
          </div>
          <Link to="/work" className="btn-ghost-link hidden md:inline-flex">View all →</Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <article className="card-soft">
            <img src={car} alt="Lumina Systems brand campaign" width={1280} height={720} loading="lazy" className="w-full aspect-[16/10] object-cover" />
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Lumina Systems</h3>
                <p className="text-sm text-muted-foreground">Brand Campaign · 2026</p>
              </div>
              <span className="text-xs text-muted-foreground">Branding</span>
            </div>
          </article>
          <article className="card-soft">
            <img src={vr} alt="Huawei VR Vision case study" width={1024} height={1024} loading="lazy" className="w-full aspect-[16/10] object-cover" />
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Huawei VR Vision</h3>
                <p className="text-sm text-muted-foreground">Spatial UX · 2025</p>
              </div>
              <span className="text-xs text-muted-foreground">Digital Product</span>
            </div>
          </article>
          <article className="card-soft">
            <img src={branding} alt="Cafe branding system" width={1024} height={1024} loading="lazy" className="w-full aspect-[16/10] object-cover" />
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Cafe Mint</h3>
                <p className="text-sm text-muted-foreground">Identity System · 2025</p>
              </div>
              <span className="text-xs text-muted-foreground">Branding</span>
            </div>
          </article>
          <article className="card-soft">
            <img src={websites} alt="SaaS website launch" width={1024} height={1024} loading="lazy" className="w-full aspect-[16/10] object-cover" />
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Vertex SaaS</h3>
                <p className="text-sm text-muted-foreground">Web Platform · 2026</p>
              </div>
              <span className="text-xs text-muted-foreground">Website</span>
            </div>
          </article>
        </div>
      </section>

      {/* CLIENTS STRIP */}
      <section className="container-x pb-20">
        <div className="card-soft p-8 md:p-12">
          <span className="eyebrow">Trusted by ambitious brands</span>
          <div className="mt-6 grid grid-cols-3 md:grid-cols-6 gap-y-6 gap-x-4">
            {CLIENT_LOGOS.map((c) => (
              <div key={c} className="text-sm tracking-[0.18em] text-muted-foreground">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="container-x pb-24">
        <p className="text-2xl md:text-4xl leading-snug max-w-4xl">
          <span className="text-muted-foreground">"</span>
          Krizal World didn't just redesign our brand — they transformed how we communicate our value.
        </p>
        <div className="mt-6 text-sm text-muted-foreground">— Founder, Vanguard Dynamics</div>
      </section>

      {/* CONTENT 3D BANNER */}
      <section className="container-x pb-24">
        <div className="card-soft grid md:grid-cols-2 overflow-hidden">
          <div className="bg-[oklch(0.18_0.04_260)]">
            <img src={content3d} alt="Creative content visualization" width={1024} height={1024} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="eyebrow">Content & Storytelling</span>
            <h3 className="display-lg mt-3">We help brands grow through creative solutions.</h3>
            <p className="mt-4 text-muted-foreground max-w-md">A full-service creative agency offering design, video editing, and digital marketing to help your brand stand out, engage, and scale.</p>
            <div className="mt-6">
              <Link to="/services" className="btn-ghost-link">Explore our services →</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
