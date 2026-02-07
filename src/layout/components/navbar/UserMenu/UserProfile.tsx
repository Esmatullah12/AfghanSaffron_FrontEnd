import { AiOutlineUser, AiOutlineHistory, AiOutlineHeart } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";

interface UserProfileProps {
  user: { name: string; email: string };
  onClose: () => void;
  onLogout: () => void;
}

export const UserProfile = ({ user, onClose, onLogout }: UserProfileProps) => {
  return (
    <>
      {/* Header Section */}
      <div className="px-5 py-6 bg-gradient-to-br from-purple-50 to-pink-50 border-b border-gray-200">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="w-14 h-14 bg-gradient-to-br from-[#44155B] to-[#E42F1C] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            {user.name.charAt(0).toUpperCase()}
          </div>

          {/* User Info */}
          <div>
            <p className="font-semibold text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="py-2">
        {[
          { icon: AiOutlineUser, label: "My Profile", href: "/profile" },
          { icon: AiOutlineHistory, label: "Order History", href: "/orders" },
          { icon: AiOutlineHeart, label: "Wishlist", href: "/wishlist" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-5 py-3 text-gray-800 hover:bg-purple-50 hover:text-[#44155B] transition-all"
            onClick={onClose}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </a>
        ))}

        {/* Logout */}
        <button
          onClick={() => {
            onLogout();
            onClose();
          }}
          className="flex w-full items-center gap-3 px-5 py-3 text-red-600 hover:bg-red-50 transition-all"
        >
          <IoLogOutOutline className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </>
  );
};
export default UserProfile;