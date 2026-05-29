import { useEffect, useState } from "react";
import { portfolioProjects, PortfolioProject } from "../data/portfolio";
import PortfolioCard from "../components/PortfolioCard";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { FolderCheck, Globe, Smartphone, Brain, ShoppingCart, TrendingUp, Layers } from "lucide-react";

const filterTabs = [
  { id: "all", label: "All Projects", icon: FolderCheck },
  { id: "web", label: "Web Applications", icon: Globe },
  { id: "app", label: "Mobile Apps", icon: Smartphone },
  { id: "chatbot", label: "AI & Chatbots", icon: Brain },
  { id: "ecommerce", label: "E-Commerce", icon: ShoppingCart },
  { id: "marketing", label: "Digital Marketing", icon: TrendingUp },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    document.title = "Our Portfolio | GetTechGo Software Projects";
  }, []);

  const filteredProjects = portfolioProjects.filter(p => {
    if (activeFilter === "all") return true;
    return p.category === activeFilter;
  });

  return (
    <div id="portfolio-page-view" className="bg-white">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#0A6EFF]/5 to-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A1A2E] tracking-tight">
            Our Software Portfolio
          </h1>
          <p className="text-[#0A6EFF] text-xs font-bold tracking-widest uppercase">
            80+ Production Laravel backends, React SPAs, and Conversational Chatbots
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto font-normal text-sm sm:text-base leading-relaxed">
            Case studies tracking how we improve operation speeds, lower server overheads, and auto-convert consumer chats natively.
          </p>
        </div>
      </section>

      {/* 2. Interactive Filter Tabs Bar */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {filterTabs.map(tab => {
              const TabIcon = tab.icon;
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-305 focus:outline-none ${
                    isActive
                      ? "bg-[#0A6EFF] text-white shadow-md shadow-[#0A6EFF]/20"
                      : "bg-gray-50 text-gray-500 hover:text-gray-900 hover:bg-gray-100/70 border border-gray-100/50"
                  }`}
                >
                  <TabIcon className="w-4 h-4 shrink-0" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Portfolio Projects Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-100 max-w-2xl mx-auto">
              <Layers className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#1A1A2E]">No Projects Found</h3>
              <p className="text-xs text-gray-400 mt-1">We are actively building new services in this area.</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="mt-4 px-4 py-2 bg-[#0A6EFF] text-white text-xs font-bold rounded-lg"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map(project => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PortfolioCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

        </div>
      </section>

      {/* 4. Bottom conversion CTA banner */}
      <section className="py-20 bg-[#FF6B00] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">Like what you see? We can build your system next.</h2>
          <p className="text-white/85 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">Book a free project consultation to audit database bottlenecks and draw secure interface blueprints.</p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#1A1A2E] hover:bg-black text-white font-bold rounded-2xl transition-all shadow-md text-xs sm:text-sm"
            >
              Inquire Project Estimate Free
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
