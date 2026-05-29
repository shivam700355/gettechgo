import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import ServicesGrid from "../components/ServicesGrid";
import TechStackTabs from "../components/TechStackTabs";
import LaravelSpotlight from "../components/LaravelSpotlight";
import TestimonialSection from "../components/TestimonialSection";
import ProcessSteps from "../components/ProcessSteps";
import BlogPreview from "../components/BlogPreview";
import CTABanner from "../components/CTABanner";
import { ShieldCheck, Zap, Award, ThumbsUp } from "lucide-react";

export default function Home() {
  useEffect(() => {
    document.title = "GetTechGo | Premium Software Development & Digital Marketing";
  }, []);

  return (
    <div id="home-view" className="bg-white">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Stats */}
      <StatsSection />

      {/* 3. Services Grid */}
      <ServicesGrid limit={8} />

      {/* 4. Technologies tabs */}
      <TechStackTabs />

      {/* 5. Laravel Spotlight custom view */}
      <LaravelSpotlight />

      {/* 6. Why Choose GetTechGo Section */}
      <section id="why-choose-us" className="py-20 bg-white border-t border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-[#FF6B00] text-xs font-bold tracking-widest uppercase">
              Core Strengths
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] tracking-tight">
              Why Partner with GetTechGo?
            </h3>
            <p className="text-gray-500 font-normal">
              We focus on structural integrity, clean code conventions, transparent pricing matrix, and dedicated developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="p-6 border border-gray-100 rounded-3xl bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-[#0A6EFF]/10 text-[#0A6EFF] rounded-2xl w-fit mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#1A1A2E]">Expert Team</h4>
              <p className="text-xs text-gray-500 leading-relaxed mt-2 font-normal">
                Led by Shivam Maurya with 4+ years of expertise. We write standard MVC modules and modular React hooks.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 border border-gray-100 rounded-3xl bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-[#FF6B00]/10 text-[#FF6B00] rounded-2xl w-fit mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#1A1A2E]">On-Time Delivery</h4>
              <p className="text-xs text-gray-500 leading-relaxed mt-2 font-normal">
                We design chronological milestone charts. Our clients track progress in real-time with zero shipping delays.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 border border-gray-100 rounded-3xl bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl w-fit mb-4">
                <ThumbsUp className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#1A1A2E]">Affordable Pricing</h4>
              <p className="text-xs text-gray-500 leading-relaxed mt-2 font-normal">
                Bespoke plans mapped exactly to project sizes. We build custom softwares with zero monthly seat licenses.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 border border-gray-100 rounded-3xl bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl w-fit mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#1A1A2E]">24/7 Support</h4>
              <p className="text-xs text-gray-500 leading-relaxed mt-2 font-normal">
                We monitor servers and provide prioritized assistance to satisfy active user requests seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Work Process Flow */}
      <ProcessSteps />

      {/* 8. Testimonials Section */}
      <TestimonialSection />

      {/* 9. Blog Preview list */}
      <BlogPreview />

      {/* 10. CTABanner bottom */}
      <CTABanner />
    </div>
  );
}
