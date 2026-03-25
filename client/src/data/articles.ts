export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTimeMinutes: number;
  imageUrl?: string;
  publishedAt: string;
  content?: string;
  author?: string;
  relatedConditionSlug?: string;
}

export const articles: Article[] = [
  {
    slug: "understanding-bhrt",
    title: "Understanding Bioidentical Hormone Replacement Therapy",
    excerpt:
      "BHRT uses hormones chemically identical to those your body produces. Learn how personalised compounding can optimise your hormone balance and improve quality of life.",
    category: "Hormone Therapy",
    readTimeMinutes: 6,
    publishedAt: "2025-09-01",
    author: "Burke Road Compounding Pharmacists",
    relatedConditionSlug: "hormone-therapy",
  },
  {
    slug: "low-dose-naltrexone-guide",
    title: "Low Dose Naltrexone: A Guide for Patients",
    excerpt:
      "LDN is emerging as a promising therapy for autoimmune conditions, fibromyalgia, and chronic pain. Understand how it works, who it helps, and how to discuss it with your doctor.",
    category: "Pain Management",
    readTimeMinutes: 7,
    publishedAt: "2025-10-15",
    author: "Burke Road Compounding Pharmacists",
    relatedConditionSlug: "low-dose-naltrexone",
  },
  {
    slug: "compounding-for-children",
    title: "Why Compounding Makes Medication Easier for Children",
    excerpt:
      "Getting children to take medication is a common challenge. Compounded formulations in child-friendly flavours and appropriate doses can make a significant difference.",
    category: "Paediatrics",
    readTimeMinutes: 4,
    publishedAt: "2025-11-01",
    author: "Burke Road Compounding Pharmacists",
    relatedConditionSlug: "paediatrics",
  },
  {
    slug: "topical-pain-management",
    title: "Topical Compounded Analgesics: Targeted Pain Relief",
    excerpt:
      "Topical pain preparations deliver active ingredients directly to the site of pain, minimising systemic side effects. Learn about the options available through compounding.",
    category: "Pain Management",
    readTimeMinutes: 5,
    publishedAt: "2025-11-20",
    author: "Burke Road Compounding Pharmacists",
    relatedConditionSlug: "pain-management",
  },
  {
    slug: "pbs-pricing-guide-2026",
    title: "PBS Co-payment Rates 2026: What You Need to Know",
    excerpt:
      "The Pharmaceutical Benefits Scheme co-payment rates are updated annually. Here is a clear breakdown of current rates for general patients, concession cardholders, and DVA veterans.",
    category: "PBS & Dispensing",
    readTimeMinutes: 3,
    publishedAt: "2026-01-01",
    author: "Burke Road Compounding Pharmacists",
  },
  {
    slug: "veterinary-compounding",
    title: "Veterinary Compounding: Medications Your Pet Will Actually Take",
    excerpt:
      "Flavoured chews, transdermal gels, and species-appropriate doses make medication time easier for pets and their owners. Discover what veterinary compounding can offer.",
    category: "Veterinary",
    readTimeMinutes: 4,
    publishedAt: "2026-01-15",
    author: "Burke Road Compounding Pharmacists",
    relatedConditionSlug: "veterinary",
  },
  {
    slug: "dermatology-compounding",
    title: "Custom Skincare: The Role of Compounding in Dermatology",
    excerpt:
      "Tretinoin, hydroquinone, azelaic acid, and niacinamide can be combined in precise concentrations not available commercially. Learn how compounded skincare is prescribed.",
    category: "Dermatology",
    readTimeMinutes: 5,
    publishedAt: "2026-02-01",
    author: "Burke Road Compounding Pharmacists",
    relatedConditionSlug: "dermatology",
  },
  {
    slug: "chemist-care-now-guide",
    title: "Chemist Care Now: Getting Treatment Without a GP Appointment",
    excerpt:
      "Under the Chemist Care Now program, pharmacists can assess and treat a range of common conditions. Find out which conditions qualify and how the consultation works.",
    category: "Services",
    readTimeMinutes: 4,
    publishedAt: "2026-02-20",
    author: "Burke Road Compounding Pharmacists",
  },
];

export const articleCategories = [
  "All",
  "Hormone Therapy",
  "Pain Management",
  "Paediatrics",
  "PBS & Dispensing",
  "Veterinary",
  "Dermatology",
  "Services",
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
