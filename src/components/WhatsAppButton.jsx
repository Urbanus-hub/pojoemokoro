import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254716827947?text=Hello%2C%20I'd%20like%20to%20enquire%20about%20your%20tile%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center
                 shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200"
    >
      <MessageCircle size={26} className="text-white" />
    </a>
  );
}
