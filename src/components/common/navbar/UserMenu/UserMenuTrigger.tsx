// components/navbar/UserMenu/UserMenuTrigger.tsx
import { AiOutlineUser } from "react-icons/ai";

interface UserMenuTriggerProps {
  onClick: () => void;
  isOpen: boolean;
}

const UserMenuTrigger = ({ onClick, isOpen }: UserMenuTriggerProps) => (
  <button
    onClick={onClick}
    aria-label="Account menu"
    aria-expanded={isOpen}
    aria-haspopup="true"
    className="p-3 rounded-2xl transition-all duration-300 hover:bg-purple-50 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
  >
    <AiOutlineUser className="h-7 w-7 text-gray-700 hover:text-[#44155B] transition-all duration-300" />
  </button>
);

export default UserMenuTrigger;