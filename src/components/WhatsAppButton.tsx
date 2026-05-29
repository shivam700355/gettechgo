import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";

export default function WhatsAppButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const whatsappUrl = "https://wa.me/917007510000?text=Hi%20Shivam,%20I%20visited%20GetTechGo%20and%20want%20to%20discuss%20a%20software%20project!";

  return (
    <div id="floating-actions" className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          id="btn-scroll-top"
          onClick={scrollToTop}
          className="p-3 bg-white hover:bg-[#0A6EFF] text-[#1A1A2E] hover:text-white rounded-full shadow-lg border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 group focus:outline-none"
          title="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        </button>
      )}

      {/* Floating WhatsApp Action */}
      <a
        id="btn-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-6 active:scale-95 animate-bounce-subtle focus:outline-none group"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white stroke-[#25D366]" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out text-sm font-semibold text-white whitespace-nowrap pl-0 group-hover:pl-2">
          Chat with Shivam
        </span>
      </a>
    </div>
  );
}
