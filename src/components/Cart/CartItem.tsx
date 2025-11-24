import { IncrementDecrement } from "../common/IncrementDecrement";

interface CartItemProps {
  item: {
    id: number,
    thumbnail: string;
    weight: string;
    quantity: number;
    title: string;
    price: number;
  };
}


export default function CartItem({ item }: CartItemProps) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-200">
      <div className="flex gap-4">
        <img src={item.thumbnail} className="w-20 h-20 object-cover rounded" />
        <div>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-500">Color: {item.weight}</p>
        </div>
      </div>

      <IncrementDecrement className="px-2 py-1"/>

      <div className="font-semibold">${item.price}</div>

      <button className="text-gray-500 hover:text-red-500">🗑️</button>
    </div>
  );
}
