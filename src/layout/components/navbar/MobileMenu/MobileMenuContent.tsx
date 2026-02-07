// components/navbar/MobileMenu/MobileMenuContent.tsx
import SocialLinks from "../SocialLinks";

const navItems = [
  { label: "ACCOUNT", href: "#" },
  { label: "HOME", href: "#" },
  { label: "PRODUCTS", href: "#" },
  { label: "ABOUT US", href: "#" },
  { label: "BLOG", href: "#" },
];

interface MobileMenuContentProps {
  isLoggedIn: boolean;
  user?: { name: string };
  onClose: () => void;
  onLogout: () => void;
}

const MobileMenuContent = ({ onClose }: MobileMenuContentProps) => (
  <div className="w-3xs position fixed right-0 top-0 bg-white border-l border-b border-gray-400" style={{borderRadius: '0 0 0 3rem'}}>
    <div className="px-6 py-12 space-y-6">
      {navItems.map((item) => (
        <a key={item.label} href={item.href} onClick={onClose} className="py-2 hover:border-l-4 hover:border-secondary block text-[1rem] text-gray-800 hover:text-primary hover:pl-4 transition-all text-center">
          {item.label}
        </a>
      ))}
    </div>

    <div className="px-6 py-6 border-t border-gray-300">
      <SocialLinks />
    </div>
  </div>
);

export default MobileMenuContent;