// components/navbar/MobileMenu/MobileMenu.tsx
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import MobileMenuContent from "./MobileMenuContent";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const isLoggedIn = false; // replace with real auth
  const user = isLoggedIn ? { name: "Esmatullah" } : undefined;

  return (
    <>
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="p-3 rounded-2xl hover:bg-purple-50 transition-all"
        >
          {open ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-white/95 backdrop-blur-xl border-t border-gray-200 z-50 animate-in slide-in-from-top duration-300">
          <MobileMenuContent
            isLoggedIn={isLoggedIn}
            user={user}
            onClose={() => setOpen(false)}
            onLogout={() => alert("Logged out!")}
          />
        </div>
      )}
    </>
  );
};

export default MobileMenu;