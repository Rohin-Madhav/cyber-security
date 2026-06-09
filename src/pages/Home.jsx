import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import linuxImg from "../assets/Home/Linux_img.webp";
import NitCalicutImg from "../assets/logo/NIT_Calicut_Logo.png";
import GecThrissurImg from "../assets/logo/GEC_Thrissur_logo.png";
import CollageImg1 from "../assets/logo/Collage_logo_1.png";
import VidyaImg from "../assets/logo/Vidya_logo.png";
import CollageImg2 from "../assets/logo/Collage_logo_2.png";
import mysuruClgImg from "../assets/logo/mysurecollage_logo.png";
import MccBlrImg from "../assets/logo/MCC_Blr_logo.png";
import ChristImg from "../assets/logo/Christ_logo.png";
import CollageIMg3 from "../assets/logo/Collage_logo_3.png";
import CollageIMg4 from "../assets/logo/Collage_logo_4.png";
import AicteLogo from "../assets/logo/AICTE_Logo.png";
import MsmeLogo from "../assets/logo/MSME_Logo.png";
import StartupIndLogo from "../assets/logo/StartUpIndia_Logo.png";
import StartupKlLogo from "../assets/logo/StartUpMission.png";
import TbiLogo from "../assets/logo/TBI_Logo.png";
import heroVideo from "../assets/Videos/cyber-hero.mp4";
import VedioPlayer from "../components/VedioPlayer";

// ── IMAGE PLACEHOLDER ─────────────────────────────────
const ImgBox = ({ label, src, height = "h-64", className = "" }) => (
  <div
    className={`${height} ${className} rounded-2xl overflow-hidden`}
    style={{
      background: "linear-gradient(135deg,#e0f2fe,#f0f9ff)",
      border: "none",
    }}
  >
    {src ? (
      <img src={src} alt={label} className="w-full h-full object-cover" />
    ) : (
      <div className="h-full flex flex-col items-center justify-center gap-2">
        <svg
          className="w-8 h-8"
          style={{ color: "#7dd3fc" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>

        <span
          className="text-xs text-center px-4 font-medium"
          style={{ color: "#7dd3fc" }}
        >
          {label}
        </span>
      </div>
    )}
  </div>
);
// ── ANIMATED COUNTER ──────────────────────────────────
const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const num = parseInt(target.replace(/\D/g, ""));
          let current = 0;
          const step = Math.ceil(num / 60);
          const timer = setInterval(() => {
            current = Math.min(current + step, num);
            setCount(current);
            if (current >= num) clearInterval(timer);
          }, 25);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// ── DATA ──────────────────────────────────────────────
const STATS = [
  { value: "10000", suffix: "+", label: "Students Trained", icon: "👨‍💻" },
  { value: "100", suffix: "+", label: "Partner Institutions", icon: "🏛️" },
  { value: "200", suffix: "+", label: "Expert Trainers", icon: "🎓" },
  { value: "5", suffix: "+", label: "Years of Excellence", icon: "⭐" },
];

const LEARNING_PATHS = [
  {
    icon: "🛡️",
    title: "Certified Ethical Hacker (CEH)",
    desc: "Master the tools and techniques used by professional ethical hackers across real enterprise environments.",
    duration: "2 Months",
    level: "Intermediate",
  },
  {
    icon: "🔬",
    title: "Advanced Penetration Testing (CPT)",
    desc: "Deep-dive into network, web, and mobile penetration testing methodologies and professional reporting.",
    duration: "2 Months",
    level: "Advanced",
  },
  {
    icon: "🐛",
    title: "Bug Bounty Hunting",
    desc: "Learn to find and responsibly disclose vulnerabilities in live programs and earn real rewards.",
    duration: "6 Weeks",
    level: "Beginner–Advanced",
  },
  {
    icon: "📡",
    title: "SOC Analyst Training",
    desc: "Build skills to monitor, detect, and respond to security incidents in a Security Operations Centre.",
    duration: "6 Weeks",
    level: "Beginner",
  },
];

const WHY_CYBER = [
  {
    stat: "3.5M+",
    label: "Unfilled Jobs Globally",
    desc: "High Demand Industry",
    icon: "📈",
  },
  {
    stat: "₹12–40 LPA",
    label: "Average Salary Range",
    desc: "High Salary Potential",
    icon: "💰",
  },
  {
    stat: "100%",
    label: "Remote-Ready Roles",
    desc: "Work from Anywhere",
    icon: "🌍",
  },
  { stat: "∞", label: "Career Paths", desc: "Continuous Growth", icon: "🚀" },
];

const COURSES = [
  {
    title: "Ethical Hacking Mastery",
    duration: "30 Days",
    level: "Beginner to Intermediate",
    tag: "🔥 Most Popular",
    path: "/courses/CEH",
    desc: "Learn ethical hacking fundamentals through practical labs, Linux, networking, OSINT, social engineering, cryptography, and red teaming exercises.",
    topics: [
      "Kali Linux & Termux",
      "Nmap & Metasploit",
      "Social Engineering",
      "OSINT Investigation",
    ],
    gradient: "linear-gradient(135deg,#0ea5e9,#0284c7)",
  },

  {
    title: "Advanced Cybersecurity Professional",
    duration: "4-6 Months",
    level: "Beginner to Advanced",
    tag: "🏆 Career Track",
    path: "/courses/QCSP",
    desc: "Comprehensive cybersecurity training covering offensive and defensive security, AI-powered workflows, cloud security, and professional career preparation.",
    topics: [
      "Web App Security",
      "Cloud Security",
      "Vulnerability Analysis",
      "CEH Preparation",
    ],
    gradient: "linear-gradient(135deg,#0284c7,#1e40af)",
  },
];

const HANDS_ON = [
  {
    icon: "🖥️",
    title: "Live Cyber Labs",
    desc: "Practice on real virtualized environments 24/7.",
  },
  {
    icon: "🐧",
    title: "Kali Linux Training",
    desc: "Master the industry-standard pentesting OS.",
  },
  {
    icon: "🕷️",
    title: "Burp Suite Practice",
    desc: "Intercept, scan, and exploit web vulnerabilities.",
  },
  {
    icon: "🔟",
    title: "OWASP Top 10",
    desc: "Deep-dive into the world's most critical web risks.",
  },
  {
    icon: "🐞",
    title: "Bug Hunting Methodology",
    desc: "Systematic recon, enumeration & exploitation.",
  },
  {
    icon: "📝",
    title: "Professional Reporting",
    desc: "Write industry-standard pentest reports.",
  },
];

const WHY_US = [
  {
    icon: "📚",
    title: "Industry-Led Curriculum",
    desc: "Built by active CISOs, pentesters and SOC leads — not just educators.",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Trainers",
    desc: "Learn from CEH, OSCP, and CISSP certified working professionals.",
  },
  {
    icon: "💼",
    title: "Job Assistance",
    desc: "Resume building, mock interviews, LinkedIn optimization & placement support.",
  },
  {
    icon: "🧪",
    title: "Practical Training",
    desc: "70% hands-on labs, 30% theory. Learn by doing from day one.",
  },
  {
    icon: "🏆",
    title: "Recognized Certificates",
    desc: "MSME, AICTE & Kerala Startup Mission approved certificates.",
  },
  {
    icon: "🌐",
    title: "Live Projects",
    desc: "Real bug bounty targets and client simulation projects included.",
  },
];

const CAREERS = [
  {
    title: "Ethical Hacker",
    salary: "₹6–18 LPA",
    growth: "↑ 32% YoY",
    icon: "🦹",
  },
  {
    title: "Penetration Tester",
    salary: "₹8–25 LPA",
    growth: "↑ 28% YoY",
    icon: "🔓",
  },
  {
    title: "Security Analyst",
    salary: "₹5–15 LPA",
    growth: "↑ 24% YoY",
    icon: "🔍",
  },
  {
    title: "SOC Analyst",
    salary: "₹4–12 LPA",
    growth: "↑ 35% YoY",
    icon: "📡",
  },
  {
    title: "Bug Bounty Hunter",
    salary: "$500–$50K/bug",
    growth: "↑ 45% YoY",
    icon: "🐛",
  },
  {
    title: "Security Consultant",
    salary: "₹12–40 LPA",
    growth: "↑ 30% YoY",
    icon: "🛡️",
  },
];

const TESTIMONIALS = [
  {
    name: "Arjun Krishnan",
    course: "CEH Certified",
    rating: 5,
    text: "QNAYDS completely transformed my career. The hands-on labs gave me real confidence to crack my first pentest interview. Now working at a top MNC in Bangalore.",
    company: "Infosys Security Team",
    initials: "AK",
  },
  {
    name: "Fathima Nazar",
    course: "SOC Analyst",
    rating: 5,
    text: "The trainers here are working professionals who bring real cases into the classroom. I landed a SOC role within 3 weeks of completing the program.",
    company: "Cyberark Technologies",
    initials: "FN",
  },
  {
    name: "Roshan Mathew",
    course: "Bug Bounty Track",
    rating: 5,
    text: "Started with zero experience. After 30 Days of Hacking, I reported my first valid bug on HackerOne. The methodology they teach is world-class.",
    company: "Freelance Bug Bounty Hunter",
    initials: "RM",
  },
];

const COLLEGES = [
  {
    name: "Collage Logo",
    logo: NitCalicutImg,
  },
  {
    name: "Collage Logo",
    logo: GecThrissurImg,
  },
  {
    name: "Collage Logo",
    logo: CollageImg1,
  },
  {
    name: "College Logo",
    logo: VidyaImg,
  },
  {
    name: "College Logo",
    logo: CollageImg2,
  },
  {
    name: "College Logo",
    logo: mysuruClgImg,
  },
  {
    name: "College Logo",
    logo: MccBlrImg,
  },
  {
    name: "College Logo",
    logo: ChristImg,
  },
  {
    name: "College Logo",
    logo: CollageIMg3,
  },
  {
    name: "College Logo",
    logo: CollageIMg4,
  },
];

const APPROVALS = [
  {
    name: "AICTE",
    logo: AicteLogo,
  },
  {
    name: "Ministry of MSME",
    logo: MsmeLogo,
  },
  {
    name: "Startup India",
    logo: StartupIndLogo,
  },
  {
    name: "Startup Mission",
    logo: StartupKlLogo,
  },
  {
    name: "TBI",
    logo: TbiLogo,
  },
];

const FAQS = [
  {
    q: "Are the courses suitable for beginners?",
    a: "Absolutely. Our '30 Days of Hacking' and SOC Analyst tracks start from zero. We only ask for curiosity and commitment.",
  },
  {
    q: "Will I receive a certificate upon completion?",
    a: "Yes. All graduates receive certificates approved by MSME, AICTE, and Kerala Startup Mission — recognized by 100+ partner institutions.",
  },
  {
    q: "Do you provide practical/hands-on training?",
    a: "70% of your learning time is spent in live cyber labs. You'll work with real tools like Kali Linux, Burp Suite, Metasploit, and more.",
  },
  {
    q: "Do you provide job assistance?",
    a: "Yes — our placement cell offers resume review, LinkedIn optimization, mock technical interviews, and direct referrals to our 100+ hiring partners.",
  },
];

const levelStyle = {
  Beginner: { bg: "#dcfce7", color: "#16a34a" },
  "Beginner–Advanced": { bg: "#dbeafe", color: "#1d4ed8" },
  Intermediate: { bg: "#fef9c3", color: "#ca8a04" },
  Advanced: { bg: "#fee2e2", color: "#dc2626" },
};

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
  {COLLEGES.map((col) => (
    <img
      key={col.name}
      src={col.logo}
      alt={col.name}
      className="h-20 w-full object-contain grayscale hover:grayscale-0 transition"
    />
  ))}
</div>; // ── HOME PAGE ─────────────────────────────────────────
const Home = () => {
  const [activeTest, setActiveTest] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const t = setInterval(
      () => setActiveTest((p) => (p + 1) % TESTIMONIALS.length),
      4500,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#ffffff",
        color: "#1e293b",
        overflowX: "hidden",
      }}
    >
      {/* ══ HERO ══════════════════════════════════════════ */}
      <section
        style={{
          background:
            "linear-gradient(150deg,#f0f9ff 0%,#e0f2fe 50%,#dbeafe 100%)",
          position: "relative",
          overflow: "hidden",
        }}
        className="px-6 pt-20 pb-24"
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle,#bae6fd55 0%,transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "radial-gradient(circle,#93c5fd44 0%,transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
          style={{ position: "relative" }}
        >
          <div>
            {/* Approval badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "MSME Approved",
                "AICTE Recognised",
                "Kerala Startup Mission",
              ].map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "#fff",
                    border: "1.5px solid #bae6fd",
                    color: "#0284c7",
                    boxShadow: "0 2px 12px #bae6fd44",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#0ea5e9",
                      display: "inline-block",
                      animation: "pulse 2s infinite",
                    }}
                  />
                  {b}
                </span>
              ))}
            </div>

            <h1
              className="font-bold leading-tight mb-6"
              style={{
                fontSize: "clamp(2.4rem,5vw,3.8rem)",
                color: "#0f172a",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              <span
                style={{
                  color: "#94a3b8",
                  fontSize: "0.6em",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  display: "block",
                  marginBottom: 8,
                  textTransform: "uppercase",
                }}
              >
                They Attack.
              </span>
              <span
                style={{
                  color: "#0ea5e9",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                You Defend.
                <svg
                  style={{
                    position: "absolute",
                    bottom: -6,
                    left: 0,
                    width: "100%",
                  }}
                  viewBox="0 0 200 10"
                  fill="none"
                >
                  <path
                    d="M2 8 Q50 2 100 6 Q150 10 198 4"
                    stroke="#0ea5e9"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.4"
                  />
                </svg>
              </span>
              <br />
              <span style={{ color: "#0f172a" }}>We Train.</span>
            </h1>

            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "#475569", maxWidth: 480 }}
            >
              Master Ethical Hacking, Penetration Testing &amp; Cyber Defense
              with India's most hands-on cybersecurity academy — trusted by{" "}
              <strong style={{ color: "#0284c7" }}>10,000+ students</strong> and{" "}
              <strong style={{ color: "#0284c7" }}>100+ institutions</strong>.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="/contact"
                className="font-semibold px-8 py-3.5 rounded-xl transition-all"
                style={{
                  background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
                  color: "#fff",
                  boxShadow: "0 4px 20px #0ea5e966",
                  fontSize: 15,
                }}
              >
                Explore Courses →
              </Link>
              <Link
                to="/contact"
                className="font-semibold px-8 py-3.5 rounded-xl transition-all"
                style={{
                  background: "#fff",
                  color: "#0ea5e9",
                  border: "1.5px solid #0ea5e9",
                  fontSize: 15,
                }}
              >
                Contact Us
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex -space-x-2">
                {["A", "B", "C", "D"].map((l, i) => (
                  <div
                    key={l}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-white"
                    style={{
                      background: ["#0ea5e9", "#38bdf8", "#0284c7", "#7dd3fc"][
                        i
                      ],
                    }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <span className="text-sm" style={{ color: "#64748b" }}>
                <strong style={{ color: "#0f172a" }}>10,000+</strong> learners
                enrolled
              </span>
              <span style={{ color: "#e2e8f0" }}>|</span>
              <span className="text-sm" style={{ color: "#64748b" }}>
                ⭐ 4.9/5 rating
              </span>
            </div>
          </div>

          {/* Hero image */}
          {/* Hero Video */}
          <div className="relative ">
            <VedioPlayer src={heroVideo} height="600px" />
          </div>
        </div>
      </section>

      {/* ══ STATS ═════════════════════════════════════════ */}
      <section
        style={{
          background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
          padding: "48px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 50%,rgba(255,255,255,0.08) 0%,transparent 50%),radial-gradient(circle at 80% 50%,rgba(255,255,255,0.05) 0%,transparent 50%)",
          }}
        />
        <div
          className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          style={{ position: "relative" }}
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm" style={{ color: "#bae6fd" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ WHY CYBER SECURITY ════════════════════════════ */}
      <section
        style={{
          background: "#f8fafc",
          padding: "80px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 10% 50%,rgba(14,165,233,0.05) 0%,transparent 50%)",
          }}
        />
        <div className="max-w-6xl mx-auto" style={{ position: "relative" }}>
          <div className="text-center mb-14">
            <h2
              className="text-3xl font-bold mb-3"
              style={{ letterSpacing: "-0.01em", color: "#0f172a" }}
            >
              Why Build a Career in Cyber Security?
            </h2>
            <p style={{ color: "#64748b", maxWidth: 480, margin: "0 auto" }}>
              The fastest-growing tech field of the decade — and the most
              secure.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {WHY_CYBER.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl p-6 transition-all"
                style={{
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f0f9ff";
                  e.currentTarget.style.borderColor = "#7dd3fc";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(14,165,233,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(0,0,0,0.04)";
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 10 }}>{c.icon}</div>
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: "#0284c7" }}
                >
                  {c.stat}
                </div>
                <div
                  style={{
                    color: "#0ea5e9",
                    fontSize: 12,
                    marginBottom: 6,
                    fontWeight: 700,
                  }}
                >
                  {c.label}
                </div>
                <div className="text-sm" style={{ color: "#64748b" }}>
                  {c.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURED COURSES ══════════════════════════════ */}
      <section
        id="courses"
        style={{
          background: "#f8fafc",
          borderTop: "1px solid #e2e8f0",
          padding: "80px 24px",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                style={{ background: "#e0f2fe", color: "#0284c7" }}
              >
                Our Courses
              </div>
              <h2
                className="text-3xl font-bold"
                style={{ color: "#0f172a", letterSpacing: "-0.01em" }}
              >
                Featured Training Programs
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {COURSES.map((c, i) => (
              <div
                key={c.title}
                className="rounded-2xl overflow-hidden transition-all"
                style={{
                  background: "#fff",
                  border: i === 0 ? "2px solid #0ea5e9" : "1px solid #e2e8f0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(14,165,233,0.15)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(0,0,0,0.04)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                {/* Card top gradient */}
                <div
                  style={{
                    background: c.gradient,
                    padding: "28px 24px 24px",
                    position: "relative",
                  }}
                >
                  <span
                    className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      color: "#fff",
                    }}
                  >
                    {c.tag}
                  </span>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontSize: 12,
                      fontWeight: 600,
                      marginBottom: 4,
                    }}
                  >
                    {c.level}
                  </div>
                  <h3 className="font-black text-xl text-white leading-tight mb-2">
                    {c.title}
                  </h3>
                  <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 13 }}>
                    ⏱ {c.duration}
                  </div>
                </div>
                <div className="p-6">
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "#64748b" }}
                  >
                    {c.desc}
                  </p>
                  <div
                    className="text-xs font-bold uppercase tracking-wider mb-3"
                    style={{ color: "#94a3b8" }}
                  >
                    Key Topics
                  </div>
                  <ul className="space-y-1.5 mb-6">
                    {c.topics.map((t) => (
                      <li
                        key={t}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: "#475569" }}
                      >
                        <span style={{ color: "#0ea5e9" }}>✓</span> {t}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={c.path}
                    className="block w-full py-2.5 rounded-xl font-semibold text-sm text-center transition-all"
                    style={{
                      background: "linear-gradient(135deg,#e0f2fe,#dbeafe)",
                      color: "#0284c7",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "linear-gradient(135deg,#0ea5e9,#0284c7)";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "linear-gradient(135deg,#e0f2fe,#dbeafe)";
                      e.currentTarget.style.color = "#0284c7";
                    }}
                  >
                    Enroll Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HANDS-ON LEARNING ═════════════════════════════ */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ background: "#e0f2fe", color: "#0284c7" }}
            >
              Methodology
            </div>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#0f172a", letterSpacing: "-0.01em" }}
            >
              Learn Through Real-World Practice
            </h2>
            <div
              className="w-12 h-1 rounded-full mb-6"
              style={{ background: "linear-gradient(90deg,#0ea5e9,#38bdf8)" }}
            />
            <p className="leading-relaxed mb-8" style={{ color: "#475569" }}>
              Every concept is immediately applied in live lab environments
              using the same tools professionals use in the field.
            </p>
            <div className="flex gap-8 mb-8">
              {[
                ["70%", "Hands-on Labs"],
                ["30%", "Theory & Concepts"],
                ["24/7", "Lab Access"],
              ].map(([v, l]) => (
                <div key={l} className="text-center">
                  <div
                    className="text-2xl font-black"
                    style={{ color: "#0ea5e9" }}
                  >
                    {v}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "#64748b" }}>
                    {l}
                  </div>
                </div>
              ))}
            </div>
            <ImgBox
              src={linuxImg}
              label="Hands-on lab / Kali Linux workstation"
              height="h-80"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {HANDS_ON.map((item) => (
              <div
                key={item.title}
                className="rounded-xl p-5 transition-all"
                style={{ border: "1px solid #e2e8f0", cursor: "pointer" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#7dd3fc";
                  e.currentTarget.style.background = "#f0f9ff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <div style={{ fontSize: 26, marginBottom: 8 }}>{item.icon}</div>
                <div
                  className="font-bold text-sm mb-1"
                  style={{ color: "#0f172a" }}
                >
                  {item.title}
                </div>
                <div
                  className="text-xs leading-relaxed"
                  style={{ color: "#64748b" }}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE QNAYDS ════════════════════════════ */}
      <section
        style={{
          background: "#f8fafc",
          borderTop: "1px solid #e2e8f0",
          borderBottom: "1px solid #e2e8f0",
          padding: "80px 24px",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ background: "#e0f2fe", color: "#0284c7" }}
            >
              Why QNAYDS
            </div>
            <h2
              className="text-3xl font-bold"
              style={{ color: "#0f172a", letterSpacing: "-0.01em" }}
            >
              The QNAYDS Advantage
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY_US.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl p-6 transition-all"
                style={{
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(14,165,233,0.15)";
                  e.currentTarget.style.borderColor = "#7dd3fc";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(0,0,0,0.04)";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{
                    background: "linear-gradient(135deg,#e0f2fe,#dbeafe)",
                  }}
                >
                  {w.icon}
                </div>
                <div
                  className="font-bold mb-2"
                  style={{ color: "#0f172a", fontSize: 15 }}
                >
                  {w.title}
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#64748b" }}
                >
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CAREER OUTCOMES ───────────────────────────────  */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ background: "#e0f2fe", color: "#0284c7" }}
            >
              Career Outcomes
            </div>
            <h2
              className="text-3xl font-bold mb-3"
              style={{ color: "#0f172a", letterSpacing: "-0.01em" }}
            >
              Career Opportunities After Training
            </h2>
            <p
              className="text-sm"
              style={{ color: "#64748b", maxWidth: 500, margin: "0 auto" }}
            >
              QNAYDS graduates are hired by leading MNCs, consulting firms, and
              government agencies worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {CAREERS.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl p-6 transition-all"
                style={{ border: "1px solid #e2e8f0", cursor: "pointer" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#0ea5e9";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(14,165,233,0.12)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>{c.icon}</div>
                <div
                  className="font-bold text-lg mb-1"
                  style={{ color: "#0f172a" }}
                >
                  {c.title}
                </div>
                <div
                  className="font-bold text-sm mb-2"
                  style={{ color: "#0284c7" }}
                >
                  {c.salary}
                </div>
                <span
                  className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full"
                  style={{ background: "#dcfce7", color: "#16a34a" }}
                >
                  {c.growth}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════ */}
      <section
        style={{
          background: "linear-gradient(150deg,#f0f9ff,#e0f2fe)",
          borderTop: "1px solid #bae6fd",
          padding: "80px 24px",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{
              background: "#fff",
              color: "#0284c7",
              border: "1px solid #bae6fd",
            }}
          >
            Student Stories
          </div>
          <h2 className="text-3xl font-bold mb-12" style={{ color: "#0f172a" }}>
            What Our Students Say
          </h2>
          <div
            className="rounded-2xl p-10 mb-8"
            style={{
              background: "#fff",
              boxShadow: "0 8px 40px rgba(14,165,233,0.12)",
              border: "1px solid #bae6fd",
            }}
          >
            <div className="text-5xl mb-4" style={{ color: "#bae6fd" }}>
              "
            </div>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "#334155" }}
            >
              {TESTIMONIALS[activeTest].text}
            </p>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(TESTIMONIALS[activeTest].rating)].map((_, i) => (
                <span key={i} style={{ color: "#f59e0b" }}>
                  ★
                </span>
              ))}
            </div>
            <div className="font-bold" style={{ color: "#0f172a" }}>
              {TESTIMONIALS[activeTest].name}
            </div>
            <div className="text-sm" style={{ color: "#0ea5e9" }}>
              {TESTIMONIALS[activeTest].course}
            </div>
            <div className="text-xs mt-1" style={{ color: "#94a3b8" }}>
              {TESTIMONIALS[activeTest].company}
            </div>
          </div>
          <div className="flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTest(i)}
                style={{
                  width: i === activeTest ? 28 : 8,
                  height: 8,
                  borderRadius: 9999,
                  background: i === activeTest ? "#0ea5e9" : "#bae6fd",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══ PARTNER INSTITUTIONS ══════════════════════════ */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
              style={{ background: "#e0f2fe", color: "#0284c7" }}
            >
              Track Record
            </div>
            <h2
              className="text-3xl font-bold mb-2"
              style={{ color: "#0f172a" }}
            >
              Trusted by Top Institutions
            </h2>
            <p className="text-sm" style={{ color: "#64748b" }}>
              Premier engineering colleges and universities across India
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-5  items-center">
            {COLLEGES.map((col) => (
              <img
                key={col.name}
                src={col.logo}
                alt={col.name}
                className="h-20 w-full object-contain "
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══ APPROVALS ═════════════════════════════════════ */}
      <section
        style={{
          background: "#f8fafc",
          borderTop: "1px solid #e2e8f0",
          padding: "80px 24px",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
              style={{ background: "#e0f2fe", color: "#0284c7" }}
            >
              Government Recognised
            </div>
            <h2 className="text-3xl font-bold" style={{ color: "#0f172a" }}>
              Our Approvals
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
            {APPROVALS.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-12 object-contain"
                />

                <p className="mt-2 text-xs text-center font-medium">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════ */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ background: "#e0f2fe", color: "#0284c7" }}
            >
              FAQ
            </div>
            <h2
              className="text-3xl font-bold"
              style={{ color: "#0f172a", letterSpacing: "-0.01em" }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQS.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{ background: "#fff", border: "1px solid #e2e8f0" }}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span
                    className="font-semibold"
                    style={{ color: "#0f172a", fontSize: 15 }}
                  >
                    {f.q}
                  </span>
                  <span
                    style={{
                      color: "#0ea5e9",
                      fontSize: 22,
                      fontWeight: 700,
                      flexShrink: 0,
                      transform: openFaq === i ? "rotate(45deg)" : "none",
                      transition: "transform 0.2s",
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div
                    className="px-6 pb-5 text-sm leading-relaxed"
                    style={{
                      color: "#64748b",
                      borderTop: "1px solid #f0f9ff",
                      paddingTop: 16,
                    }}
                  >
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ═════════════════════════════════════ */}
      <section
        style={{
          padding: "80px 24px",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(150deg,#0ea5e9 0%,#0284c7 60%,#0369a1 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 10% 50%,rgba(255,255,255,0.08),transparent 50%),radial-gradient(circle at 90% 30%,rgba(255,255,255,0.06),transparent 50%)",
          }}
        />
        <div
          className="max-w-3xl mx-auto text-center"
          style={{ position: "relative" }}
        >
          <div style={{ fontSize: 48, marginBottom: 16 }}>🛡️</div>
          <div
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
            style={{
              background: "rgba(255,255,255,0.2)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            🚀 Start Today
          </div>
          <h2
            className="text-4xl font-bold text-white mb-5"
            style={{ letterSpacing: "-0.02em" }}
          >
            Become an Ethical Hacker.
            <br />
            Secure the Future.
          </h2>
          <p
            className="text-lg mb-10"
            style={{ color: "#bae6fd", maxWidth: 480, margin: "0 auto 40px" }}
          >
            Join thousands of learners building successful careers in
            cybersecurity with Kerala's most trusted training academy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#courses"
              className="font-bold px-8 py-3.5 rounded-xl transition-all"
              style={{
                background: "#fff",
                color: "#0284c7",
                fontSize: 15,
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
              }}
            >
              Browse Courses
            </a>
            <Link
              to="/contact"
              className="font-bold px-8 py-3.5 rounded-xl transition-all"
              style={{
                background: "transparent",
                color: "#fff",
                border: "2px solid rgba(255,255,255,0.6)",
                fontSize: 15,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
      `}</style>
    </div>
  );
};

export default Home;
