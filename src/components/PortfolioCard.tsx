import React from "react";
import { PortfolioProject } from "../data/portfolio";
import { Link } from "react-router-dom";
import { ExternalLink, Calendar, User, Tag } from "lucide-react";

export default function PortfolioCard({ project }: { project: PortfolioProject }) {
  return (
    <div
      id={`portfolio-card-${project.id}`}
      className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group transform hover:-translate-y-1"
    >
      {/* Visual Image Header */}
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        {/* Category Overlay */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-extrabold uppercase tracking-wide text-[#0A6EFF] shadow-sm">
          {project.category}
        </div>
        
        {/* Impact Badge Overlay */}
        {project.impactBadge && (
          <div className="absolute bottom-4 right-4 px-3 py-1 bg-[#FF6B00] text-white rounded-full text-xs font-bold shadow-md">
            {project.impactBadge}
          </div>
        )}
      </div>

      {/* Details Box */}
      <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
        <div className="space-y-2">
          {/* Client Meta row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              {project.client}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
          </div>

          <h3 className="text-lg font-bold text-[#1A1A2E] group-hover:text-[#0A6EFF] transition-colors duration-150 line-clamp-1">
            {project.title}
          </h3>
          
          <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[10px] font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md"
              >
                <Tag className="w-2.5 h-2.5 text-gray-400" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Clicks action */}
        <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
          <Link
            id={`btn-live-${project.id}`}
            to="/contact"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#0A6EFF] hover:text-[#FF6B00] transition-colors"
          >
            Inquire Project Specs
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
