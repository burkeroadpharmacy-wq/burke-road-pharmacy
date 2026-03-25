import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const BASE_URL = "https://burkeroadpharmacy.com.au";

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href ? `${BASE_URL}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <nav aria-label="Breadcrumb" className={`py-3 ${className}`}>
        <ol className="flex items-center flex-wrap gap-1 text-sm" style={{ color: "var(--brp-muted)" }}>
          {allItems.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="w-3.5 h-3.5 opacity-50" />}
              {i === 0 && <Home className="w-3.5 h-3.5 opacity-60" />}
              {item.href && i < allItems.length - 1 ? (
                <Link
                  href={item.href}
                  className="hover:underline transition-colors"
                  style={{ color: "var(--brp-green-600)" }}
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium" style={{ color: "var(--brp-text)" }}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
