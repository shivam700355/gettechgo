import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, Phone, Clock, MapPin, MessageCircle, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { servicesData } from "../data/services";
import { technologies } from "../data/technologies";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preSelectedService = searchParams.get("service") || "";
  const preSelectedPlan = searchParams.get("plan") || "";
  const preSelectedTech = searchParams.get("tech") || "";

  useEffect(() => {
    document.title = "Contact Us | GetTechGo Software Solutions";
  }, []);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(preSelectedService);
  const [tech, setTech] = useState(preSelectedTech);
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState(
    preSelectedPlan ? `Hi, I am interested in ordering the ${preSelectedPlan} plan for this service.` : ""
  );

  // Status Alerts state
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !description) {
      setStatus("error");
      return;
    }

    // Success Simulation
    setStatus("success");
    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setTech("");
    setBudget("");
    setDescription("");
  };

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $3,000",
    "$3,000 - $6,000",
    "$6,000 - $10,005",
    "$10,000+"
  ];

  const uniqueTechNames = Array.from(new Set(technologies.map(t => t.name.split(" ")[0])));

  return (
    <div id="contact-page-view" className="bg-white min-h-screen">
      
      {/* 1. Page Header */}
      <section className="bg-gradient-to-b from-[#0A6EFF]/5 to-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A1A2E] tracking-tight">
            Consult With Us Free
          </h1>
          <p className="text-[#0A6EFF] text-xs font-bold tracking-widest uppercase">
            Let's Blueprint Your Next Big Digital Asset
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto font-normal text-sm sm:text-base leading-relaxed">
            Have a project in mind? Submit your requirements inside the form below or chat dynamically on WhatsApp with Shivam Maurya.
          </p>
        </div>
      </section>

      {/* 2. Main content form + information panel side-by-side grids */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form column (Left/Right depending on selection) */}
            <div className="lg:col-span-7 bg-white border border-gray-100 p-8 sm:p-10 rounded-3xl shadow-md space-y-6">
              <h2 className="text-lg font-bold text-[#1A1A2E]">
                Send Project Summary
              </h2>

              {status === "success" && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-start gap-3 text-xs sm:text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold">Form Submitted Successfully!</h4>
                    <p className="mt-1">Thank you. Shivam Maurya and GetTechGo team will review your project parameters and revert within 12 business hours.</p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl flex items-start gap-3 text-xs sm:text-sm animate-shake">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold">Validation Failure</h4>
                    <p className="mt-1">Please ensure all required fields (Name, Email, Phone number, and Description) are filled out correctly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 1. Name & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1A1A2E] block uppercase">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#0A6EFF] outline-none text-[#1A1A2E]"
                      placeholder="FirstName LastName"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1A1A2E] block uppercase">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#0A6EFF] outline-none text-[#1A1A2E]"
                      placeholder="corporate@yourcompany.com"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* 2. Phone line & budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1A1A2E] block uppercase">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#0A6EFF] outline-none text-[#1A1A2E]"
                      placeholder="e.g. +91 70075 10000"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1A1A2E] block uppercase">
                      Estimated Budget Range
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#0A6EFF] outline-none text-gray-500 bg-white"
                      value={budget}
                      onChange={e => setBudget(e.target.value)}
                    >
                      <option value="">Select Range Estimate</option>
                      {budgetRanges.map(rng => (
                        <option key={rng} value={rng}>{rng}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 3. Service dropdown & tech preference */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1A1A2E] block uppercase">
                      Service Category
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#0A6EFF] outline-none text-gray-500 bg-white"
                      value={service}
                      onChange={e => setService(e.target.value)}
                    >
                      <option value="">Specify Service Needed</option>
                      {servicesData.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1A1A2E] block uppercase">
                      Preferred Coding Technology
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#0A6EFF] outline-none text-gray-500 bg-white"
                      value={tech}
                      onChange={e => setTech(e.target.value)}
                    >
                      <option value="">Specify Language Stack</option>
                      {uniqueTechNames.map(tName => (
                        <option key={tName} value={tName}>{tName}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 4. Project description */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#1A1A2E] block uppercase">
                    Project Requirements Overview <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#0A6EFF] outline-none text-[#1A1A2E] resize-y"
                    placeholder="Describe client goals, database expectations, deadline triggers, or integrations requirements here..."
                    required
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    id="submit-contact-form"
                    type="submit"
                    className="w-full py-4 bg-[#FF6B00] hover:bg-[#e05d00] text-white font-bold rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    Send Inquire Request
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 " />
                  </button>
                </div>
              </form>
            </div>

            {/* Information panel column (Right) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Info panel */}
              <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl space-y-6">
                <h2 className="text-lg font-bold text-[#1A1A2E] pb-3 border-b border-gray-200">
                  Company Directory
                </h2>

                <ul className="space-y-4 text-sm sm:text-base font-normal">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0A6EFF] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-600">
                      Kanpur Outer, Uttar Pradesh, <br />India, Pincode 208001
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#FF6B00] shrink-0" />
                    <a href="mailto:contact@gettechgo.co.in" className="text-xs sm:text-sm text-gray-600 hover:text-[#0A6EFF] transition-colors leading-relaxed">
                      contact@gettechgo.co.in
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#0A6EFF] shrink-0" />
                    <a href="tel:+917007510000" className="text-xs sm:text-sm text-gray-600 hover:text-[#FF6B00] transition-colors leading-relaxed">
                      +91 700 751 0000
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-gray-600">
                      <p className="font-extrabold text-[#1A1A2E]">Working Hours Available</p>
                      <p className="text-xs">Monday - Saturday (09:00 AM - 07:00 PM IST)</p>
                    </div>
                  </li>
                </ul>

                {/* Instant WhatsApp Quick Link */}
                <div className="pt-4 border-t border-gray-250">
                  <a
                    id="contact-whatsapp-quick"
                    href="https://wa.me/917007510000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <MessageCircle className="w-5 h-5 stroke-none fill-white" />
                    Chat Instant on WhatsApp
                  </a>
                </div>
              </div>

              {/* Embedded Google Map iframe */}
              <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-md aspect-video">
                <iframe
                  title="GetTechGo Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114246.54519965907!2d80.25883267568537!3d26.449114811902404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9f57b417!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1716942000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
