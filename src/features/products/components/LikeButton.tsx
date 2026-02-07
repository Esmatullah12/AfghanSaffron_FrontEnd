import { FaHeart, FaRegHeart } from "react-icons/fa";

interface LikeButtonProps {
  isLiked: boolean;
  onToggle: () => void;
}

export default function LikeButton({ isLiked, onToggle }: LikeButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      className="flex items-center justify-center bg-white p-2 rounded-full shadow-md w-10 h-10 hover:bg-[#fcefeeff]"
    >
      {isLiked ? (
        <FaHeart className="text-xl cursor-pointer text-secondary" />
      ) : (
        <FaRegHeart className="text-xl text-gray-700 cursor-pointer hover:text-secondary" />
      )}
    </button>
  );
}