import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../i18n/LanguageContext";

const NavLinks = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.products, to: "/#product-showcase" },
    { label: t.nav.aboutUs, to: "/#about-us" },
    { label: t.nav.contactUs, to: "/#contact-us" },
  ];

  const handleClick = (to: string) => {
    navigate(to);
  };

  return (
    <div className="hidden lg:flex flex-1 justify-center">
      <div className="flex items-center space-x-16">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleClick(item.to)}
            className="relative group font-bold text-[1.1rem] text-gray-800 tracking-widest transition-all duration-300 group-hover:text-primary cursor-pointer"
          >
            {item.label}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-500 group-hover:w-full" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
