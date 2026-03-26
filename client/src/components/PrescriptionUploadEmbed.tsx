/**
 * PrescriptionUploadEmbed
 *
 * Renders the Burke Road Rx upload form as an embedded iframe.
 * Use this component anywhere a prescription upload CTA is required —
 * condition detail pages, article sidebars, the dedicated upload page, etc.
 *
 * The iframe source is https://burkerx.lovable.app
 */

const EMBED_URL = "https://burkerx.lovable.app";

interface PrescriptionUploadEmbedProps {
  /** Optional additional className for the wrapper div */
  className?: string;
  /**
   * Height of the iframe. Defaults to "700px".
   * Pass "auto" to use a fixed minimum that scrolls internally.
   */
  height?: string;
  /** Whether to show the section heading above the iframe */
  showHeading?: boolean;
}

export default function PrescriptionUploadEmbed({
  className = "",
  height = "700px",
  showHeading = true,
}: PrescriptionUploadEmbedProps) {
  return (
    <div className={`w-full ${className}`}>
      {showHeading && (
        <div className="mb-6">
          <h2
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}
          >
            Upload Your Prescription
          </h2>
          <p className="text-sm" style={{ color: "var(--brp-muted)" }}>
            Send your prescription securely online. Our pharmacists will review it and
            contact you to confirm your order.
          </p>
        </div>
      )}
      <div
        className="w-full rounded-2xl overflow-hidden"
        style={{
          minHeight: height,
          border: "1px solid #e0e8e2",
          boxShadow: "0 4px 24px rgba(26,58,46,0.10), 0 1px 4px rgba(26,58,46,0.06)",
        }}
      >
        <iframe
          src={EMBED_URL}
          title="Upload Your Prescription — Burke Road Compounding Pharmacy"
          width="100%"
          height={height}
          style={{ border: 0, display: "block", minHeight: height }}
          allow="camera; microphone; clipboard-write"
          loading="lazy"
        />
      </div>
      <div className="mt-3 flex items-center justify-center gap-2">
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "var(--brp-green-600)" }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <p className="text-xs" style={{ color: "var(--brp-muted)" }}>
          Transmitted securely · Privacy Act 1988 compliant · Australian pharmacy standards
        </p>
      </div>
    </div>
  );
}
