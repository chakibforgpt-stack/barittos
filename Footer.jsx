import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="border-t border-white/10 pt-20 pb-10"
      style={{ background: "#010103" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="https://dtvoeevhaseb5.cloudfront.net/user-uploads/585021b0-6bd6-4fe8-8c81-edaba0e7992a.png"
                alt="Ordex"
                className="w-9 h-9 object-contain"
              />
              <span className="text-xl font-bold text-white">
                Ordex <span style={{ color: "#F18F01" }}>Academy</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering traders with world-class education and advanced AI
              analysis tools. Join the next generation of professional traders.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 transition-all"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#F18F01";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.color = "rgb(156,163,175)";
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                ["Courses Catalog", "/courses"],
                ["AI Trading Bot", "/ai-assistant"],
                ["Trade Room", "/community"],
                ["Affiliate Program", "/affiliate"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-400 transition-colors hover:text-[#F18F01]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Support</h3>
            <ul className="space-y-4">
              {[
                ["Help Center", "/faq"],
                ["Terms of Service", "/terms"],
                ["Privacy Policy", "/privacy"],
                ["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-400 transition-colors hover:text-[#F18F01]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400">
              Stay updated with market insights and new courses.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                onFocus={(e) => (e.target.style.borderColor = "#F18F01")}
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                }
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-3 text-white outline-none transition-all w-full"
              />
              <button
                className="text-white px-4 py-3 rounded-r-lg transition-all font-bold"
                style={{
                  background: "linear-gradient(135deg, #F18F01, #e07d00)",
                }}
              >
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 Ordex Academy. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>Powered by Anything</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
