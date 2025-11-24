interface CartItemProps {
  item: {
    image: string;
    name: string;
    color: string;
    qty: number;
    price: number;
  };
}

export default function CartItem({ item }: CartItemProps) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
      {/* Product Info */}
      <div className="flex gap-4">
        <img src={item.image} className="w-20 h-20 object-cover rounded" />
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-500">Color: {item.color}</p>
        </div>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-2">
        <button className="px-2 py-1 bg-gray-200 rounded">-</button>
        <span>{item.qty}</span>
        <button className="px-2 py-1 bg-gray-200 rounded">+</button>
      </div>

      {/* Price */}
      <div className="font-semibold">${item.price}</div>

      {/* Trash Icon */}
      <button className="text-gray-500 hover:text-red-500">🗑️</button>
    </div>
  );
}
