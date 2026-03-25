export interface Service {
  slug: string;
  title: string;
  description: string;
  /** Icon key — maps to a Lucide icon in ConditionIcon component */
  icon: string;
  href: string;
}

export const services: Service[] = [
  {
    slug: "pbs",
    title: "PBS Dispensing",
    description:
      "Subsidised prescriptions under the Pharmaceutical Benefits Scheme. We accept all Medicare, DVA, and concession cards.",
    icon: "pill",
    href: "/services#pbs",
  },
  {
    slug: "vaccinations",
    title: "Vaccinations",
    description:
      "Flu, COVID-19, travel vaccines and more. No appointment needed for most vaccines.",
    icon: "syringe",
    href: "/services#vaccinations",
  },
  {
    slug: "compounding",
    title: "Compounding",
    description:
      "Personalised medications tailored to your unique needs. Hormone therapy, pain management, dermatology, and more.",
    icon: "flask",
    href: "/compounding",
  },
  {
    slug: "chemist-care-now",
    title: "Chemist Care Now",
    description:
      "Minor ailment consultations without a GP appointment. Get treatment for common conditions on the spot.",
    icon: "stethoscope",
    href: "/services#chemist-care-now",
  },
  {
    slug: "delivery",
    title: "Australia-wide Delivery",
    description:
      "We deliver compounded medications and retail products Australia-wide, including remote areas.",
    icon: "truck",
    href: "/services",
  },
  {
    slug: "daa",
    title: "Dose Administration Aids",
    description:
      "SureMed blister packs and Webster-paks to help you manage complex medication regimens safely.",
    icon: "clipboard",
    href: "/services#daa",
  },
  {
    slug: "medadvisor",
    title: "MedAdvisor",
    description:
      "Digital medication management app. Track your prescriptions, set reminders, and request repeats online.",
    icon: "activity",
    href: "/services#medadvisor",
  },
  {
    slug: "dva",
    title: "DVA Services",
    description:
      "Full DVA White, Gold, and Orange card services. Most items dispensed at no cost to eligible veterans.",
    icon: "shield-plus",
    href: "/services#dva",
  },
];
