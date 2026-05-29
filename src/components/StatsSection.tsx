import { motion } from "motion/react";
import { FolderCheck, Smile, Calendar, Wrench } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      id: "stat-1",
      number: "250+",
      label: "Projects Completed",
      sub: "Across India & Globally",
      icon: FolderCheck,
      color: "text-[#0A6EFF]",
      bg: "bg-[#0A6EFF]/10"
    },
    {
      id: "stat-2",
      number: "200+",
      label: "Happy Clients",
      sub: "98% Positive Feedback",
      icon: Smile,
      color: "text-[#FF6B00]",
      bg: "bg-[#FF6B00]/10"
    },
    {
      id: "stat-3",
      number: "6+",
      label: "Years Experience",
      sub: "Shivam Maurya Lead Exp",
      icon: Calendar,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      id: "stat-4",
      number: "15+",
      label: "Technologies",
      sub: "Full Stack Mastery",
      icon: Wrench,
      color: "text-purple-600",
      bg: "bg-purple-50"
    }
  ];

  return (
    <section id="stats-banner" className="py-12 bg-[#1A1A2E] text-white relative z-20 overflow-hidden border-y border-gray-800">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-[#0A6EFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#FF6B00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="p-3 bg-white/10 text-[#FF6B00] rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-[#FF6B00]" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-[#FF6B00] tracking-tight font-heading">
                  {stat.number}
                </h3>
                <p className="mt-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-gray-200">
                  {stat.label}
                </p>
                <p className="text-[11px] text-gray-400 mt-1">
                  {stat.sub}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
