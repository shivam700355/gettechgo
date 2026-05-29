import { useEffect } from "react";
import { Link } from "react-router-dom";
import { technologies, Technology } from "../data/technologies";
import { Server, Layout, Smartphone, Database, Cloud, Brain, BarChart, ShoppingBag, Terminal, Sparkles, CheckCircle } from "lucide-react";

const categories = [
  { id: "backend", name: "Backend Frameworks", icon: Server },
  { id: "frontend", name: "Frontend Libraries", icon: Layout },
  { id: "mobile", name: "Mobile Developments", icon: Smartphone },
  { id: "database", name: "Database Repositories", icon: Database },
  { id: "cloud", name: "Cloud Infrastructure & DevOps", icon: Cloud },
  { id: "ai", name: "Smart AI & Chatbots", icon: Brain },
  { id: "marketing", name: "Digital Marketing Utilities", icon: BarChart },
  { id: "cms", name: "Content Management & E-Commerce", icon: ShoppingBag },
  { id: "other", name: "Development Tools & Integrations", icon: Terminal },
];

export default function Technologies() {
  useEffect(() => {
    document.title = "Our Tech Stack | GetTechGo Software and Systems";
  }, []);

  return (
    <div id="technologies-page-view" className="bg-white">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#0A6EFF]/5 to-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A1A2E] tracking-tight">
            Our Technology Stack We Deploy
          </h1>
          <p className="text-[#0A6EFF] text-xs font-bold tracking-widest uppercase">
            Robust Frameworks, Bulletproof Databases & AI Grounding Systems
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto font-normal text-sm sm:text-base leading-relaxed">
            We operate fully audited frameworks, database tables, and cloud deployment scripts. Laravel remains our core database backend choice, backed by clean React hook engines.
          </p>
        </div>
      </section>

      {/* 2. Categorized Grid Blocks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {categories.map(cat => {
            const CatIcon = cat.icon;
            const catTechs = technologies.filter(t => t.category === cat.id);

            return (
              <div key={cat.id} id={`tech-category-${cat.id}`} className="space-y-8">
                {/* Section title banner */}
                <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                  <div className="p-2.5 bg-[#0A6EFF]/10 text-[#0A6EFF] rounded-xl shrink-0">
                    <CatIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E]">
                      {cat.name}
                    </h2>
                    <p className="text-[10px] sm:text-xs text-gray-400 font-semibold uppercase tracking-wider mt-0.5">
                      Verified {cat.id} suite parameters
                    </p>
                  </div>
                </div>

                {/* Subtech Card list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catTechs.map(tech => {
                    const isPrimary = tech.badge === "PRIMARY STACK";
                    return (
                      <div
                        key={tech.id}
                        id={`tech-tile-${tech.id}`}
                        className={`p-6 border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                          isPrimary
                            ? "border-2 border-[#FF6B00] bg-gradient-to-br from-[#FF6B00]/5 via-white to-white"
                            : "border-gray-100 bg-white"
                        }`}
                      >
                        {isPrimary && (
                          <div className="absolute top-0 right-0 p-1 bg-[#FF6B00] text-white text-[9px] font-extrabold tracking-widest uppercase rounded-bl-xl flex items-center gap-0.5">
                            <Sparkles className="w-3 h-3" /> Core Selection
                          </div>
                        )}

                        <div className="space-y-3">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="text-sm sm:text-base font-bold text-[#1A1A2E] flex items-center gap-1.5">
                              {tech.name}
                              {isPrimary && <CheckCircle className="w-4 h-4 text-[#FF6B00]" />}
                            </h3>
                            <span
                              className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md tracking-wider shrink-0 ${
                                isPrimary
                                  ? "bg-[#FF6B00]/25 text-[#e05d00]"
                                  : tech.badge === "Expert"
                                  ? "bg-[#0A6EFF]/10 text-[#0A6EFF]"
                                  : "bg-gray-100 text-gray-500"
                              }`}
                            >
                              {tech.badge}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 leading-relaxed font-normal">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* 3. Bottom call response */}
      <section className="py-16 bg-[#1A1A2E] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Need Custom Tech Integrations?</h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto">We construct custom microservices, Stripe ledger flows, and headless CMS integrations according to client standards.</p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#0A6EFF] hover:bg-[#005ede] text-white font-bold rounded-2xl transition-all shadow-md text-xs sm:text-sm"
            >
              Talk to Shivam Maurya
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
