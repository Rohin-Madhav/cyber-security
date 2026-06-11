import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SOCIALS = [
  {
    label: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/qnayds_hackers_academy",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/company/qnayds",
  },
  {
    label: "YouTube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@qnayds",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState("");

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();

    const phone = "919074871204"; // Company's WhatsApp number

    const message = `
Hello QNAYDS,

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Subject: ${form.subject}

Message:
${form.message}
  `;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const inputStyle = (field) => ({
    width: "100%",
    padding: "12px 16px",
    borderRadius: 12,
    border: focused === field ? "1.5px solid #0ea5e9" : "1.5px solid #e2e8f0",
    background: focused === field ? "#f0f9ff" : "#f8fafc",
    fontSize: 14,
    color: "#0f172a",
    outline: "none",
    transition: "all 0.2s",
    boxShadow: focused === field ? "0 0 0 4px rgba(14,165,233,0.08)" : "none",
    fontFamily: "inherit",
  });

  const labelStyle = {
    fontSize: 13,
    fontWeight: 600,
    color: "#374151",
    marginBottom: 6,
    display: "block",
  };

  const INFO = [
    {
      icon: "📍",
      title: "Address",
      lines: [
        "Qnayds LLP",
        "Zil Money HQ, Zilcubator,",
        "Kozhikkattu Kunnu, Manjeri,",
        "Kerala 676123",
      ],
    },
    {
      icon: "📞",
      title: "Phone",
      lines: ["+91-90748 71204", "+91-9400968397"],
      links: ["tel:+917907564898", "tel:+919400968397"],
    },
    {
      icon: "✉️",
      title: "Email",
      lines: ["qnayds7@gmail.com"],
      links: ["mailto:qnayds7@gmail.com"],
    },
    {
      icon: "🌐",
      title: "Website",
      lines: ["www.qnayds.in"],
      links: ["https://qnayds.in"],
    },
  ];

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#ffffff",
        color: "#1e293b",
      }}
    >
      <Helmet>
        <title>
          Contact QNAYDS | Enroll in Cyber Security Course in Kerala
        </title>
        <meta
          name="description"
          content="Contact QNAYDS Cyber Security Academy in Manjeri, Kerala. Enroll in Ethical Hacking, CEH, SOC Analyst or Penetration Testing courses. Call +91-7907564898 or book a free demo class today."
        />
        <meta
          name="keywords"
          content="Contact QNAYDS, Cyber Security Course Enrollment Kerala, Ethical Hacking Course Admission, cybersecurity training Manjeri, QNAYDS Academy contact"
        />
        <link rel="canonical" href="https://www.qnayds.com/contact" />
        <meta
          property="og:title"
          content="Contact QNAYDS | Enroll in Cyber Security Course Kerala"
        />
        <meta
          property="og:description"
          content="Enroll in Kerala's best Cyber Security courses. Contact us at Manjeri, Kerala or call +91-7907564898. Free demo class available."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.qnayds.com/contact" />
      </Helmet>
      {/* ── HEADER ── */}
      <section
        style={{
          background: "linear-gradient(150deg, #f0f9ff 0%, #e0f2fe 100%)",
          padding: "64px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, #bae6fd44, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -40,
            left: -40,
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: "radial-gradient(circle, #93c5fd33, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="max-w-3xl mx-auto text-center"
          style={{ position: "relative" }}
        >
          <div
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{
              background: "#fff",
              color: "#0284c7",
              border: "1px solid #bae6fd",
              boxShadow: "0 2px 8px #bae6fd55",
            }}
          >
            Get In Touch
          </div>
          <h1
            className="font-bold mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "#0f172a",
              letterSpacing: "-0.02em",
            }}
          >
            We'd Love to <span style={{ color: "#0ea5e9" }}>Hear From You</span>
          </h1>
          <p
            style={{
              color: "#475569",
              fontSize: 16,
              lineHeight: 1.7,
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            Contact QNAYDS for Cyber Security Course Enquiries in Kerala. Get
            details about fees, certification, internship opportunities, and
            placement assistance.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* ── LEFT: INFO ── */}
          <div className="md:col-span-2 flex flex-col gap-5">
            {INFO.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-5 flex gap-4 items-start transition-all"
                style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f0f9ff";
                  e.currentTarget.style.borderColor = "#bae6fd";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(14,165,233,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f8fafc";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{
                    background: "linear-gradient(135deg,#e0f2fe,#dbeafe)",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    className="font-bold text-sm mb-1"
                    style={{ color: "#0f172a" }}
                  >
                    {item.title}
                  </div>
                  {item.lines.map((line, i) =>
                    item.links?.[i] ? (
                      <a
                        key={i}
                        href={item.links[i]}
                        className="block text-sm leading-relaxed transition-colors"
                        style={{ color: "#475569" }}
                        onMouseEnter={(e) => (e.target.style.color = "#0ea5e9")}
                        onMouseLeave={(e) => (e.target.style.color = "#475569")}
                      >
                        {line}
                      </a>
                    ) : (
                      <div
                        key={i}
                        className="text-sm leading-relaxed"
                        style={{ color: "#475569" }}
                      >
                        {line}
                      </div>
                    ),
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div
              className="rounded-2xl p-5"
              style={{ background: "linear-gradient(135deg,#0ea5e9,#0284c7)" }}
            >
              <div className="font-bold text-white text-sm mb-3">Follow Us</div>

              <div className="flex gap-3">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      color: "#fff",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.35)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.2)";
                      e.currentTarget.style.transform = "none";
                    }}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: FORM ── */}
          <div className="md:col-span-3">
            {sent ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center rounded-2xl p-12"
                style={{
                  background: "linear-gradient(135deg,#f0f9ff,#e0f2fe)",
                  border: "1.5px solid #bae6fd",
                }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-6"
                  style={{
                    background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
                    boxShadow: "0 8px 32px rgba(14,165,233,0.3)",
                  }}
                >
                  ✅
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "#0f172a" }}
                >
                  Message Sent!
                </h3>
                <p className="mb-8" style={{ color: "#475569" }}>
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-2.5 rounded-xl font-semibold text-sm"
                  style={{
                    background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div
                className="rounded-2xl p-8"
                style={{
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 24px rgba(14,165,233,0.07)",
                }}
              >
                <h2
                  className="text-xl font-bold mb-1"
                  style={{ color: "#0f172a" }}
                >
                  Send a Message
                </h2>
                <p className="text-sm mb-7" style={{ color: "#64748b" }}>
                  Fill out the form and we'll get back to you shortly.
                </p>

                <form onSubmit={submit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handle}
                        required
                        placeholder="Arjun Menon"
                        style={inputStyle("name")}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused("")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handle}
                        required
                        placeholder="arjun@example.com"
                        style={inputStyle("email")}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused("")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone Number</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handle}
                        placeholder="+91 98765 43210"
                        style={inputStyle("phone")}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused("")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Subject *</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handle}
                        required
                        style={inputStyle("subject")}
                        onFocus={() => setFocused("subject")}
                        onBlur={() => setFocused("")}
                      >
                        <option value="">Select a subject</option>
                        <option>Course Enquiry</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handle}
                      required
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      style={{ ...inputStyle("message"), resize: "none" }}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused("")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-3 transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 16,
                      boxShadow: "0 8px 24px rgba(14,165,233,0.35)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 32px rgba(14,165,233,0.45)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(14,165,233,0.35)";
                    }}
                  >
                    <FaWhatsapp size={22} style={{ color: "#25D366" }} />
                    <span>Enquire on WhatsApp</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1px solid #e2e8f0",
            height: 280,
            background: "linear-gradient(135deg,#f0f9ff,#e0f2fe)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <span style={{ fontSize: 36 }}>🗺️</span>
          <div className="font-semibold" style={{ color: "#0284c7" }}>
            Google Map Embed
          </div>
          <div className="text-xs sm:text-sm text-slate-500 wrap-break-word leading-relaxed">
            Zil Money HQ, Zilcubator, Kozhikkattu Kunnu,
            <br className="block sm:hidden" /> Manjeri, Kerala 676123
          </div>
        </div>
      </section>

      {/* ── FAQ STRIP ── */}
      <section
        style={{
          background: "#f8fafc",
          borderTop: "1px solid #e2e8f0",
          padding: "64px 24px",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#0f172a" }}>
            Still have questions?
          </h2>
          <p className="mb-8" style={{ color: "#64748b" }}>
            Check out our most common queries or reach out directly — we're
            happy to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                q: "How do I enroll?",
                a: "Visit the course page and click Enroll. Our team will contact you within 24 hrs.",
              },
              {
                q: "Are certificates valid?",
                a: "Yes — all certificates are AICTE-aligned and industry recognized.",
              },
              {
                q: "Are the courses suitable for beginners?",
                a: "Absolutely. Many of our programs are designed for beginners.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-xl p-5 text-left"
                style={{ background: "#fff", border: "1px solid #e2e8f0" }}
              >
                <div
                  className="font-bold text-sm mb-2"
                  style={{ color: "#0f172a" }}
                >
                  ❓ {item.q}
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#64748b" }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
