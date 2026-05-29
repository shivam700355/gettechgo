import { Link } from "react-router-dom";
import { Terminal, Mail, Phone, Clock, MapPin, Linkedin, Github, Instagram, Twitter, Youtube, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Portfolio", path: "/portfolio" },
    { name: "Technologies We Use", path: "/technologies" },
    { name: "Latest Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  const servicesLinks = [
    { name: "Web Development", path: "/services/web-development" },
    { name: "App Development", path: "/services/app-development" },
    { name: "AI Chatbots", path: "/services/chatbot-development" },
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "Custom Software", path: "/services/custom-software" },
    { name: "ERP & CRM Tools", path: "/services/erp-crm" },
    { name: "E-Commerce", path: "/services/ecommerce" },
    { name: "Cloud & DevOps", path: "/services/cloud-devops" },
  ];

  const techLinks = [
    { name: "Laravel Backend", path: "/technologies" },
    { name: "React Frontend", path: "/technologies" },
    { name: "Flutter Cross-Platform", path: "/technologies" },
    { name: "OpenAI Chatbots", path: "/technologies" },
    { name: "Google Cloud Platform", path: "/technologies" },
    { name: "MySQL / Postgres", path: "/technologies" },
  ];

  return (
    <footer id="app-footer" className="bg-[#1A1A2E] text-[#F5F7FA] border-t border-gray-800">
      {/* Top Footer Panel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Panel */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-2.5 bg-[#0A6EFF]/20 rounded-xl">
                <Terminal className="w-6 h-6 text-[#0A6EFF]" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white group-hover:text-[#0A6EFF] transition-colors duration-200">
                GetTechGo
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed font-normal">
              High-performance software systems crafted with excellence. Powered by Shivam Maurya with 4+ years of expertise delivering secure Laravel APIs, React single-page platforms, AI chatbots, and CRM tools.
            </p>
            {/* Social Panel */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/65 hover:bg-[#0A6EFF] hover:text-white text-gray-400 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                title="LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/65 hover:bg-gray-700 hover:text-white text-gray-400 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                title="GitHub"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/65 hover:bg-[#FF6B00] hover:text-white text-gray-400 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                title="Instagram"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/65 hover:bg-sky-500 hover:text-white text-gray-400 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                title="Twitter"
              >
                <Twitter className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/65 hover:bg-red-600 hover:text-white text-gray-400 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                title="YouTube"
              >
                <Youtube className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6 lg:pl-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#FF6B00]">
              Quick Links
            </h4>
            <ul className="space-y-3 pt-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-150 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#FF6B00] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links Column */}
          <div className="space-y-6">
            <h4 className="text-base font-bold text-white uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#FF6B00]">
              Our Services
            </h4>
            <ul className="space-y-3 pt-2">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-150 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#0A6EFF] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-base font-bold text-white uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#FF6B00]">
              Let's Connect
            </h4>
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0A6EFF] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  Kanpur Outer, Uttar Pradesh, <br />India, Pin 208001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FF6B00] flex-shrink-0" />
                <a
                  href="tel:+917007510000"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  +91 700 751 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0A6EFF] flex-shrink-0" />
                <a
                  href="mailto:contact@gettechgo.co.in"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  contact@gettechgo.co.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-400">
                  <p className="font-semibold text-gray-300">Mon - Sat Available</p>
                  <p className="text-xs">09:00 AM - 07:00 PM IST</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-Footer panel */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            Copyright © {currentYear} <span className="text-white">GetTechGo</span>. Built with passion to build stellar web apps.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <p>
              Lead Developer: <span className="text-[#FF6B00] font-semibold">Shivam Maurya</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
