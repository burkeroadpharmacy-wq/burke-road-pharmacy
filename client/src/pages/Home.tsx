/**
 * Home — Burke Road Compounding Pharmacy
 * 2026 Redesign — 14 sections
 */
import { Link } from "wouter";
import {
  ArrowRight, Star, Truck, Syringe, Pill, Clock, Phone, MapPin,
  FlaskConical, Shield, HeartPulse, ChevronRight, Upload, MessageCircle
} from "lucide-react";
import { conditions } from "@/data/conditions";
import { testimonials } from "@/data/testimonials";
import { services } from "@/data/services";
import { BUSINESS } from "@/config/business";
import SEO, { localBusinessSchema } from "@/components/SEO";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/93092134/Sz8SP7v55RRQvADhiwfHx5";

const compoundingHighlights = [
  "Bioidentical Hormone Replacement Therapy (BHRT)",
  "Topical pain and anti-inflammatory preparations",
  "Paediatric formulations in child-friendly flavours",
  "Veterinary medications for all animal sizes",
  "Low Dose Naltrexone (LDN) capsules",
  "Dermatology and skincare preparations",
];

const pbsPricing = [
  { label: "General Patient", value: "$31.60", note: "Per PBS item (2026)" },
  { label: "Concession Card", value: "$7.70", note: "Per PBS item (2026)" },
  { label: "DVA White Card", value: "$0.00", note: "Most items free" },
  { label: "Safety Net", value: "Tracked", note: "Automatic recording" },
];

const trustStats = [
  { value: "60+", label: "Years serving Camberwell" },
  { value: "4.9★", label: "Google rating" },
  { value: "QCPP", label: "Accredited compounding" },
  { value: "AUS-wide", label: "Delivery available" },
];

const whyUs = [
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: "QCPP-Accredited Lab",
    desc: "Our compounding laboratory meets the highest quality standards set by the Quality Care Pharmacy Program.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "TGA-Compliant Formulations",
    desc: "Every compounded preparation is made to TGA guidelines using pharmaceutical-grade ingredients.",
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: "Personalised Care",
    desc: "Our pharmacists take the time to understand your health needs and work with your prescriber.",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Australia-wide Delivery",
    desc: "Compounded medications and retail products delivered safely to your door, anywhere in Australia.",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        canonical="/"
        jsonLd={localBusinessSchema}
      />

      <div style={{ backgroundColor: "var(--brp-cream)" }}>

        {/* ── 1. Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${CDN}/hero-pharmacy-modern_742c27b2.jpg)` }}
          />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(105deg, rgba(15,34,24,0.93) 0%, rgba(26,58,46,0.80) 55%, rgba(26,58,46,0.30) 100%)"
          }} />
          <div className="relative container py-28">
            <div className="max-w-2xl animate-fade-in-up">
              <div className="brp-badge mb-6">Serving Camberwell since {BUSINESS.established}</div>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Your Health,{" "}
                <em className="not-italic" style={{ color: "var(--brp-brass-500)" }}>personalised.</em>
              </h1>
              <p className="text-xl text-white/85 leading-relaxed mb-10 max-w-xl" style={{ fontFamily: "var(--font-body)" }}>
                Burke Road Compounding Pharmacy combines 60 years of community pharmacy
                values with modern compounding expertise. Personalised medications, PBS
                dispensing, and Chemist Care Now — all in Camberwell.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="/compounding"
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: "var(--brp-brass-500)", color: "var(--brp-green-900)" }}
                >
                  Explore Compounding
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href={`tel:${BUSINESS.phone.landlineE164}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl border border-white/40 transition-all"
                  style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "white" }}
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS.phone.landline}
                </a>
              </div>
              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6">
                {trustStats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-bold" style={{ color: "var(--brp-brass-500)", fontFamily: "var(--font-display)" }}>{s.value}</div>
                    <div className="text-xs text-white/70 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Announcement bar ──────────────────────────── */}
        <div className="py-3 text-center text-sm font-medium" style={{ backgroundColor: "var(--brp-brass-500)", color: "var(--brp-green-900)" }}>
          📋 New PBS co-payment rates from 1 January 2026 — General $31.60 · Concession $7.70 &nbsp;
          <Link href="/services#pbs" className="underline font-bold">Learn more →</Link>
        </div>

        {/* ── 3. Services grid ─────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-14">
              <div className="brp-badge mx-auto mb-4">Our Services</div>
              <h2 className="brp-section-heading text-4xl mb-4">Everything you need, in one pharmacy</h2>
              <p className="max-w-2xl mx-auto" style={{ color: "var(--brp-muted)" }}>
                From PBS dispensing to personalised compounding, we offer a comprehensive range
                of pharmacy services for the whole community.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 6).map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="brp-card p-6 group flex flex-col gap-4"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-colors"
                    style={{ backgroundColor: "var(--brp-green-50)", color: "var(--brp-green-800)" }}
                  >
                    <Pill className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--brp-muted)" }}>{s.description}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all" style={{ color: "var(--brp-green-600)" }}>
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Compounding highlight ─────────────────────── */}
        <section className="py-20" style={{ backgroundColor: "var(--brp-green-50)" }}>
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="brp-badge mb-6">Specialised Compounding</div>
                <h2 className="text-4xl font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                  Medications crafted <em style={{ color: "var(--brp-green-600)" }}>for you</em>
                </h2>
                <p className="leading-relaxed mb-6" style={{ color: "#374151" }}>
                  Our QCPP-accredited compounding laboratory creates personalised medications
                  tailored to your exact needs. Whether you require a specific dose, a
                  different delivery form, or a formulation free from allergens, our
                  experienced compounding pharmacists can help.
                </p>
                <ul className="space-y-3 mb-8">
                  {compoundingHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#374151" }}>
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "var(--brp-green-800)" }}>
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/compounding"
                    className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all text-white"
                    style={{ backgroundColor: "var(--brp-green-800)" }}
                  >
                    About Compounding <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/upload-prescription"
                    className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl border transition-all"
                    style={{ color: "var(--brp-green-800)", borderColor: "var(--brp-green-800)" }}
                  >
                    <Upload className="w-4 h-4" /> Upload Prescription
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src={`${CDN}/compounding-lab_a806e1b3.jpg`}
                  alt="Compounding laboratory at Burke Road Pharmacy"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--brp-green-50)" }}>
                    <img src={`${CDN}/logo-qcpp_92a72def.png`} alt="QCPP Accredited" className="h-8 object-contain" />
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--brp-text)" }}>QCPP Accredited</div>
                    <div className="text-xs" style={{ color: "var(--brp-muted)" }}>Quality standards assured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Browse by Condition ───────────────────────── */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <div className="brp-badge mx-auto mb-4">Compounding Solutions</div>
              <h2 className="brp-section-heading text-4xl mb-4">Browse by Condition</h2>
              <p className="max-w-xl mx-auto" style={{ color: "var(--brp-muted)" }}>
                We compound specialised medications for a wide range of health conditions.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {conditions.map((c) => (
                <Link
                  key={c.slug}
                  href={`/conditions/${c.slug}`}
                  className="brp-card p-4 text-center group"
                >
                  <div className="text-3xl mb-2">{c.icon}</div>
                  <div className="text-xs font-semibold leading-tight" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                    {c.title}
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/conditions"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all text-white"
                style={{ backgroundColor: "var(--brp-green-800)" }}
              >
                View All Conditions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 6. Why choose us ─────────────────────────────── */}
        <section className="py-20" style={{ backgroundColor: "var(--brp-green-800)" }}>
          <div className="container">
            <div className="text-center mb-14">
              <div className="brp-badge mb-4" style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "var(--brp-brass-300)", borderColor: "rgba(201,169,110,0.3)" }}>
                Why Burke Road
              </div>
              <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
                The difference is in the detail
              </h2>
              <p className="text-white/75 max-w-xl mx-auto">
                We combine clinical expertise with genuine community care — the same values
                we've held since 1963.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((item) => (
                <div key={item.title} className="rounded-xl p-6" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "var(--brp-brass-300)" }}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. PBS Pricing ───────────────────────────────── */}
        <section className="py-20" style={{ backgroundColor: "var(--brp-green-50)" }}>
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={`${CDN}/pbs-pricing-2026_00bf5770.png`}
                  alt="PBS Pricing 2026"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="brp-badge mb-6">PBS Dispensing</div>
                <h2 className="text-4xl font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                  Transparent PBS pricing — no surprises
                </h2>
                <p className="leading-relaxed mb-6" style={{ color: "#374151" }}>
                  We accept all Medicare, DVA, and concession cards. Our PBS co-payments are
                  always at the current government-regulated rates, ensuring you pay the
                  correct amount every time.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {pbsPricing.map((item) => (
                    <div key={item.label} className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="text-2xl font-bold" style={{ color: "var(--brp-green-800)", fontFamily: "var(--font-display)" }}>{item.value}</div>
                      <div className="text-sm font-semibold" style={{ color: "var(--brp-text)" }}>{item.label}</div>
                      <div className="text-xs" style={{ color: "var(--brp-muted)" }}>{item.note}</div>
                    </div>
                  ))}
                </div>
                <img
                  src={`${CDN}/dva-veteran-cards_e8c452b4.jpg`}
                  alt="DVA Veteran Cards accepted"
                  className="rounded-xl h-16 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. Prescription Upload CTA ───────────────────── */}
        <section className="py-16" style={{ backgroundColor: "var(--brp-brass-100)" }}>
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="brp-badge mx-auto mb-4">Prescription Services</div>
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                Upload your prescription online
              </h2>
              <p className="mb-8" style={{ color: "var(--brp-muted)" }}>
                Send us your prescription securely and we'll have your medication ready for
                pickup or delivery. Available for both compounded and PBS prescriptions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/upload-prescription"
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl transition-all shadow-md text-white"
                  style={{ backgroundColor: "var(--brp-green-800)" }}
                >
                  <Upload className="w-5 h-5" /> Upload Prescription
                </Link>
                <a
                  href={`tel:${BUSINESS.phone.landlineE164}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl border-2 transition-all"
                  style={{ color: "var(--brp-green-800)", borderColor: "var(--brp-green-800)" }}
                >
                  <Phone className="w-5 h-5" /> Call Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. Testimonials ──────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <div className="brp-badge mx-auto mb-4">Patient Reviews</div>
              <h2 className="brp-section-heading text-4xl mb-4">What our patients say</h2>
              <div className="flex items-center justify-center gap-2" style={{ color: "var(--brp-muted)" }}>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold" style={{ color: "var(--brp-text)" }}>4.9 / 5</span>
                <span>on Google Reviews</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="brp-card p-6">
                  <div className="flex mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-4 italic" style={{ color: "#374151" }}>
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white"
                      style={{ backgroundColor: "var(--brp-green-800)" }}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: "var(--brp-text)" }}>{t.name}</div>
                      <div className="text-xs flex items-center gap-1" style={{ color: "var(--brp-muted)" }}>
                        <img src={`${CDN}/logo-final-square_18df8581.png`} alt="" className="h-3 w-3 rounded-sm" />
                        Google Review
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. Knowledge Centre teaser ──────────────────── */}
        <section className="py-20" style={{ backgroundColor: "var(--brp-green-50)" }}>
          <div className="container">
            <div className="text-center mb-12">
              <div className="brp-badge mx-auto mb-4">Knowledge Centre</div>
              <h2 className="brp-section-heading text-4xl mb-4">Health information you can trust</h2>
              <p className="max-w-xl mx-auto" style={{ color: "var(--brp-muted)" }}>
                Evidence-based articles written and reviewed by our pharmacists.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Understanding Compounding Pharmacy", category: "Compounding", slug: "understanding-compounding" },
                { title: "BHRT: What You Need to Know", category: "Hormone Health", slug: "bhrt-guide" },
                { title: "PBS Safety Net: How It Works", category: "PBS", slug: "pbs-safety-net" },
              ].map((article) => (
                <Link key={article.slug} href={`/knowledge-centre`} className="brp-card p-6 group">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--brp-brass-700)" }}>
                    {article.category}
                  </div>
                  <h3 className="font-bold mb-3 group-hover:underline" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--brp-green-600)" }}>
                    Read article <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/knowledge-centre"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all text-white"
                style={{ backgroundColor: "var(--brp-green-800)" }}
              >
                Visit Knowledge Centre <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 11. Location & Hours ─────────────────────────── */}
        <section className="py-20 text-white" style={{ backgroundColor: "var(--brp-green-800)" }}>
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Visit us in Camberwell
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 shrink-0" style={{ color: "var(--brp-brass-500)" }} />
                    <div>
                      <div className="font-semibold">{BUSINESS.address.full}</div>
                      <a
                        href={`https://maps.google.com/?q=${BUSINESS.address.googleMapsQuery}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 text-sm hover:text-white underline"
                      >
                        Get directions →
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt-1 shrink-0" style={{ color: "var(--brp-brass-500)" }} />
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between gap-8">
                        <span className="text-white/70">Monday – Friday</span>
                        <span className="font-medium">{BUSINESS.hours.monFri}</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span className="text-white/70">Saturday</span>
                        <span className="font-medium">{BUSINESS.hours.saturday}</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span className="text-white/70">Sunday</span>
                        <span className="font-medium text-white/50">{BUSINESS.hours.sunday}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 shrink-0" style={{ color: "var(--brp-brass-500)" }} />
                    <a href={`tel:${BUSINESS.phone.landlineE164}`} className="font-semibold hover:underline">
                      {BUSINESS.phone.landline}
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`tel:${BUSINESS.phone.landlineE164}`}
                    className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-xl transition-all"
                    style={{ backgroundColor: "var(--brp-brass-500)", color: "var(--brp-green-900)" }}
                  >
                    <Phone className="w-4 h-4" /> Call Us
                  </a>
                  <a
                    href={BUSINESS.urls.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl border border-white/30 transition-all"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "white" }}
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.4!2d145.0620!3d-37.8260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad641c7f2b5a5b5%3A0x0!2sBurke%20Road%20Compounding%20Pharmacy!5e0!3m2!1sen!2sau!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Burke Road Pharmacy Location"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 12. Prescribers CTA ──────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8" style={{ backgroundColor: "var(--brp-green-50)", border: "1px solid var(--brp-green-100)" }}>
              <div>
                <div className="brp-badge mb-3">For Healthcare Professionals</div>
                <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                  Prescribers & Practitioners
                </h2>
                <p className="text-sm" style={{ color: "var(--brp-muted)" }}>
                  Access our prescriber portal, formulary, and clinical resources.
                  Send prescriptions directly to our compounding team.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link
                  href="/prescribers"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all text-white"
                  style={{ backgroundColor: "var(--brp-green-800)" }}
                >
                  Prescriber Portal <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/practitioners"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl border-2 transition-all"
                  style={{ color: "var(--brp-green-800)", borderColor: "var(--brp-green-800)" }}
                >
                  Clinical Resources
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 13. Accreditations ───────────────────────────── */}
        <section className="py-12 border-t" style={{ backgroundColor: "var(--brp-cream)", borderColor: "var(--brp-green-100)" }}>
          <div className="container">
            <p className="text-center text-xs mb-8 uppercase tracking-widest font-semibold" style={{ color: "var(--brp-muted)" }}>
              Accreditations &amp; Memberships
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <img src={`${CDN}/logo-pga_7c5cced5.png`} alt="Pharmacy Guild of Australia" className="h-12 object-contain opacity-60 hover:opacity-100 transition-opacity" />
              <img src={`${CDN}/logo-ipa_72a08de3.png`} alt="Independent Pharmacies of Australia" className="h-12 object-contain opacity-60 hover:opacity-100 transition-opacity" />
              <img src={`${CDN}/logo-qcpp_92a72def.png`} alt="QCPP Accredited" className="h-12 object-contain opacity-60 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </section>

        {/* ── 14. Final CTA ────────────────────────────────── */}
        <section className="py-20" style={{ background: "linear-gradient(135deg, var(--brp-green-900) 0%, var(--brp-green-800) 100%)" }}>
          <div className="container text-center">
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Ready to get started?
            </h2>
            <p className="text-white/75 mb-8 max-w-lg mx-auto">
              Visit us in Camberwell, call us, or upload your prescription online.
              We're here to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/upload-prescription"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl transition-all shadow-lg"
                style={{ backgroundColor: "var(--brp-brass-500)", color: "var(--brp-green-900)" }}
              >
                <Upload className="w-5 h-5" /> Upload Prescription
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl border border-white/40 transition-all text-white"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
