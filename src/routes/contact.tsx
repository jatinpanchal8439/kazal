import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Krizal World" },
      { name: "description", content: "Let's talk. Reach Krizal World at krizalworld@gmail.com or +91 8057153092." },
      { property: "og:title", content: "Contact — Krizal World" },
      { property: "og:description", content: "Start a project with Krizal World." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks! We'll get back to you within 24 hours.");
    }, 700);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster />
      <SiteHeader />
      <section className="container-x pt-10 md:pt-16 pb-16">
        <span className="eyebrow">Let's Talk</span>
        <h1 className="display-xl mt-4">Start a project</h1>
        <p className="mt-6 max-w-xl text-muted-foreground text-lg">
          Tell us about your brand, your goals, and your timeline. We reply within one business day.
        </p>

        <div className="mt-14 grid md:grid-cols-[1.2fr_1fr] gap-10">
          <form onSubmit={onSubmit} className="card-soft p-6 md:p-8 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Your name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Company" name="company" />
            <Field label="Budget" name="budget" placeholder="$5k – $25k" />
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Project details</label>
              <textarea name="message" required rows={5}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <button disabled={sending} className="btn-contact disabled:opacity-60">
              {sending ? "Sending…" : "Send inquiry"}
            </button>
          </form>

          <aside className="space-y-6">
            <div className="card-soft p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</div>
              <a href="mailto:krizalworld@gmail.com" className="mt-2 block text-lg font-semibold underline underline-offset-4">krizalworld@gmail.com</a>
            </div>
            <div className="card-soft p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Phone</div>
              <a href="tel:+918057153092" className="mt-2 block text-lg font-semibold">+91 8057153092</a>
            </div>
            <div className="card-soft p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Studio</div>
              <p className="mt-2 text-sm">Remote-first. Working globally with brands across India, EU & US.</p>
            </div>
          </aside>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <input
        type={type} name={name} required={required} placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
