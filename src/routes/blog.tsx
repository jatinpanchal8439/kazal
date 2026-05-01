import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import a from "@/assets/branding-mockup.jpg";
import b from "@/assets/websites-mockup.jpg";
import c from "@/assets/content-3d.jpg";
import d from "@/assets/industry-fintech.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Krizal World" },
      { name: "description", content: "Insights on branding, AI, design and technology from the Krizal World studio." },
      { property: "og:title", content: "Blog — Krizal World" },
      { property: "og:description", content: "Notes from the studio." },
    ],
  }),
  component: BlogPage,
});

const POSTS = [
  { title: "How AI is reshaping brand systems", tag: "AI · Branding", img: a, date: "Apr 2026" },
  { title: "Designing websites that convert", tag: "Web · UX", img: b, date: "Mar 2026" },
  { title: "The new era of 3D content", tag: "Content · Motion", img: c, date: "Feb 2026" },
  { title: "Fintech UX: building trust at scale", tag: "Fintech · Product", img: d, date: "Jan 2026" },
];

function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="container-x pt-10 md:pt-16 pb-16">
        <span className="eyebrow">Notes from the studio</span>
        <h1 className="display-xl mt-4">Blog</h1>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {POSTS.map((p) => (
            <article key={p.title} className="card-soft group cursor-pointer">
              <img src={p.img} alt={p.title} width={1024} height={768} loading="lazy" className="w-full aspect-[16/10] object-cover transition group-hover:scale-[1.01]" />
              <div className="p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{p.tag} · {p.date}</div>
                <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
