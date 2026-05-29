import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { servicesData } from "../data/services";
import { Globe, Smartphone, Brain, TrendingUp, Code, Layers, ShoppingCart, Cloud, ArrowRight } from "lucide-react";

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

export default function ServicesGrid({ limit = 8 }: { limit?: number }) {
  const displayedServices = servicesData.slice(0, limit);

  return (
    <section id="services-overview" className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-[#0A6EFF] text-xs font-bold tracking-widest uppercase">
            What We Do
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] tracking-tight">
            Comprehensive Digital Services & Scalable Engineering
          </h3>
          <p className="text-gray-500 font-normal">
            Whether you need a dynamic Laravel CRM, a flawless iOS/Android mobile app, high-conversion eCommerce store development, or an AI-powered conversational chatbot, we have you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedServices.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Code;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Icon Panel */}
                  <div className="p-3.5 bg-[#0A6EFF]/5 text-[#0A6EFF] rounded-2xl w-fit group-hover:bg-[#0A6EFF] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1A1A2E] group-hover:text-[#0A6EFF] transition-colors duration-150">
                      {service.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                      {service.description.substring(0, 140)}...
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-50 mt-6 flex items-center justify-between">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:text-[#0A6EFF] transition-colors group-hover:translate-x-1 duration-150"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
