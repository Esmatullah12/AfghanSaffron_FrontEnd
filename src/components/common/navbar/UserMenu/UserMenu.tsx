import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../store/store";
import UserMenuTrigger from "./UserMenuTrigger";
import UserMenuContent from "./UserMenuContent";
import LoginModal from "../../../login/Login";
import { logout } from "../../../../features/auth/authSlice";

type UserMenuProps = {
  className?: string;
};

const UserMenu = ({ className }: UserMenuProps) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  // ✅ Get user from Redux store
  const user = useSelector((state: RootState) => state.auth.user);
  const isLoggedIn = !!user;

  const ref = useRef<HTMLDivElement>(null);


  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (openLogin) {
      document.body.classList.add("overflow-hidden");
      document.documentElement.classList.add("login-modal-open");

      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      document.documentElement.classList.remove("login-modal-open");

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
              user={user ? user.userInfo : undefined}
              onClose={() => setOpen(false)}
              onLogout={handleLogout}
              openLogin={() => setOpenLogin(true)}
            />
          </div>
        )}
      </div>

      {/* Login Modal */}
      {!isLoggedIn && openLogin && (
        <LoginModal onClose={() => setOpenLogin(false)} />
      )}
    </>
  );
};

export default UserMenu;
