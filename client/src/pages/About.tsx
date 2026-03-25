import { Link } from "wouter";
import { ArrowRight, Award, Users, FlaskConical, Heart } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { BUSINESS } from "@/config/business";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/93092134/Sz8SP7v55RRQvADhiwfHx5";

const milestones = [
  { year: "1963", event: "Burke Road Pharmacy opens its doors in Camberwell" },
  { year: "1990s", event: "Compounding services introduced to meet growing patient needs" },
  { year: "2005", event: "QCPP accreditation achieved for compounding laboratory" },
  { year: "2015", event: "Expanded to offer Chemist Care Now minor ailment consultations" },
  { year: "2020", event: "Australia-wide delivery service launched for compounded medications" },
  { year: "2024", event: "Upgraded compounding laboratory with state-of-the-art equipment" },
];

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Patient-Centred Care",
    desc: "Every decision we make starts with what is best for the patient. We take the time to listen, understand, and personalise our service.",
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: "Clinical Excellence",
    desc: "Our pharmacists hold advanced qualifications in compounding and stay current with the latest evidence-based practice.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Quality Assurance",
    desc: "QCPP accreditation means every compounded preparation meets rigorous quality standards — every single time.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Commitment",
    desc: "We have been part of the Camberwell community for over 60 years and take that responsibility seriously.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Burke Road Compounding Pharmacy has served the Camberwell community since 1963. Learn about our history, values, and QCPP-accredited compounding team."
        canonical="/about"
      />

      {/* Hero */}
      <section className="py-16" style={{ backgroundColor: "var(--brp-green-800)" }}>
        <div className="container">
          <Breadcrumb items={[{ label: "About Us" }]} />
          <div className="max-w-2xl mt-4">
            <div className="brp-badge mb-4" style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "var(--brp-brass-300)", borderColor: "rgba(201,169,110,0.3)" }}>
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Serving Camberwell since {BUSINESS.established}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              For over 60 years, Burke Road Compounding Pharmacy has been a trusted part of
              the Camberwell community — combining traditional pharmacy values with modern
              compounding expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="brp-badge mb-6">Our History</div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                A pharmacy built on trust
              </h2>
              <div className="space-y-4 leading-relaxed" style={{ color: "#374151" }}>
                <p>
                  Burke Road Compounding Pharmacy was established in 1963 with a simple
                  mission: to provide personalised, expert pharmacy care to the people of
                  Camberwell and the broader Boroondara community.
                </p>
                <p>
                  Over six decades, we have grown from a traditional dispensing pharmacy into
                  a full-service compounding centre — one of Melbourne's most trusted
                  providers of personalised medications. Our QCPP-accredited laboratory
                  allows us to create formulations that simply aren't available commercially.
                </p>
                <p>
                  Today, our team of experienced pharmacists and technicians serves patients
                  across Australia, working closely with GPs, specialists, naturopaths, and
                  veterinarians to deliver medications tailored to each individual's needs.
                </p>
              </div>
            </div>
            <div>
              <img
                src={`${CDN}/compounding-lab_a806e1b3.jpg`}
                alt="Burke Road Pharmacy compounding laboratory"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: "var(--brp-green-50)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <div className="brp-badge mx-auto mb-4">Our Values</div>
            <h2 className="brp-section-heading text-4xl mb-4">What we stand for</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="brp-card p-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "var(--brp-green-50)", color: "var(--brp-green-800)" }}>
                  {v.icon}
                </div>
                <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--brp-muted)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <div className="brp-badge mx-auto mb-4">Timeline</div>
            <h2 className="brp-section-heading text-4xl mb-4">Our journey</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute left-16 top-0 bottom-0 w-px" style={{ backgroundColor: "var(--brp-green-100)" }} />
              <div className="space-y-8">
                {milestones.map((m) => (
                  <div key={m.year} className="flex gap-6 items-start">
                    <div className="w-12 text-right shrink-0">
                      <span className="text-sm font-bold" style={{ color: "var(--brp-green-800)", fontFamily: "var(--font-display)" }}>
                        {m.year}
                      </span>
                    </div>
                    <div className="w-4 h-4 rounded-full mt-0.5 shrink-0 relative z-10" style={{ backgroundColor: "var(--brp-brass-500)" }} />
                    <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>{m.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16" style={{ backgroundColor: "var(--brp-green-50)" }}>
        <div className="container text-center">
          <div className="brp-badge mx-auto mb-6">Accreditations</div>
          <h2 className="brp-section-heading text-3xl mb-8">Quality you can trust</h2>
          <div className="flex flex-wrap items-center justify-center gap-12 mb-10">
            <img src={`${CDN}/logo-pga_7c5cced5.png`} alt="Pharmacy Guild of Australia" className="h-14 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src={`${CDN}/logo-ipa_72a08de3.png`} alt="Independent Pharmacies of Australia" className="h-14 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src={`${CDN}/logo-qcpp_92a72def.png`} alt="QCPP Accredited" className="h-14 object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </div>
          <Link
            href="/compounding"
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all text-white"
            style={{ backgroundColor: "var(--brp-green-800)" }}
          >
            Learn about our compounding <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
