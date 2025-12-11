import { useState } from "react";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../../features/cart/cartSlice";

interface IncrementDecrementProps{
  className:string
  count: number
  productId: number
}

export const IncrementDecrement: React.FC<IncrementDecrementProps> = ({className, count = 1, productId}) => {
  const [quantity, setQuantity] = useState(count)

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => Math.max(1, prev - 1));
  const dispatch = useDispatch();
  return(
    <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
      <button
        onClick={() => dispatch(decreaseQuantity(productId))}
        className={`${className} pl-3 hover:bg-gray-100 transition-colors border-r border-gray-300`}
        aria-label="Decrease quantity"
      >
        <HiOutlineMinus className="w-4 h-4" />
      </button>

      <div className={`${className} font-medium min-w-[3rem] text-center`}>{quantity}</div>

      <button
        onClick={increment}
        className={`${className} pr-3 hover:bg-gray-100 transition-colors border-l border-gray-300`}
        aria-label="Increase quantity"
      >
        <HiOutlinePlus onClick={() => dispatch(increaseQuantity(productId))} className="w-4 h-4" />
      </button>
    </div>
  )
}