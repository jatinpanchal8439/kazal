import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/krizal-logo.jpg";

const NAV = [
  { to: "/work", label: "Work" },
  { to: "/clients", label: "Clients" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border/60">
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={logo} alt="Krizal World logo" width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
          <div className="leading-tight">
            <div className="text-[15px] font-bold tracking-wide">KRIZAL WORLD</div>
            <div className="text-[10px] text-muted-foreground tracking-[0.18em] uppercase">Creative · Tech · AI</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-foreground underline underline-offset-8 decoration-2" }}
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/contact" className="btn-contact">Contact</Link>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="container-x py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-contact w-fit mt-2">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
