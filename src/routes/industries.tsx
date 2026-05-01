import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import fintech from "@/assets/industry-fintech.jpg";
import b2b from "@/assets/industry-b2b.jpg";
import tech from "@/assets/industry-tech.jpg";
import ecom from "@/assets/industry-ecom.jpg";
import healthcare from "@/assets/industry-healthcare.jpg";
import food from "@/assets/industry-food.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Krizal World" },
      { name: "description", content: "We design brands and digital experiences that set new standards across industries." },
      { property: "og:title", content: "Industries — Krizal World" },
      { property: "og:description", content: "Industries we redefine: fintech, b2b, tech, e-commerce, healthcare, F&B." },
    ],
  }),
  component: IndustriesPage,
});

const ITEMS = [
  { name: "Fintech", img: fintech, copy: "We craft fintech products and platforms that redefine how people manage and interact with money. We design apps, dashboards, and digital experiences for finance-based businesses.", bullets: ["Digital Banking", "Payments & Wallets", "Finance Apps", "Investment Platforms", "Payment Flow Design", "Data & Analytics"] },
  { name: "B2B & Enterprise", img: b2b, copy: "We design enterprise software with the clarity of consumer products and the power of scalable systems. We create dashboards, tools, and platforms for business operations.", bullets: ["SaaS Platforms", "Enterprise Dashboards", "CRM Systems", "Internal Tools", "Workflow Systems", "Business Applications"] },
  { name: "Technology & IT", img: tech, copy: "We partner with technology companies to solve complex systems through modern and scalable design. We design websites, apps, and digital platforms for tech businesses.", bullets: ["Software Products", "Web & Mobile Platforms", "Cloud Solutions", "Tech Startups", "Digital Platforms", "Product Systems"] },
  { name: "E-commerce", img: ecom, copy: "We design seamless shopping experiences that increase engagement and drive conversions. We help brands sell better through high-quality visuals and user experience.", bullets: ["Online Stores", "Marketplace Platforms", "Product Pages", "Conversion Funnels", "Brand Stores", "Shopping Interfaces"] },
  { name: "Healthcare", img: healthcare, copy: "We design trusted digital experiences that enhance patient engagement and build credibility for healthcare brands.", bullets: ["Hospitals & Clinics", "Doctors & Specialists", "Medical Campaigns", "Patient Experience Design", "Health Awareness Content", "Branding & Communication"] },
  { name: "Food & Beverage", img: food, copy: "We create visually compelling brand experiences that attract attention, elevate perception, and drive customer engagement for restaurants, premium dining spaces, and hospitality businesses.", bullets: ["Restaurants & Cafes", "Food Brands", "5-Star Hotels & Luxury Dining", "Packaging Design", "Social Media Content", "Promotional Campaigns"] },
];

const MORE = [
  ["Startups & Founders", "Early-stage startups, creators, entrepreneurs, emerging businesses"],
  ["Real Estate", "Property developers, builders, real estate agencies, housing platforms"],
  ["Logistics & Supply Chain", "Delivery services, logistics companies, warehousing and distribution"],
  ["Telecommunications", "Network providers, internet services, communication platforms"],
  ["Mobility & Transportation", "Transport services, automotive businesses, mobility platforms"],
  ["Fashion & Lifestyle", "Clothing brands, lifestyle products, personal care brands"],
];

function IndustriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="container-x pt-10 md:pt-16 pb-16">
        <h1 className="display-xl">Industries We Redefine</h1>
        <p className="mt-6 max-w-xl text-muted-foreground text-lg">
          We design brands and digital experiences that set new standards across industries.
        </p>

        <div className="mt-14 space-y-12">
          {ITEMS.map((it, idx) => (
            <article key={it.name} className={`card-soft grid md:grid-cols-2 ${idx % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <img src={it.img} alt={it.name} width={1024} height={768} loading="lazy" className="w-full h-full aspect-[4/3] md:aspect-auto object-cover" />
              <div className="p-6 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold">{it.name}</h2>
                <p className="mt-3 text-muted-foreground">{it.copy}</p>
                <ul className="mt-5 grid grid-cols-2 gap-y-2 text-sm">
                  {it.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <div className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">Explore {it.name.toLowerCase()} →</div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="display-lg">More industries</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">We partner with brands across diverse industries to create meaningful digital experiences and drive business impact.</p>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {MORE.map(([name, desc]) => (
              <div key={name} className="grid md:grid-cols-3 gap-4 py-5">
                <div className="font-semibold">{name}</div>
                <div className="md:col-span-2 text-sm text-muted-foreground">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
