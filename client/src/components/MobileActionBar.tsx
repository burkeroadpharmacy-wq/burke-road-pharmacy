import { Phone, Upload, MessageCircle, MapPin } from "lucide-react";
import { Link } from "wouter";
import { BUSINESS } from "@/config/business";

const actions = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Call",
    href: `tel:${BUSINESS.phone.landlineE164}`,
    external: false,
  },
  {
    icon: <Upload className="w-5 h-5" />,
    label: "Rx Upload",
    href: "/upload-prescription",
    external: false,
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    label: "WhatsApp",
    href: BUSINESS.urls.whatsapp,
    external: true,
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Directions",
    href: `https://maps.google.com/?q=${BUSINESS.address.googleMapsQuery}`,
    external: true,
  },
];

export default function MobileActionBar() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t"
      style={{
        backgroundColor: "var(--brp-green-900)",
        borderColor: "rgba(255,255,255,0.1)",
      }}
      aria-label="Quick actions"
    >
      <div className="grid grid-cols-4 h-16">
        {actions.map((action) =>
          action.external ? (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-1 text-white/80 hover:text-white active:text-white transition-colors"
            >
              {action.icon}
              <span className="text-[10px] font-medium">{action.label}</span>
            </a>
          ) : (
            <Link
              key={action.label}
              href={action.href}
              className="flex flex-col items-center justify-center gap-1 text-white/80 hover:text-white active:text-white transition-colors"
            >
              {action.icon}
              <span className="text-[10px] font-medium">{action.label}</span>
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
