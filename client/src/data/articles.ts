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
  {
    slug: "mens-health-compounding",
    title: "Men's Health and Compounding: What Your Pharmacist Can Prepare",
    excerpt:
      "From testosterone replacement to erectile dysfunction support, compounding pharmacy can prepare formulations tailored to men's health needs when standard commercial products are unsuitable.",
    category: "Men's Health",
    readTimeMinutes: 5,
    publishedAt: "2026-02-28",
    author: "Burke Road Compounding Pharmacists",
    relatedConditionSlug: "mens-health",
  },
  {
    slug: "womens-health-compounding",
    title: "Women's Health Across Every Life Stage: A Compounding Perspective",
    excerpt:
      "Compounding supports women's health from adolescence through menopause and beyond. Discover how personalised formulations can address hormonal imbalances, pelvic health, and more.",
    category: "Women's Health",
    readTimeMinutes: 6,
    publishedAt: "2026-03-05",
    author: "Burke Road Compounding Pharmacists",
    relatedConditionSlug: "womens-health",
  },
  {
    slug: "dose-administration-aids",
    title: "Dose Administration Aids: How Webster-paks and SureMed Packs Help",
    excerpt:
      "Managing multiple medications can be complex and error-prone. Dose administration aids like Webster-paks and SureMed blister packs help patients and carers stay organised and safe.",
    category: "Services",
    readTimeMinutes: 4,
    publishedAt: "2026-03-10",
    author: "Burke Road Compounding Pharmacists",
  },
  {
    slug: "flu-vaccination-guide",
    title: "Annual Flu Vaccination: Why Timing and Strain Matter",
    excerpt:
      "The influenza vaccine is updated each year to match circulating strains. Learn when to get vaccinated, who is most at risk, and how pharmacist-administered vaccines work in Australia.",
    category: "Vaccinations",
    readTimeMinutes: 4,
    publishedAt: "2026-03-12",
    author: "Burke Road Compounding Pharmacists",
  },
  {
    slug: "sports-medicine-compounding",
    title: "Sports Medicine and Compounding: Targeted Recovery Formulations",
    excerpt:
      "Athletes and active individuals often require formulations not available off the shelf. Compounded topical analgesics, anti-inflammatories, and recovery preparations can be tailored to specific needs.",
    category: "Sports Medicine",
    readTimeMinutes: 5,
    publishedAt: "2026-03-14",
    author: "Burke Road Compounding Pharmacists",
    relatedConditionSlug: "sports-medicine",
  },
  {
    slug: "dental-compounding",
    title: "Dental Compounding: Custom Formulations for Oral Health",
    excerpt:
      "Dentists increasingly rely on compounding pharmacies to prepare anaesthetics, antimicrobials, and fluoride treatments in concentrations and forms not commercially available.",
    category: "Dental",
    readTimeMinutes: 4,
    publishedAt: "2026-03-16",
    author: "Burke Road Compounding Pharmacists",
    relatedConditionSlug: "dental",
  },
  {
    slug: "mental-health-compounding",
    title: "Compounding and Mental Health: When Standard Doses Don't Fit",
    excerpt:
      "Some patients require doses or formulations of psychiatric medications that are not commercially available. Compounding can provide liquid formulations, alternative strengths, and allergen-free preparations.",
    category: "Mental Health",
    readTimeMinutes: 5,
    publishedAt: "2026-03-18",
    author: "Burke Road Compounding Pharmacists",
    relatedConditionSlug: "mental-health",
  },
  {
    slug: "dva-pharmacy-services",
    title: "DVA Pharmacy Services: What Veterans Are Entitled To",
    excerpt:
      "Australian veterans holding DVA White, Gold, or Orange cards are entitled to a range of subsidised pharmacy services. This guide explains what is covered and how to access it.",
    category: "PBS & Dispensing",
    readTimeMinutes: 4,
    publishedAt: "2026-03-20",
    author: "Burke Road Compounding Pharmacists",
  },
  {
    slug: "australia-wide-delivery",
    title: "Compounded Medications Delivered Australia-wide: How It Works",
    excerpt:
      "Burke Road Pharmacy ships compounded preparations and retail products to all states and territories, including remote areas. Learn about our packaging, cold chain, and delivery process.",
    category: "Services",
    readTimeMinutes: 3,
    publishedAt: "2026-03-22",
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
  "Men's Health",
  "Women's Health",
  "Vaccinations",
  "Sports Medicine",
  "Dental",
  "Mental Health",
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
