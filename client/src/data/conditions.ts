export interface Condition {
  slug: string;
  title: string;
  summary: string;
  /** Icon key — maps to a Lucide icon name or custom SVG in ConditionIcon component */
  icon: string;
  category: string;
  content?: string;
}

export const conditions: Condition[] = [
  {
    slug: "hormone-therapy",
    title: "Hormone Therapy",
    summary:
      "Bioidentical hormone replacement therapy (BHRT) tailored to your individual hormone profile. We compound oestrogen, progesterone, testosterone, DHEA and thyroid preparations in a range of delivery forms.",
    icon: "activity",
    category: "Endocrinology",
    content:
      "Bioidentical hormone replacement therapy uses hormones that are chemically identical to those produced naturally by the human body. Unlike conventional HRT, BHRT formulations can be precisely dosed to match your individual hormone levels as measured by saliva or blood testing. Burke Road Compounding Pharmacy works closely with integrative GPs and gynaecologists to prepare personalised BHRT creams, troches, capsules and pessaries.",
  },
  {
    slug: "pain-management",
    title: "Pain Management",
    summary:
      "Topical and oral compounded analgesics for acute and chronic pain, including low-dose naltrexone, ketamine, and multi-agent topical preparations that bypass systemic side effects.",
    icon: "shield-plus",
    category: "Pain",
    content:
      "Compounded pain preparations allow combinations of active ingredients not available commercially. Common formulations include topical ketamine/gabapentin/clonidine gels for neuropathic pain, diclofenac/ketoprofen creams for musculoskeletal pain, and low-dose naltrexone (LDN) capsules for fibromyalgia and inflammatory conditions.",
  },
  {
    slug: "dermatology",
    title: "Dermatology",
    summary:
      "Custom skincare preparations including tretinoin, hydroquinone, azelaic acid, and anti-fungal formulations compounded to your dermatologist's exact specification.",
    icon: "sparkles",
    category: "Dermatology",
    content:
      "Dermatological compounding allows your prescriber to specify exact concentrations, bases, and combinations of actives not available in commercial products. We prepare formulations for acne, rosacea, hyperpigmentation, psoriasis, eczema, and wound care.",
  },
  {
    slug: "paediatrics",
    title: "Paediatrics",
    summary:
      "Child-friendly formulations in palatable flavours and appropriate doses for infants and children who cannot swallow commercial tablets or capsules.",
    icon: "baby",
    category: "Paediatrics",
    content:
      "Many medications are not commercially available in paediatric doses or suitable forms. We compound liquid suspensions, mini-capsules, and flavoured preparations for children of all ages, working with paediatricians to ensure accurate dosing and palatability.",
  },
  {
    slug: "veterinary",
    title: "Veterinary",
    summary:
      "Compounded medications for companion animals and livestock, including flavoured treats, transdermal gels, and species-appropriate dosage forms.",
    icon: "paw-print",
    category: "Veterinary",
    content:
      "Veterinary compounding provides medications in forms that animals will accept. We prepare flavoured chews, transdermal ear gels, and appropriately dosed preparations for dogs, cats, horses, birds, and exotic animals, working with your veterinarian.",
  },
  {
    slug: "low-dose-naltrexone",
    title: "Low Dose Naltrexone",
    summary:
      "LDN capsules (1.5–4.5 mg) for autoimmune conditions, fibromyalgia, Crohn's disease, MS, and chronic fatigue. Compounded to your prescriber's exact dose.",
    icon: "dna",
    category: "Immunology",
    content:
      "Low dose naltrexone (LDN) is used off-label at doses of 1.5–4.5 mg (compared to the standard 50 mg addiction dose) to modulate the immune system. Research supports its use in multiple sclerosis, Crohn's disease, fibromyalgia, and other autoimmune conditions. As it is not commercially available at these doses, it must be compounded.",
  },
  {
    slug: "mens-health",
    title: "Men's Health",
    summary:
      "Testosterone replacement therapy, erectile dysfunction preparations, and other men's health formulations compounded to your doctor's prescription.",
    icon: "user",
    category: "Men's Health",
    content:
      "Men's health compounding includes testosterone creams, gels, and troches for TRT, as well as combinations for erectile dysfunction and hair loss. We work with GPs, urologists, and men's health specialists to prepare formulations not available commercially.",
  },
  {
    slug: "womens-health",
    title: "Women's Health",
    summary:
      "Vaginal oestrogen preparations, progesterone suppositories, and other women's health formulations for menopause, pelvic health, and fertility support.",
    icon: "heart-pulse",
    category: "Women's Health",
    content:
      "Women's health compounding encompasses a wide range of preparations including vaginal oestrogen creams and pessaries, progesterone suppositories, DHEA preparations, and boric acid capsules for recurrent infections. We work with gynaecologists, fertility specialists, and integrative GPs.",
  },
  {
    slug: "sports-medicine",
    title: "Sports Medicine",
    summary:
      "Topical anti-inflammatory and analgesic preparations for sports injuries, muscle recovery, and joint pain management.",
    icon: "zap",
    category: "Sports Medicine",
    content:
      "Sports medicine compounding provides targeted topical preparations for athletes and active individuals. Common formulations include high-concentration diclofenac gels, arnica/menthol recovery creams, and multi-agent preparations for tendinopathies and joint pain.",
  },
  {
    slug: "dental",
    title: "Dental",
    summary:
      "Custom dental preparations including topical anaesthetics, dry socket pastes, fluoride treatments, and antimicrobial mouth rinses.",
    icon: "smile",
    category: "Dental",
    content:
      "Dental compounding provides preparations that are not commercially available or that need to be customised for individual patients. We prepare topical anaesthetic gels, dry socket pastes, fluoride varnishes, and antimicrobial rinses for dentists and oral surgeons.",
  },
  {
    slug: "gastroenterology",
    title: "Gastroenterology",
    summary:
      "Compounded preparations for IBD, IBS, and other gastrointestinal conditions, including budesonide enemas, sucralfate suspensions, and low-dose naltrexone.",
    icon: "stethoscope",
    category: "Gastroenterology",
    content:
      "Gastrointestinal compounding includes preparations for inflammatory bowel disease, irritable bowel syndrome, and other GI conditions. We prepare budesonide enemas, sucralfate suspensions, cholestyramine formulations, and LDN for Crohn's disease.",
  },
  {
    slug: "mental-health",
    title: "Mental Health",
    summary:
      "Compounded psychiatric medications in alternative doses and delivery forms for patients who cannot tolerate commercial formulations.",
    icon: "brain",
    category: "Mental Health",
    content:
      "Mental health compounding provides medications in doses and forms not commercially available, including low-dose antidepressants for children, allergen-free formulations, and combination preparations. We work with psychiatrists and GPs to support patients with complex medication needs.",
  },
];

export function getConditionBySlug(slug: string): Condition | undefined {
  return conditions.find((c) => c.slug === slug);
}
