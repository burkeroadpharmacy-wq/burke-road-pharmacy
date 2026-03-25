import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { articles, articleCategories } from "@/data/articles";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { BUSINESS } from "@/config/business";

export default function KnowledgeCentre() {
  const [activeCategory, setActiveCategory] = useState("All");

  const displayArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const breadcrumbs = [{ label: "Knowledge Centre", href: "/knowledge-centre" }];

  return (
    <>
      <SEO
        title="Knowledge Centre"
        description="Evidence-based health information from our compounding pharmacists. Articles on BHRT, LDN, PBS pricing, paediatric compounding, veterinary medications and more."
        canonical="/knowledge-centre"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Knowledge Centre", url: "/knowledge-centre" },
        ])}
      />
      <div style={{ backgroundColor: "var(--brp-cream)" }}>
        {/* Header */}
        <div className="brp-gradient py-16 text-white">
          <div className="container">
            <Breadcrumb items={breadcrumbs} className="mb-4" />
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 opacity-80" />
              <h1
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Knowledge Centre
              </h1>
            </div>
            <p className="text-white/85 text-xl max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
              Evidence-based health information from our compounding pharmacists.
              Written for patients, carers, and healthcare professionals.
            </p>
          </div>
        </div>

        <div className="container py-16">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {articleCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all border"
                style={
                  cat === activeCategory
                    ? {
                        backgroundColor: "var(--brp-green-800)",
                        color: "white",
                        borderColor: "var(--brp-green-800)",
                        fontFamily: "var(--font-body)",
                      }
                    : {
                        backgroundColor: "white",
                        color: "var(--brp-text)",
                        borderColor: "var(--border)",
                        fontFamily: "var(--font-body)",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {displayArticles.map((a) => (
              <article key={a.slug} className="brp-card p-6 flex flex-col group">
                <div className="flex items-center justify-between mb-4">
                  <span className="brp-badge text-xs">{a.category}</span>
                  <span className="flex items-center gap-1 text-xs" style={{ color: "var(--brp-muted)", fontFamily: "var(--font-body)" }}>
                    <Clock className="w-3 h-3" />
                    {a.readTimeMinutes} min read
                  </span>
                </div>
                <h2
                  className="text-xl font-bold mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-display)", color: "var(--brp-green-800)" }}
                >
                  {a.title}
                </h2>
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--brp-muted)", fontFamily: "var(--font-body)" }}>
                  {a.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                  <span className="text-xs" style={{ color: "var(--brp-muted)", fontFamily: "var(--font-body)" }}>
                    {new Date(a.publishedAt).toLocaleDateString("en-AU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <Link
                    href={`/knowledge-centre/${a.slug}`}
                    className="flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2"
                    style={{ color: "var(--brp-green-600)", fontFamily: "var(--font-body)" }}
                  >
                    Read article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Practitioners section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12" style={{ borderColor: "var(--border)" }}>
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "var(--brp-green-50)" }}
              >
                <BookOpen className="w-6 h-6" style={{ color: "var(--brp-green-700)" }} />
              </div>
              <div>
                <h2
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "var(--brp-green-800)" }}
                >
                  For Healthcare Practitioners
                </h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--brp-muted)", fontFamily: "var(--font-body)" }}>
                  We maintain a separate clinical resources section for healthcare providers,
                  including evidence-based compounding protocols, formulary access, and
                  prescription generation tools.
                </p>
                <Link
                  href="/practitioners"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl transition-all text-sm hover:opacity-90"
                  style={{ backgroundColor: "var(--brp-green-800)", fontFamily: "var(--font-body)" }}
                >
                  Visit Practitioner Hub <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="brp-gradient rounded-2xl p-10 text-white text-center">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Have a question?
            </h2>
            <p className="text-white/85 mb-8" style={{ fontFamily: "var(--font-body)" }}>
              Our pharmacists are happy to answer your health questions. Give us a call or
              send us a message.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`tel:${BUSINESS.phone.landline}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--brp-brass-500)", color: "var(--brp-green-900)", fontFamily: "var(--font-body)" }}
              >
                Call Us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl border border-white/40 transition-all hover:bg-white/10"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
