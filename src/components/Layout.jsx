import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaWhatsapp } from "react-icons/fa";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <a
        href="https://wa.me/919074871204?text=Hello%20QNAYDS,%20I%20would%20like%20to%20know%20more%20about%20your%20cybersecurity%20courses."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full bg-green-400 opacity-60 group-hover:opacity-0 transition-opacity"
          style={{ animation: "wa-pulse 2s ease-out infinite" }}
        />

        {/* Tooltip */}
        <span
          className="absolute right-16 bottom-1/2 translate-y-1/2 whitespace-nowrap text-xs font-semibold text-white px-3 py-1.5 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:-translate-x-1"
          style={{
            background: "#25D366",
            boxShadow: "0 4px 12px rgba(37,211,102,0.4)",
          }}
        >
          Chat with us 💬
          {/* Arrow */}
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full"
            style={{
              width: 0,
              height: 0,
              borderTop: "6px solid transparent",
              borderBottom: "6px solid transparent",
              borderLeft: "6px solid #25D366",
            }}
          />
        </span>

        {/* Button */}
        <div
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
          style={{
            background: "linear-gradient(135deg, #25D366, #128C7E)",
            boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
          }}
        >
          <FaWhatsapp className="text-white text-3xl" />
        </div>

        <style>{`
    @keyframes wa-pulse {
      0%   { transform: scale(1);   opacity: 0.6; }
      70%  { transform: scale(1.6); opacity: 0;   }
      100% { transform: scale(1.6); opacity: 0;   }
    }
  `}</style>
      </a>
      <Footer />
    </div>
  );
};

export default Layout;
