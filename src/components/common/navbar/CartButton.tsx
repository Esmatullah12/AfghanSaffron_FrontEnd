import { HiOutlineShoppingBag } from "react-icons/hi";

interface CartButtonProps {
  count: number;
}

const CartButton = ({ count }: CartButtonProps) => (
  <button className="relative p-3 rounded-2xl hover:bg-purple-50 transition-all">
    <HiOutlineShoppingBag className="h-7 w-7 text-gray-700 hover:text-primary" />
    {count > 0 && (
      <span className="absolute top-1 right-1 w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
        {count}
      </span>
    )}
  </button>
);

export default CartButton;