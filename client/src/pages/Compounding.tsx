import { Link } from "wouter";
import { ArrowRight, CheckCircle, FlaskConical, Shield, Award, Microscope } from "lucide-react";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { BUSINESS } from "@/config/business";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/93092134/Sz8SP7v55RRQvADhiwfHx5";

const dosageForms = [
  { form: "Capsules", desc: "Immediate or slow-release oral formulations" },
  { form: "Troches / Sublingual", desc: "Rapid absorption, bypasses first-pass metabolism" },
  { form: "Topical Creams & Gels", desc: "Transdermal delivery for localised or systemic effect" },
  { form: "PLO Gels", desc: "Pluronic Lecithin Organogel for enhanced skin penetration" },
  { form: "Oral Liquids", desc: "Solutions and suspensions for easy dosing" },
  { form: "Suppositories & Pessaries", desc: "Rectal or vaginal delivery options" },
  { form: "Eye / Ear / Nasal Drops", desc: "Sterile preparations for sensitive areas" },
  { form: "Veterinary Forms", desc: "Palatable formulations for animals of all sizes" },
];

const whyCompound = [
  "Precise dosing not available commercially",
  "Alternative delivery forms (e.g., topical instead of oral)",
  "Removal of allergens, dyes, or preservatives",
  "Combination of multiple medications in one preparation",
  "Discontinued or unavailable commercial products",
  "Flavouring for paediatric or veterinary patients",
];

const qualityPoints = [
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: "QCPP-Accredited Laboratory",
    desc: "Our compounding laboratory meets the rigorous standards of the Quality Care Pharmacy Program.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "TGA-Compliant Formulations",
    desc: "Every preparation uses pharmaceutical-grade ingredients and follows TGA guidelines.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "60+ Years of Experience",
    desc: "Serving the Camberwell community since 1963 with trusted pharmaceutical expertise.",
  },
  {
    icon: <Microscope className="w-6 h-6" />,
    title: "Rigorous Quality Control",
    desc: "Each batch undergoes thorough quality checks before dispensing to patients.",
  },
];

export default function Compounding() {
  const breadcrumbs = [
    { label: "Compounding", href: "/compounding" },
  ];

  return (
    <>
      <SEO
        title="Compounding Pharmacy"
        description="QCPP-accredited compounding pharmacy in Camberwell, Melbourne. Personalised medications including BHRT, pain management, paediatric formulations, veterinary and more."
        canonical="/compounding"
        jsonLd={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Compounding", url: "/compounding" }])}
      />
      <div style={{ backgroundColor: "var(--brp-cream)" }}>
        {/* Header */}
        <div className="brp-gradient py-16 text-white">
          <div className="container">
            <Breadcrumb items={breadcrumbs} className="mb-4" />
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Compounding Pharmacy
            </h1>
            <p className="text-white/85 text-xl max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
              Personalised medications tailored to your unique therapeutic needs.
              QCPP-accredited, TGA-compliant, and crafted with care.
            </p>
          </div>
        </div>

        <div className="container py-16">
          {/* Intro */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="brp-badge mb-6">What is Compounding?</div>
              <h2
                className="text-3xl font-bold mb-6"
                style={{ fontFamily: "var(--font-display)", color: "var(--brp-green-800)" }}
              >
                Medications made for you — not the masses
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: "var(--brp-text)", fontFamily: "var(--font-body)" }}>
                Pharmaceutical compounding is the art and science of preparing personalised
                medications for patients. Our QCPP-accredited compounding laboratory creates
                customised formulations that commercial manufacturers cannot provide.
              </p>
              <p className="leading-relaxed mb-6" style={{ color: "var(--brp-text)", fontFamily: "var(--font-body)" }}>
                Our experienced compounding pharmacists work closely with your prescriber to
                create medications in the exact dose, form, and combination you need — free
                from unnecessary additives or allergens.
              </p>
              <div
                className="rounded-xl p-5 border"
                style={{
                  backgroundColor: "var(--brp-green-50)",
                  borderColor: "var(--brp-green-600)",
                  borderLeftWidth: "4px",
                  borderLeftStyle: "solid",
                }}
              >
                <p className="text-sm font-medium" style={{ color: "var(--brp-green-800)", fontFamily: "var(--font-body)" }}>
                  ⚠️ All compounded medications require a valid prescription from a registered
                  Australian healthcare provider. Please consult your doctor before requesting
                  compounded preparations.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={`https://d2xsxph8kpxj0f.cloudfront.net/93092134/Sz8SP7v55RRQvADhiwfHx5/compounding-lab-professional-Cb4PN2CBX4z9j3EQRd4C6T.webp`}
                alt="Compounding laboratory at Burke Road Pharmacy"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "var(--brp-green-50)" }}
                >
                  <Award className="w-5 h-5" style={{ color: "var(--brp-green-700)" }} />
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ color: "var(--brp-green-800)", fontFamily: "var(--font-display)" }}>QCPP Accredited</div>
                  <div className="text-xs" style={{ color: "var(--brp-muted)" }}>Quality standards assured</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Points */}
          <div className="mb-20">
            <h2
              className="text-3xl font-bold mb-8 text-center"
              style={{ fontFamily: "var(--font-display)", color: "var(--brp-green-800)" }}
            >
              Our quality commitment
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qualityPoints.map((q) => (
                <div key={q.title} className="brp-card p-6 flex flex-col gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "var(--brp-green-50)", color: "var(--brp-green-700)" }}
                  >
                    {q.icon}
                  </div>
                  <h3
                    className="font-bold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--brp-green-800)" }}
                  >
                    {q.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--brp-muted)", fontFamily: "var(--font-body)" }}>
                    {q.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Compound */}
          <div className="mb-20">
            <h2
              className="text-3xl font-bold mb-8 text-center"
              style={{ fontFamily: "var(--font-display)", color: "var(--brp-green-800)" }}
            >
              Why choose compounded medications?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyCompound.map((reason) => (
                <div key={reason} className="brp-card p-5 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "var(--brp-green-600)" }} />
                  <span className="text-sm" style={{ color: "var(--brp-text)", fontFamily: "var(--font-body)" }}>{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dosage Forms */}
          <div className="mb-20">
            <h2
              className="text-3xl font-bold mb-8 text-center"
              style={{ fontFamily: "var(--font-display)", color: "var(--brp-green-800)" }}
            >
              Available dosage forms
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {dosageForms.map((d) => (
                <div key={d.form} className="brp-card p-5">
                  <h3
                    className="font-bold mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "var(--brp-green-800)" }}
                  >
                    {d.form}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--brp-muted)", fontFamily: "var(--font-body)" }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Browse Conditions CTA */}
          <div className="brp-gradient rounded-2xl p-10 text-white text-center">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to explore your options?
            </h2>
            <p className="text-white/85 mb-8 max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
              Browse our compounding solutions by condition, or contact our pharmacists to
              discuss your specific needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/conditions"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl transition-all"
                style={{ backgroundColor: "var(--brp-brass-500)", color: "var(--brp-green-900)" }}
              >
                Browse by Condition <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${BUSINESS.phone.landline}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl border border-white/40 transition-all hover:bg-white/10"
              >
                Speak to a Pharmacist
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
