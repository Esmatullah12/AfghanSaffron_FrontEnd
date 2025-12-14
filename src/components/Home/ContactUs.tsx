import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import Button from "../common/Button";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { twMerge } from "tailwind-merge";


const ContactUs = () => {
  return (
    <section id="contact-us" className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8  grid grid-cols-1 lg:grid-cols-2 gap-10 border border-gray-200">
        
        <div>
          <h2 className="text-4xl text-primary font-semibold mb-4 font-display">Contact Us</h2>
          <p className="text-gray-500 mb-5">
           Contact us to learn more about our services or get personalized support.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <InfoCard
              icon={<MdOutlineMail className="text-red-600" />}
              title="Mail"
              value="afghanSaffron@gmail.com"
              className="bg-red-50 border border-red-100"
            />

            <InfoCard
              icon={<FiPhone className="text-indigo-600" />}
              title="Call Us"
              value="+60 11 6140 1412"
              className="bg-indigo-50 border border-indigo-200"
            />

            <InfoCard
              icon={<FaWhatsapp className="text-green-500" />}
              title="WhatsApp"
              value="+61 749 530 742"
              className="bg-green-50 border border-green-100"
            />

            <InfoCard
              icon={<IoLogoTiktok className="text-gray-900" />}
              title="TikTok"
              value="@Esmatullah12"
              className="bg-gray-100 border border-gray-300"
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1 ml-3">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-3xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 ml-3">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-3xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 ml-3">
                About your inquiry
              </label>
              <textarea
                placeholder="Enter your message"
                rows={4}
                className="w-full rounded-3xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <Button text="Send" className="w-full text-base"/>
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
  <div className="border border-gray-300 rounded-xl p-4 flex flex-col gap-2 hover:shadow-md transition">
    <div className={twMerge("bg-gray-100 p-2 text-3xl rounded-xl w-12", className)}>{icon}</div>
    <div>
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-gray-500">{value}</p>
    </div>
  </div>
);
