import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { FAQItem } from "../data/services";

interface FAQProps {
  faqList: FAQItem[];
}

export default function FAQAccordion({ faqList }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div id="faq-accordions" className="space-y-12">
      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-[#0A6EFF] text-xs font-bold tracking-widest uppercase">
          Client Questions
        </h2>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A2E] tracking-tight">
          Frequently Answered Queries
        </h3>
        <p className="text-sm text-gray-500 font-normal">
          Got doubts about workflows, source codes, migrations, or quotes? Look up our answers or submit custom letters.
        </p>
      </div>

      {/* Accordion list box */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqList.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border border-gray-100 bg-white rounded-2xl overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center p-5 text-left text-[#1A1A2E] font-bold text-sm sm:text-base focus:outline-none"
              >
                <span>{item.q}</span>
                <span className={`p-1.5 rounded-lg ${isOpen ? "bg-[#0A6EFF]/10 text-[#0A6EFF]" : "bg-gray-50 text-gray-400"} transition-colors duration-200 shrink-0 ml-4`}>
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="p-5 pt-0 text-xs sm:text-sm text-gray-500 leading-relaxed font-normal border-t border-gray-50/50">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
