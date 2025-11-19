// components/navbar/UserMenu/UserMenu.tsx
import { useState, useRef, useEffect } from "react";
import UserMenuTrigger from "./UserMenuTrigger";
import UserMenuContent from "./UserMenuContent";

interface UserMenuProps {
  className?: string;
}

const UserMenu = ({ className }: UserMenuProps) => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn] = useState(false); // Replace with real auth later
  const user = isLoggedIn ? { name: "Esmatullah", email: "esmat@example.com" } : undefined;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleLogout = () => {
    // setIsLoggedIn(false); // when using real auth
    alert("Logged out!");
  };

  return (
    <div className={`relative ${className}`} ref={ref}>
      <UserMenuTrigger onClick={() => setOpen(!open)} isOpen={open} />
      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 animate-in slide-in-from-top-2 fade-in duration-200">
          <UserMenuContent
            isLoggedIn={isLoggedIn}
            user={user}
            onClose={() => setOpen(false)}
            onLogout={handleLogout}
          />
        </div>
      )}
    </div>
  );
};

export default UserMenu;