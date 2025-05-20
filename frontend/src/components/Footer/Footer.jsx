"use client";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  const footerNavs = [
    {
      label: "Quick Links",
      items: [
        { href: "#", name: "Home" },
        { href: "#", name: "News" },
        { href: "#", name: "Viral Stories" },
        { href: "#", name: "Match Score" },
      ],
    },
    {
      label: "Company",
      items: [
        { href: "#", name: "About Us" },
        { href: "#", name: "Careers" },
        { href: "#", name: "Contact" },
        { href: "#", name: "Privacy Policy" },
      ],
    },
    {
      label: "Resources",
      items: [
        { href: "#", name: "Terms of Service" },
        { href: "#", name: "FAQs" },
        { href: "#", name: "Support" },
        { href: "#", name: "Advertising" },
      ],
    },
  ];

  return (
    <footer className="bg-[#1d1d1d] text-gray-300 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Top: Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-[#333] pb-6 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-white text-xl font-semibold">
              Stay Updated with <span className="text-yellow-400">Top5Shots</span>
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Get the latest trending stories and updates in your inbox.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-md flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 px-3 py-2 text-sm rounded-md text-gray-900 bg-white border border-gray-300 focus:border-yellow-400 outline-none"
            />
            <button className="bg-yellow-400 text-black px-4 py-2 text-sm font-medium rounded-md hover:bg-yellow-500 transition shadow">
              Subscribe
            </button>
          </form>
        </div>

        {/* Middle: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 text-center sm:text-left">
          {footerNavs.map((nav, idx) => (
            <div key={idx}>
              <h4 className="text-white text-base font-semibold mb-3">{nav.label}</h4>
              <ul className="space-y-1 text-sm">
                {nav.items.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="hover:text-yellow-400 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom: Social & Legal */}
        <div className="mt-10 pt-4 border-t border-[#333] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2025 Top5Shots. All rights reserved.</p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            <a
              href="#"
              className="flex items-center gap-1 hover:text-yellow-400 transition"
            >
              <FaFacebook size={16} /> Facebook
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-yellow-400 transition"
            >
              <FaTwitter size={16} /> Twitter
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-yellow-400 transition"
            >
              <FaGithub size={16} /> GitHub
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-yellow-400 transition"
            >
              <FaInstagram size={16} /> Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
