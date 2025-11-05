import React, { useState, useEffect } from "react";
import logo from "../../assets/Logo.jpg";
import { IoIosGlobe } from "react-icons/io";
import { HiOutlineShoppingBag, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Products", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Blog", href: "#" }
  ];

  const rightIcons = [
    { icon: IoIosGlobe, label: "Language", hasBadge: false },
    { icon: HiOutlineShoppingBag, label: "Shopping Bag", hasBadge: true, badgeCount: 3 },
    { icon: AiOutlineUser, label: "User Account", hasBadge: false }
  ];

  return (
    <header 
      className={`w-full sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200" 
          : "bg-white/90 backdrop-blur-lg shadow-lg"
      }`}
    >
      <nav className="w-full">
        <div className="flex items-center justify-between h-20 px-6 lg:px-12">
          
          {/* Left: Logo */}
          <div className="flex items-center flex-1 justify-start">
            <a 
              href="#" 
              className="flex items-center space-x-3 group transition-all duration-300"
            >
              <div className="relative">
                <img src={logo} alt="" className="w-12 h-auto object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="lora text-2xl font-bold text-gray-900 tracking-tight">
                  Afghan Saffron
                </span>
              </div>
            </a>
          </div>

          {/* Center: Navigation Menu */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-16">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative group"
                >
                  <span className="font-normal text-xl text-gray-800 tracking-wide transition-all duration-300 group-hover:text-[#44155B] group-hover:font-medium">
                    {item.label}
                  </span>
                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E42F1C] transition-all duration-500 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Icons */}
<div className="flex items-center flex-1 justify-end">
  <div className="hidden lg:flex items-center space-x-14">
  {rightIcons.map((item, index) => (
    <button
      key={item.label}
      aria-label={item.label}
      type="button"
      className="relative group focus:outline-none"
    >
      {/* Centered icon with padding (clickable area) */}
      <div className="p-3 rounded-2xl transition-all duration-300 hover:bg-purple-50 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
        <item.icon
          className={`
            h-7 w-7 transition-all duration-300
            ${index === 0
              ? "text-gray-700 group-hover:text-[#44155B] group-active:text-[#44155B] group-hover:scale-110 group-active:scale-110"
              : "text-gray-600 group-hover:text-[#44155B] group-active:text-[#44155B] group-hover:scale-105 group-active:scale-105"
            }
          `}
        />
      </div>

      {/* Badge - now perfectly on top-right of the ICON */}
      {item.hasBadge && (
        <span className="absolute top-1 right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-[#44155B] rounded-full border-2 border-white shadow-lg">
          {item.badgeCount}
        </span>
      )}
    </button>
  ))}
</div>
  {/* Mobile Menu Button */}
  <div className="lg:hidden flex items-center space-x-4">
    {/* Shopping bag for mobile */}
    <button 
      aria-label="Shopping Bag" 
      className="relative p-3 rounded-2xl transition-all duration-300 hover:bg-purple-50"
    >
      <HiOutlineShoppingBag className="h-6 w-6 पहले:text-gray-600 hover:text-[#44155B] transition-colors duration-300" />
      <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-[#44155B] rounded-full border-2 border-white">
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

        {/* Mobile Menu Panel */}
        {open && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 animate-in slide-in-from-top duration-300">
            {/* Navigation Links */}
            <div className="px-6 py-6 space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-3 text-xl font-light text-gray-800 transition-all duration-300 hover:text-[#44155B] hover:font-medium hover:pl-4 border-l-4 border-transparent hover:border-[#44155B]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Action Buttons */}
            <div className="px-6 py-6 border-t border-gray-200 bg-gray-50/50">
              <div className="flex items-center justify-around">
                {rightIcons.map((item) => (
                  <button 
                    key={item.label}
                    aria-label={item.label}
                    className="flex flex-col items-center p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-lg group"
                  >
                    <item.icon 
                      className="h-7 w-7 text-gray-600 transition-all duration-300 group-hover:text-[#44155B] group-hover:scale-110 mb-2" 
                    />
                    <span className="text-sm font-light text-gray-600 group-hover:text-[#44155B]">
                      {item.label.split(' ')[0]}
                    </span>
                    {item.hasBadge && (
                      <span className="absolute top-2 right-6 inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-[#44155B] rounded-full">
                        {item.badgeCount}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;