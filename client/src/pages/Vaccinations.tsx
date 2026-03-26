import { ArrowRight, Syringe, ShieldCheck, Clock } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { BUSINESS } from "@/config/business";

const vaccineGroups = [
  {
    category: "Seasonal",
    vaccines: ["Influenza (flu) — annual", "COVID-19 boosters"],
  },
  {
    category: "Travel",
    vaccines: ["Hepatitis A & B", "Typhoid", "Yellow Fever", "Japanese Encephalitis", "Meningococcal ACWY", "Rabies", "Cholera"],
  },
  {
    category: "Routine & catch-up",
    vaccines: ["Pneumococcal (65+)", "Shingles (Zostavax / Shingrix)", "Whooping cough (pertussis)", "MMR catch-up"],
  },
  {
    category: "Occupational",
    vaccines: ["Hepatitis B (healthcare workers)", "Varicella (chickenpox)", "Q Fever"],
  },
];

export default function Vaccinations() {
  return (
    <>
      <SEO
        title="Vaccinations & Immunisations"
        description="Flu shots, COVID boosters, travel vaccines, and routine immunisations at Burke Road Compounding Pharmacy, Camberwell. Bookings are recommended — call 03 9882 5386 or book online."
        canonical="/services/vaccinations"
      />

      <section className="py-16" style={{ backgroundColor: "var(--brp-green-800)" }}>
        <div className="container">
          <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Vaccinations" }]} />
          <div className="max-w-2xl mt-4">
            <div className="brp-badge mb-4" style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "var(--brp-brass-300)", borderColor: "rgba(201,169,110,0.3)" }}>
              Immunisation Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Vaccinations & immunisations
            </h1>
            <p className="text-white/80 text-lg">
              Protect yourself and your family with vaccinations administered by our
              trained pharmacists. Bookings are recommended for some vaccines — please call ahead or book online.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-6 mb-14">
            {[
              { icon: <Syringe className="w-6 h-6" />, title: "Bookings recommended", desc: "Bookings are recommended for most vaccines. Please call ahead or book online to confirm availability." },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "Trained pharmacists", desc: "All vaccinations are administered by accredited immunisation pharmacists." },
              { icon: <Clock className="w-6 h-6" />, title: "Quick & convenient", desc: "In and out in under 15 minutes for most vaccines. We record your vaccination in the AIR." },
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

          <div className="brp-badge mb-8">Available vaccines</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {vaccineGroups.map((group) => (
              <div key={group.category} className="brp-card p-5">
                <h3 className="font-bold mb-3 text-sm uppercase tracking-wider" style={{ color: "var(--brp-green-700)" }}>
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.vaccines.map((v) => (
                    <li key={v} className="flex items-start gap-2 text-sm" style={{ color: "#374151" }}>
                      <Syringe className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "var(--brp-green-600)" }} />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={`tel:${BUSINESS.phone.landlineE164}`}
              className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-white transition-all"
              style={{ backgroundColor: "var(--brp-green-800)" }}
            >
              Call to check availability <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
