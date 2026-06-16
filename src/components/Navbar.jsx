import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo/QNAYDS_LOGO.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 balance">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 h-full group">
          <img
            src={logo}
            alt="QNAYDS Logo"
            className="h-14 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="hidden sm:inline text-xl font-bold tracking-wider font-[Orbitron] bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            QNAYDS
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 h-full">
          <Link
            to="/about"
            className="text-md font-medium text-gray-600 hover:text-gray-900"
          >
            About
          </Link>

          <div className="relative">
            <button
              onClick={() => setCourseOpen(!courseOpen)}
              className="flex items-center gap-1 text-md font-medium text-gray-600 hover:text-gray-900"
            >
              Courses
              <svg
                className={`w-4 h-4 transition-transform ${
                  courseOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {courseOpen && (
              <div
                className="absolute top-full left-0 mt-3 w-80 bg-white rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid #bae6fd",
                  boxShadow:
                    "0 16px 48px rgba(14,165,233,0.15), 0 4px 16px rgba(0,0,0,0.06)",
                }}
              >
                {/* header strip */}
                <div
                  style={{
                    background: "linear-gradient(135deg,#e0f2fe,#dbeafe)",
                    padding: "8px 20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      color: "#0284c7",
                      textTransform: "uppercase",
                    }}
                  >
                    Our Programs
                  </span>
                </div>

                <Link
                  to="/courses/JEH"
                  className="flex items-center gap-4 px-5 py-4 transition-all"
                  onClick={() => setCourseOpen(!courseOpen)}
                  style={{ borderBottom: "1px solid #f0f9ff" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#f0f9ff")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: 18,
                    }}
                  >
                    🛡️
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: 14,
                        color: "#0f172a",
                      }}
                    >
                      Junior Ethical Hacker
                    </div>
                    <div
                      style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}
                    >
                      JEH Certification Program
                    </div>
                  </div>
                </Link>

                <Link
                  to="/courses/QCSP"
                  className="flex items-center gap-4 px-5 py-4 transition-all"
                  onClick={() => setCourseOpen(!courseOpen)}
                  style={{ borderBottom: "1px solid #f0f9ff" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#f0f9ff")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: "linear-gradient(135deg,#0284c7,#1e40af)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: 18,
                    }}
                  >
                    🔬
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: 14,
                        color: "#0f172a",
                      }}
                    >
                      Qnayds certified security professional
                    </div>
                    <div
                      style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}
                    >
                      QCSP Certification Program
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="text-md font-medium text-gray-600 hover:text-gray-900"
          >
            Contact
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block ">
          <button
            onClick={() => navigate("/contact")}
            className="text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 bg-cyan-500 text-white hover:bg-cyan-600 shadow-sm"
          >
            Start Learning
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 flex flex-col gap-4 shadow-lg absolute w-full left-0 transition-all duration-300">
          <div className="flex flex-col gap-4 w-full">
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600 hover:text-cyan-600 transition-colors"
            >
              About
            </Link>

            <div className="w-full">
              <button
                onClick={() => setCourseOpen(!courseOpen)}
                className="flex items-center justify-between w-full text-sm font-medium text-gray-600 hover:text-cyan-600 transition-colors"
              >
                <span>Courses</span>

                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    courseOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {courseOpen && (
                <div className="mt-3 ml-4 flex flex-col gap-3 border-l-2 border-cyan-200 pl-4">
                  <Link
                    to="/courses/JEH"
                    onClick={() => {
                      setMenuOpen(false);
                      setCourseOpen(false);
                    }}
                    className="text-sm text-gray-600 hover:text-cyan-600"
                  >
                    Junior Ethical Hacker (JEH)
                  </Link>

                  <Link
                    to="/courses/QCSP"
                    onClick={() => {
                      setMenuOpen(false);
                      setCourseOpen(false);
                    }}
                    className="text-sm text-gray-600 hover:text-cyan-600"
                  >
                    Qnayds certified security professional(QCSP)
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600 hover:text-cyan-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-semibold px-5 py-2.5 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-colors text-center shadow-sm w-full"
          >
            Start Learning
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
