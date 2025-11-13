import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/Logo.png";
import { IoIosGlobe } from "react-icons/io";
import { IoLogoInstagram, IoLogoTiktok } from "react-icons/io5";
import { HiOutlineShoppingBag, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import ReactCountryFlag from "react-country-flag";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Products", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Blog", href: "#" },
  ];

  const rightIcons = [
    { icon: IoIosGlobe, label: "Language", hasBadge: false },
    { icon: HiOutlineShoppingBag, label: "Shopping Bag", hasBadge: true, badgeCount: 3 },
    { icon: AiOutlineUser, label: "User Account", hasBadge: false },
  ];

  const languages = [
    { code: "en", name: "English",   countryCode: "US" },
    { code: "ms", name: "Malaysia",  countryCode: "MY" },
  ];

  return (
    <header
  className={`w-full sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled
      ? "bg-white/30 backdrop-blur-xl shadow-xl border-b border-white/20"
      : "bg-white/30 backdrop-blur-xl border border-white/20"
  }`}
>

      <nav className="w-full background-transparent">
        <div className="flex items-center justify-between h-16 px-6 lg:px-12">
          {/* LOGO */}
          <div className="flex items-center flex-1 justify-start">
            <a href="#" className="flex items-center space-x-3 group transition-all duration-300">
              <div className="relative">
                <img src={logo} alt="" className="w-12 h-auto object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl tracking-wider font-bold text-primary">
                  Afghan Saffron
                </span>
              </div>
            </a>
          </div>

          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-16">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="relative group">
                  <span className="font-normal text-xl text-gray-800 tracking-wide transition-all duration-300 group-hover:text-[#44155B] group-hover:font-medium">
                    {item.label}
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E42F1C] transition-all duration-500 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center flex-1 justify-end">
            <div className="hidden lg:flex items-center space-x-8">
              {rightIcons.map((item, index) => {
                const isLang = index === 0;
                return (
                  <div key={item.label} className="relative" ref={isLang ? langRef : null}>
                    {isLang ? (
                      <div className="group">
                        <button
                          aria-label={item.label}
                          type="button"
                          className="p-3 rounded-2xl transition-all duration-300 hover:bg-purple-50 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                          onClick={() => setLangOpen(!langOpen)}
                        >
                          <item.icon
                            className={`h-7 w-7 transition-all duration-300 text-gray-700 group-hover:text-[#44155B] group-hover:scale-110`}
                          />
                        </button>

                        <div
                          className={`absolute right-0 mt-2 w-56 origin-top-right transition-all duration-200 ease-out ${
                            langOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
                          } group-hover:scale-100 group-hover:opacity-100 group-hover:pointer-events-auto`}
                          style={{ top: "100%" }}
                        >
                          <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-200 py-2 overflow-hidden animate-in slide-in-from-top-2 fade-in">
                            {languages.map((lang) => (
                              <button
                                key={lang.code}
                                className="flex w-full items-center gap-3 px-4 py-3 text-left text-gray-800 hover:bg-purple-50 hover:text-[#44155B] transition-all duration-200"
                                onClick={() => {
                                  setLangOpen(false);
                                }}
                              >
                                <ReactCountryFlag
                                  countryCode={lang.countryCode}
                                  svg
                                  style={{ width: "1.4em", height: "1.4em" }}
                                  className="rounded-sm shadow-sm"
                                />
                                <span className="font-medium">{lang.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <button
                        aria-label={item.label}
                        type="button"
                        className="relative group focus:outline-none"
                      >
                        <div className="p-3 rounded-2xl transition-all duration-300 hover:bg-purple-50 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
                          <item.icon
                            className={`h-7 w-7 transition-all duration-300 text-gray-600 group-hover:text-[#44155B] group-hover:scale-105`}
                          />
                        </div>

                        {item.hasBadge && (
                          <span className="absolute top-1 right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-[#44155B] rounded-full border-2 border-white">
                            {item.badgeCount}
                          </span>
                        )}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="lg:hidden flex items-center space-x-4">
              <div className="relative" ref={langRef}>
                <button
                  aria-label="Language"
                  className="p-3 rounded-2xl transition-all duration-300 hover:bg-purple-50"
                  onClick={() => setLangOpen(!langOpen)}
                >
                  <IoIosGlobe className="h-7 w-7 text-gray-600 hover:text-[#44155B] transition-colors duration-300" />
                </button>

                {langOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-200 py-2 z-50 animate-in slide-in-from-top-2 fade-in">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className="flex w-full  items-center gap-3 px-4 py-3 text-left text-gray-800 hover:bg-purple-50 hover:text-[#44155B] transition-all duration-200"
                        onClick={() => {
                          setLangOpen(false);
                        }}
                      >
                        <ReactCountryFlag
                          countryCode={lang.countryCode}
                          svg
                          style={{ width: "1.4em", height: "1.4em" }}
                          className="rounded-sm shadow-sm"
                        />
                        <span className="font-medium">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button aria-label="Shopping Bag" className="relative p-3 rounded-2xl transition-all duration-300 hover:bg-purple-50">
                <HiOutlineShoppingBag className="h-7 w-7 text-gray-600 hover:text-[#44155B] transition-colors duration-300" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-[#44155B] rounded-full border-2 border-white">
                  3
                </span>
              </button>

              <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                className="p-3 rounded-2xl transition-all duration-300 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                {open ? (
                  <HiOutlineX className="h-6 w-6 text-gray-600 hover:text-[#44155B] transition-colors duration-300" />
                ) : (
                  <HiOutlineMenu className="h-6 w-6 text-gray-600 hover:text-[#44155B] transition-colors duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 animate-in slide-in-from-top duration-300">
            <div className="px-6 py-6 space-y-6">
              {[...navItems, { label: "Account", href: "#", icon: AiOutlineUser }].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 py-3 text-xl font-normal text-gray-800 transition-all duration-300 hover:text-[#44155B] hover:font-medium hover:pl-4 border-l-4 border-transparent hover:border-[#E42F1C]"
                  onClick={() => setOpen(false)}
                >
                  <span>{item.label}</span>
                </a>
              ))}
            </div>

            <div className="px-6 py-6 border-t border-gray-200 bg-gray-50/50">
              <div className="flex justify-center gap-6">
                <a href="#" aria-label="Instagram" className="p-3 rounded-full hover:bg-white transition-all duration-300 group">
                  <IoLogoInstagram className="h-9 w-9 text-gray-600 group-hover:text-[#44155B] transition-colors duration-300" />
                </a>
                <a href="#" aria-label="TikTok" className="p-3 rounded-full hover:bg-white transition-all duration-300 group">
                  <IoLogoTiktok className="h-9 w-9 text-gray-600 group-hover:text-[#44155B] transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;