import type { RootState } from "../../store/store";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export default function OrderSummary() {

  const cart = useSelector((state: RootState) => state.cart.items);

  // Calculate products cost
  const productsCost = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  const discount = 0;
  const delivery = 0;

  const total = productsCost - discount + delivery;

  return (
    <div className="bg-white p-5 rounded-2xl">
      <h3 className="font-semibold mb-2 border-b border-gray-300 pb-2">Order Summary</h3>

      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Discount</span>
          <span>${discount}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Delivery</span>
          <span>${delivery}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Products</span>
          <span>${productsCost.toFixed(2)}</span>
        </div>

        <div className="flex justify-between font-semibold text-lg pt-2">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
