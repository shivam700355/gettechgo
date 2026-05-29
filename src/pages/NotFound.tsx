import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { AlertCircle, ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 Page Not Found | GetTechGo Error";
  }, []);

  return (
    <div id="not-found-view" className="min-h-[70vh] flex items-center justify-center bg-gray-50/50 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white border border-gray-100 p-8 sm:p-10 rounded-3xl shadow-xl text-center space-y-6"
      >
        <div className="p-4 bg-red-50 text-red-500 rounded-full w-fit mx-auto animate-bounce">
          <AlertCircle className="w-12 h-12" />
        </div>

        <div className="space-y-2">
          <h1 className="text-5xl font-black text-[#1A1A2E] font-heading">404</h1>
          <h2 className="text-lg font-extrabold text-gray-700">Page Not Found</h2>
          <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed">
            The requested page does not exist or has been relocated within our systems structure.
          </p>
        </div>

        <div className="pt-2">
          <Link
            id="not-found-back-home"
            to="/"
            className="w-full py-4.5 bg-[#0A6EFF] hover:bg-[#005ede] text-white font-bold rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm justify-center"
          >
            <Home className="w-4 h-4" />
            Go Home
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
