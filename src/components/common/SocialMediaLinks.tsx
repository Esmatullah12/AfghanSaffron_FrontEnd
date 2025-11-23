import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

interface SocialMediaLinksProps {
  size?: number;
  className?: string;
}

export default function SocialMediaLinks({ size, className }: SocialMediaLinksProps) {
  return (
    <div className={`flex space-x-5`}>
      <a
        href="https://tiktok.com/@Esmatullah173"
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:scale-110 transition-transform ${className}`}
        aria-label="TikTok"
      >
        <IoLogoTiktok size={size || 22} />
      </a>

      <a
        href="https://instagram.com/Esmatullah173"
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:scale-110 transition-transform ${className}`}
        aria-label="Instagram"
      >
        <FaInstagram size={size || 26} />
      </a>

      <a
        href="https://wa.me/93789123456"
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:scale-110 transition-transform ${className}`}
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={size || 26} />
      </a>
    </div>
  );
}
