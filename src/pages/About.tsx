import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Sparkles, Trophy, Users, CheckCircle2, ChevronRight, Terminal } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About Us | GetTechGo Software and Systems";
  }, []);

  const values = [
    {
      title: "Absolute Integrity",
      desc: "Our code lines are transparent. We offer zero licensing charges and handover complete software IP sheets upon launch.",
      icon: Shield,
    },
    {
      title: "Craft-Driven Speed",
      desc: "We leverage robust frameworks like Laravel and Vite React to deliver clean digital software products within deadlines.",
      icon: Sparkles,
    },
    {
      title: "High concurrency",
      desc: "We scale server clusters, database structures, and caching layers to protect consumer speed metrics completely.",
      icon: Trophy,
    },
  ];

  return (
    <div id="about-us-view" className="bg-white">
      {/* 1. Page Title Header */}
      <section className="bg-gradient-to-b from-[#0A6EFF]/5 to-white py-16 lg:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A1A2E] tracking-tight">
            About GetTechGo
          </h1>
          <p className="text-[#0A6EFF] text-xs font-bold tracking-widest uppercase">
            Code with Passion, Build to Scale
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto font-normal text-sm sm:text-base leading-relaxed">
            GetTechGo is an agile full-service software development and digital marketing agency delivering custom-engineered backends, responsive modern apps, and conversational chatbot systems.
          </p>
        </div>
      </section>

      {/* 2. Core Bio & Shivam Spotlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Frame */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-square rounded-3xl bg-gray-50 border border-gray-100 shadow-xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80"
                  alt="Shivam Maurya Lead Engineer"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 p-4 bg-[#FF6B00] text-white rounded-2xl shadow-xl">
                  <p className="text-3xl font-extrabold font-heading">4+</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Bios contexts */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 bg-[#0A6EFF]/10 text-[#0A6EFF] text-xs font-bold uppercase rounded-lg">
                Lead Specialist Profile
              </span>
              <h2 className="text-3xl font-extrabold text-[#1A1A2E] tracking-tight">
                Shivam Maurya — Senior Software Engineer
              </h2>
              <p className="text-sm sm:text-base text-gray-650 leading-relaxed font-normal">
                As a freelance developer and technology consultant, I founded GetTechGo to build production-grade web applications. Over my <strong>4 years of industry software experience</strong>, I have designed multi-tenant CRM systems, automated medical reservation apps, custom Laravel models, and streamlined digital campaigns.
              </p>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                We believe in architectural honesty. We avoid larping with unrequested tech gimmicks or mock systems, focusing instead on delivering real-world databases, verified APIs, and intuitive user experiences.
              </p>

              {/* Framework Highlights checkboxes */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1A1A2E]">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B00]" />
                  Laravel (PHP) & React
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1A1A2E]">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B00]" />
                  Cross-Platform Flutter
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1A1A2E]">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B00]" />
                  Custom CRM Solutions Partner
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1A1A2E]">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B00]" />
                  Secure Cloud Architectures
                </div>
              </div>

              <div className="pt-4">
                <Link
                  id="about-cta-contact"
                  to="/contact"
                  className="px-6 py-3 bg-[#FF6B00] hover:bg-[#e05d00] text-white font-bold rounded-xl shadow-md transition-colors text-sm"
                >
                  Book Consultation with Shivam
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-[#0A6EFF] text-xs font-bold tracking-widest uppercase">
              Our Philosophy
            </h2>
            <h3 className="text-3xl font-extrabold text-[#1A1A2E] tracking-tight">
              Values Mapped to Client Prosperity
            </h3>
            <p className="text-gray-500 font-normal">
              We focus on clean coding guidelines, extensive security controls, and responsive workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm col-span-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-gray-50 text-[#0A6EFF] rounded-xl w-fit">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-[#1A1A2E]">
                      {v.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-normal">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Secondary Call to Action banner */}
      <section className="py-16 bg-[#1A1A2E] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to secure a premier tech partner?</h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto">Get free technical consultation to blueprint your platform. Chat directly on WhatsApp or leave an offline query.</p>
          <div className="flex justify-center gap-4 pt-2">
            <Link to="/contact" className="px-6 py-3.5 bg-[#0A6EFF] hover:bg-[#005ede] text-white font-bold rounded-xl shadow-md text-xs sm:text-sm">
              Contact Us Offline
            </Link>
            <a
              href="https://wa.me/917007510000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl shadow-md text-xs sm:text-sm"
            >
              Direct WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
