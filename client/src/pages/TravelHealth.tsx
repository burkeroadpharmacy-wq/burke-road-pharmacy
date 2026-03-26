import { Link } from "wouter";
import { ArrowRight, Globe, Syringe, Pill, FileText } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { BUSINESS } from "@/config/business";

const vaccines = [
  "Hepatitis A & B",
  "Typhoid",
  "Yellow Fever",
  "Japanese Encephalitis",
  "Meningococcal",
  "Rabies",
  "Cholera",
  "Influenza",
  "COVID-19 boosters",
];

const medications = [
  { name: "Malaria prophylaxis", note: "Doxycycline, Malarone, Chloroquine" },
  { name: "Travellers' diarrhoea", note: "Azithromycin, Ciprofloxacin standby" },
  { name: "Altitude sickness", note: "Acetazolamide (Diamox)" },
  { name: "Motion sickness", note: "Hyoscine, Promethazine" },
  { name: "Sleep & jet lag", note: "Melatonin, short-term hypnotics" },
];

export default function TravelHealth() {
  return (
    <>
      <SEO
        title="Travel Health Vaccinations & Medications"
        description="Prepare for international travel with vaccines, malaria prophylaxis, and travel medications from Burke Road Compounding Pharmacy, Camberwell."
        canonical="/services/travel-health"
      />

      <section className="py-16" style={{ backgroundColor: "var(--brp-green-800)" }}>
        <div className="container">
          <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Travel Health" }]} />
          <div className="max-w-2xl mt-4">
            <div className="brp-badge mb-4" style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "var(--brp-brass-300)", borderColor: "rgba(201,169,110,0.3)" }}>
              Travel Health
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Travel health services
            </h1>
            <p className="text-white/80 text-lg">
              Comprehensive pre-travel consultations, vaccinations, and medications to keep
              you healthy wherever your journey takes you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="brp-badge mb-6">Vaccinations</div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                Travel vaccines
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: "#374151" }}>
                Our pharmacists can administer a wide range of travel vaccines and advise
                on which are recommended or required for your destination. No GP referral
                needed for most vaccines.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {vaccines.map((v) => (
                  <div key={v} className="flex items-center gap-2 text-sm" style={{ color: "#374151" }}>
                    <Syringe className="w-4 h-4 shrink-0" style={{ color: "var(--brp-green-700)" }} />
                    {v}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="brp-badge mb-6">Medications</div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                Travel medications
              </h2>
              <div className="space-y-4">
                {medications.map((m) => (
                  <div key={m.name} className="brp-card p-4 flex items-start gap-3">
                    <Pill className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--brp-green-700)" }} />
                    <div>
                      <div className="font-semibold text-sm" style={{ color: "var(--brp-text)" }}>{m.name}</div>
                      <div className="text-xs mt-0.5" style={{ color: "var(--brp-muted)" }}>{m.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--brp-green-50)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            {[
              { icon: <Globe className="w-6 h-6" />, title: "Destination advice", desc: "Personalised recommendations based on your specific itinerary, activities, and health history." },
              { icon: <FileText className="w-6 h-6" />, title: "Documentation", desc: "Yellow fever vaccination certificates and International Certificate of Vaccination issued at the time of vaccination." },
              { icon: <Syringe className="w-6 h-6" />, title: "Bookings recommended", desc: "Please call ahead or book online to confirm availability. Bookings are required for yellow fever and Japanese encephalitis vaccines." },
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
          <div className="text-center">
            <a
              href={`tel:${BUSINESS.phone.landlineE164}`}
              className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-white transition-all"
              style={{ backgroundColor: "var(--brp-green-800)" }}
            >
              Book a travel consultation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
