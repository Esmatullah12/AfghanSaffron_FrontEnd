// components/navbar/MobileMenu/MobileMenuContent.tsx
import { IoLogOutOutline } from "react-icons/io5";
import SocialLinks from "../SocialLinks";

const navItems = [
  { label: "Products", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Blog", href: "#" },
];

interface MobileMenuContentProps {
  isLoggedIn: boolean;
  user?: { name: string };
  onClose: () => void;
  onLogout: () => void;
}

const MobileMenuContent = ({ isLoggedIn, user, onClose, onLogout }: MobileMenuContentProps) => (
  <>
    <div className="px-6 py-6 space-y-6">
      {navItems.map((item) => (
        <a key={item.label} href={item.href} onClick={onClose} className="block text-xl font-normal text-gray-800 hover:text-[#44155B] hover:pl-4 transition-all">
          {item.label}
        </a>
      ))}

      <div className="border-t pt-6">
        {isLoggedIn && user ? (
          <>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#44155B] to-[#E42F1C] rounded-full flex items-center justify-center text-white font-bold">
                {user.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-600">My Account</p>
              </div>
            </div>
            <button onClick={() => { onLogout(); onClose(); }} className="text-red-600 flex items-center gap-2">
              <IoLogOutOutline className="h-5 w-5" /> Logout
            </button>
          </>
        ) : (
          <div className="space-y-3">
            <a href="/login" onClick={onClose} className="block py-3 text-center bg-[#44155B] text-white rounded-lg font-medium">Login</a>
            <a href="/signup" onClick={onClose} className="block py-3 text-center border-2 border-[#44155B] text-[#44155B] rounded-lg font-medium">Sign Up</a>
          </div>
        )}
      </div>
    </div>

    <div className="px-6 py-6 border-t bg-gray-50/50">
      <SocialLinks />
    </div>
  </>
);

export default MobileMenuContent;