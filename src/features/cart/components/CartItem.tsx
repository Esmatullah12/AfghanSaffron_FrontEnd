import { FiTrash2 } from "react-icons/fi";
import { IncrementDecrement } from "../../../components/ui";
import { removeFromCart } from "../cartSlice";
import { useDispatch } from "react-redux";

interface CartItemProps {
  item: {
    id: number,
    thumbnail: string;
    weight: number;
    quantity: number;
    name: string;
    price: number;
  };
}

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useDispatch();
  const baseUrl = import.meta.env.VITE_API_URL;

  return (
    <div className="grid grid-cols-2 mg:grid-cols-4 justify-between lg:grid-cols-4 bg-white p-4 rounded-xl border border-gray-200 gap-3 items-center">
      <div className="flex gap-3 items-center ">
        <div className="relative w-16 h-16 overflow-hidden rounded-xl p-1 border-gray-400 border">
          <img src={`${baseUrl}/${item.thumbnail}`} className="w-full h-full object-contain object-cover rounded-lg" />
        </div>
        <div className="flex flex-col item-center justify-center">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-500">Weight: {item.weight}gr</p>
        </div>
      </div>

      <div className="flex justify-end">
        <IncrementDecrement className="px-2 py-1" count={item.quantity} productId={item.id}/>
      </div>
      <div className="font-bold text-xl text-secondary flex justify-end">${item.price}</div>

      <button className="text-gray-500 hover:text-red-500 flex justify-end pr-3">
        <FiTrash2 onClick={() => dispatch(removeFromCart(item.id))} size={22} className="cursor-pointer"/>
      </button>
    </div>
  );
}
