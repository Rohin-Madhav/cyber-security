import { useState, useEffect } from "react";
import QcspHero from "../../assets/Courses/Qcsp/QCSP_Hero.webp";
import QcspImg2 from "../../assets/Courses/Qcsp/Qcsp_Img2.webp";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

// ── RESPONSIVE HOOK ───────────────────────────────────────
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
};

// ── HELPERS ───────────────────────────────────────────────
const Tag = ({ children, color = "#0ea5e9" }) => (
  <span
    style={{
      background: color + "18",
      color,
      fontSize: 11,
      fontWeight: 700,
      padding: "4px 12px",
      borderRadius: 999,
      border: `1px solid ${color}33`,
      display: "inline-block",
    }}
  >
    {children}
  </span>
);
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

// ── DATA ──────────────────────────────────────────────────
const MODULES = [
  {
    no: "01",
    icon: "🛡️",
    title: "Intro to Ethical Hacking",
    skills: [
      "Kill chain methodology",
      "InfoSec fundamentals",
      "TTPs (Tactics, Techniques & Procedures)",
    ],
    ai: "Automating threat detection.",
  },
  {
    no: "02",
    icon: "🔍",
    title: "Footprinting & Recon",
    skills: [
      "OSINT collection techniques",
      "Maltego for link analysis",
      "Shodan intelligence gathering",
    ],
    ai: "ShellGPT & ChatGPT for recon.",
  },
  {
    no: "03",
    icon: "📡",
    title: "Scanning Networks",
    skills: [
      "Nmap & Hping scanning",
      "Network mapping strategies",
      "Banner grabbing & OS fingerprinting",
    ],
    ai: "DeepExploit automated scans.",
  },
  {
    no: "04",
    icon: "📋",
    title: "Enumeration",
    skills: [
      "SNMP enumeration",
      "LDAP and SMB enumeration",
      "Active Directory enumeration",
    ],
    ai: "Scripting automation via AI.",
  },
  {
    no: "05",
    icon: "🔬",
    title: "Vulnerability Analysis",
    skills: [
      "Nessus vulnerability scanning",
      "OpenVAS identification",
      "CVE/CVSS scoring system",
    ],
    ai: "AI-driven vulnerability prioritization.",
  },
  {
    no: "06",
    icon: "💻",
    title: "System Hacking",
    skills: [
      "Hashcat & password cracking",
      "Privilege escalation techniques",
      "Covering tracks & rootkits",
    ],
    ai: "Accelerated cracking logic via AI.",
  },
  {
    no: "07",
    icon: "🕵️",
    title: "Session Hijacking",
    skills: [
      "MITM attacks with Ettercap",
      "Session analysis & fixation",
      "CSRF and cookie theft",
    ],
    ai: "Automated traffic inspection.",
  },
  {
    no: "08",
    icon: "🌐",
    title: "Hacking Web Servers",
    skills: [
      "Apache/IIS vulnerability analysis",
      "Server hardening techniques",
      "Web server misconfigurations",
    ],
    ai: "Detecting misconfigurations automatically.",
  },
  {
    no: "09",
    icon: "🕷️",
    title: "Web Application Security",
    skills: [
      "OWASP Top 10 full coverage",
      "XSS, CSRF, IDOR attacks",
      "ZAP & Burp Suite hands-on",
    ],
    ai: "AI-driven fuzzing & injection.",
  },
  {
    no: "10",
    icon: "🗃️",
    title: "SQL Injection",
    skills: [
      "SQLmap automation tool",
      "Blind & in-band SQLi techniques",
      "WAF bypass methods",
    ],
    ai: "Automated SQL injection via AI.",
  },
  {
    no: "11",
    icon: "📶",
    title: "Wireless Hacking",
    skills: [
      "Rogue AP & evil twin attacks",
      "Aircrack-ng WPA/WPA2 cracking",
      "Bluetooth & RFID attacks",
    ],
    ai: "Encryption pattern prediction.",
  },
  {
    no: "12",
    icon: "☁️",
    title: "Cloud Computing Security",
    skills: [
      "AWS & Azure security assessments",
      "Container security (Docker/K8s)",
      "Cloud IAM misconfigurations",
    ],
    ai: "Cloud-native vulnerability detection.",
  },
];

const TOOLS = [
  { icon: "🐧", name: "Kali Linux" },
  { icon: "💥", name: "Metasploit" },
  { icon: "🔍", name: "Nmap" },
  { icon: "🕷️", name: "Burp Suite" },
  { icon: "📡", name: "Wireshark" },
  { icon: "🔓", name: "John the Ripper" },
  { icon: "⚡", name: "Hashcat" },
  { icon: "🗃️", name: "SQLmap" },
  { icon: "📶", name: "Aircrack-ng" },
  { icon: "🧠", name: "ShellGPT / AI" },
  { icon: "🔬", name: "Nessus / OpenVAS" },
  { icon: "☁️", name: "AWS / Azure CLI" },
];

const BLUE_TEAM = [
  {
    title: "SIEM (Wazuh)",
    desc: "Deploy Wazuh SIEM, monitor events, log analysis and compliance monitoring.",
  },
  {
    title: "Malware Analysis",
    desc: "Perform static and dynamic analysis of software behavior.",
  },
  {
    title: "IDS Setup",
    desc: "Set up and fine-tune traffic detection solutions and anomalous pattern detection.",
  },
];

const RED_TEAM = [
  {
    title: "Pentesting Report",
    desc: "Full-scale testing and drafting comprehensive remediation strategies.",
  },
  {
    title: "Bug Bounty Hunting",
    desc: "Master hunting workflow for platforms like HackerOne and Bugcrowd.",
  },
  {
    title: "CEH v13 Exam Prep",
    desc: "Focused CEH v13 mock exams and actual testing environment simulation.",
  },
];

const OUTCOMES = [
  "Perform industry-standard pentesting methodologies across web & cloud environments",
  "Implement defensive response strategies and real-time monitoring with SIEM tools",
  "Pass CEH v13 certification and build professional security portfolios",
  "Automate security tasks using AI tools like ShellGPT and ChatGPT",
  "Work on real bug bounty programs — HackerOne, Bugcrowd",
  "Build a GitHub portfolio of vulnerability research and security scripts",
  "Get 100% placement support with guaranteed internship opportunities",
  "Work confidently as a SOC Analyst, Pentester, or VAPT Specialist",
];

const CAREERS = [
  {
    icon: "🖥️",
    title: "SOC Analyst",
    salary: "₹4L – 10L /yr",
    desc: "Monitor, detect, and respond to security incidents.",
  },
  {
    icon: "🔗",
    title: "Network Sec. Engineer",
    salary: "₹5L – 15L /yr",
    desc: "Implement and maintain secure network infrastructure.",
  },
  {
    icon: "🔓",
    title: "VAPT Specialist",
    salary: "₹6L – 18L /yr",
    desc: "Ethical hacking and vulnerability assessments.",
  },
  {
    icon: "🛡️",
    title: "Cyber Defense Officer",
    salary: "₹8L – 25L /yr",
    desc: "Lead incident response and manage organizational risk.",
  },
];

const FAQS = [
  {
    q: "Is this suitable for complete beginners?",
    a: "Yes! The course starts from the absolute basics — networking, Linux, and hacking fundamentals. No prior experience is needed.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes — an AICTE-aligned certificate is issued on completion. The curriculum is also aligned with CEH v13 for international credibility.",
  },
  {
    q: "Are classes online or offline?",
    a: "Both modes are available — live Zoom sessions and offline batches at our Manjeri, Kerala centre.",
  },
  {
    q: "Do you provide job assistance?",
    a: "100% placement support — resume building, LinkedIn optimization, mock interviews, and direct recruiter connects with our 200+ hiring partners.",
  },
  {
    q: "What is the duration of the course?",
    a: "The full program runs 4 to 6 months, covering 12 core modules plus your chosen specialization track (Blue Team or Red Team).",
  },
];

const AUDIENCE = [
  "🎓 Plus Two Students",
  "🏛️ Degree Students",
  "💻 IT / Non-IT",
  "🔄 Career Switchers",
  "♾️ Hacking Enthusiasts",
];
const TABS = ["modules", "tools", "outcomes", "faq"];

// ── COMPONENT ─────────────────────────────────────────────
export default function Qcsp() {
  const isMobile = useIsMobile();
  const [tab, setTab] = useState("modules");
  const [openMod, setOpenMod] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const hov = (e) => {
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow = "0 8px 32px rgba(14,165,233,0.4)";
  };
  const lea = (e) => {
    e.currentTarget.style.transform = "none";
    e.currentTarget.style.boxShadow = "0 4px 20px rgba(14,165,233,0.3)";
  };

  // ── SIDEBAR CARD (shared between sticky desktop & mobile sheet) ──
  const SidebarCard = () => (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e2e8f0",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 8px 40px rgba(14,165,233,0.1)",
      }}
    >
      <ImgBox
        src={QcspImg2}
        label="Qnayds certified security professional Course"
        height={170}
      />
      <div style={{ padding: 22 }}>
        <div
          style={{
            display: "flex",
            gap: 6,
            marginBottom: 16,
            flexWrap: "wrap",
          }}
        >
          <Tag color="#0ea5e9">Beginner → Advanced</Tag>
          <Tag color="#16a34a">4–6 Months</Tag>
        </div>
        {[
          ["📅", "Duration", "4 – 6 Months"],
          ["📦", "Modules", "12 Core + 2 Tracks"],
          ["🖥️", "Mode", "Online + Offline"],
          ["🗣️", "Language", "English / Malayalam"],
          ["👥", "Batch Size", "15–20 Students"],
          ["🏆", "Certificate", "CEH v13 Aligned"],
          ["💼", "Placement", "100% Support"],
        ].map(([icon, label, val]) => (
          <div
            key={label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "9px 0",
              borderBottom: "1px solid #f1f5f9",
            }}
          >
            <span style={{ fontSize: 13, color: "#64748b" }}>
              {icon} {label}
            </span>
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#0f172a",
                textAlign: "right",
              }}
            >
              {val}
            </span>
          </div>
        ))}
        <a
          href="/brochures/QCSP-brochure.pdf"
          download
          style={{
            width: "100%",
            marginTop: 18,
            padding: "13px",
            background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
            color: "#fff",
            fontWeight: 800,
            fontSize: 15,
            borderRadius: 12,
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
            boxShadow: "0 4px 20px rgba(14,165,233,0.3)",
            transition: "all 0.2s",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            boxSizing: "border-box",
          }}
        >
          Download Brochure 📄
        </a>
        <a
          href="https://wa.me/919074871204?text=Hi%20QNAYDS,%20I%20would%20like%20to%20book%20a%20free%20demo%20class%20for%20the%20QNAYDS%20Cyber%20Security%20Professional%20(QCSP)%20Course."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "100%",
            marginTop: 10,
            padding: "11px",
            background: "transparent",
            color: "#0ea5e9",
            fontWeight: 700,
            fontSize: 14,
            borderRadius: 12,
            border: "1.5px solid #0ea5e9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          Book Free Demo Class
        </a>
        <div
          style={{
            marginTop: 18,
            background: "#f0f9ff",
            border: "1px solid #bae6fd",
            borderRadius: 12,
            padding: 14,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 12,
              color: "#0284c7",
              fontWeight: 700,
              marginBottom: 4,
            }}
          >
            📞 Need Help?
          </div>
          <a
            href="tel:+919074871204"
            style={{
              fontSize: 13,
              color: "#0284c7",
              fontWeight: 700,
              textDecoration: "none",
              display: "block",
            }}
          >
            +91-9074871204
          </a>
          <a
            href="tel:+919400968397"
            style={{
              fontSize: 13,
              color: "#0284c7",
              fontWeight: 700,
              textDecoration: "none",
              display: "block",
              marginTop: 3,
            }}
          >
            +91-9400968397
          </a>
          <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 6 }}>
            📍 Zilmoney HQ, Manjeri
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#fff",
        color: "#1e293b",
        overflowX: "hidden",
      }}
    >
      <Helmet>
        <title>
          Qnayds certified security professional | Cyber Security Training in
          Kerala
        </title>
        <meta
          name="description"
          content="Best Cyber Security Training in Kerala with CEH v13 preparation. Learn Penetration Testing, SOC Analyst skills, Network Security, VAPT, Cloud Security & AI-integrated labs at QNAYDS Academy, Manjeri Kerala."
        />
        <meta
          name="keywords"
          content="Cyber Security Training in Kerala, SOC Analyst Course in Kerala, Penetration Testing Course in Kerala, Network Security Training in Kerala, cybersecurity course Malappuram, CEH training Kerala, VAPT course Kerala"
        />
        <link rel="canonical" href="https://www.qnayds.com/courses/QCSP" />
      </Helmet>
      {/* ══ HERO ══════════════════════════════════════════ */}
      <section
        style={{
          background:
            "linear-gradient(150deg,#f0f9ff 0%,#e0f2fe 55%,#dbeafe 100%)",
          padding: isMobile ? "48px 20px 60px" : "72px 24px 88px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "radial-gradient(circle,#bae6fd55,transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -40,
            width: 240,
            height: 240,
            borderRadius: "50%",
            background: "radial-gradient(circle,#93c5fd33,transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 36 : 56,
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Left */}
          <div>
            <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 14 }}>
              Home <span style={{ margin: "0 6px" }}>›</span> Courses{" "}
              <span style={{ margin: "0 6px" }}>›</span>
              <span style={{ color: "#0284c7" }}>QCSP</span>
            </div>

            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                marginBottom: 18,
              }}
            >
              <Tag color="#0ea5e9">🎓 Beginner to Advanced</Tag>
              <Tag color="#16a34a">🕐 4 – 6 Months</Tag>
              <Tag color="#7c3aed">🤖 AI-Integrated</Tag>
              <Tag color="#dc2626">✅ CEH v13</Tag>
            </div>

            <h1
              style={{
                fontSize: isMobile
                  ? "clamp(1.7rem,7vw,2.3rem)"
                  : "clamp(1.9rem,4vw,3rem)",
                fontWeight: 900,
                color: "#0f172a",
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                marginBottom: 16,
              }}
            >
              QNAYDS{" "}
              <span style={{ color: "#0ea5e9", position: "relative" }}>
                CERTIFIED SECURITY
                <svg
                  style={{
                    position: "absolute",
                    bottom: -5,
                    left: 0,
                    width: "100%",
                  }}
                  viewBox="0 0 320 8"
                  fill="none"
                >
                  <path
                    d="M2 6 Q80 2 160 5 Q240 8 318 4"
                    stroke="#0ea5e9"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.45"
                  />
                </svg>
              </span>{" "}
              PROFESSIONAL (QCSP)
            </h1>
            <p
              style={{
                fontSize: 14,
                color: "#475569",
                lineHeight: 1.8,
                marginBottom: 24,
                maxWidth: 490,
              }}
            >
              Master the art of cyber offense and defense in{" "}
              <strong style={{ color: "#0284c7" }}>4 to 6 months</strong>.
              Equipped with AI integration, hands-on projects, and real-world
              threat simulation.
            </p>

            {/* Stats — 2 col on mobile, 4 on desktop */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "repeat(2,1fr)"
                  : "repeat(4,1fr)",
                gap: 10,
                marginBottom: 24,
              }}
            >
              {[
                ["12", "Modules"],
                ["2", "Tracks"],
                ["100%", "Placement"],
                ["CEH", "v13 Prep"],
              ].map(([v, l]) => (
                <div
                  key={l}
                  style={{
                    background: "#fff",
                    border: "1px solid #bae6fd",
                    borderRadius: 12,
                    padding: "10px 12px",
                    textAlign: "center",
                    boxShadow: "0 2px 8px rgba(14,165,233,0.07)",
                  }}
                >
                  <div
                    style={{ fontWeight: 900, fontSize: 18, color: "#0284c7" }}
                  >
                    {v}
                  </div>
                  <div style={{ fontSize: 11, color: "#64748b" }}>{l}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                marginBottom: isMobile ? 20 : 28,
              }}
            >
              <button
                onClick={() => navigate("/contact")}
                style={{
                  background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 14,
                  padding: "12px 24px",
                  borderRadius: 12,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  boxShadow: "0 4px 20px rgba(14,165,233,0.3)",
                  transition: "all 0.2s",
                  flex: isMobile ? "1" : "none",
                }}
                onMouseEnter={hov}
                onMouseLeave={lea}
              >
                Enroll Now →
              </button>
              <a
                href="https://wa.me/919074871204?text=Hi%20QNAYDS,%20I%20would%20like%20to%20book%20a%20free%20demo%20class%20for%20the%20QNAYDS%20Cyber%20Security%20Professional%20(QCSP)%20Course."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "transparent",
                  color: "#0ea5e9",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "12px 24px",
                  borderRadius: 12,
                  border: "1.5px solid #0ea5e9",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.2s",
                  flex: isMobile ? "1" : "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#f0f9ff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                Free Demo
              </a>
            </div>

            {/* Audience chips — only on desktop */}
            {!isMobile && (
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#94a3b8",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 10,
                  }}
                >
                  Target Audience
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {AUDIENCE.map((a) => (
                    <span
                      key={a}
                      style={{
                        background: "#f0f9ff",
                        border: "1px solid #bae6fd",
                        color: "#0284c7",
                        fontSize: 12,
                        fontWeight: 600,
                        padding: "5px 12px",
                        borderRadius: 999,
                      }}
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right — hidden on mobile */}
          {!isMobile && (
            <div style={{ position: "relative" }}>
              <ImgBox
                src={QcspHero}
                label="Qnayds certified security professional Course"
                height={150}
              />
            </div>
          )}
        </div>
      </section>

      {/* ══ MOBILE: CTA strip ═════════════════════════════ */}
      {isMobile && (
        <div
          style={{
            background: "#f0f9ff",
            borderBottom: "1px solid #bae6fd",
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div>
            <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>
              ⭐ 4.9/5 · CEH v13 Aligned
            </div>
          </div>
          <button
            onClick={() => setShowSidebar(true)}
            style={{
              background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
              color: "#fff",
              fontWeight: 800,
              fontSize: 13,
              padding: "10px 18px",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              whiteSpace: "nowrap",
            }}
          >
            View Details
          </button>
        </div>
      )}

      {/* ══ MOBILE BOTTOM SHEET ═══════════════════════════ */}
      {isMobile && showSidebar && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
            }}
            onClick={() => setShowSidebar(false)}
          />
          <div
            style={{
              position: "relative",
              background: "#fff",
              borderRadius: "20px 20px 0 0",
              padding: 20,
              maxHeight: "85vh",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                width: 40,
                height: 4,
                background: "#e2e8f0",
                borderRadius: 999,
                margin: "0 auto 20px",
              }}
            />
            <SidebarCard />
          </div>
        </div>
      )}

      {/* ══ STICKY TABS ═══════════════════════════════════ */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          background: "#fff",
          borderBottom: "1px solid #e2e8f0",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 16px",
            display: "flex",
            overflowX: "auto",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: isMobile ? "14px 16px" : "16px 22px",
                fontWeight: 700,
                fontSize: isMobile ? 13 : 14,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                color: tab === t ? "#0284c7" : "#64748b",
                borderBottom:
                  tab === t ? "3px solid #0ea5e9" : "3px solid transparent",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
                textTransform: "capitalize",
                flex: isMobile ? "1" : "none",
                textAlign: "center",
              }}
            >
              {t === "faq" ? "FAQ" : t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* ══ CONTENT + SIDEBAR ═════════════════════════════ */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: isMobile ? "32px 16px" : "60px 24px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 320px",
          gap: isMobile ? 0 : 40,
          alignItems: "start",
        }}
      >
        {/* ── LEFT ── */}
        <div>
          {/* MODULES TAB */}
          {tab === "modules" && (
            <div>
              <h2
                style={{
                  fontWeight: 800,
                  fontSize: isMobile ? 18 : 22,
                  color: "#0f172a",
                  marginBottom: 6,
                }}
              >
                12 Comprehensive Modules
              </h2>
              <p style={{ color: "#64748b", fontSize: 13, marginBottom: 20 }}>
                Each module combines skills training with AI-powered techniques
                — tap any module to expand.
              </p>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {MODULES.map((m, i) => (
                  <div
                    key={m.no}
                    style={{
                      border: `1.5px solid ${openMod === i ? "#0ea5e9" : "#e2e8f0"}`,
                      borderRadius: 14,
                      background: openMod === i ? "#f0f9ff" : "#fff",
                      overflow: "hidden",
                      transition: "all 0.2s",
                      boxShadow:
                        openMod === i
                          ? "0 4px 20px rgba(14,165,233,0.1)"
                          : "none",
                    }}
                  >
                    <button
                      onClick={() => setOpenMod(openMod === i ? null : i)}
                      style={{
                        width: "100%",
                        padding: isMobile ? "14px 16px" : "16px 20px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        textAlign: "left",
                        fontFamily: "inherit",
                      }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 12,
                          background:
                            openMod === i
                              ? "linear-gradient(135deg,#0ea5e9,#0284c7)"
                              : "linear-gradient(135deg,#e0f2fe,#dbeafe)",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          transition: "all 0.2s",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 8,
                            fontWeight: 800,
                            color: openMod === i ? "#bae6fd" : "#94a3b8",
                            lineHeight: 1,
                          }}
                        >
                          MOD
                        </span>
                        <span
                          style={{
                            fontSize: 14,
                            fontWeight: 900,
                            color: openMod === i ? "#fff" : "#0284c7",
                            lineHeight: 1,
                          }}
                        >
                          {m.no}
                        </span>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          <span style={{ fontSize: 14 }}>{m.icon}</span>
                          <span
                            style={{
                              fontWeight: 700,
                              fontSize: isMobile ? 13 : 14,
                              color: openMod === i ? "#0284c7" : "#0f172a",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: isMobile ? "nowrap" : "normal",
                            }}
                          >
                            {m.title}
                          </span>
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: "#94a3b8",
                            marginTop: 2,
                          }}
                        >
                          {m.skills.length} skills · AI Integration
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: 18,
                          color: "#0ea5e9",
                          transform: openMod === i ? "rotate(45deg)" : "none",
                          transition: "transform 0.25s",
                          flexShrink: 0,
                        }}
                      >
                        +
                      </span>
                    </button>

                    {openMod === i && (
                      <div
                        style={{
                          padding: isMobile
                            ? "4px 16px 16px"
                            : "4px 20px 18px 72px",
                        }}
                      >
                        <ul
                          style={{
                            listStyle: "none",
                            padding: 0,
                            margin: "0 0 12px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                          }}
                        >
                          {m.skills.map((s) => (
                            <li
                              key={s}
                              style={{
                                fontSize: 13,
                                color: "#475569",
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 8,
                                lineHeight: 1.6,
                              }}
                            >
                              <span
                                style={{
                                  color: "#0ea5e9",
                                  fontWeight: 900,
                                  flexShrink: 0,
                                  marginTop: 1,
                                }}
                              >
                                ✓
                              </span>
                              {s}
                            </li>
                          ))}
                        </ul>
                        <div
                          style={{
                            display: "flex",
                            gap: 8,
                            alignItems: "center",
                            background: "#f0fdf4",
                            border: "1px solid #bbf7d0",
                            borderRadius: 10,
                            padding: "8px 12px",
                          }}
                        >
                          <span
                            style={{
                              background: "#16a34a",
                              color: "#fff",
                              fontSize: 10,
                              fontWeight: 800,
                              padding: "2px 8px",
                              borderRadius: 999,
                              flexShrink: 0,
                            }}
                          >
                            AI
                          </span>
                          <span
                            style={{
                              fontSize: 12,
                              color: "#15803d",
                              fontFamily: "monospace",
                            }}
                          >
                            {m.ai}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Specialization tracks teaser */}
              <div
                style={{
                  marginTop: 24,
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    background: "#f0f9ff",
                    border: "1.5px solid #bae6fd",
                    borderRadius: 14,
                    padding: 16,
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      color: "#0284c7",
                      marginBottom: 8,
                      fontSize: 13,
                    }}
                  >
                    🛡️ Blue Team Track
                  </div>
                  {BLUE_TEAM.map((b) => (
                    <div
                      key={b.title}
                      style={{
                        fontSize: 12,
                        color: "#475569",
                        display: "flex",
                        gap: 6,
                        alignItems: "flex-start",
                        marginBottom: 6,
                      }}
                    >
                      <span
                        style={{
                          color: "#0ea5e9",
                          fontWeight: 900,
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      {b.title}
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    background: "#fff5f5",
                    border: "1.5px solid #fecaca",
                    borderRadius: 14,
                    padding: 16,
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      color: "#dc2626",
                      marginBottom: 8,
                      fontSize: 13,
                    }}
                  >
                    ⚔️ Red Team Track
                  </div>
                  {RED_TEAM.map((r) => (
                    <div
                      key={r.title}
                      style={{
                        fontSize: 12,
                        color: "#475569",
                        display: "flex",
                        gap: 6,
                        alignItems: "flex-start",
                        marginBottom: 6,
                      }}
                    >
                      <span
                        style={{
                          color: "#dc2626",
                          fontWeight: 900,
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      {r.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TOOLS TAB */}
          {tab === "tools" && (
            <div>
              <h2
                style={{
                  fontWeight: 800,
                  fontSize: isMobile ? 18 : 22,
                  color: "#0f172a",
                  marginBottom: 6,
                }}
              >
                Tools You'll Master
              </h2>
              <p style={{ color: "#64748b", fontSize: 13, marginBottom: 20 }}>
                Industry-standard tools used by real penetration testers —
                hands-on throughout all 12 modules.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile
                    ? "repeat(2,1fr)"
                    : "repeat(auto-fill,minmax(175px,1fr))",
                  gap: 12,
                  marginBottom: 24,
                }}
              >
                {TOOLS.map((t) => (
                  <div
                    key={t.name}
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: 14,
                      padding: "16px 14px",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#f0f9ff";
                      e.currentTarget.style.borderColor = "#7dd3fc";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(14,165,233,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#f8fafc";
                      e.currentTarget.style.borderColor = "#e2e8f0";
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div style={{ fontSize: 24 }}>{t.icon}</div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 13,
                        color: "#0f172a",
                      }}
                    >
                      {t.name}
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  background: "linear-gradient(135deg,#f0f9ff,#e0f2fe)",
                  border: "1px solid #bae6fd",
                  borderRadius: 16,
                  padding: 20,
                }}
              >
                <div
                  style={{
                    fontWeight: 800,
                    color: "#0284c7",
                    marginBottom: 8,
                    fontSize: 14,
                  }}
                >
                  🖥️ Lab Environment Included
                </div>
                <p
                  style={{
                    color: "#475569",
                    fontSize: 13,
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  All tools run in an isolated, pre-configured virtual lab.
                  Access from your browser or local VM — no complex setup
                  required. AI tools like ShellGPT are integrated directly into
                  guided labs.
                </p>
              </div>
            </div>
          )}

          {/* OUTCOMES TAB */}
          {tab === "outcomes" && (
            <div>
              <h2
                style={{
                  fontWeight: 800,
                  fontSize: isMobile ? 18 : 22,
                  color: "#0f172a",
                  marginBottom: 6,
                }}
              >
                What You'll Learn
              </h2>
              <p style={{ color: "#64748b", fontSize: 13, marginBottom: 20 }}>
                After completing the full program, here's what you'll be able to
                do:
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  marginBottom: 32,
                }}
              >
                {OUTCOMES.map((o, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: 14,
                      padding: "14px 16px",
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#f0f9ff";
                      e.currentTarget.style.borderColor = "#bae6fd";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#f8fafc";
                      e.currentTarget.style.borderColor = "#e2e8f0";
                    }}
                  >
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontWeight: 900,
                        fontSize: 12,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </div>
                    <span
                      style={{
                        fontSize: 13,
                        color: "#334155",
                        lineHeight: 1.65,
                      }}
                    >
                      {o}
                    </span>
                  </div>
                ))}
              </div>
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: isMobile ? 16 : 18,
                  color: "#0f172a",
                  marginBottom: 14,
                }}
              >
                Career Paths After This Course
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile
                    ? "repeat(2,1fr)"
                    : "repeat(auto-fill,minmax(190px,1fr))",
                  gap: 12,
                }}
              >
                {CAREERS.map((c) => (
                  <div
                    key={c.title}
                    style={{
                      background: "#fff",
                      border: "1px solid #e2e8f0",
                      borderRadius: 14,
                      padding: isMobile ? 14 : 16,
                      textAlign: "center",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <div
                      style={{ fontSize: isMobile ? 24 : 28, marginBottom: 8 }}
                    >
                      {c.icon}
                    </div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 12,
                        color: "#0f172a",
                        marginBottom: 4,
                      }}
                    >
                      {c.title}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 800,
                        color: "#0284c7",
                      }}
                    >
                      {c.salary}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ TAB */}
          {tab === "faq" && (
            <div>
              <h2
                style={{
                  fontWeight: 800,
                  fontSize: isMobile ? 18 : 22,
                  color: "#0f172a",
                  marginBottom: 6,
                }}
              >
                Frequently Asked Questions
              </h2>
              <p style={{ color: "#64748b", fontSize: 13, marginBottom: 20 }}>
                Everything you need to know before enrolling.
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {FAQS.map((f, i) => (
                  <div
                    key={f.q}
                    style={{
                      border: `1.5px solid ${openFaq === i ? "#0ea5e9" : "#e2e8f0"}`,
                      borderRadius: 14,
                      background: openFaq === i ? "#f0f9ff" : "#fff",
                      overflow: "hidden",
                      transition: "all 0.2s",
                      boxShadow:
                        openFaq === i
                          ? "0 4px 20px rgba(14,165,233,0.08)"
                          : "none",
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{
                        width: "100%",
                        padding: "16px 18px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        textAlign: "left",
                        fontFamily: "inherit",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 700,
                          fontSize: isMobile ? 13 : 15,
                          color: openFaq === i ? "#0284c7" : "#0f172a",
                          paddingRight: 8,
                        }}
                      >
                        {f.q}
                      </span>
                      <span
                        style={{
                          fontSize: 18,
                          color: "#0ea5e9",
                          transform: openFaq === i ? "rotate(45deg)" : "none",
                          transition: "transform 0.25s",
                          flexShrink: 0,
                        }}
                      >
                        +
                      </span>
                    </button>
                    {openFaq === i && (
                      <div
                        style={{
                          padding: "0 18px 16px",
                          fontSize: 13,
                          color: "#475569",
                          lineHeight: 1.75,
                        }}
                      >
                        {f.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mobile inline sidebar */}
          {isMobile && (
            <div style={{ marginTop: 40 }}>
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: 16,
                  color: "#0f172a",
                  marginBottom: 16,
                }}
              >
                Course Details
              </h3>
              <SidebarCard />
            </div>
          )}
        </div>

        {/* DESKTOP STICKY SIDEBAR */}
        {!isMobile && (
          <div style={{ position: "sticky", top: 68 }}>
            <SidebarCard />
          </div>
        )}
      </div>
    </div>
  );
}
