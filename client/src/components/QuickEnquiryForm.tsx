import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string;

interface QuickEnquiryFormProps {
  subject?: string;
  className?: string;
}

export default function QuickEnquiryForm({
  subject = "Website Enquiry",
  className = "",
}: QuickEnquiryFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsPending(true);
    setError(null);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `[Burke Road Pharmacy] ${subject}`,
          from_name: name,
          email,
          message,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      setError("Network error. Please try again or call us directly.");
    } finally {
      setIsPending(false);
    }
  }

  if (success) {
    return (
      <div className={`rounded-xl p-6 text-center ${className}`} style={{ backgroundColor: "var(--brp-green-50)", border: "1px solid var(--brp-green-100)" }}>
        <CheckCircle className="w-10 h-10 mx-auto mb-3" style={{ color: "var(--brp-green-600)" }} />
        <h3 className="font-bold mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
          Message sent!
        </h3>
        <p className="text-sm" style={{ color: "var(--brp-muted)" }}>
          We'll be in touch within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />

      <div>
        <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--brp-text)" }}>
          Your name
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Smith"
          className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-all focus:ring-2"
          style={{
            borderColor: "var(--brp-green-200)",
            backgroundColor: "white",
            color: "var(--brp-text)",
          }}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--brp-text)" }}>
          Email address
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@example.com"
          className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-all focus:ring-2"
          style={{
            borderColor: "var(--brp-green-200)",
            backgroundColor: "white",
            color: "var(--brp-text)",
          }}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--brp-text)" }}>
          Message
        </label>
        <textarea
          required
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help you?"
          className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-all focus:ring-2 resize-none"
          style={{
            borderColor: "var(--brp-green-200)",
            backgroundColor: "white",
            color: "var(--brp-text)",
          }}
        />
      </div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all text-white disabled:opacity-60"
        style={{ backgroundColor: "var(--brp-green-800)" }}
      >
        {isPending ? (
          <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
        ) : (
          <Send className="w-4 h-4" />
        )}
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
