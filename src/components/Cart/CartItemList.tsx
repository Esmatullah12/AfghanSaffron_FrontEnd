import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

export default function CartItemList() {
  const cart = useSelector((state : RootState) => state.cart.items);

  return (
    <div className="space-y-4">
      {cart.length === 0 ? (
        <p className="text-center text-2xl py-10">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))
      )}
    </div>
  );
}
