// components/navbar/SocialLinks.tsx
import { IoLogoInstagram, IoLogoTiktok } from "react-icons/io5";

const SocialLinks = () => (
  <div className="flex justify-center gap-6">
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="p-3 rounded-full hover:bg-white transition-all duration-300 group"
    >
      <IoLogoInstagram className="h-9 w-9 text-gray-600 group-hover:text-[#44155B] transition-colors" />
    </a>
    <a
      href="https://tiktok.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="TikTok"
      className="p-3 rounded-full hover:bg-white transition-all duration-300 group"
    >
      <IoLogoTiktok className="h-9 w-9 text-gray-600 group-hover:text-[#44155B] transition-colors" />
    </a>
  </div>
);

export default SocialLinks;