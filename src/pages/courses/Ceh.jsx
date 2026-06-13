import { useState, useEffect } from "react";
import CehHero from "../../assets/Courses/Ceh/CEH_Hero.webp";
import CehImg2 from "../../assets/Courses/Ceh/CEH_Img2.webp";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// ── RESPONSIVE HOOK ───────────────────────────────────────
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
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
const DAYS = [
  {
    day: "Day 1",
    title: "Introduction to Ethical Hacking",
    icon: "🛡️",
    topics: [
      "Definition and purpose of ethical hacking",
      "Difference between ethical hacking and malicious hacking",
      "Legal aspects, scope, and responsible disclosure",
      "Types of hackers and common attack surfaces",
      "Ethical hacking process and methodology",
    ],
  },
  {
    day: "Day 2",
    title: "Lab Setup & Termux Introduction",
    icon: "🖥️",
    topics: [
      "Introduction to virtual machines",
      "Setting up Kali Linux in a virtual environment",
      "Installing and configuring essential tools",
      "Network configuration basics",
      "Basic Linux commands for hackers",
      "Introduction to Android Termux (installation, storage permissions, repositories)",
      "Learning basic Linux commands using Termux on Android",
    ],
  },
  {
    day: "Day 3",
    title: "Hacking Tools",
    icon: "🔧",
    topics: [
      "Overview of essential hacking and security tools",
      "Introduction to Nmap, Metasploit, Wireshark, Burp Suite",
      "Installation and configuration of tools",
      "Basic usage examples and guided exercises",
    ],
  },
  {
    day: "Day 4",
    title: "Social Media Hacking & Prevention",
    icon: "📱",
    topics: [
      "Common social media attacks and real-world scenarios",
      "Phishing and social engineering on social platforms",
      "Protecting personal and professional accounts",
      "Practical exercises on securing social media accounts",
    ],
  },
  {
    day: "Day 5",
    title: "Password Hacking",
    icon: "🔑",
    topics: [
      "Types of password attacks (brute force, dictionary, rainbow tables)",
      "Tools for password hacking (John the Ripper, Hashcat)",
      "Password policies and techniques for creating strong passwords",
      "Practical lab: Cracking password hashes in a controlled environment",
    ],
  },
  {
    day: "Day 6",
    title: "Cryptography",
    icon: "🔐",
    topics: [
      "Basics of cryptography (symmetric and asymmetric)",
      "Common encryption algorithms and real-world use cases",
      "Encryption tools (GPG, VeraCrypt)",
      "Hands-on: Encrypting and decrypting data",
    ],
  },
  {
    day: "Day 7",
    title: "Location, Camera Hacking & Prevention",
    icon: "📷",
    topics: [
      "Techniques for geolocation tracking and camera hacking",
      "Tools and methods used for such attacks",
      "Best practices to protect devices from these attacks",
      "Practical exercises on securing mobile and laptop devices",
    ],
  },
  {
    day: "Day 8",
    title: "Social Engineering & Phishing",
    icon: "🎭",
    topics: [
      "Introduction to social engineering concepts",
      "Types of social engineering attacks (pretexting, baiting, tailgating, vishing, smishing)",
      "Social engineering and phishing campaigns (email, SMS, social media)",
      "Psychological aspects of manipulation and human factors",
      "Case studies, role-play scenarios, and prevention techniques",
    ],
  },
  {
    day: "Day 9",
    title: "Red Teaming Tools",
    icon: "⚔️",
    topics: [
      "Introduction to red teaming and adversary emulation",
      "Essential red teaming tools and frameworks",
      "Scenario-based exercises and planning an engagement",
      "Practical lab: Simulating a basic red team attack in a lab setup",
    ],
  },
  {
    day: "Day 10",
    title: "Securing From Hackers",
    icon: "🛡️",
    topics: [
      "Best practices for securing systems and networks",
      "Security frameworks and standards (NIST, ISO 27001 – overview)",
      "Implementing basic security policies and procedures",
      "Practical exercises on hardening and securing a small network",
    ],
  },
  {
    day: "Day 11",
    title: "Dark Web",
    icon: "🌑",
    topics: [
      "Understanding the deep web vs dark web",
      "Accessing the dark web (Tor, I2P) safely and legally",
      "Common activities on the dark web",
      "Legal and ethical considerations for security professionals",
    ],
  },
  {
    day: "Day 12",
    title: "Anonymity & Privacy",
    icon: "🕵️",
    topics: [
      "Techniques for maintaining anonymity and privacy online",
      "Tools for anonymous browsing and communication",
      "Practical lab: Using VPNs, Tor, secure email, and privacy-focused browsers",
      "Personal digital hygiene and footprint minimization",
    ],
  },
  {
    day: "Day 13",
    title: "OSINT – Open Source Intelligence",
    icon: "🔍",
    topics: [
      "Introduction to OSINT and its role in ethical hacking and investigations",
      "OSINT collection from social media, public records, and technical sources",
      "Basic OSINT tools and frameworks",
      "Hands-on: Conducting a guided OSINT investigation with defined scope and ethics",
    ],
  },
  {
    day: "Day 14",
    title: "Termux Remote Access & SSH",
    icon: "📡",
    topics: [
      "Understanding SSH and secure remote access concepts",
      "Setting up and configuring SSH in Termux",
      "Connecting from Termux to remote Linux servers safely",
      "File transfer and remote command execution from mobile devices",
    ],
  },
  {
    day: "Day 15",
    title: "Linux – Medium to Advanced",
    icon: "🐧",
    topics: [
      "Understanding advanced Linux tools and commands",
      "File permissions, process management, and networking from CLI",
      "Shell scripting basics for hackers",
      "Next steps: certifications, community, and advanced topics",
    ],
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
  { icon: "🌐", name: "Tor / I2P" },
  { icon: "🔐", name: "GPG / VeraCrypt" },
  { icon: "📱", name: "Android Termux" },
];

const OUTCOMES = [
  "Understand ethical hacking methodology, laws, and responsible disclosure",
  "Set up and use Kali Linux and Termux hacking environments",
  "Perform password attacks, social engineering, and phishing simulations",
  "Use 10+ professional tools: Nmap, Metasploit, Burp Suite, Wireshark",
  "Conduct OSINT investigations and digital footprint analysis",
  "Maintain anonymity using VPN, Tor, and secure communication tools",
  "Understand red teaming strategies and adversary simulation",
  "Secure systems against the attacks you learn to perform",
];

const FAQS = [
  {
    q: "Is this course suitable for complete beginners?",
    a: "Yes! Day 1 starts from absolute basics — no prior experience needed. We guide you through setup, tools, and concepts step by step.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes — an AICTE-aligned certificate is issued on successful completion of all 30 days and lab assessments.",
  },
  {
    q: "Are classes online or offline?",
    a: " live online Zoom sessions ",
  },
  {
    q: "Do you provide job assistance?",
    a: "Yes. We provide resume building, mock interviews, LinkedIn optimization, and connects with our 200+ hiring partner network.",
  },
  {
    q: "What devices do I need?",
    a: "A laptop or PC is recommended. Some modules (Termux) work on Android phones too, making it flexible for all learners.",
  },
];

const TABS = ["modules", "tools", "outcomes", "faq"];

// ── COMPONENT ─────────────────────────────────────────────
const Ceh = () => {
  const isMobile = useIsMobile();
  const [tab, setTab] = useState("modules");
  const [openDay, setOpenDay] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const naviagte = useNavigate();

  const hov = (e) => {
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow = "0 8px 32px rgba(14,165,233,0.4)";
  };
  const lea = (e) => {
    e.currentTarget.style.transform = "none";
    e.currentTarget.style.boxShadow = "0 4px 20px rgba(14,165,233,0.3)";
  };

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
        src={CehImg2}
        label="Ethical Hacking Lab Training at QNAYDS"
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
          <Tag color="#dc2626">Beginner → Advanced</Tag>
          <Tag color="#0ea5e9">30 Days</Tag>
        </div>
        {[
          ["📅", "Duration", "30 Days"],
          ["🖥️", "Mode", "Online "],
          ["🗣️", "Language", "English / Malayalam"],
          ["👥", "Batch Size", "40–50 Students"],
          ["🏆", "Certificate", "Yes — AICTE Aligned"],
          ["📱", "Device", "Laptop + Android"],
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
            <span style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>
              {val}
            </span>
          </div>
        ))}
        <a
          href="/brochures/JEH-brochure.pdf"
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
          href="https://wa.me/919074871204?text=Hi%20QNAYDS,%20I%20would%20like%20to%20book%20a%20free%20demo%20class%20for%20the%20JEH%20Course."
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
            href="tel:+9190748 71204"
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
          Ethical Hacking Course in Kerala | Ethical Hacking Mastery | QNAYDS
        </title>
        <meta
          name="description"
          content="Best Ethical Hacking Course in Kerala with certification. Learn JEH Training, Kali Linux, OSINT, Social Engineering & Penetration Testing through 30 days of hands-on practical labs at QNAYDS Academy."
        />
        <meta
          name="keywords"
          content="Ethical Hacking Course in Kerala, CEH Training in Kerala, Kali Linux Training, Ethical Hacking Training with Certification, cybersecurity course Kerala, ethical hacking Malappuram"
        />
        <link rel="canonical" href="https://www.qnayds.com/courses/JEH" />
      </Helmet>
      {/* ── HERO ── */}
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
            width: 300,
            height: 300,
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
            width: 220,
            height: 220,
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
              <span style={{ color: "#0284c7" }}>Ethical Hacking</span>
            </div>
            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                marginBottom: 18,
              }}
            >
              <Tag color="#dc2626">Beginner to Advanced</Tag>
              <Tag color="#0ea5e9">🕐 30 Days</Tag>
              <Tag color="#16a34a">✅ Certificate</Tag>
            </div>
            <h1
              style={{
                fontSize: isMobile
                  ? "clamp(1.7rem,7vw,2.4rem)"
                  : "clamp(1.9rem,4vw,3rem)",
                fontWeight: 900,
                color: "#0f172a",
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                marginBottom: 16,
              }}
            >
              Ethical Hacking{" "}
              <span style={{ color: "#0ea5e9", position: "relative" }}>
                Masterclass
                <svg
                  style={{
                    position: "absolute",
                    bottom: -5,
                    left: 0,
                    width: "100%",
                  }}
                  viewBox="0 0 260 8"
                  fill="none"
                >
                  <path
                    d="M2 6 Q65 2 130 5 Q195 8 258 4"
                    stroke="#0ea5e9"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.45"
                  />
                </svg>
              </span>
            </h1>
            <p
              style={{
                fontSize: 14,
                color: "#475569",
                lineHeight: 1.8,
                marginBottom: 24,
                maxWidth: 480,
              }}
            >
              A comprehensive 30-day hands-on course — from introduction to
              ethical hacking all the way to OSINT, red teaming, dark web,
              anonymity, and advanced Linux.
            </p>

            {/* Quick stats — 2 cols on mobile, 4 on desktop */}
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
                ["30", "Days"],
                ["10+", "Tools"],
                ["60+", "Lab Hrs"],
                ["AICTE", "Certified"],
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

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                onClick={() => naviagte("/contact")}
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
                href="https://wa.me/919074871204?text=Hi%20QNAYDS,%20I%20would%20like%20to%20book%20a%20free%20demo%20class%20for%20the%20JEH%20Course."
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
          </div>

          {/* Right image — hidden on mobile to keep it clean */}
          {!isMobile && (
            <div style={{ position: "relative" }}>
              <ImgBox
                src={CehHero}
                label="Ethical Hacking Lab Training at QNAYDS"
                height={150}
              />
            </div>
          )}
        </div>
      </section>

      {/* ── MOBILE: Enroll CTA strip ── */}
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
              ⭐ Rated 4.9/5 · AICTE Certified
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

      {/* ── MOBILE BOTTOM SHEET OVERLAY ── */}
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

      {/* ── STICKY TABS ── */}
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
            gap: 0,
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

      {/* ── CONTENT + SIDEBAR ── */}
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
        {/* LEFT */}
        <div>
          {/* SYLLABUS TAB */}
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
                Daily Modules
              </h2>
              <p style={{ color: "#64748b", fontSize: 13, marginBottom: 20 }}>
                30 intensive days — tap any day to expand.
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {DAYS.map((d, i) => (
                  <div
                    key={d.day}
                    style={{
                      border: `1.5px solid ${openDay === i ? "#0ea5e9" : "#e2e8f0"}`,
                      borderRadius: 14,
                      background: openDay === i ? "#f0f9ff" : "#fff",
                      overflow: "hidden",
                      transition: "all 0.2s",
                      boxShadow:
                        openDay === i
                          ? "0 4px 20px rgba(14,165,233,0.1)"
                          : "none",
                      boxSizing: "border-box",
                      width: "100%",
                    }}
                  >
                    <button
                      onClick={() => setOpenDay(openDay === i ? null : i)}
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
                        boxSizing: "border-box",
                        minWidth: 0,
                      }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 12,
                          background:
                            openDay === i
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
                            color: openDay === i ? "#bae6fd" : "#94a3b8",
                            lineHeight: 1,
                          }}
                        >
                          MOD
                        </span>
                        <span
                          style={{
                            fontSize: 14,
                            fontWeight: 900,
                            color: openDay === i ? "#fff" : "#0284c7",
                            lineHeight: 1,
                          }}
                        >
                          {i + 1}
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
                          <span style={{ fontSize: 14 }}>{d.icon}</span>
                          <span
                            style={{
                              fontWeight: 700,
                              fontSize: isMobile ? 13 : 14,
                              color: openDay === i ? "#0284c7" : "#0f172a",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "normal",
                              wordBreak: "break-word",
                              flex: 1,
                              minWidth: 0,
                            }}
                          >
                            {d.title}
                          </span>
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: "#94a3b8",
                            marginTop: 2,
                          }}
                        >
                          {d.topics.length} topics
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: 18,
                          color: "#0ea5e9",
                          transform: openDay === i ? "rotate(45deg)" : "none",
                          transition: "transform 0.25s",
                          flexShrink: 0,
                        }}
                      >
                        +
                      </span>
                    </button>
                    {openDay === i && (
                      <div
                        style={{
                          padding: isMobile
                            ? "4px 14px 16px 14px"
                            : "4px 20px 18px 72px",
                          boxSizing: "border-box",
                          width: "100%",
                          overflow: "hidden",
                        }}
                      >
                        <ul
                          style={{
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                            width: "100%",
                          }}
                        >
                          {d.topics.map((t) => (
                            <li
                              key={t}
                              style={{
                                fontSize: 13,
                                color: "#475569",
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 8,
                                lineHeight: 1.6,
                                minWidth: 0,
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
                              <span
                                style={{
                                  flex: 1,
                                  minWidth: 0,
                                  wordBreak: "break-word",
                                  overflowWrap: "break-word",
                                }}
                              >
                                {t}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
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
                Industry-standard tools used by real penetration testers.
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
                  All tools run in an isolated, pre-configured virtual
                  environment. Access from browser or local VM — no complex
                  setup needed. Android Termux labs work directly on your phone.
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
                After completing all 30 days, here's what you'll be able to do:
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
                Next Steps After This Course
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile
                    ? "repeat(2,1fr)"
                    : "repeat(auto-fill,minmax(180px,1fr))",
                  gap: 10,
                }}
              >
                {[
                  ["🏆", "JEH Certification", "EC-Council"],
                  ["🔓", "OSCP", "Offensive Security"],
                  ["🐛", "Bug Bounty", "HackerOne / Bugcrowd"],
                  ["🛡️", "SOC Analyst", "Blue Team Path"],
                ].map(([icon, title, sub]) => (
                  <div
                    key={title}
                    style={{
                      background: "#fff",
                      border: "1px solid #e2e8f0",
                      borderRadius: 14,
                      padding: 14,
                      textAlign: "center",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <div style={{ fontSize: 26, marginBottom: 6 }}>{icon}</div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 12,
                        color: "#0f172a",
                        marginBottom: 2,
                      }}
                    >
                      {title}
                    </div>
                    <div style={{ fontSize: 11, color: "#0ea5e9" }}>{sub}</div>
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

          {/* Mobile: inline sidebar after content */}
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

        {/* DESKTOP RIGHT STICKY SIDEBAR */}
        {!isMobile && (
          <div style={{ position: "sticky", top: 68 }}>
            <SidebarCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default Ceh;
