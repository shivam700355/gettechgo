import { testimonials } from "../data/testimonials";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const curr = testimonials[index];

  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-[#0A6EFF] text-xs font-bold tracking-widest uppercase">
            Testimonials
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] tracking-tight">
            Loved By Growing Brands Worldwide
          </h3>
          <p className="text-gray-500 font-normal">
            Read how Shivam Maurya and the GetTechGo team deliver stable, reliable softwares to support daily consumer operations.
          </p>
        </div>

        {/* Carousel slide box */}
        <div className="relative bg-gradient-to-br from-[#0A6EFF]/5 to-white border border-[#0A6EFF]/15 rounded-3xl p-8 sm:p-12 shadow-md relative">
          <Quote className="absolute top-8 left-8 w-16 h-16 text-[#0A6EFF]/10 pointer-events-none" />

          {/* Interactive slides container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={curr.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Stars layout */}
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: curr.rating }).map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Speech */}
              <p className="text-base sm:text-lg text-gray-700 italic leading-relaxed">
                "{curr.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src={curr.image}
                  alt={curr.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-base font-bold text-[#1A1A2E]">{curr.name}</h4>
                  <p className="text-xs text-gray-500 font-semibold">{curr.role}, <span className="text-[#0A6EFF]">{curr.company}</span></p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="absolute right-8 bottom-8 flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-xl bg-white hover:bg-[#0A6EFF] hover:text-white border border-gray-100 shadow-sm transition-all focus:outline-none"
              title="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-xl bg-white hover:bg-[#0A6EFF] hover:text-white border border-gray-100 shadow-sm transition-all focus:outline-none"
              title="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
