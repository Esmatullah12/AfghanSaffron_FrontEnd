import { useState, useRef, useEffect } from "react";
import { IoIosGlobe } from "react-icons/io";
import ReactCountryFlag from "react-country-flag";
import { useLanguage } from "../../../i18n/LanguageContext";

const languages = [
  { code: "en" as const, name: "English", countryCode: "US" },
  { code: "ms" as const, name: "Malaysia", countryCode: "MY" },
];

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = languages.find((l) => l.code === language) ?? languages[0];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Select language"
        aria-expanded={open}
        className="flex items-center gap-1.5 p-3 rounded-2xl hover:bg-purple-50 transition-all duration-300"
      >
        <ReactCountryFlag countryCode={current.countryCode} svg className="rounded-sm" style={{ width: "1.2em", height: "1.2em" }} />
        <IoIosGlobe className="h-5 w-5 text-gray-700 hover:text-primary" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-[150px] bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-purple-50 hover:text-primary ${language === lang.code ? "text-primary font-semibold" : ""}`}
              onClick={() => { setLanguage(lang.code); setOpen(false); }}
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
