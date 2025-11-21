// components/navbar/UserMenu/UserMenu.tsx

import { useState, useRef, useEffect } from "react";
import UserMenuTrigger from "./UserMenuTrigger";
import UserMenuContent from "./UserMenuContent";
import LoginModal from "../../../../pages/Login"; // adjust path if needed

const UserMenu = ({ className }: UserMenuProps) => {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const [isLoggedIn] = useState(false);
  const user = isLoggedIn ? { name: "Esmatullah", email: "esmat@example.com" } : undefined;
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Lock body scroll when login modal is open
  // In UserMenu.tsx — inside the useEffect for openLogin
useEffect(() => {
  if (openLogin) {
    document.body.classList.add("overflow-hidden");
    document.documentElement.classList.add("login-modal-open"); // ← ADD THIS LINE

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
  } else {
    document.documentElement.classList.remove("login-modal-open"); // ← AND HERE

    const scrollY = document.body.style.top;
    document.body.classList.remove("overflow-hidden");
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }
}, [openLogin]);

  return (
    <>
      <div className={`relative ${className}`} ref={ref}>
        <UserMenuTrigger onClick={() => setOpen(!open)} isOpen={open} />

        {open && (
          <div className="absolute right-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden z-50 animate-in slide-in-from-top-2 fade-in duration-200">
            <UserMenuContent
              isLoggedIn={isLoggedIn}
              user={user}
              onClose={() => setOpen(false)}
              onLogout={() => alert("Logged out!")}
              openLogin={() => setOpenLogin(true)}
            />
          </div>
        )}
      </div>

      {/* Login Modal */}
      {openLogin && (
        <LoginModal
          onClose={() => setOpenLogin(false)}
        />
      )}
    </>
  );
};

export default UserMenu;