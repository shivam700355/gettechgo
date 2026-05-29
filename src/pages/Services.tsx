import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/services";
import { Globe, Smartphone, Brain, TrendingUp, Code, Layers, ShoppingCart, Cloud, ArrowRight, Check } from "lucide-react";

// Lucide Icon Mapper
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe: Globe,
  Smartphone: Smartphone,
  Brain: Brain,
  TrendingUp: TrendingUp,
  Code: Code,
  Layers: Layers,
  ShoppingCart: ShoppingCart,
  Cloud: Cloud
};

export default function Services() {
  useEffect(() => {
    document.title = "Our Services | GetTechGo Software Solutions";
  }, []);

  return (
    <div id="services-page-view" className="bg-white">
      {/* Title Header */}
      <section className="bg-gradient-to-b from-[#0A6EFF]/5 to-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A1A2E] tracking-tight">
            Our Software Services
          </h1>
          <p className="text-[#0A6EFF] text-xs font-bold tracking-widest uppercase">
            From Prototype Designs to Enterprise SaaS Production
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto font-normal text-sm sm:text-base leading-relaxed">
            We deliver highly optimized software blueprints, clean database repositories, and SEO performance setups custom-geared for high concurrency.
          </p>
        </div>
      </section>

      {/* Services detailed blocks directory */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Code;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={service.id}
                id={`services-directory-card-${service.id}`}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 sm:p-12 bg-gray-50/60 border border-gray-100 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Left Content column */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="p-3 bg-[#0A6EFF]/10 text-[#0A6EFF] rounded-2xl w-fit">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#1A1A2E]">
                      {service.title}
                    </h2>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">
                      Platform Delivery Specialist
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                    {service.heroDescription}
                  </p>

                  {/* Bullet Guides list */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.whatWeBuild.slice(0, 4).map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-gray-600 font-normal">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <Link
                      id={`btn-learn-more-${service.id}`}
                      to={`/services/${service.id}`}
                      className="px-5 py-2.5 bg-[#0A6EFF] hover:bg-[#005ede] text-white text-xs font-bold rounded-xl shadow-sm hover:shadow-md transition-colors inline-flex items-center gap-1 group"
                    >
                      Learn More & Plans
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    <Link
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="px-5 py-2.5 bg-white border border-gray-200 hover:border-[#FF6B00] text-[#1A1A2E] hover:text-[#FF6B00] text-xs font-bold rounded-xl shadow-sm transition-colors"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>

                {/* Right highlight card details column */}
                <div className={`lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4 ${isEven ? "" : "lg:order-1"}`}>
                  <h4 className="text-xs font-bold text-[#1A1A2E] uppercase tracking-wider mb-2 pb-2 border-b border-gray-100">
                    Framework Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map(tId => (
                      <span
                        key={tId}
                        className="px-3 py-1 bg-gray-50 text-gray-600 text-[10px] font-bold uppercase rounded-lg border border-gray-100/60"
                      >
                        {tId}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100/60 text-xs text-gray-400 font-normal">
                    Starting estimate: <span className="text-[#FF6B00] font-extrabold text-sm">{service.billingPlans[0].price}</span> / {service.billingPlans[0].period}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Conversion Prompt */}
      <section className="py-20 bg-[#FF6B00] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Need a Bespoke Core Application?</h2>
          <p className="text-white/85 text-xs sm:text-sm max-w-xl mx-auto">Talk directly to Shivam Maurya to engineer highly scalable architectures custom-tuned to solve your business bottlenecks.</p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#1A1A2E] hover:bg-black text-white font-bold rounded-2xl transition-all shadow-md text-xs sm:text-sm"
            >
              Get Free Consultation Call
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
