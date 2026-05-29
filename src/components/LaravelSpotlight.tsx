import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Server, CheckCircle2, Shield, Flame, Terminal, Code2 } from "lucide-react";

export default function LaravelSpotlight() {
  const laravelFeatures = [
    { title: "REST API Development", desc: "Highly secure, fully documented OAuth2/Sanctum APIs for web and mobile syncing." },
    { title: "Filament / Admin Panels", desc: "Expert design of customer data registers, chart widgets, and inventory tools." },
    { title: "Livewire & Alpine UI", desc: "Single-page responsive UX actions without writing complex separate JS APIs." },
    { title: "Multi-tenant SaaS", desc: "Database schematization separating consumer datasets cleanly for cloud subscriptions." },
    { title: "Payment Integrations", desc: "Direct credit card, subscription, recurring merchant ledger setups using Stripe." },
    { title: "Queues & Async Jobs", desc: "Offload heavy processes like emailing and PDF synthesis to background worker pools." }
  ];

  return (
    <section id="laravel-showcase" className="py-20 lg:py-24 bg-gradient-to-br from-[#1A1A2E] to-[#121223] text-[#F5F7FA] relative overflow-hidden">
      {/* Decorative backing red glow for Laravel aesthetics */}
      <div className="absolute top-1/2 -left-30 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 right-0 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Spotlight Information left column */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest">
              <Flame className="w-3.5 h-3.5 fill-red-400 stroke-none" />
              Specialization Core
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight lead-snug">
              Our Core Backend Choice—Laravel
            </h2>
            <p className="text-gray-300 leading-relaxed font-normal">
              We leverage Laravel to architect ultra-secure, custom databases. With over <strong>80+ production Laravel web applications</strong> deployed successfully globally, we deliver stable APIs and CRM tools built to scale.
            </p>

            <div className="flex justify-center lg:justify-start gap-4">
              <Link
                id="cta-hire-laravel"
                to="/contact"
                className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                Hire Laravel Developer
              </Link>
              <Link
                to="/services/web-development"
                className="px-6 py-3.5 bg-gray-800/80 hover:bg-gray-800 text-gray-300 font-bold rounded-2xl border border-gray-700 transition-all duration-200"
              >
                Explore Web Services
              </Link>
            </div>
          </div>

          {/* Features Grid right column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {laravelFeatures.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 flex items-start gap-4"
              >
                <div className="p-2 bg-red-500/10 text-red-400 rounded-lg shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
