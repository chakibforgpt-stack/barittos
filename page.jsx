import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  TrendingUp,
  Award,
  Zap,
  Users,
  Brain,
  Shield,
  ChevronRight,
  PlayCircle,
  Star,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#010103] text-white selection:bg-[#F18F01]/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(241,143,1,0.12) 0%, rgba(122,59,223,0.08) 50%, transparent 70%)",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div
              className="inline-flex items-center space-x-2 border px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "rgba(241,143,1,0.08)",
                borderColor: "rgba(241,143,1,0.25)",
                color: "#F18F01",
              }}
            >
              <Zap size={14} className="fill-[#F18F01]" />
              <span>Next Generation Trading Education</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight lg:leading-[1.1]">
              Master the Art of <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #F18F01, #7A3BDF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Professional Trading
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed">
              Ordex Academy combines institutional-grade education with advanced
              AI analysis to transform your trading journey.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="/account/signup"
                className="w-full sm:w-auto px-8 py-4 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-2"
                style={{
                  background: "linear-gradient(135deg, #F18F01, #e07d00)",
                  boxShadow: "0 8px 32px rgba(241,143,1,0.35)",
                }}
              >
                <span>Join the Academy</span>
                <ChevronRight size={20} />
              </a>
              <a
                href="/courses"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-2"
              >
                <PlayCircle size={20} />
                <span>Explore Courses</span>
              </a>
            </div>

            <div className="pt-12 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
              {[
                { icon: Shield, label: "Secure Platform" },
                { icon: Award, label: "Certified Learning" },
                { icon: Users, label: "10k+ Community" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center space-x-2">
                  <Icon size={22} style={{ color: "#F18F01" }} />
                  <span className="font-medium text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Chart Mockup */}
        <div className="max-w-5xl mx-auto mt-20 px-4">
          <div
            className="relative rounded-3xl border border-white/10 bg-[#0A0A0E] p-2 overflow-hidden group"
            style={{ boxShadow: "0 0 80px rgba(241,143,1,0.08)" }}
          >
            <div
              className="absolute top-0 left-0 w-full h-0.5"
              style={{ background: "linear-gradient(90deg, #F18F01, #7A3BDF)" }}
            ></div>
            <div className="p-4 flex items-center justify-between border-b border-white/5">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="text-sm text-gray-500 font-mono tracking-widest">
                ORDEX_AI_CORE_SYSTEM_V2.0
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1611974717525-58a3b16f9795?auto=format&fit=crop&q=80&w=2000"
              alt="Trading Interface"
              className="w-full rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
            />
          </div>
        </div>
      </section>

      {/* AI Assistant Showcase */}
      <section
        className="py-32 relative overflow-hidden"
        style={{ background: "#08080C" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, rgba(122,59,223,0.07) 0%, transparent 60%)",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: "rgba(241,143,1,0.12)",
                  border: "1px solid rgba(241,143,1,0.2)",
                }}
              >
                <Brain size={32} style={{ color: "#F18F01" }} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Institutional Analysis <br />
                <span style={{ color: "#F18F01" }}>Powered by AI</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Upload your charts and let our AI analyze Volume Profile,
                Footprint, and Order Flow in seconds. Get precise entry and exit
                points used by hedge funds.
              </p>
              <ul className="space-y-4">
                {[
                  "Volume Profile Deep Analysis",
                  "Footprint & Order Flow Detection",
                  "VWAP & S/R Level Identification",
                  "Risk Management Evaluation",
                  "Professional Grade Reporting",
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: "rgba(241,143,1,0.1)",
                        border: "1px solid rgba(241,143,1,0.25)",
                      }}
                    >
                      <ChevronRight size={14} style={{ color: "#F18F01" }} />
                    </div>
                    <span className="text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <a
                  href="/ai-assistant"
                  className="inline-flex items-center space-x-3 bg-white text-[#010103] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all"
                >
                  <span>Try AI Assistant</span>
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-[80px]"
                style={{ background: "rgba(122,59,223,0.15)" }}
              ></div>
              <div className="relative bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-sm"
                      style={{ color: "#F18F01" }}
                    >
                      ANALYZING_CHART...
                    </span>
                    <span className="text-gray-500 text-sm">89% COMPLETE</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full w-[89%] rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #F18F01, #7A3BDF)",
                      }}
                    ></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <span className="block text-gray-500 text-xs uppercase mb-1">
                        Signal Quality
                      </span>
                      <span className="text-2xl font-bold text-green-400">
                        92/100
                      </span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <span className="block text-gray-500 text-xs uppercase mb-1">
                        Risk Level
                      </span>
                      <span className="text-2xl font-bold text-yellow-400">
                        Low
                      </span>
                    </div>
                  </div>
                  <div
                    className="p-6 rounded-2xl"
                    style={{
                      background: "rgba(241,143,1,0.08)",
                      border: "1px solid rgba(241,143,1,0.2)",
                    }}
                  >
                    <p
                      className="text-sm italic leading-relaxed"
                      style={{ color: "#F5B84A" }}
                    >
                      "Institutional absorption detected at 1.2450. Volume
                      Profile shows heavy accumulation. Suggested long entry
                      with target 1.2580."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-32 bg-[#010103]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Comprehensive Curriculum
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From complete beginners to advanced institutional traders, we have
              a path for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Trading Foundations",
                level: "Beginner",
                duration: "12 Hours",
                lessons: "24 Lessons",
                price: "$199",
                image:
                  "https://images.unsplash.com/photo-1611974717525-58a3b16f9795?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Order Flow Mastery",
                level: "Intermediate",
                duration: "20 Hours",
                lessons: "45 Lessons",
                price: "$499",
                image:
                  "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Institutional Execution",
                level: "Advanced",
                duration: "35 Hours",
                lessons: "60 Lessons",
                price: "$999",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
              },
            ].map((course, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-500"
                style={{ "--hover-border": "rgba(241,143,1,0.4)" }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                    style={{
                      background: "linear-gradient(135deg, #F18F01, #e07d00)",
                    }}
                  >
                    {course.level}
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold transition-colors group-hover:text-[#F18F01]">
                    {course.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm space-x-4">
                    <span className="flex items-center gap-1">
                      <PlayCircle size={14} /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={14} /> {course.lessons}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-2xl font-bold">{course.price}</span>
                    <a
                      href={`/courses/${i}`}
                      className="p-3 bg-white/5 hover:bg-[#F18F01] rounded-xl transition-all"
                    >
                      <ChevronRight size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section
        className="py-20 border-y border-white/10"
        style={{ background: "rgba(255,255,255,0.02)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { val: "10K+", label: "Students Enrolled" },
              { val: "95%", label: "Success Rate" },
              { val: "50+", label: "Global Instructors" },
              { val: "$2M+", label: "Student Profits" },
            ].map(({ val, label }) => (
              <div key={label} className="space-y-2">
                <span
                  className="text-5xl font-bold tracking-tight"
                  style={{ color: "#F18F01" }}
                >
                  {val}
                </span>
                <span className="block text-gray-500 font-medium text-sm">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 relative overflow-hidden">
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(122,59,223,0.1) 0%, transparent 70%)",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Investment in your Future
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your trading goals. All plans include
              lifetime access to updates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Starter */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] space-y-8 hover:bg-white/[0.08] transition-all">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Starter</h3>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </div>
              <ul className="space-y-4 text-gray-400">
                {[
                  "Basic Trading Course",
                  "Community Trade Room",
                  "Daily Market Analysis",
                ].map((f) => (
                  <li key={f} className="flex items-center space-x-3">
                    <ChevronRight size={16} style={{ color: "#F18F01" }} />
                    <span>{f}</span>
                  </li>
                ))}
                <li className="flex items-center space-x-3 opacity-30">
                  <ChevronRight size={16} />
                  <span>AI Assistant Access</span>
                </li>
              </ul>
              <button className="w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-all">
                Choose Plan
              </button>
            </div>

            {/* Pro - Recommended */}
            <div
              className="relative p-10 rounded-[40px] space-y-8 transform scale-105 z-10"
              style={{
                background: "linear-gradient(145deg, #F18F01, #7A3BDF)",
                boxShadow: "0 20px 60px rgba(241,143,1,0.25)",
              }}
            >
              <div
                className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ color: "#F18F01" }}
              >
                Recommended
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Pro Trader</h3>
                <div className="flex items-baseline space-x-1">
                  <span className="text-5xl font-bold text-white">$99</span>
                  <span className="text-orange-100">/month</span>
                </div>
              </div>
              <ul className="space-y-4 text-orange-50">
                {[
                  "Everything in Starter",
                  "AI Chart Analysis (Unlimited)",
                  "Order Flow Mastery Course",
                  "Weekly Mentorship Call",
                  "Prop Firm Challenge Prep",
                ].map((f) => (
                  <li key={f} className="flex items-center space-x-3">
                    <Star
                      size={16}
                      className="fill-white text-white shrink-0"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-5 bg-white rounded-2xl font-black text-lg transition-all hover:bg-gray-100 shadow-xl"
                style={{ color: "#F18F01" }}
              >
                Get Pro Access
              </button>
            </div>

            {/* Elite */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] space-y-8 hover:bg-white/[0.08] transition-all">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Elite Institutional</h3>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-bold">$299</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </div>
              <ul className="space-y-4 text-gray-400">
                {[
                  "Everything in Pro",
                  "1-on-1 Direct Mentorship",
                  "Exclusive Trading Desk",
                  "Lifetime Premium Support",
                ].map((f) => (
                  <li key={f} className="flex items-center space-x-3">
                    <ChevronRight size={16} style={{ color: "#F18F01" }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-all">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-fade-in { animation: fade-in 1.5s ease-out forwards; }
      `}</style>
    </div>
  );
}
