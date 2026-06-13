import React from "react";
import { Link } from "react-router-dom";
import SuccessImg from "../assets/About/Success_Img.webp";
import RishanNk from "../assets/About/Rishan_Nk.webp";
import SawadKt from "../assets/About/Sawad_KT.webp";
import { Helmet } from "react-helmet-async";

// Reuse your ImgBox component
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

const VALUES = [
  {
    icon: "💡",
    title: "Innovation",
    text: "Technology-powered learning and modern teaching methods.",
  },
  {
    icon: "🌍",
    title: "Expanding Reach",
    text: "Serving learners and institutions across India.",
  },
  {
    icon: "🎯",
    title: "Learner-Centric",
    text: "Focused on student success and career growth.",
  },
  {
    icon: "🏆",
    title: "Proven Success",
    text: "Trusted by thousands of students and institutions.",
  },
];

const About = () => {
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
          About QNAYDS | Kerala's Leading Cyber Security Training Academy
        </title>
        <meta
          name="description"
          content="QNAYDS is Kerala's most trusted Cyber Security Academy — MSME, AICTE & Kerala Startup Mission approved. Founded in 2020, we've trained 10,000+ students across 100+ institutions in India."
        />
        <meta
          name="keywords"
          content="About QNAYDS, Cyber Security Academy Kerala, AICTE approved cybersecurity institute, MSME certified training Kerala, ethical hacking institute Malappuram"
        />
        <link rel="canonical" href="https://www.qnayds.com/about" />
        <meta
          property="og:title"
          content="About QNAYDS | Cyber Security Academy Kerala"
        />
        <meta
          property="og:description"
          content="MSME, AICTE & Kerala Startup Mission approved Cyber Security Academy. 10,000+ students trained across 100+ institutions since 2020."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.qnayds.com/about" />
      </Helmet>
      {/* HERO */}
      <section
        className="py-16 px-5"
        style={{
          background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <span
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-4"
            style={{
              background: "#dbeafe",
              color: "#1d4ed8",
              borderColor: "#93c5fd",
            }}
          >
            ABOUT QNAYDS
          </span>

          <h1
            className="font-bold mb-4 leading-tight"
            style={{
              color: "#0f172a",
              fontSize: "clamp(1.6rem, 5vw, 3rem)",
            }}
          >
            Transforming Learning Into
            <span style={{ color: "#0ea5e9" }}> Career Success</span>
          </h1>

          <p
            className="max-w-3xl mx-auto leading-relaxed"
            style={{
              color: "#475569",
              fontSize: "clamp(0.95rem, 2.5vw, 1.125rem)",
            }}
          >
            Founded in 2020, QNAYDS LLP is a pioneering EdTech company dedicated
            to bridging the gap between academic education and industry
            requirements through practical learning and innovation.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <ImgBox
          src={SuccessImg}
          label="collabrate with FitMyJob"
          height="h-130"
        />

        <div>
          <div
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "#0ea5e9" }}
          >
            Who We Are
          </div>

          <h2 className="text-3xl font-bold mb-5" style={{ color: "#0f172a" }}>
            Building Future-Ready Professionals
          </h2>

          <p className="mb-4 leading-relaxed" style={{ color: "#475569" }}>
            QNAYDS LLP is committed to redefining modern learning through
            innovative training programs, internships, workshops, and
            technology-driven education.
          </p>

          <p className="leading-relaxed mb-4" style={{ color: "#475569" }}>
            Our mission is to provide accessible, practical, industry-relevant
            education that empowers students, professionals, and institutions.
          </p>
          <p className="leading-relaxed " style={{ color: "#475569" }}>
            We proudly collabrate with FitMyJob to create stronger placement
            opportunities,hiring support,career guidance, and industry
            connections for students
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section
        className="py-16"
        style={{
          background: "#f8fafc",
          borderTop: "1px solid #e2e8f0",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          <div
            className="p-8 rounded-xl"
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
            }}
          >
            <h3 className="text-2xl font-bold mb-4">🎯 Our Mission</h3>

            <p style={{ color: "#64748b" }}>
              To empower learners through accessible, practical, and
              future-focused education.
            </p>
          </div>

          <div
            className="p-8 rounded-xl"
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
            }}
          >
            <h3 className="text-2xl font-bold mb-4">🚀 Our Vision</h3>

            <p style={{ color: "#64748b" }}>
              To become a global leader in redefining the way the world learns
              through innovation and technology.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2
          className="text-3xl font-bold text-center mb-12"
          style={{ color: "#0f172a" }}
        >
          Our Journey
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-2xl font-bold text-sky-500">2020</h3>
            <p>Founded QNAYDS LLP</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-sky-500">2021</h3>
            <p>Started Workshops & Internships</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-sky-500">2023</h3>
            <p>Expanded Institutional Partnerships</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-sky-500">Today</h3>
            <p>10,000+ Learners Empowered</p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20" style={{ background: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "#0f172a" }}
          >
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>

                <h3 className="font-semibold mb-3">{item.title}</h3>

                <p className="text-sm" style={{ color: "#64748b" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2
          className="text-3xl font-bold text-center mb-12"
          style={{ color: "#0f172a" }}
        >
          Meet Our Leadership
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="p-6 rounded-xl"
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
            }}
          >
            <ImgBox
              src={RishanNk}
              label="Rishan NK"
              height="h-150"
              className="mb-4"
            />

            <h3 className="text-xl font-bold">Rishan NK</h3>

            <p className="text-sky-500">CEO & Founder</p>
          </div>

          <div
            className="p-6 rounded-xl"
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
            }}
          >
            <ImgBox
              src={SawadKt}
              label="Sawad KT"
              height="h-150"
              className="mb-4"
            />

            <h3 className="text-xl font-bold">Sawad KT</h3>

            <p className="text-sky-500">Director & Founder</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
        }}
        className="py-20 px-6 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready To Build Your Future?
        </h2>

        <p className="max-w-2xl mx-auto mb-8" style={{ color: "#bae6fd" }}>
          Join thousands of learners who trust QNAYDS for practical,
          industry-focused education.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to={"/contact"}
            className="font-semibold px-8 py-3 rounded-lg"
            style={{
              border: "1.5px solid #ffffff",
              color: "#ffffff",
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
