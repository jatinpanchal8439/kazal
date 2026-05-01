import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="container-x pb-10">
      <div className="relative overflow-hidden rounded-3xl bg-[oklch(0.22_0.02_260)] text-white p-8 md:p-14">
        <div
          aria-hidden
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(600px 200px at 0% 100%, oklch(0.6 0.2 255 / 0.6), transparent), radial-gradient(800px 300px at 100% 0%, oklch(0.5 0.15 280 / 0.4), transparent)",
          }}
        />
        <div className="relative grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="display-lg">Let's Talk</h2>
            <a href="mailto:krizalworld@gmail.com" className="block mt-6 text-base underline underline-offset-4">
              krizalworld@gmail.com
            </a>
            <p className="mt-1 text-base text-white/80">+91 8057153092</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:justify-end md:text-right text-sm">
            <div className="flex flex-col gap-2.5">
              <Link to="/work" className="text-white/80 hover:text-white">Work</Link>
              <Link to="/services" className="text-white/80 hover:text-white">Services</Link>
              <Link to="/about" className="text-white/80 hover:text-white">About</Link>
              <Link to="/contact" className="text-white/80 hover:text-white">Contact</Link>
            </div>
            <div className="flex flex-col gap-2.5">
              <Link to="/clients" className="text-white/80 hover:text-white">Clients</Link>
              <Link to="/industries" className="text-white/80 hover:text-white">Industries</Link>
              <Link to="/blog" className="text-white/80 hover:text-white">Blog</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 pt-6 text-xs text-muted-foreground">
        <div className="flex gap-5">
          <a href="#" className="hover:text-foreground">Instagram</a>
          <a href="#" className="hover:text-foreground">Twitter</a>
          <a href="#" className="hover:text-foreground">LinkedIn</a>
          <a href="#" className="hover:text-foreground">Dribbble</a>
        </div>
        <div>© 2026 Krizal World. All rights reserved.</div>
      </div>
    </footer>
  );
}
