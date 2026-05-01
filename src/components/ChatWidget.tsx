import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Phone, Minus, Maximize2, Minimize2, Sparkles } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string; ts: number };

const WHATSAPP_URL = "https://wa.me/918057153092?text=Hi%20Krizal%20World%2C%20I%27d%20like%20to%20discuss%20a%20project.";

const QUICK_REPLIES = [
  "What services do you offer?",
  "Pricing details",
  "Show your work",
  "Book a call",
];

function formatTime(ts: number) {
  const d = new Date(ts);
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content: "Hi! I'm Krizal Bot 👋\nHow can I help you today? Ask about our services, pricing, or hop on WhatsApp for a quick chat.",
      ts: Date.now(),
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, loading]);

  useEffect(() => {
    if (open) {
      setShowBadge(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  async function send(textOverride?: string) {
    const text = (textOverride ?? input).trim();
    if (!text || loading) return;
    const userMsg: Msg = { role: "user", content: text, ts: Date.now() };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: next.map(({ role, content }) => ({ role, content })) }),
      });

      if (!resp.ok || !resp.body) {
        const fallback =
          resp.status === 429
            ? "Too many requests right now. Please try again in a moment."
            : resp.status === 402
            ? "I'm temporarily offline. Please reach us on WhatsApp +91 8057153092."
            : "Sorry, something went wrong. Please try WhatsApp or email.";
        setMessages((m) => [...m, { role: "assistant", content: fallback, ts: Date.now() }]);
        setLoading(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      let assistant = "";
      let done = false;
      setMessages((m) => [...m, { role: "assistant", content: "", ts: Date.now() }]);

      while (!done) {
        const { value, done: d } = await reader.read();
        if (d) break;
        buf += decoder.decode(value, { stream: true });
        let idx: number;
        while ((idx = buf.indexOf("\n")) !== -1) {
          let line = buf.slice(0, idx);
          buf = buf.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") { done = true; break; }
          try {
            const parsed = JSON.parse(json);
            const c = parsed.choices?.[0]?.delta?.content;
            if (c) {
              assistant += c;
              setMessages((m) => m.map((msg, i) => i === m.length - 1 ? { ...msg, content: assistant } : msg));
            }
          } catch {
            buf = line + "\n" + buf;
            break;
          }
        }
      }
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "Connection issue. Please try WhatsApp +91 8057153092.", ts: Date.now() }]);
    } finally {
      setLoading(false);
    }
  }

  const showQuickReplies = messages.length <= 1 && !loading;

  return (
    <>
      {/* Floating action buttons */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 items-end">
        {/* WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-transform duration-200"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" style={{ animationDelay: "0.6s" }} />
          <svg viewBox="0 0 32 32" className="h-7 w-7 relative z-10 drop-shadow-sm" fill="currentColor">
            <path d="M19.11 17.21c-.27-.13-1.59-.78-1.84-.87-.25-.09-.43-.13-.61.13-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.16-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.83.14.18 1.93 2.95 4.69 4.13.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.59-.65 1.81-1.27.22-.62.22-1.16.16-1.27-.07-.11-.25-.18-.52-.32zM16 4C9.37 4 4 9.37 4 16c0 2.06.53 4.05 1.54 5.81L4 28l6.34-1.66A11.93 11.93 0 0 0 16 28c6.63 0 12-5.37 12-12S22.63 4 16 4z"/>
          </svg>
        </a>

        {/* Chat toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close chat" : "Open chat"}
          className="group relative h-14 w-14 rounded-full text-background flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:scale-110 active:scale-95 transition-transform duration-200 overflow-hidden"
          style={{ background: "linear-gradient(135deg, oklch(0.18 0.02 260), oklch(0.35 0.12 260))" }}
        >
          <div className="absolute inset-0 animate-gradient" style={{ background: "linear-gradient(135deg, oklch(0.18 0.02 260), oklch(0.45 0.18 255), oklch(0.18 0.02 260))" }} />
          <div className="relative z-10 transition-transform duration-300" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
            {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </div>
          {showBadge && !open && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#25D366] text-white text-[11px] font-bold flex items-center justify-center border-2 border-background animate-bounce">
              1
            </span>
          )}
        </button>
      </div>

      {/* Chat panel */}
      {open && (
        <div
          className={`fixed z-50 bg-surface border border-border shadow-[0_20px_60px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden animate-slide-up-bounce backdrop-blur-xl transition-all duration-300 ${
            expanded
              ? "inset-4 md:inset-10 rounded-3xl"
              : "bottom-24 right-5 w-[calc(100vw-2.5rem)] max-w-sm h-[70vh] max-h-[600px] rounded-3xl"
          }`}
        >
          {/* Header */}
          <div
            className="relative p-4 text-background overflow-hidden"
            style={{ background: "linear-gradient(135deg, oklch(0.18 0.02 260) 0%, oklch(0.28 0.12 260) 100%)" }}
          >
            <div className="absolute inset-0 opacity-30 animate-gradient" style={{ background: "linear-gradient(135deg, oklch(0.45 0.18 255), transparent, oklch(0.55 0.2 280))" }} />
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#25D366] to-emerald-600 flex items-center justify-center shadow-lg">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#25D366] border-2 border-[oklch(0.18_0.02_260)]" />
                </div>
                <div>
                  <div className="font-semibold text-sm flex items-center gap-1.5">
                    Krizal Bot
                    <span className="text-[10px] font-normal px-1.5 py-0.5 rounded-full bg-white/15 backdrop-blur">AI</span>
                  </div>
                  <div className="text-[11px] opacity-80 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    Online · Replies instantly
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setExpanded((v) => !v)}
                  aria-label={expanded ? "Minimize" : "Expand"}
                  className="hidden md:flex h-8 w-8 rounded-full hover:bg-white/15 items-center justify-center transition"
                >
                  {expanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Minimize chat"
                  className="h-8 w-8 rounded-full hover:bg-white/15 flex items-center justify-center transition"
                >
                  <Minus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-3 flex items-center justify-between gap-2 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur px-3 py-2 text-xs transition group"
            >
              <span className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" />
                Prefer WhatsApp? Tap to chat
              </span>
              <span className="text-[#25D366] group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background to-muted/30"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col gap-1 animate-msg-in ${m.role === "user" ? "items-end" : "items-start"}`}>
                <div className={`flex items-end gap-2 max-w-[88%] ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                  {m.role === "assistant" && (
                    <div className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-[#25D366] to-emerald-600 flex items-center justify-center mb-1">
                      <Sparkles className="h-3 w-3 text-white" />
                    </div>
                  )}
                  <div
                    className={`relative rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap leading-relaxed shadow-sm ${
                      m.role === "user"
                        ? "bg-foreground text-background rounded-br-md"
                        : "bg-surface border border-border text-foreground rounded-bl-md"
                    }`}
                  >
                    {m.content || (loading && i === messages.length - 1 ? (
                      <span className="inline-flex gap-1 items-center py-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-current animate-typing" />
                        <span className="h-1.5 w-1.5 rounded-full bg-current animate-typing" style={{ animationDelay: "0.15s" }} />
                        <span className="h-1.5 w-1.5 rounded-full bg-current animate-typing" style={{ animationDelay: "0.3s" }} />
                      </span>
                    ) : "")}
                  </div>
                </div>
                <span className={`text-[10px] text-muted-foreground px-1 ${m.role === "user" ? "mr-8" : "ml-8"}`}>
                  {formatTime(m.ts)}
                </span>
              </div>
            ))}

            {showQuickReplies && (
              <div className="flex flex-wrap gap-2 pt-2 animate-fade-in">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="text-xs px-3 py-1.5 rounded-full border border-border bg-surface hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200 hover:scale-105"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => { e.preventDefault(); send(); }}
            className="p-3 border-t border-border bg-surface flex gap-2 items-center"
          >
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message…"
                disabled={loading}
                className="w-full rounded-full bg-muted px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition disabled:opacity-50"
              />
            </div>
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="h-10 w-10 rounded-full bg-foreground text-background flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-transform shadow-md"
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
          <div className="px-4 pb-2 text-center text-[10px] text-muted-foreground bg-surface">
            Powered by <span className="font-semibold text-foreground">Krizal AI</span> · Secure & private
          </div>
        </div>
      )}
    </>
  );
}
