import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import branding from "@/assets/branding-mockup.jpg";
import websites from "@/assets/websites-mockup.jpg";
import content from "@/assets/content-3d.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Krizal World" },
      { name: "description", content: "Branding, digital products, websites, content and AI services from Krizal World." },
      { property: "og:title", content: "Services — Krizal World" },
      { property: "og:description", content: "A full-service digital innovation partner." },
    ],
  }),
  component: ServicesPage,
});

const SECTIONS = [
  {
    title: "Branding",
    img: branding,
    intro: "We build powerful and memorable brand identities that help businesses stand out and grow. Our approach combines strategy, creativity and consistency to create a strong brand presence across every touchpoint.",
    items: [
      "Brand Strategy & Positioning",
      "Logo & Visual Identity Design",
      "Complete Brand Identity Systems",
      "Brand Voice & Messaging",
      "Brand Guidelines & Assets",
      "Brand Experience & Consistency",
    ],
  },
  {
    title: "Digital Products",
    img: websites,
    intro: "We create modern, user-friendly digital products that help businesses grow online. Our focus is on clean design, smooth performance, and real results.",
    items: [
      "Software & App Development",
      "Website Design & Development",
      "UI Design (Web & Mobile)",
      "Graphic & Visual Design",
      "Motion & Video Editing",
      "Design Systems & Branding",
    ],
  },
  {
    title: "Websites",
    img: websites,
    intro: "We design and develop modern, high-performing websites that help your brand stand out online. Our focus is on clean design, fast performance, and seamless user experience.",
    items: [
      "Website Strategy & Planning",
      "Custom Web Design",
      "Responsive Design (Mobile-Friendly)",
      "UI Design for Websites",
      "Frontend & Backend Development",
      "CMS Integration (WordPress, etc.)",
    ],
  },
  {
    title: "Content",
    img: content,
    intro: "We create high-quality, engaging content that captures attention and builds strong brand presence. From creative direction to final execution, we design content that is not just beautiful — but also effective.",
    items: [
      "Creative Direction & Concept Development",
      "Graphic Design & Visual Content",
      "Illustrations & Custom Graphics",
      "Social Media Content Design",
      "Video Editing & Motion Graphics",
      "3D Design, Animation & Project Visualization",
    ],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="container-x pt-10 md:pt-16 pb-16">
        <h1 className="display-xl max-w-4xl">A full-service digital innovation partner</h1>
        <p className="mt-6 max-w-xl text-muted-foreground text-lg">
          Our rich design and technology expertise delivers top brands and digital experiences.
        </p>

        <div className="mt-16 space-y-20">
          {SECTIONS.map((s, idx) => (
            <div key={s.title} className={`grid md:grid-cols-2 gap-10 items-center ${idx % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <h2 className="display-lg">{s.title}</h2>
                <p className="mt-5 text-muted-foreground">{s.intro}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.items.map((i) => (
                    <li key={i} className="text-sm font-medium">{i}</li>
                  ))}
                </ul>
              </div>
              <div className="card-soft">
                <img src={s.img} alt={s.title} width={1024} height={1024} loading="lazy" className="w-full aspect-square object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
