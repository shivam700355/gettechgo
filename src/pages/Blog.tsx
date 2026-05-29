import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { blogPosts, BlogPost } from "../data/blog";
import { Calendar, User, Clock, ArrowLeft, Send, Sparkles, BookOpen } from "lucide-react";

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const postId = searchParams.get("post");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (postId) {
      const found = blogPosts.find(p => p.id === postId);
      setSelectedPost(found || null);
      if (found) {
        document.title = `${found.title} | GetTechGo Blog`;
      }
    } else {
      setSelectedPost(null);
      document.title = "Latest Blog | GetTechGo Software Blog";
    }
  }, [postId]);

  const selectPost = (id: string | null) => {
    if (id) {
      setSearchParams({ post: id });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div id="blog-page-view" className="bg-white min-h-screen">
      
      {/* 1. Header Banner */}
      {!selectedPost && (
        <section className="bg-gradient-to-b from-[#0A6EFF]/5 to-white py-16 sm:py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A1A2E] tracking-tight">
              GetTechGo Systems Blog
            </h1>
            <p className="text-[#0A6EFF] text-xs font-bold tracking-widest uppercase">
              Laravel, React state, AI Chatbot Integrations & Technical SEO Secrets
            </p>
            <p className="text-gray-500 max-w-2xl mx-auto font-normal text-sm sm:text-base leading-relaxed">
              We compile code blueprints, server speed measurements, organic ranking strategies, and customer support chatbot parameters.
            </p>
          </div>
        </section>
      )}

      {/* 2. Blog Main Container */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {selectedPost ? (
            /* Selected singular post details */
            <div className="max-w-3xl mx-auto space-y-8" id={`full-blog-post-${selectedPost.id}`}>
              <button
                onClick={() => selectPost(null)}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0A6EFF] hover:text-[#FF6B00] group focus:outline-none"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog List
              </button>

              <div className="space-y-4">
                <span className="px-3 py-1 bg-[#FF6B00]/10 text-[#FF6B00] rounded-full text-[10px] font-extrabold uppercase">
                  {selectedPost.category}
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1A1A2E] leading-tight">
                  {selectedPost.title}
                </h1>

                {/* Author and metadata line */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 border-b border-gray-100 pb-4">
                  <span className="flex items-center gap-1">
                    <User className="w-4.5 h-4.5" />
                    By {selectedPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4.5 h-4.5" />
                    {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4.5 h-4.5" />
                    {selectedPost.readTime}
                  </span>
                </div>
              </div>

              {/* Cover Image of the blog */}
              <div className="aspect-video rounded-3xl overflow-hidden bg-gray-100 border border-gray-100 shadow-md">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Actual content markup representation */}
              <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-6 font-normal">
                <p className="font-bold text-[#1A1A2E]">{selectedPost.excerpt}</p>
                <p>{selectedPost.content}</p>
                <p className="pt-4 border-t border-gray-50 text-xs text-gray-400">
                  Enjoyed this write-up? Leave your queries or talk directly to Shivam Maurya to integrate these precise layouts into your next big software deployment.
                </p>
              </div>

              {/* Inquire project card inside post details */}
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A2E]">Ready to map these parameters?</h4>
                  <p className="text-xs text-gray-400 mt-1">Get custom CRM workflows built according to your standards.</p>
                </div>
                <Link
                  to={`/contact?subject=Query%20on%20${encodeURIComponent(selectedPost.title)}`}
                  className="px-5 py-2.5 bg-[#0A6EFF] hover:bg-[#005ede] text-white text-xs font-bold rounded-xl shadow-sm hover:shadow-md transition-colors shrink-0"
                >
                  Consult with Us
                </Link>
              </div>
            </div>
          ) : (
            /* Grid directory of all blogs listed */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map(post => (
                <div
                  key={post.id}
                  id={`blog-card-item-${post.id}`}
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

                  {/* Description Box */}
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

                      <h3 className="text-base font-bold text-[#1A1A2E] group-hover:text-[#0A6EFF] transition-colors duration-150 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-400 flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        By {post.author}
                      </span>
                      <button
                        onClick={() => selectPost(post.id)}
                        className="text-xs font-bold text-[#0A6EFF] hover:text-[#FF6B00] transition-colors inline-flex items-center gap-1 cursor-pointer focus:outline-none"
                      >
                        Read Post <BookOpen className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Subscription box */}
      {!selectedPost && (
        <section className="py-16 bg-[#F5F7FA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-gray-100 p-8 sm:p-12 rounded-3xl shadow-sm text-center space-y-6">
            <Sparkles className="w-8 h-8 text-[#FF6B00] mx-auto animate-pulse" />
            <h2 className="text-2xl font-extrabold text-[#1A1A2E]">Subscribe to GetTechGo newsletter</h2>
            <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">Get automated updates about new Laravel features, WordPress security hardening guides, or Google Ads ROI tricks.</p>
            <form onSubmit={e => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your work email..."
                required
                className="px-4 py-3 border border-gray-200 outline-none focus:border-[#0A6EFF] rounded-xl flex-grow text-sm text-[#1A1A2E]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#0A6EFF] hover:bg-[#005ede] text-white text-xs font-bold rounded-xl transition-colors shrink-0 flex items-center justify-center gap-1"
              >
                Join Newsletter
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </section>
      )}

    </div>
  );
}
