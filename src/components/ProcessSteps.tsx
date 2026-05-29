import { motion } from "motion/react";
import { Search, PenTool, Layout, ShieldCheck, Rocket, Headphones } from "lucide-react";

export default function ProcessSteps() {
  const steps = [
    {
      step: "01",
      title: "Discovery",
      desc: "Deep requirements mapping, workshops, user flow drafting, and platform scope modeling.",
      icon: Search,
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      step: "02",
      title: "Design",
      desc: "Beautiful custom Figma wireframing, high-contrast prototypes, and style alignment sheets.",
      icon: PenTool,
      color: "bg-orange-50 text-orange-600 border-orange-100"
    },
    {
      step: "03",
      title: "Development",
      desc: "We write clean, safe Laravel controllers, API pathways, and responsive React hooks.",
      icon: Layout,
      color: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
      step: "04",
      title: "Testing",
      desc: "Rigorous quality checkups, API responses verification, device layouts audit and loading metrics check.",
      icon: ShieldCheck,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    {
      step: "05",
      title: "Deployment",
      desc: "Safe server migrations, secure SSL installations, containerizing scripts, and DNS pointing.",
      icon: Rocket,
      color: "bg-red-50 text-red-600 border-red-100"
    },
    {
      step: "06",
      title: "Support",
      desc: "24/7 priority maintenance assistance, regular server health updates and performance tuning.",
      icon: Headphones,
      color: "bg-cyan-50 text-cyan-600 border-cyan-100"
    }
  ];

  return (
    <section id="work-process" className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-[#0A6EFF] text-xs font-bold tracking-widest uppercase">
            Our Software Process
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] tracking-tight">
            How We Take Your Idea To Production
          </h3>
          <p className="text-gray-500 font-normal">
            We follow a modern agile software engineering model to secure on-time delivery with zero compromises in performance and security.
          </p>
        </div>

        {/* Process Steps List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 relative group overflow-hidden"
              >
                {/* Float Step Count */}
                <div className="absolute top-4 right-6 text-5xl font-black font-heading text-gray-50 group-hover:text-gray-100/70 transition-colors pointer-events-none">
                  {step.step}
                </div>

                <div className="space-y-4 relative z-10">
                  <div className={`p-3 border rounded-2xl w-fit ${step.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1A1A2E] group-hover:text-[#0A6EFF] transition-colors duration-150">
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
