import { Link } from "wouter";
import { ArrowRight, Truck, MapPin, Clock, Package } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";

export default function Delivery() {
  return (
    <>
      <SEO
        title="Australia-wide Delivery"
        description="Burke Road Compounding Pharmacy delivers compounded medications and retail products Australia-wide, including remote areas. Fast, discreet, temperature-controlled."
        canonical="/services/delivery"
      />

      <section className="py-16" style={{ backgroundColor: "var(--brp-green-800)" }}>
        <div className="container">
          <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Delivery" }]} />
          <div className="max-w-2xl mt-4">
            <div className="brp-badge mb-4" style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "var(--brp-brass-300)", borderColor: "rgba(201,169,110,0.3)" }}>
              Delivery Service
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Australia-wide delivery
            </h1>
            <p className="text-white/80 text-lg">
              We deliver compounded medications and retail products to anywhere in
              Australia — including remote and rural areas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-6 mb-14">
            {[
              { icon: <Truck className="w-6 h-6" />, title: "Australia-wide", desc: "We ship to all states and territories, including remote areas not served by standard couriers." },
              { icon: <Package className="w-6 h-6" />, title: "Temperature-controlled", desc: "Hormone creams, suppositories, and other temperature-sensitive compounds are shipped with ice packs." },
              { icon: <Clock className="w-6 h-6" />, title: "Express available", desc: "Express post available for urgent orders. Standard delivery typically 2–5 business days." },
            ].map((item) => (
              <div key={item.title} className="brp-card p-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "var(--brp-green-50)", color: "var(--brp-green-800)" }}>
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--brp-muted)" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="brp-badge mb-6">What we deliver</div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                Products we ship
              </h2>
              <ul className="space-y-3">
                {[
                  "Compounded medications (creams, capsules, troches, drops)",
                  "PBS and private prescription medications",
                  "Vitamins, supplements, and nutraceuticals",
                  "Skincare and cosmeceuticals",
                  "Veterinary compounded preparations",
                  "Dose administration aids (Webster-paks)",
                ].map((item) => (
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
            </div>

            <div className="space-y-4">
              <div className="brp-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5" style={{ color: "var(--brp-green-700)" }} />
                  <h3 className="font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                    Delivery areas
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm" style={{ color: "#374151" }}>
                  {["Victoria", "New South Wales", "Queensland", "South Australia", "Western Australia", "Tasmania", "ACT", "Northern Territory"].map((state) => (
                    <div key={state} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--brp-green-600)" }} />
                      {state}
                    </div>
                  ))}
                </div>
              </div>

              <div className="brp-card p-6">
                <h3 className="font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                  How to order for delivery
                </h3>
                <ol className="space-y-2">
                  {[
                    "Upload your prescription online or call us",
                    "We confirm your order and delivery details",
                    "Your medication is prepared and dispatched",
                    "Tracking number sent to your email",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm" style={{ color: "#374151" }}>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ backgroundColor: "var(--brp-brass-500)" }}>
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <Link
                href="/upload-prescription"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 font-bold rounded-xl text-white transition-all"
                style={{ backgroundColor: "var(--brp-green-800)" }}
              >
                Upload your prescription <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
