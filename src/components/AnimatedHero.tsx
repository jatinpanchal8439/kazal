import hero from "@/assets/hero-ai-globe.jpg";

/**
 * AnimatedHero — pure CSS animation (no external video file).
 * - Floating globe image with continuous bob + rotate
 * - Orbiting accent rings
 * - Pulsing glow
 * Lightweight, GPU-accelerated, no JS animation loop.
 */
export function AnimatedHero() {
  return (
    <div className="relative w-full aspect-square md:aspect-[5/4] rounded-2xl overflow-hidden bg-gradient-to-br from-[oklch(0.95_0.04_280)] via-[oklch(0.97_0.02_260)] to-[oklch(0.92_0.06_255)]">
      {/* animated background blobs */}
      <div className="absolute -top-10 -left-10 h-48 w-48 rounded-full bg-[oklch(0.7_0.18_255/0.35)] blur-3xl animate-blob" />
      <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-[oklch(0.65_0.2_290/0.3)] blur-3xl animate-blob animation-delay-2000" />

      {/* orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[80%] w-[80%] rounded-full border border-[oklch(0.55_0.18_255/0.3)] animate-spin-slow" />
        <div className="absolute h-[60%] w-[60%] rounded-full border border-[oklch(0.55_0.18_255/0.2)] animate-spin-slower" />
      </div>

      {/* hero image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={hero}
          alt="AI hand holding glowing globe — Krizal World"
          width={1024}
          height={896}
          className="w-[78%] h-[78%] object-contain animate-float drop-shadow-2xl"
        />
      </div>

      {/* floating dots */}
      <span className="absolute top-1/4 left-[15%] h-2 w-2 rounded-full bg-brand animate-float-slow" />
      <span className="absolute bottom-1/4 right-[18%] h-3 w-3 rounded-full bg-[oklch(0.7_0.2_290)] animate-float" />
      <span className="absolute top-[18%] right-[22%] h-1.5 w-1.5 rounded-full bg-foreground/60 animate-float-slow" />
    </div>
  );
}
