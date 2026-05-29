import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Technologies from "./pages/Technologies";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

// Sub-Services wrapper pages
import WebDevelopment from "./pages/services/WebDevelopment";
import AppDevelopment from "./pages/services/AppDevelopment";
import ChatbotDevelopment from "./pages/services/ChatbotDevelopment";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import CustomSoftware from "./pages/services/CustomSoftware";
import ErpCrm from "./pages/services/ErpCrm";
import Ecommerce from "./pages/services/Ecommerce";
import CloudDevops from "./pages/services/CloudDevops";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        {/* Helper tracking reset scroll context on transitions */}
        <ScrollToTop />

        <div className="flex flex-col min-h-screen font-sans antialiased text-[#1A1A2E] bg-white selection:bg-[#0A6EFF]/10">
          {/* Main responsive navbar */}
          <Navbar />

          {/* Interactive Routes page blocks */}
          <main className="flex-grow">
            <Routes>
              {/* Directory Roots */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />

              {/* Individual subpage mappings for routing accuracy */}
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/app-development" element={<AppDevelopment />} />
              <Route path="/services/chatbot-development" element={<ChatbotDevelopment />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
              <Route path="/services/custom-software" element={<CustomSoftware />} />
              <Route path="/services/erp-crm" element={<ErpCrm />} />
              <Route path="/services/ecommerce" element={<Ecommerce />} />
              <Route path="/services/cloud-devops" element={<CloudDevops />} />

              {/* 404 Fallback routing */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Site-wide footer with all linkages */}
          <Footer />

          {/* Fixed floating circular triggers: WhatsApp contact & back-to-top */}
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
