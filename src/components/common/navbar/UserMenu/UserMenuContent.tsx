// components/navbar/UserMenu/UserMenuContent.tsx
import { AiOutlineUser, AiOutlineHistory, AiOutlineHeart } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import Button from "../../Button";

interface UserMenuContentProps {
  isLoggedIn: boolean;
  user?: { name: string; email: string };
  onClose: () => void;
  onLogout: () => void;
  openLogin: () => void; 
}

const UserMenuContent = ({
  isLoggedIn,
  user,
  onClose,
  onLogout,
  openLogin,
}: UserMenuContentProps) => {

  if (isLoggedIn && user) {
    return (
      <>
        <div className="px-5 py-6 bg-gradient-to-br from-purple-50 to-pink-50 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#44155B] to-[#E42F1C] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              {user.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>

        <div className="py-2">
          {[
            { icon: AiOutlineUser, label: "My Profile", href: "/profile" },
            { icon: AiOutlineHistory, label: "Order History", href: "/orders" },
            { icon: AiOutlineHeart, label: "Wishlist", href: "/wishlist" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-3 px-5 py-3 text-gray-800 hover:bg-purple-50 hover:text-[#44155B] transition-all"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}

          <button
            onClick={() => { onLogout(); onClose(); }}
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
        <Button className="w-full" text="Login" onClick={() => {openLogin(); onClose();}} />

        <Button
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
