import SEO from "@/components/SEO";
import { BUSINESS } from "@/config/business";
import { Link } from "wouter";
import { conditions } from "@/data/conditions";
import ConditionIcon from "@/components/ConditionIcon";
import Breadcrumb from "@/components/Breadcrumb";

export default function Conditions() {
  const displayConditions = conditions;

  return (
    <>
      <SEO
        title="Browse by Condition"
        description="Browse compounding solutions by health condition at Burke Road Pharmacy, Camberwell. Hormone therapy, pain management, dermatology, paediatrics, veterinary and more."
        canonical="/conditions"
      />
      <div className="bg-background">
      <div className="brp-gradient py-16 text-white">
        <div className="container">
          <Breadcrumb items={[{ label: "Conditions", href: "/conditions" }]} className="mb-4" />
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Browse by Condition
          </h1>
          <p className="text-white/85 text-xl max-w-2xl">
            Explore our specialised compounding solutions tailored to your health needs.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="bg-white rounded-xl p-6 mb-10 shadow-sm border border-border">
          <h2
            className="text-2xl font-bold text-[#1a4d2e] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Personalised Compounding Solutions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Burke Road Compounding Pharmacy, we create customised medications for a wide
            range of health conditions. Our experienced compounding pharmacists work closely
            with prescribers to formulate medications tailored to your specific
            requirements — whether it's adjusting dosages, removing allergens, or creating
            alternative dosage forms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayConditions.map((c) => (
            <Link
              key={c.slug}
              href={`/conditions/${c.slug}`}
              className="brp-card p-6 text-center group flex flex-col items-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors group-hover:bg-[#1a4d2e] group-hover:text-white"
                style={{ backgroundColor: "var(--brp-green-50)", color: "var(--brp-green-800)" }}
              >
                <ConditionIcon name={c.icon} className="w-7 h-7" />
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "var(--font-display)", color: "var(--brp-green-800)" }}
              >
                {c.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{c.summary}</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 brp-gradient rounded-2xl p-10 text-white text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Not sure where to start?
          </h2>
          <p className="text-white/85 mb-8">
            Our compounding pharmacists are here to help. Contact us to discuss your specific needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${BUSINESS.phone.landlineE164}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#84cc16] hover:bg-[#65a30d] text-gray-900 font-bold rounded-xl transition-all"
            >
              Call {BUSINESS.phone.landline}
            </a>
            <a
              href={BUSINESS.urls.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-xl border border-white/40 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
