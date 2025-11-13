import React from "react";
import { FaInstagram, FaWhatsapp} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import Logo from "../../assets/Logo.png";
import Button from "./Button";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f2e0fcff] pt-10 pb-3 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-700">

          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={Logo}
                alt="AfghanSaffron Logo"
                className="w-12 h-12 object-contain"
              />
              <h1 className="text-2xl font-display font-semibold text-primary">
                Afghan <span className="text-secondary">Saffron</span>
              </h1>
            </div>

            <p className="text-sm leading-relaxed text-center md:text-left mb-5 max-w-xs">
              Learn To Love Growth And Change<br />
              <span className="font-semibold">And You Will Be A Success.</span>
            </p>

            <div className="flex space-x-5">
              <a
                href="https://tiktok.com/@Esmatullah173"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:scale-110 transition-transform"
                aria-label="TikTok"
              >
                <SiTiktok size={22} />
              </a>
              <a
                href="https://instagram.com/Esmatullah173"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <FaInstagram size={26} />
              </a>
              <a
                href="https://wa.me/93789123456"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:scale-110 transition-transform"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={26} />
              </a>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Follow us: <span className="font-medium">@Esmatullah173</span>
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start mt-8">
            <h4 className="text-sm font-bold text-primary mb-5 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#bestseller" className="hover:text-primary transition">
                  Best Seller
                </a>
              </li>
              <li>
                <a href="#saffron" className="hover:text-primary transition">
                  Premium Saffron
                </a>
              </li>
              <li>
                <a href="#track" className="hover:text-primary transition">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start mt-8">
            <h4 className="text-sm font-bold text-primary mb-5 uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm">
              <p className="flex items-start gap-2">
                <GrLocation className="text-primary mt-0.5" size={20} />
                <span>
                  Kabul, Afghanistan<br />
                </span>
              </p>
              <p className="flex items-center gap-2">
                <FiPhone className="text-primary" size={18} />
                <a href="tel:+93789123456" className="hover:text-primary">
                  +93 789 123 456
                </a>
              </p>
              <p className="flex items-center gap-2">
                <LuMail className="text-primary" size={18} />
                <a href="mailto:hello@afghansaffron.com" className="hover:text-primary">
                  hello@afghansaffron.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start mt-8">
            <h4 className="text-sm font-bold text-primary mb-5 uppercase tracking-wider">
              Stay Updated
            </h4>
            <p className="text-sm mb-4 max-w-xs">
              Receive special offers and saffron harvest updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 w-full max-w-xs">
              <input
                type="email"
                placeholder="Enter e-mail"
                className="px-4 py-2.5 border border-primary/40 rounded-full focus:outline-none text-sm placeholder-gray-500 focus:border-primary"
              />
              <Button text="JOIN" />
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-purple-300 text-center text-xs text-gray-600">
          <p>
            © {currentYear} <span className="font-bold text-primary">AfghanSaffron</span>. All rights reserved. 
            | Proudly from <span className="text-primary font-medium">Afghanistan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;