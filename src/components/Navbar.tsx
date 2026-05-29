import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Terminal, Globe, Smartphone, Brain, TrendingUp, Code, Layers, ShoppingCart, Cloud } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close menus on route changes
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileAccordionOpen(false);
  }, [location.pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const serviceItems = [
    { name: "Web Development", path: "/services/web-development", icon: Globe },
    { name: "App Development", path: "/services/app-development", icon: Smartphone },
    { name: "AI Chatbot Development", path: "/services/chatbot-development", icon: Brain },
    { name: "Digital Marketing", path: "/services/digital-marketing", icon: TrendingUp },
    { name: "Custom Software", path: "/services/custom-software", icon: Code },
    { name: "ERP & CRM Solutions", path: "/services/erp-crm", icon: Layers },
    { name: "E-Commerce Solutions", path: "/services/ecommerce", icon: ShoppingCart },
    { name: "Cloud & DevOps", path: "/services/cloud-devops", icon: Cloud },
  ];

  return (
    <nav
      id="main-navbar"
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo & Branding */}
          <div className="flex-shrink-0 flex items-center">
            <Link id="nav-logo" to="/" className="flex items-center gap-2 group">
              <div className="p-2.5 bg-[#0A6EFF]/10 rounded-xl group-hover:bg-[#0A6EFF]/20 transition-all duration-300">
                <Terminal className="w-6 h-6 text-[#0A6EFF]" />
              </div>
              <span className="font-[#1A1A2E] text-2xl font-bold tracking-tight bg-gradient-to-r from-[#1A1A2E] to-[#0A6EFF] bg-clip-text text-transparent">
                GetTechGo
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:text-[#0A6EFF] ${
                  isActive ? "text-[#0A6EFF]" : "text-[#1A1A2E]/80"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:text-[#0A6EFF] ${
                  isActive ? "text-[#0A6EFF]" : "text-[#1A1A2E]/80"
                }`
              }
            >
              About
            </NavLink>

            {/* Hover / Dropdown Services Link */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                id="btn-services-dropdown"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:text-[#0A6EFF] focus:outline-none ${
                  location.pathname.startsWith("/services") ? "text-[#0A6EFF]" : "text-[#1A1A2E]/80"
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    id="desktop-services-dropdown"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 mt-1 w-80 bg-white border border-gray-100 rounded-2xl shadow-xl py-3 z-50 grid grid-cols-1 gap-1 px-2"
                  >
                    {serviceItems.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={idx}
                          to={item.path}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-150 group"
                        >
                          <div className="p-2 bg-[#0A6EFF]/5 text-[#0A6EFF] rounded-lg group-hover:bg-[#0A6EFF] group-hover:text-white transition-colors duration-200">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#1A1A2E] group-hover:text-[#0A6EFF] transition-colors duration-150">
                              {item.name}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              to="/technologies"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:text-[#0A6EFF] ${
                  isActive ? "text-[#0A6EFF]" : "text-[#1A1A2E]/80"
                }`
              }
            >
              Technologies
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:text-[#0A6EFF] ${
                  isActive ? "text-[#0A6EFF]" : "text-[#1A1A2E]/80"
                }`
              }
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:text-[#0A6EFF] ${
                  isActive ? "text-[#0A6EFF]" : "text-[#1A1A2E]/80"
                }`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:text-[#0A6EFF] ${
                  isActive ? "text-[#0A6EFF]" : "text-[#1A1A2E]/80"
                }`
              }
            >
              Careers
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:text-[#0A6EFF] ${
                  isActive ? "text-[#0A6EFF]" : "text-[#1A1A2E]/80"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center">
            <Link
              id="nav-quote-cta"
              to="/contact"
              className="px-5 py-2.5 bg-[#FF6B00] hover:bg-[#e05d00] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl hover:bg-gray-100 text-[#1A1A2E] focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-semibold ${
                    isActive ? "bg-[#0A6EFF]/5 text-[#0A6EFF]" : "text-[#1A1A2E]"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-semibold ${
                    isActive ? "bg-[#0A6EFF]/5 text-[#0A6EFF]" : "text-[#1A1A2E]"
                  }`
                }
              >
                About Us
              </NavLink>

              {/* Mobile Service Accordion */}
              <div>
                <button
                  id="mobile-services-accordion"
                  onClick={() => setMobileAccordionOpen(!mobileAccordionOpen)}
                  className="w-full flex justify-between items-center px-4 py-3 rounded-xl text-base font-semibold text-[#1A1A2E] hover:bg-gray-50 focus:outline-none"
                >
                  Services
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileAccordionOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {mobileAccordionOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-6 pr-4 space-y-1 overflow-hidden bg-gray-50/50 rounded-xl mt-1"
                    >
                      {serviceItems.map((item, idx) => (
                        <NavLink
                          key={idx}
                          to={item.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm font-semibold rounded-lg ${
                              isActive ? "text-[#0A6EFF]" : "text-[#1A1A2E]/80"
                            }`
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/technologies"
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-semibold ${
                    isActive ? "bg-[#0A6EFF]/5 text-[#0A6EFF]" : "text-[#1A1A2E]"
                  }`
                }
              >
                Technologies
              </NavLink>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-semibold ${
                    isActive ? "bg-[#0A6EFF]/5 text-[#0A6EFF]" : "text-[#1A1A2E]"
                  }`
                }
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-semibold ${
                    isActive ? "bg-[#0A6EFF]/5 text-[#0A6EFF]" : "text-[#1A1A2E]"
                  }`
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/careers"
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-semibold ${
                    isActive ? "bg-[#0A6EFF]/5 text-[#0A6EFF]" : "text-[#1A1A2E]"
                  }`
                }
              >
                Careers
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-semibold ${
                    isActive ? "bg-[#0A6EFF]/5 text-[#0A6EFF]" : "text-[#1A1A2E]"
                  }`
                }
              >
                Contact Us
              </NavLink>

              <div className="pt-4 border-t border-gray-100 pr-4">
                <Link
                  id="mobile-quote-cta"
                  to="/contact"
                  className="block w-full text-center px-4 py-3 bg-[#FF6B00] hover:bg-[#e05d00] text-white text-base font-bold rounded-xl shadow-md transition-all duration-200"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
