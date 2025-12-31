// components/navbar/UserMenu/UserMenuContent.tsx
import { AiOutlineUser, AiOutlineHistory, AiOutlineHeart } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store/store";
import UserProfile from "./UserProfile";
import UserProfileImg from "../../UserProfileImg";

interface UserMenuContentProps {
  isLoggedIn: boolean;
  onClose: () => void;
  onLogout: () => void;
  openLogin: () => void; 
}

const baseURL = import.meta.env.VITE_API_URL;

const UserMenuContent = ({
  isLoggedIn,
  onClose,
  onLogout,
  openLogin,
}: UserMenuContentProps) => {
  const navigate = useNavigate();

  const handleClick = (to:string) => {
    navigate(to);
  };

  const user = useSelector((state: RootState) => state.auth.user?.userInfo);


  if (isLoggedIn && user) {
    return (
      <>
        <UserProfileImg/>

        <div className="py-2">
          {[
            { icon: AiOutlineUser, label: "My Profile", to: "/profile" },
            { icon: AiOutlineHistory, label: "Order History", to: "/profile/#order-history" },
            { icon: AiOutlineHeart, label: "Wishlist", to: "/profile/#fav-products" },
          ].map((item) => (
            <a
              key={item.label}
              onClick={() => { onClose(); handleClick(item.to); }}
              className="flex items-center gap-3 px-5 py-3 text-gray-800 hover:bg-purple-50 hover:text-[#44155B] transition-all"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}

          <button
            onClick={() => { onLogout(); onClose(); navigate("/")}}
            className="flex w-full items-center gap-3 px-5 py-3 text-red-600 hover:bg-red-50 transition-all"
          >
            <IoLogOutOutline className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="p-6 text-center space-y-5">

      <div className="w-18 h-18 mx-auto bg-gray-100 rounded-full flex items-center justify-center border border-gray-300 ring-4 ring-purple-200">
        <AiOutlineUser className="h-12 w-12 text-gray-400" />
      </div>

      <h3 className="text-lg font-semibold text-gray-800">Welcome!</h3>
      <p className="text-sm text-gray-600">Sign in to access your account</p>

      <div className="space-y-3 pt-3 flex flex-col items-center">
        <Button disabled={false} className="w-full" text="Login" onClick={() => { openLogin(); setTimeout(() => onClose(), 50); }} />

        <Button
          disabled={false}
          className="w-full"
          text="Sign Up"
          onClick={() => {
            onClose();
            (window.location.href = "/AfghanSaffron_FrontEnd/register");
          }}
        />
      </div>
    </div>
  );
};

export default UserMenuContent;
