import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/QNAYDS_LOGO.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const links = [
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
  ];

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
          <span className="hidden sm:inline text-xl font-bold bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-300">
            QNAYDS
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 h-full">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-md  font-medium transition-colors duration-200 relative py-2 ${
                  isActive
                    ? "text-cyan-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.name}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block ">
          <Link
            to="/courses"
            className="text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 bg-cyan-500 text-white hover:bg-cyan-600 shadow-sm"
          >
            Get Started
          </Link>
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
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-cyan-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            to="/courses"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-semibold px-5 py-2.5 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-colors text-center shadow-sm w-full"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
