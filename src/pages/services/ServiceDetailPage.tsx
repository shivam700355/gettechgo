import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { servicesData, ServiceDetail, FAQItem } from "../../data/services";
import { portfolioProjects } from "../../data/portfolio";
import { technologies } from "../../data/technologies";
import PricingTable from "../../components/PricingTable";
import FAQAccordion from "../../components/FAQAccordion";
import PortfolioCard from "../../components/PortfolioCard";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle, Flame, Sparkles, AlertCircle, ArrowRight, Smartphone, Globe, Brain, TrendingUp, Code, Layers, ShoppingCart, Cloud } from "lucide-react";

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

interface ServiceDetailPageProps {
  id: string;
}

export default function ServiceDetailPage({ id }: ServiceDetailPageProps) {
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | GetTechGo Software`;
    }
  }, [service]);

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center space-y-4">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto" />
        <h2 className="text-2xl font-bold text-gray-900">Service Not Found</h2>
        <p className="text-gray-500">The requested development service is not configured.</p>
        <Link to="/services" className="inline-block px-6 py-3 bg-[#0A6EFF] text-white font-bold rounded-xl mt-4">
          All Services
        </Link>
      </div>
    );
  }

  // Filter tech objects matching service technologies listed
  const serviceTechs = technologies.filter(t => service.technologies.includes(t.id));

  // Filter portfolio achievements matching service related ids
  const relatedProjects = portfolioProjects.filter(p => service.relatedProjects.includes(p.id));

  const Icon = iconMap[service.iconName] || Code;

  return (
    <div id={`service-detail-${service.id}`} className="bg-white">
      
      {/* 1. Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0A6EFF]/5 via-white to-white py-16 sm:py-24 border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A6EFF] hover:text-[#FF6B00] mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to All Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="p-3.5 bg-[#0A6EFF]/10 text-[#0A6EFF] w-fit rounded-2xl">
                <Icon className="w-8 h-8" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A2E] tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-[#0A6EFF] text-xs font-bold uppercase tracking-wider">
                GetTechGo Specialist Delivery
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {service.heroDescription}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="px-6 py-3 bg-[#0A6EFF] hover:bg-[#005ede] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors"
                >
                  Get a Free Quote for This Service
                </Link>
              </div>
            </div>

            {/* Visual HUD list */}
            <div className="lg:col-span-5 bg-gray-50 p-6 sm:p-8 rounded-3xl border border-gray-100 flex flex-col justify-between">
              <h3 className="text-sm font-bold text-[#1A1A2E] uppercase tracking-wider mb-6 pb-3 border-b border-gray-200/60">
                Core Deliverables Includes:
              </h3>
              <ul className="space-y-4">
                {service.whatWeBuild.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4.5 h-4.5 text-[#FF6B00] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-650 leading-relaxed font-normal">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Technologies Showcase */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-[#FF6B00] text-xs font-bold tracking-widest uppercase">Custom Tooling</h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A2E]">Frameworks & SDKs We Deploy</h3>
            <p className="text-xs sm:text-sm text-gray-400">We utilize secure database matrices alongside standard responsive layout libraries.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceTechs.map(tech => (
              <div key={tech.id} className="border border-gray-50 bg-gray-50/40 p-5 rounded-2xl flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A2E] flex items-center gap-1.5 uppercase">
                    {tech.name}
                    {tech.badge === "PRIMARY STACK" && (
                      <span className="text-[8px] bg-[#FF6B00]/15 text-[#e05d00] px-1.5 py-0.5 rounded-full font-bold font-mono">
                        Core Choice
                      </span>
                    )}
                  </h4>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Steps Pipeline */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[#0A6EFF] text-xs font-bold tracking-widest uppercase">Workflow Blueprint</h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A2E]">Milestones of Execution</h3>
            <p className="text-xs sm:text-sm text-gray-500">From code verification sandboxes to AWS migrations, we follow structured phases.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {service.progressSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-gray-100 font-heading block mb-2">
                    0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-bold">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Service Detail spotlight page specific for Web Development Laravel details */}
      {service.id === "web-development" && (
        <section className="py-16 bg-red-650 bg-gradient-to-r from-red-600 to-[#FF6B00] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="px-3 py-1 bg-white/20 text-white rounded-full text-[10px] font-black uppercase tracking-widest">
              Core Backend Framework Spotlight
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Laravel Web Engineering Specialists</h2>
            <p className="text-white/85 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              We specialize in custom **Laravel REST APIs**, elegant admin portals using **Laravel Filament**, high-performance frontend state mappings via **Inertia.js**, subscriptions SaaS systems, and automated queues databases.
            </p>
            <div className="pt-2">
              <Link to="/contact?tech=Laravel" className="inline-block px-6 py-3 bg-white text-[#1A1A2E] font-bold rounded-xl shadow-md text-xs sm:text-sm">
                Hire Laravel Specialist
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 5. Pricing Table Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingTable plans={service.billingPlans} serviceTitle={service.title} />
        </div>
      </section>

      {/* 6. Related Portfolio Achievements */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-[#F5F7FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A2E]">
                Related Case Audits
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-3">Projects delivered by our team within this category layout.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedProjects.map(proj => (
                <div key={proj.id}>
                  <PortfolioCard project={proj} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. FAQ Accordion Block */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqList={service.faq} />
        </div>
      </section>

      {/* 8. CTA consul bar */}
      <section className="py-16 bg-[#FF6B00] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to secure premium technology?</h2>
          <p className="text-white/85 text-xs sm:text-sm max-w-xl mx-auto">Get free custom consultation quotes. Get in touch with Shivam Maurya to blueprint your platform architecture.</p>
          <div className="pt-2">
            <Link
              to={`/contact?service=${encodeURIComponent(service.title)}`}
              className="px-8 py-4 bg-[#1A1A2E] hover:bg-black text-white font-bold rounded-2xl transition-all shadow-md text-xs sm:text-sm"
            >
              Get a Free Quote for This Service
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
