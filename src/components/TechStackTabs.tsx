import { useState } from "react";
import { motion } from "motion/react";
import { technologies, Technology } from "../data/technologies";
import { Server, Layout, Smartphone, Database, Cloud, Brain, BarChart, ShoppingBag, Terminal, Sparkles, CheckCircle } from "lucide-react";

// Local category mapper
const tabs = [
  { id: "backend", label: "Backend", icon: Server },
  { id: "frontend", label: "Frontend", icon: Layout },
  { id: "mobile", label: "Mobile Dev", icon: Smartphone },
  { id: "database", label: "Databases", icon: Database },
  { id: "cloud", label: "Cloud & DevOps", icon: Cloud },
  { id: "ai", label: "AI & Chatbots", icon: Brain },
];

export default function TechStackTabs() {
  const [activeTab, setActiveTab] = useState("backend");

  const filteredTech = technologies.filter(tech => {
    if (activeTab === "backend") return tech.category === "backend";
    if (activeTab === "frontend") return tech.category === "frontend";
    if (activeTab === "mobile") return tech.category === "mobile";
    if (activeTab === "database") return tech.category === "database";
    if (activeTab === "cloud") return tech.category === "cloud";
    if (activeTab === "ai") return tech.category === "ai";
    return false;
  });

  return (
    <section id="tech-stack-overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-[#FF6B00] text-xs font-bold tracking-widest uppercase">
            Technology Stack
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] tracking-tight">
            Our Multi-Framework Technical Competence
          </h3>
          <p className="text-gray-500 font-normal">
            We support multiple modern, secure, and performant technologies to fit your scaling metrics. Laravel serves as our robust primary back-end, customized for enterprise reliability.
          </p>
        </div>

        {/* Categories Tab Selector Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-gray-50 p-2 rounded-2xl border border-gray-100 max-w-4xl mx-auto">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 focus:outline-none ${
                  isActive
                    ? "text-[#0A6EFF] bg-white shadow-md border border-gray-100"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/60"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#0A6EFF]" : "text-gray-400"}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTech.map((tech, idx) => {
            const isPrimary = tech.badge === "PRIMARY STACK";
            return (
              <motion.div
                key={tech.id}
                layoutId={`tech-${tech.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isPrimary
                    ? "border-2 border-[#FF6B00] bg-gradient-to-br from-[#FF6B00]/5 via-white to-white"
                    : "border-gray-100 bg-white"
                }`}
              >
                {/* Visual Glow for Laravel Stack choice */}
                {isPrimary && (
                  <div className="absolute top-0 right-0 p-1 bg-[#FF6B00] text-white text-[9px] font-extrabold tracking-widest uppercase rounded-bl-xl flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Core Choice
                  </div>
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-[#1A1A2E] flex items-center gap-1.5">
                      {tech.name}
                      {isPrimary && <CheckCircle className="w-4 h-4 text-[#FF6B00]" />}
                    </h4>
                    <span
                      className={`text-[10px] font-extrabold px-2 py-1 rounded-md uppercase tracking-wider ${
                        isPrimary
                          ? "bg-[#FF6B00]/20 text-[#e05d00]"
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
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
