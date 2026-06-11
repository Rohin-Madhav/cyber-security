import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = ({
  brandName = "QNAYDS",
  description = "QNAYDS is a leading Cyber Security Training Institute in Kerala offering Ethical Hacking, Penetration Testing, SOC Analyst, and Network Security courses with certification, internship, and placement assistance.",
  quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  courses = [
    { label: "Ethical Hacking", href: "/courses/CEH" },
    { label: "QNAYDS Cyber Security Professional", href: "/courses/QCSP" },
  ],
  contact = {
    address: "Manjeri, Kerala",
    phones: ["+91-7907564898", "+91-9400968397", "+91-9074871204"],
    emails: ["qnayds7@gmail.com"],
    website: "https://qnayds.in",
  },
  social = {
    instagram: "https://www.instagram.com/qnayds_hackers_academy",
    linkedin: "https://www.linkedin.com/company/qnayds",
    youtube: "https://www.youtube.com/@qnayds",
    facebook: "https://www.facebook.com/share/1CL3WAk7n3",
  },
}) => {
  const year = new Date().getFullYear();

  const SocialIcon = ({ type, href }) => {
    const common = "cursor-pointer hover:text-white transition-colors";
    if (type === "linkedin")
      return (
        <a
          href={href}
          aria-label="LinkedIn"
          target="_blank"
          rel="noreferrer"
          className={common}
        >
          <FaLinkedin />
        </a>
      );
    if (type === "instagram")
      return (
        <a
          href={href}
          aria-label="Instagram"
          target="_blank"
          rel="noreferrer"
          className={common}
        >
          <FaInstagram />
        </a>
      );
    if (type === "facebook")
      return (
        <a
          href={href}
          aria-label="Facebook"
          target="_blank"
          rel="noreferrer"
          className={common}
        >
          <FaFacebook />
        </a>
      );
    if (type === "youtube")
      return (
        <a
          href={href}
          aria-label="YouTube"
          target="_blank"
          rel="noreferrer"
          className={common}
        >
          <FaYoutube />
        </a>
      );
    return null;
  };

  return (
    <footer className="bg-slate-950 text-gray-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-4" style={{ color: "#0ea5e9" }}>
            {brandName}
          </h3>

          <p className="text-sm leading-6">{description}</p>

          <div className="flex gap-4 mt-5 text-xl">
            <SocialIcon type="linkedin" href={social.linkedin} />
            <SocialIcon type="instagram" href={social.instagram} />
            <SocialIcon type="facebook" href={social.facebook} />
            <SocialIcon type="youtube" href={social.youtube} />
          </div>
        </div>

        <nav aria-label="Quick Links">
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>

          <ul className="space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                ) : (
                  <span>{link.label}</span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="footer-courses">
          <h4 id="footer-courses" className="text-white font-semibold mb-4">
            Popular Courses
          </h4>

          <ul className="space-y-3 text-sm">
            {courses.map((c) => (
              <li key={c.label}>
                {c.href ? (
                  <a href={c.href} className="hover:text-white">
                    {c.label}
                  </a>
                ) : (
                  <span>{c.label}</span>
                )}
              </li>
            ))}
          </ul>
        </section>

        <address className="not-italic">
          <h4 className="text-white font-semibold mb-4">Contact</h4>

          <ul className="space-y-3 text-sm">
            <li>📍 {contact.address}</li>
            {contact.phones.map((p) => (
              <li key={p}>
                📞{" "}
                <a
                  href={`tel:${p.replace(/[^+0-9]/g, "")}`}
                  className="hover:text-white"
                >
                  {p}
                </a>
              </li>
            ))}
            {contact.emails?.map((e) => (
              <li key={e}>
                ✉️{" "}
                <a href={`mailto:${e}`} className="hover:text-white">
                  {e}
                </a>
              </li>
            ))}
            <li>
              🌐{" "}
              <a
                href={contact.website}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {contact.website.replace(/^https?:\/\//, "")}
              </a>
            </li>
          </ul>
        </address>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {year} {brandName} Cyber Security Academy. All Rights Reserved.
          </p>

          <div className="flex gap-5 mt-3 md:mt-0">
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
