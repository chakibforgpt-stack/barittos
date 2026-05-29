import { useState, useEffect } from "react";
import { Menu, X, LayoutDashboard } from "lucide-react";
import useUser from "@/utils/useUser";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: user, loading } = useUser();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#010103]/90 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <img
              src="https://dtvoeevhaseb5.cloudfront.net/user-uploads/585021b0-6bd6-4fe8-8c81-edaba0e7992a.png"
              alt="Ordex Academy"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold tracking-tight text-[#FCFDFF]">
              Ordex <span className="text-[#F18F01]">Academy</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/courses"
              className="text-gray-400 hover:text-[#FCFDFF] transition-colors text-sm font-medium"
            >
              Courses
            </a>
            <a
              href="/orderflow-tools"
              className="text-gray-400 hover:text-[#FCFDFF] transition-colors text-sm font-medium"
            >
              OrderFlow Tools
            </a>

            {!loading && user && (
              <>
                <a
                  href="/dashboard"
                  className="text-gray-400 hover:text-[#FCFDFF] transition-colors text-sm font-medium"
                >
                  Dashboard
                </a>
                {user.role === "admin" && (
                  <a
                    href="/admin"
                    className="text-gray-400 hover:text-[#FCFDFF] transition-colors text-sm font-medium"
                  >
                    Admin
                  </a>
                )}
              </>
            )}

            {!loading && !user && (
              <div className="flex items-center space-x-3">
                <a
                  href="/account/signin"
                  className="text-gray-400 hover:text-white px-4 py-2 text-sm font-medium transition-colors"
                >
                  Sign In
                </a>
                <a
                  href="/account/signup"
                  className="px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg text-white"
                  style={{
                    background: "linear-gradient(135deg, #F18F01, #e07d00)",
                    boxShadow: "0 4px 20px rgba(241,143,1,0.3)",
                  }}
                >
                  Get Started
                </a>
              </div>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#010103]/98 backdrop-blur-xl absolute top-full left-0 w-full border-t border-white/10">
          <div className="px-6 pt-6 pb-10 space-y-4">
            <a
              href="/courses"
              className="block text-lg text-gray-300 hover:text-white py-2 font-medium"
            >
              Courses
            </a>
            <a
              href="/orderflow-tools"
              className="block text-lg text-gray-300 hover:text-white py-2 font-medium"
            >
              OrderFlow Tools
            </a>

            {!loading && user && (
              <>
                <a
                  href="/dashboard"
                  className="block text-lg text-gray-300 hover:text-white py-2 font-medium"
                >
                  Dashboard
                </a>
                {user.role === "admin" && (
                  <a
                    href="/admin"
                    className="block text-lg text-gray-300 hover:text-white py-2 font-medium"
                  >
                    Admin
                  </a>
                )}
              </>
            )}

            <div className="pt-4 space-y-3 border-t border-white/10">
              {!loading && user ? (
                <a
                  href="/dashboard"
                  className="w-full bg-white/10 text-white py-4 rounded-xl flex items-center justify-center space-x-2 font-bold"
                >
                  <LayoutDashboard size={20} className="text-[#F18F01]" />
                  <span>Go to Dashboard</span>
                </a>
              ) : (
                <>
                  <a
                    href="/account/signin"
                    className="block w-full text-center py-4 text-gray-300 border border-white/10 rounded-xl font-medium"
                  >
                    Sign In
                  </a>
                  <a
                    href="/account/signup"
                    className="block w-full text-center py-4 text-white rounded-xl font-bold"
                    style={{
                      background: "linear-gradient(135deg, #F18F01, #e07d00)",
                    }}
                  >
                    Start Learning
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
