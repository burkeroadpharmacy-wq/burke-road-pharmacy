import { useState } from "react";
import { Upload, CheckCircle, Phone, Clock, Shield, FileText } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { BUSINESS } from "@/config/business";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string;

export default function UploadPrescription() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsPending(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_KEY);
      formData.append("subject", "[Burke Road Pharmacy] New Prescription Upload");
      formData.append("from_name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("notes", notes || "No additional notes");
      if (file) formData.append("attachment", file);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
      } else {
        setError("Something went wrong. Please try again or call us on " + BUSINESS.phone.landline);
      }
    } catch {
      setError("Network error. Please call us on " + BUSINESS.phone.landline);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <>
      <SEO
        title="Upload Your Prescription"
        description="Upload your prescription securely to Burke Road Compounding Pharmacy. We'll prepare your medication for pickup or Australia-wide delivery."
        canonical="/upload-prescription"
      />

      {/* Hero */}
      <section className="py-16" style={{ backgroundColor: "var(--brp-green-800)" }}>
        <div className="container">
          <Breadcrumb items={[{ label: "Upload Prescription" }]} />
          <div className="max-w-2xl mt-4">
            <div className="brp-badge mb-4" style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "var(--brp-brass-300)", borderColor: "rgba(201,169,110,0.3)" }}>
              Prescription Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Upload your prescription
            </h1>
            <p className="text-white/80 text-lg">
              Send us your prescription securely online. We'll prepare your medication
              and contact you when it's ready for pickup or delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Form */}
            <div className="lg:col-span-2">
              {success ? (
                <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: "var(--brp-green-50)", border: "1px solid var(--brp-green-100)" }}>
                  <CheckCircle className="w-14 h-14 mx-auto mb-4" style={{ color: "var(--brp-green-600)" }} />
                  <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                    Prescription received!
                  </h2>
                  <p className="mb-2" style={{ color: "var(--brp-muted)" }}>
                    Thank you, {name}. We've received your prescription and will be in touch
                    within 1 business day to confirm your order.
                  </p>
                  <p className="text-sm" style={{ color: "var(--brp-muted)" }}>
                    If you need to speak with us urgently, call{" "}
                    <a href={`tel:${BUSINESS.phone.landlineE164}`} className="font-semibold underline" style={{ color: "var(--brp-green-700)" }}>
                      {BUSINESS.phone.landline}
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                    Your details
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--brp-text)" }}>Full name *</label>
                      <input
                        type="text" required value={name} onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none"
                        style={{ borderColor: "var(--brp-green-200)", color: "var(--brp-text)" }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--brp-text)" }}>Phone number *</label>
                      <input
                        type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)}
                        placeholder="04xx xxx xxx"
                        className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none"
                        style={{ borderColor: "var(--brp-green-200)", color: "var(--brp-text)" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--brp-text)" }}>Email address *</label>
                    <input
                      type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none"
                      style={{ borderColor: "var(--brp-green-200)", color: "var(--brp-text)" }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--brp-text)" }}>
                      Prescription file <span className="font-normal" style={{ color: "var(--brp-muted)" }}>(photo, scan, or PDF)</span>
                    </label>
                    <div
                      className="border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors"
                      style={{ borderColor: file ? "var(--brp-green-400)" : "var(--brp-green-200)", backgroundColor: file ? "var(--brp-green-50)" : "white" }}
                      onClick={() => document.getElementById("rx-file")?.click()}
                    >
                      {file ? (
                        <div className="flex items-center justify-center gap-3">
                          <FileText className="w-6 h-6" style={{ color: "var(--brp-green-600)" }} />
                          <span className="text-sm font-medium" style={{ color: "var(--brp-green-700)" }}>{file.name}</span>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-8 h-8 mx-auto mb-2" style={{ color: "var(--brp-muted)" }} />
                          <p className="text-sm" style={{ color: "var(--brp-muted)" }}>
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs mt-1" style={{ color: "var(--brp-muted)" }}>
                            JPG, PNG, PDF up to 10MB
                          </p>
                        </>
                      )}
                      <input
                        id="rx-file"
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf,.heic"
                        className="hidden"
                        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--brp-text)" }}>
                      Additional notes <span className="font-normal" style={{ color: "var(--brp-muted)" }}>(optional)</span>
                    </label>
                    <textarea
                      rows={3} value={notes} onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. delivery required, specific flavour preference, previous formulation details..."
                      className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none resize-none"
                      style={{ borderColor: "var(--brp-green-200)", color: "var(--brp-text)" }}
                    />
                  </div>

                  {error && <p className="text-sm text-red-600">{error}</p>}

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 font-bold rounded-xl transition-all text-white disabled:opacity-60"
                    style={{ backgroundColor: "var(--brp-green-800)" }}
                  >
                    {isPending ? (
                      <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    ) : (
                      <Upload className="w-5 h-5" />
                    )}
                    {isPending ? "Sending..." : "Submit Prescription"}
                  </button>

                  <p className="text-xs text-center" style={{ color: "var(--brp-muted)" }}>
                    Your information is transmitted securely. We will never share your health information with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar info */}
            <div className="space-y-6">
              <div className="brp-card p-6">
                <h3 className="font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                  What happens next?
                </h3>
                <ol className="space-y-3">
                  {[
                    "We receive your prescription and verify it",
                    "Our pharmacist reviews and prepares your medication",
                    "We contact you to confirm pickup or delivery",
                    "Your medication is ready — usually within 1–2 business days",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm" style={{ color: "#374151" }}>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ backgroundColor: "var(--brp-green-800)" }}>
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="brp-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5" style={{ color: "var(--brp-green-700)" }} />
                  <h3 className="font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                    Privacy & security
                  </h3>
                </div>
                <p className="text-sm" style={{ color: "var(--brp-muted)" }}>
                  Your prescription and personal details are handled in accordance with the
                  Privacy Act 1988 and Australian pharmacy privacy standards.
                </p>
              </div>

              <div className="brp-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Phone className="w-5 h-5" style={{ color: "var(--brp-green-700)" }} />
                  <h3 className="font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                    Prefer to call?
                  </h3>
                </div>
                <p className="text-sm mb-3" style={{ color: "var(--brp-muted)" }}>
                  Our pharmacists are available during business hours.
                </p>
                <a
                  href={`tel:${BUSINESS.phone.landlineE164}`}
                  className="inline-flex items-center gap-2 px-4 py-2 font-semibold rounded-lg text-sm text-white"
                  style={{ backgroundColor: "var(--brp-green-800)" }}
                >
                  <Phone className="w-4 h-4" /> {BUSINESS.phone.landline}
                </a>
              </div>

              <div className="brp-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5" style={{ color: "var(--brp-green-700)" }} />
                  <h3 className="font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                    Trading hours
                  </h3>
                </div>
                <div className="space-y-1 text-sm" style={{ color: "#374151" }}>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--brp-muted)" }}>Mon – Fri</span>
                    <span className="font-medium">{BUSINESS.hours.monFri}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--brp-muted)" }}>Saturday</span>
                    <span className="font-medium">{BUSINESS.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--brp-muted)" }}>Sunday</span>
                    <span className="font-medium" style={{ color: "var(--brp-muted)" }}>{BUSINESS.hours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
