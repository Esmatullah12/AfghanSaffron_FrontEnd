import React, { useState } from "react";
import axios from "axios";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import Logo from "../../assets/Logo.png";
import { Button, SocialMediaLinks, useToast } from "../../components/ui";
import api from "../../api/axiosInstance";
import { useLanguage } from "../../i18n/LanguageContext";
import { subscriberSchema } from "./footerSchema/subscriberSchema";

interface Email {
  email: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const { showToast } = useToast();
  
  const [form, setForm] = useState<Email>({
    email: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
     const {value} = e.target;
    setForm({ email: value})
  }

const handleSubscribe = async () => {
  const validation = subscriberSchema.safeParse(form);

  if (!validation.success) {
    showToast(t.footer.invalidEmail, "error");
    return;
  }

  try {
    await api.post<void>("api/Subscriber", validation.data);
    showToast(t.footer.validEmail, "success");
    setForm({ email: "" });
  } catch (err: unknown) {
    const message = axios.isAxiosError<{ errors?: string[] }>(err)
      ? err.response?.data?.errors?.[0]
      : undefined;

    showToast(message ?? `${err}`, "error");
  }
};

  return (
    <footer className="bg-[#f2e0fcff] pt-10 pb-3 font-sans border-t border-purple-300">
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
              {t.footer.tagline1}<br />
              <span className="font-semibold">{t.footer.tagline2}</span>
            </p>

            <SocialMediaLinks className="text-primary"/>

            <p className="text-xs text-gray-500 mt-4">
              {t.footer.followUs} <span className="font-medium">@Esmatullah173</span>
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start mt-8 text-center md:text-left">
            <h4 className="text-sm font-bold text-primary mb-5 uppercase tracking-wider">
              {t.footer.explore}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#bestseller" className="hover:text-primary transition">
                  {t.footer.bestSeller}
                </a>
              </li>
              <li>
                <a href="#saffron" className="hover:text-primary transition">
                  {t.footer.premiumSaffron}
                </a>
              </li>
              <li>
                <a href="#track" className="hover:text-primary transition">
                  {t.footer.trackOrder}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition">
                  {t.footer.aboutUs}
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start mt-8 ">
            <h4 className="text-sm font-bold text-primary mb-5 uppercase tracking-wider">
              {t.footer.contactUs}
            </h4>
            <div className="space-y-4 text-sm">
              <p className="flex items-start gap-2">
                <GrLocation className="text-primary mt-0.5" size={20} />
                <span className="text-center md:text-left">
                  {t.footer.location}<br />
                </span>
              </p>
              <p className="flex items-center just gap-2">
                <FiPhone className="text-primary" size={18} />
                <a href="tel:+93789123456" className="hover:text-primary text-center md:text-left">
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
              {t.footer.stayUpdated}
            </h4>
            <p className="text-sm mb-4 max-w-xs">
              {t.footer.newsletter}
            </p>
            <form className="flex flex-col sm:flex-row gap-2 w-full max-w-xs  h-9">
              <input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="px-4 py-2.5 border border-primary/40 rounded-full focus:outline-none text-sm placeholder-gray-500 focus:border-primary"
                value={form.email}
                onChange={handleChange}
              />
            <Button disabled={false} text={t.footer.join} onClick={(e) => {
              e.preventDefault();
              handleSubscribe()

            }}  
            />
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-purple-300 text-center text-xs text-gray-600">
          <p>
            © {currentYear} <span className="font-bold text-primary">AfghanSaffron</span>. {t.footer.allRights} 
            | {t.footer.proudlyFrom} <span className="text-primary font-medium">Afghanistan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
