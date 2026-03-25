export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    question: "What is compounding?",
    answer:
      "Compounding is the preparation of a personalised medication by a pharmacist to meet the specific needs of an individual patient. This may involve changing the dose, delivery form, or ingredients of a commercially available medicine, or preparing a medicine that is not commercially available.",
    category: "Compounding",
  },
  {
    question: "Do I need a prescription for compounded medications?",
    answer:
      "Yes. All compounded medications require a valid prescription from a registered Australian healthcare practitioner. We cannot compound medications without a prescription.",
    category: "Compounding",
  },
  {
    question: "How long does it take to prepare a compounded medication?",
    answer:
      "Most compounded medications are ready within 24–48 hours of receiving a valid prescription. Complex formulations or those requiring special ingredients may take 3–5 business days. We will advise you of the expected timeframe when you submit your prescription.",
    category: "Compounding",
  },
  {
    question: "Do you deliver compounded medications?",
    answer:
      "Yes. We deliver Australia-wide via express post. Medications requiring temperature control are shipped in insulated packaging with ice packs. Delivery times vary by location but are typically 1–3 business days.",
    category: "Delivery",
  },
  {
    question: "What are the current PBS co-payment rates?",
    answer:
      "As of 2026, the PBS co-payment is $31.60 per item for general patients and $7.70 per item for concession cardholders. DVA White Card holders pay nothing for most PBS items. These rates are updated annually on 1 January.",
    category: "PBS",
  },
  {
    question: "Can I upload my prescription online?",
    answer:
      "Yes. You can send your prescription via the contact form on this website, by email to info@burkeroadpharmacy.com.au, or by WhatsApp to 0450 352 483. We also accept electronic prescriptions (eRx and MyScript).",
    category: "Prescriptions",
  },
  {
    question: "Are you QCPP accredited?",
    answer:
      "Yes. Burke Road Compounding Pharmacy is accredited by the Quality Care Pharmacy Program (QCPP), which is the pharmacy industry's quality assurance program. Our compounding laboratory meets all TGA and QCPP standards.",
    category: "Accreditation",
  },
  {
    question: "What are your trading hours?",
    answer:
      "We are open Monday to Friday 9:00am–6:00pm and Saturday 9:00am–1:00pm. We are closed on Sundays and public holidays.",
    category: "General",
  },
];
