import { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import LanguageSwitcher from "./LanguageSwitcher";
import CartButton from "./CartButton";
import UserMenu from "./UserMenu/UserMenu";
import MobileMenu from "./MobileMenu/MobileMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 0);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/30 backdrop-blur-xl shadow-xl border-b border-white/20"
          : "bg-white/30 backdrop-blur-xl border border-white/20"
      }`}
    >
      <nav className="flex items-center justify-between h-16 px-6 lg:px-12">
        <Logo />
        <NavLinks />
        <div className="hidden lg:flex items-center space-x-6">
          <LanguageSwitcher />
          <CartButton count={3} />
          <UserMenu />
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;