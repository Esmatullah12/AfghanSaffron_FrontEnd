// components/navbar/UserMenu/UserMenuContent.tsx
import { AiOutlineUser, AiOutlineHistory, AiOutlineHeart } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store/store";

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


  const userImage = user?.picture || user?.picture;

  const imageSrc =
    userImage?.startsWith("https://lh3.googleusercontent.com/")
      ? userImage
      : userImage
        ? `${baseURL}/${userImage}`
        : "";

  if (isLoggedIn && user) {
    return (
      <>
        <div className="px-5 py-6 bg-gradient-to-br from-purple-50 to-pink-50 border-b border-gray-200">
          <div className="flex items-center gap-4">
            {user.picture ? (
              <img
                src={imageSrc}
                alt="Profile"
                className="w-16 h-16 bg-purple-300 rounded-full object-cover p-0.5"
              />
            ) : (
              <div className="w-14 h-14 bg-gradient-to-br from-[#44155B] to-[#E42F1C] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {user.firstName.charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <p className="font-semibold text-gray-900">{user.firstName}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>

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
