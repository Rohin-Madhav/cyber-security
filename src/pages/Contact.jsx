import { useState } from "react";

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
    setSent(true);
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
      lines: ["+91-7907564898", "+91-9400968397"],
      links: ["tel:+917907564898", "tel:+919400968397"],
    },
    {
      icon: "✉️",
      title: "Email",
      lines: ["career.qnayds@gmail.com", "qnayds7@gmail.com"],
      links: ["mailto:career.qnayds@gmail.com", "mailto:qnayds7@gmail.com"],
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
            Have a question about our courses or want to partner with us? Reach
            out — our team responds within 24 hours.
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
                {[
                  {
                    label: "Instagram",
                    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                  },
                  {
                    label: "LinkedIn",
                    path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
                  },
                  {
                    label: "YouTube",
                    path: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12z",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                    style={{ background: "rgba(255,255,255,0.2)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.35)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.2)")
                    }
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={s.path} />
                    </svg>
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
                        <option>Institutional Partnership</option>
                        <option>Scholarship Test</option>
                        <option>Payment & Refunds</option>
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
                    className="w-full py-3.5 rounded-xl font-bold text-white transition-all"
                    style={{
                      background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 15,
                      boxShadow: "0 4px 20px rgba(14,165,233,0.35)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 32px rgba(14,165,233,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow =
                        "0 4px 20px rgba(14,165,233,0.35)";
                    }}
                  >
                    Send Message 
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
          <div className="text-sm" style={{ color: "#64748b" }}>
            Zil Money HQ, Zilcubator, Kozhikkattu Kunnu, Manjeri, Kerala 676123
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
