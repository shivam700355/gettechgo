import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Sparkles, Terminal, ArrowRight, Activity, Cpu } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero-banner" className="relative overflow-hidden bg-gradient-to-br from-white via-[#F0F7FF] to-white py-20 lg:py-32 border-b border-gray-150">
      {/* Decorative Floating Blobs */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#0A6EFF]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Context Text */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A6EFF]/10 text-[#0A6EFF] text-xs font-bold tracking-wide uppercase"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Empowering Mid-Markets & Agencies
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A1A2E] leading-tight font-heading"
            >
              We Build Powerful <br />
              <span className="bg-gradient-to-r from-[#0A6EFF] to-[#FF6B00] bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              From custom <strong>Laravel backends</strong> to reactive <strong>React.js frontends</strong>, Flutter cross-platform smartphone systems to custom fine-tuned <strong>AI Chatbots</strong>—GetTechGo delivers robust, end-to-end cloud engineering assets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <Link
                id="hero-start-cta"
                to="/contact"
                className="px-8 py-4 bg-[#0A6EFF] hover:bg-[#005ede] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                id="hero-portfolio-cta"
                to="/portfolio"
                className="px-8 py-4 bg-white border-2 border-gray-200 hover:border-[#0A6EFF] text-[#1A1A2E] hover:text-[#0A6EFF] font-bold rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 active:translate-y-0 transition-all duration-200 text-center"
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Shivam Info Spotlight */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="pt-6 border-t border-gray-100 flex items-center gap-3 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Reviewer 1"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Lead Designer"
                />
              </div>
              <div className="text-xs text-gray-500 text-left">
                <p className="font-semibold text-[#1A1A2E]">Shivam Maurya</p>
                <p>Lead Engineer & CRM Specialist (4+ Years Exp)</p>
              </div>
            </motion.div>
          </div>

          {/* Interactive Technology HUD representation */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square rounded-3xl bg-white border border-gray-100 shadow-2xl p-6 flex flex-col justify-between overflow-hidden"
            >
              {/* Backing patterns */}
              <div className="absolute inset-0 bg-radial-at-t from-[#0A6EFF]/5 to-transparent opacity-50" />
              
              <div className="flex justify-between items-center relative z-10 border-b border-gray-50 pb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-[#0A6EFF]" />
                  <span className="font-mono text-xs font-semibold text-gray-500">gettechgo_core.sh</span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              </div>

              {/* Dynamic Stack representation */}
              <div className="space-y-4 my-6 relative z-10 font-mono text-sm leading-relaxed text-gray-600 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-xs text-gray-400"># System parameters initialization</p>
                <p><span className="text-[#0A6EFF]">$</span> host: <span className="text-gray-800">gettechgo.co.in</span></p>
                <p><span className="text-[#0A6EFF]">$</span> primary_backend: <span className="text-[#FF6B00] font-bold">Laravel (PHP)</span></p>
                <p><span className="text-[#0A6EFF]">$</span> primary_frontend: <span className="text-[#0A6EFF] font-bold">React (Vite)</span></p>
                <p><span className="text-[#0A6EFF]">$</span> status: <span className="text-emerald-600 font-bold">Ready to Build!</span></p>
              </div>

              {/* Tag circles floating representation */}
              <div className="flex justify-around items-center pt-2 relative z-10">
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-red-50 text-red-500 rounded-2xl shadow-sm">
                    <span className="text-xs font-bold">PHP</span>
                  </div>
                  <span className="text-[10px] mt-1 font-mono text-gray-400">Laravel</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-sky-50 text-sky-500 rounded-2xl shadow-sm animate-pulse">
                    <span className="text-xs font-bold">SPA</span>
                  </div>
                  <span className="text-[10px] mt-1 font-mono text-gray-400">ReactJS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-indigo-50 text-[#005ede] rounded-2xl shadow-sm">
                    <span className="text-xs font-bold">IOS</span>
                  </div>
                  <span className="text-[10px] mt-1 font-mono text-gray-400">Flutter</span>
                </div>
              </div>
            </motion.div>

            {/* floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 p-3 bg-white hover:shadow-xl rounded-2xl shadow-md border border-gray-100 flex items-center gap-2"
            >
              <Cpu className="w-5 h-5 text-[#FF6B00]" />
              <span className="text-xs font-bold text-[#1A1A2E]">AI Chatbots</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-4 p-2 bg-white hover:shadow-xl rounded-2xl shadow-md border border-gray-100 flex items-center gap-2"
            >
              <Activity className="w-5 h-5 text-emerald-500" />
              <span className="text-xs font-bold text-[#1A1A2E]">ERP & CRM Spec</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
