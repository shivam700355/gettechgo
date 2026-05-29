import { PricingPlan } from "../data/services";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

interface PricingProps {
  plans: PricingPlan[];
  serviceTitle: string;
}

export default function PricingTable({ plans, serviceTitle }: PricingProps) {
  return (
    <div id="pricing-blocks" className="space-y-12">
      {/* Table Head */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-[#0A6EFF] text-xs font-bold tracking-widest uppercase">
          Subscription Fees & Project Estimates
        </h2>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A2E] tracking-tight">
          Flexible Development Plans Mapped to Your Budget
        </h3>
        <p className="text-sm text-gray-500 font-normal">
          No hidden fees or locked licenses. Choose standard plans or talk to Shivam Maurya for bespoke team arrangements.
        </p>
      </div>

      {/* Grid of pricing plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => {
          const isStandard = plan.name.toLowerCase().includes("standard") || plan.name.toLowerCase().includes("professional");
          return (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden ${
                isStandard
                  ? "border-2 border-[#0A6EFF] bg-white shadow-xl scale-105 z-10"
                  : "border border-gray-100 bg-white shadow-sm hover:shadow-md"
              }`}
            >
              {isStandard && (
                <div className="absolute top-0 right-0 p-1.5 bg-[#0A6EFF] text-white text-[9px] font-extrabold uppercase tracking-widest rounded-bl-xl shadow-sm">
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-[#1A1A2E]">{plan.name}</h4>
                  <p className="text-xs text-gray-400 mt-1">{plan.description}</p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-[#1A1A2E] tracking-tight">{plan.price}</span>
                  <span className="text-gray-400 text-xs font-bold ml-1">/ {plan.period}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 border-t border-gray-50 pt-6">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-600 font-normal">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Start CTA */}
              <div className="pt-8">
                <Link
                  to={`/contact?service=${encodeURIComponent(serviceTitle)}&plan=${encodeURIComponent(plan.name)}`}
                  className={`w-full py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 text-sm transition-all duration-200 outline-none ${
                    isStandard
                      ? "bg-[#0A6EFF] hover:bg-[#005ede] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
                      : "bg-gray-50 hover:bg-[#0A6EFF]/5 text-[#1A1A2E] hover:text-[#0A6EFF] border border-gray-100"
                  }`}
                >
                  Choose {plan.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
