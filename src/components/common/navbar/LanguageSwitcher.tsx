import { useState, useRef, useEffect } from "react";
import { IoIosGlobe } from "react-icons/io";
import ReactCountryFlag from "react-country-flag";

const languages = [
  { code: "en", name: "English", countryCode: "US" },
  { code: "ms", name: "Malaysia", countryCode: "MY" },
];

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Select language"
        aria-expanded={open}
        className="p-3 rounded-2xl hover:bg-purple-50 transition-all duration-300"
      >
        <IoIosGlobe className="h-7 w-7 text-gray-700 hover:text-[#44155B]" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-purple-50 hover:text-[#44155B]"
              onClick={() => setOpen(false)}
            >
              <ReactCountryFlag countryCode={lang.countryCode} svg className="rounded-sm" style={{ width: "1.4em", height: "1.4em" }} />
              <span className="font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;