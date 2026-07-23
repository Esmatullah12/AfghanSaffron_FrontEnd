import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import Button from "../../../components/ui/Button";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import api from "../../../api/axiosInstance";
import axios from "axios";
import { useLanguage } from "../../../i18n/LanguageContext";
import { useToast } from "../../../components/ui";

interface ContactMessagePayload {
  name: string;
  userId?: string,
  emailOrPhone: string;
  message: string;
}

const ContactUs = () => {
  const { t } = useLanguage();
  const { showToast } = useToast();
  const [form, setForm] = useState<ContactMessagePayload>({
    name: "",
    emailOrPhone: "",
    message: ""
  })

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange =(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) : void => {
    const {name, value} = e.target;
    setForm(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    setLoading(true);

    try{
      await api.post<void>("api/ContactMessage", form);
      showToast(t.contact.successMsg, "success");
      setForm({ name: "", emailOrPhone: "", message: ""});
    }catch (err: unknown){
      if (axios.isAxiosError(err)) {
        showToast(t.contact.errorMsg, "error");
      } else {
        showToast(t.contact.unexpectedError, "error");
      }
    }finally{
      setLoading(false);
    }
  } 

  return (
    <section id="contact-us" className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8  grid grid-cols-1 lg:grid-cols-2 gap-10 border border-gray-200">
        
        <div>
          <h2 className="text-4xl text-primary font-semibold mb-4 font-display">{t.contact.heading}</h2>
          <p className="text-gray-500 mb-5">{t.contact.subheading}</p>

          <div className="grid grid-cols-2 gap-6">
            
            <InfoCard
              icon={<MdOutlineMail className="text-red-600" />}
              title={t.contact.mail}
              value="afghanSaffron@gmail.com"
              className="bg-red-50 border border-red-100"
            />

            <InfoCard
              icon={<FiPhone className="text-indigo-600" />}
              title={t.contact.callUs}
              value="+60 11 6140 1412"
              className="bg-indigo-50 border border-indigo-200"
            />

            <InfoCard
              icon={<FaWhatsapp className="text-green-500" />}
              title={t.contact.whatsapp}
              value="+61 749 530 742"
              className="bg-green-50 border border-green-100"
            />

            <InfoCard
              icon={<IoLogoTiktok className="text-gray-900" />}
              title={t.contact.tiktok}
              value="@Esmatullah12"
              className="bg-gray-100 border border-gray-300"
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1 ml-3">
                {t.contact.fullName}
              </label>
              <input
                name="name" 
                type="text"
                placeholder={t.contact.namePlaceholder}
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-3xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 ml-3">
                {t.contact.emailOrPhone}
              </label>
              <input
                type="text"
                name="emailOrPhone"  
                value={form.emailOrPhone}
                onChange={handleChange}
                placeholder={t.contact.emailPlaceholder}
                className="w-full rounded-3xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 ml-3">
                {t.contact.inquiry}
              </label>
              <textarea
                name="message"
                placeholder={t.contact.messagePlaceholder}
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-3xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button text={loading ? t.contact.sending : t.contact.send} className="w-full text-base" disabled={loading}/>
          </form>
        </div>
      </div>
    </section>  
  );
};

export default ContactUs;

const InfoCard = ({
  icon,
  title,
  value,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  className: string
}) => (
  <div className="border border-gray-300 rounded-xl p-4 flex flex-col gap-2 contact-link transition cursor-pointer">
    <div className={twMerge("bg-gray-100 p-2 text-3xl rounded-xl w-12", className)}>{icon}</div>
    <div>
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-gray-500">{value}</p>
    </div>
  </div>
);
