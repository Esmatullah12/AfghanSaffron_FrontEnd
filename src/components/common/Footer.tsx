import React from "react";
import {
  FaTiktok,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import Logo from "../../assets/Logo.jpg"; // Update path if needed

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f2e0fcff] py-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-700">

          {/* Column 1: Brand + Logo + Social */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={Logo}
                alt="AfghanSaffron Logo"
                className="w-12 h-12 object-contain rounded-full shadow-md"
              />
              <h1 className="text-2xl font-bold">
                Afghan<span className="text-[#CFA45C]">Saffron</span>
              </h1>
            </div>

            <p className="text-sm leading-relaxed text-center md:text-left mb-5 max-w-xs">
              Learn To Love Growth And Change<br />
              <span className="font-semibold">And You Will Be A Success.</span>
            </p>

            {/* Social Icons */}
            <div className="flex space-x-5">
              <a
                href="https://tiktok.com/@Esmatullah173"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CFA45C] hover:scale-110 transition-transform"
                aria-label="TikTok"
              >
                <FaTiktok size={26} />
              </a>
              <a
                href="https://instagram.com/Esmatullah173"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CFA45C] hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <FaInstagram size={26} />
              </a>
              <a
                href="https://wa.me/93789123456"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CFA45C] hover:scale-110 transition-transform"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={26} />
              </a>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Follow us: <span className="font-medium">@Esmatullah173</span>
            </p>
          </div>

          {/* Column 2: Explore Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-bold text-[#44155B] mb-5 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#bestseller" className="hover:text-[#CFA45C] transition">
                  Best Seller
                </a>
              </li>
              <li>
                <a href="#saffron" className="hover:text-[#CFA45C] transition">
                  Premium Saffron
                </a>
              </li>
              <li>
                <a href="#track" className="hover:text-[#CFA45C] transition">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#CFA45C] transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-bold text-[#44155B] mb-5 uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm">
              <p className="flex items-start gap-2">
                <IoLocationOutline className="text-[#CFA45C] mt-0.5" size={18} />
                <span>
                  Kabul, Afghanistan<br />
                  <span className="text-xs text-gray-600">Herat Saffron Fields</span>
                </span>
              </p>
              <p className="flex items-center gap-2">
                <FiPhone className="text-[#CFA45C]" size={18} />
                <a href="tel:+93789123456" className="hover:text-[#CFA45C]">
                  +93 789 123 456
                </a>
              </p>
              <p className="flex items-center gap-2">
                <LuMail className="text-[#CFA45C]" size={18} />
                <a href="mailto:hello@afghansaffron.com" className="hover:text-[#CFA45C]">
                  hello@afghansaffron.com
                </a>
              </p>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-bold text-[#44155B] mb-5 uppercase tracking-wider">
              Stay Updated
            </h4>
            <p className="text-sm mb-4 max-w-xs">
              Receive special offers and saffron harvest updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 w-full max-w-xs">
              <input
                type="email"
                placeholder="Enter e-mail"
                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFA45C] text-sm placeholder-gray-500"
              />
              <button
                type="submit"
                className="bg-[#44155B] text-white px-6 py-2.5 rounded-lg hover:bg-[#5E217D] transition text-sm font-semibold shadow-md"
              >
                JOIN
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 pt-6 border-t border-purple-300 text-center text-xs text-gray-600">
          <p>
            © {currentYear} <span className="font-bold text-[#44155B]">AfghanSaffron</span>. All rights reserved. 
            | Proudly from <span className="text-[#CFA45C] font-medium">Afghanistan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;