import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, Calendar, Clock, CheckCircle, ArrowRight, Server, Layout, Search } from "lucide-react";

export default function Careers() {
  useEffect(() => {
    document.title = "Careers | Join GetTechGo Software Team";
  }, []);

  const positions = [
    {
      id: "car-1",
      title: "Senior Exception Developer (Laravel Backend)",
      category: "backend",
      icon: Server,
      type: "Full-Time (Remote)",
      experience: "3+ Years",
      location: "India / Remote",
      desc: "Architect robust REST APIs, design database replication matrices with MySQL/Redis, and configure Filament dashboard packages."
    },
    {
      id: "car-2",
      title: "Senior Web Developer (React & Next.js)",
      category: "frontend",
      icon: Layout,
      type: "Full-Time (Remote)",
      experience: "3+ Years",
      location: "India / Remote",
      desc: "Implement responsive Tailwind templates, structure interactive state charts using Zustand/React Hooks, and adjust Vercel pre-renders."
    },
    {
      id: "car-3",
      title: "SEO Auditing & Technical PPC Manager",
      category: "marketing",
      icon: Search,
      type: "Full-Time (Remote)",
      experience: "2+ Years",
      location: "India / Remote",
      desc: "Audit on-page SEO structures using SEMrush, plan pay-per-click programmatic bidding setups in Google Ads, and manage Meta Ads pixels."
    }
  ];

  const perks = [
    "100% Fully Remote Work Independence",
    "Competitive Market Base Salaries",
    "Generous Annual Paid Leave Policies",
    "Dynamic Tech Budget Stipends for Hardware Upgrades"
  ];

  return (
    <div id="careers-page-view" className="bg-white">
      
      {/* 1. Header Title banner */}
      <section className="bg-gradient-to-b from-[#0A6EFF]/5 to-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A1A2E] tracking-tight">
            Careers at GetTechGo
          </h1>
          <p className="text-[#0A6EFF] text-xs font-bold tracking-widest uppercase">
            Let's Engineer Clean softs and campaigns Together
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto font-normal text-sm sm:text-base leading-relaxed">
            Join Shivam Maurya and a team of agile remote developers building next-generation web portals, mobile apps, and conversational AI interfaces.
          </p>
        </div>
      </section>

      {/* 2. Perks benefits list */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50/50 border border-gray-100/60 p-8 sm:p-12 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E]">
              Why You'll Love It Here
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal mt-2">
              We reject micromanagement and unnecessary meetings. We value clear software output, proper modular logic, and meeting milestone deadlines.
            </p>
          </div>
          <ul className="space-y-3">
            {perks.map((p, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-650 font-normal">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Job list cards */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E]">
              Current Open Positions
            </h2>
            <p className="text-xs text-gray-400 mt-2">Submit your resume and portfolio links directly for immediate screening reviews.</p>
          </div>

          <div className="space-y-6">
            {positions.map(pos => {
              const Icon = pos.icon;
              return (
                <div
                  key={pos.id}
                  id={`careers-job-${pos.id}`}
                  className="bg-white border border-gray-100 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#0A6EFF]/10 text-[#0A6EFF] rounded-xl">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#1A1A2E]">
                        {pos.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {pos.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {pos.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {pos.experience}
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
                      {pos.desc}
                    </p>
                  </div>

                  <Link
                    id={`btn-apply-${pos.id}`}
                    to={`/contact?subject=Application%20for%20${encodeURIComponent(pos.title)}`}
                    className="px-5 py-3 bg-[#0A6EFF] hover:bg-[#005ede] text-white text-xs font-bold rounded-xl shadow-sm hover:shadow-md transition-colors shrink-0 inline-flex items-center gap-1.5 focus:outline-none"
                  >
                    Apply Now
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
