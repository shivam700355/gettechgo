import { Link } from "react-router-dom";
import { blogPosts } from "../data/blog";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";

export default function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog-preview-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-16">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-[#0A6EFF] text-xs font-bold tracking-widest uppercase">
              Our Updates
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] tracking-tight">
              Latest Insights & Tech News
            </h3>
            <p className="text-gray-500 font-normal text-sm sm:text-base">
              Stay ahead of competitor curves. Read guides about Laravel APIs, mobile frameworks optimization, and technical search engine standards from our team.
            </p>
          </div>
          <Link
            to="/blog"
            className="px-5 py-2.5 bg-gray-50 hover:bg-[#0A6EFF]/5 text-[#1A1A2E] hover:text-[#0A6EFF] border border-gray-100 rounded-xl text-sm font-bold transition-all duration-200 shrink-0 inline-flex items-center gap-1"
          >
            Read All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map(post => (
            <div
              key={post.id}
              className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-50">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-white text-[10px] font-extrabold uppercase text-[#FF6B00] rounded-full shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Text Description Box */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#1A1A2E] group-hover:text-[#0A6EFF] transition-colors duration-150 line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400 flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    By {post.author}
                  </span>
                  <Link
                    to={`/blog?post=${post.id}`}
                    className="text-xs font-bold text-[#0A6EFF] hover:text-[#FF6B00] transition-colors inline-flex items-center gap-1"
                  >
                    Read Post <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
