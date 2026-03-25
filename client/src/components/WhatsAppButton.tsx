import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/config/business";

export default function WhatsAppButton() {
  return (
    <a
      href={BUSINESS.urls.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 md:bottom-8"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </a>
  );
}
