import { Link } from "react-router-dom";
import { PhoneCall, CalendarDays } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="cta-banner" className="py-16 bg-[#0A6EFF] text-white overflow-hidden relative">
      {/* Decorative vectors */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Have a Project in Mind? Let's Build It Together.
        </h2>
        <p className="text-sm sm:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
          Partner with Shivam Maurya and GetTechGo to deliver top-tier mobile, web and AI software projects custom-fit to drive long term commercial profits.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Link
            id="cta-free-consultation"
            to="/contact"
            className="px-8 py-4 bg-[#FF6B00] hover:bg-[#e05d00] text-white font-bold rounded-2xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Free Consultation
          </Link>
          <a
            href="tel:+917007510000"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/20 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-5 h-5" />
            +91 700 751 0000
          </a>
        </div>
      </div>
    </section>
  );
}
