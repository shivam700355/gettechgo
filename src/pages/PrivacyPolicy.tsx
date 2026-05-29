import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | GetTechGo Software Group";
  }, []);

  return (
    <div id="privacy-policy-view" className="bg-white min-h-screen">
      
      {/* Target Title banner */}
      <section className="bg-gradient-to-b from-[#0A6EFF]/5 to-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
            Last Updated: May 29, 2026
          </p>
        </div>
      </section>

      {/* Structured privacy context */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 text-sm sm:text-base leading-relaxed space-y-8 font-normal">
          <p>
            Welcome to GetTechGo ("we," "our," "us"). We specialize in custom software developments, mobile app code writing, and digital marketing optimizations. This Privacy Policy details how we secure, process, and handle our clients' corporate information when visiting our website (https://gettechgo.co.in) or configuring client systems.
          </p>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#1A1A2E] uppercase">1. Information We Collect</h2>
            <p>
              When inquiring about software estimations or submitting quotes through our contact modules, we request essential identifier parameters:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm">
              <li>Individual Name and corporate affiliations.</li>
              <li>Active business email addresses.</li>
              <li>Functional telephone contact numbers.</li>
              <li>Project scope expectations and estimated budget parameters.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#1A1A2E] uppercase">2. Use of Information</h2>
            <p>
              Collected coordinates are used exclusively to evaluate development requirements, compile project quotes, or dispatch career application replies. We do not distribute database files, sell individual emails, or use tracking algorithms outside of technical Google Analytics 4 filters.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#1A1A2E] uppercase">3. Security Metrics</h2>
            <p>
              We implement industry-standard database protection models. All server-side data lines use secure Nginx reverse proxies, SSL certificate pipelines, and password encryption models managed by lead engineers, preventing unauthorized database intrusions or information leakages.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#1A1A2E] uppercase">4. Owner Custody handovers</h2>
            <p>
              Once project financial milestones are completely cleared, full intellectual property custody, software codes, and server parameters are fully transferred to the client, under strict complete non-disclosure agreements.
            </p>
          </div>

          <p className="pt-6 border-t border-gray-100 text-xs text-gray-450 leading-relaxed font-normal">
            For doubts or questions concerning data security metrics, contact us dynamically via email at <a href="mailto:contact@gettechgo.co.in" className="text-[#0A6EFF] hover:underline">contact@gettechgo.co.in</a>.
          </p>
        </div>
      </section>

    </div>
  );
}
