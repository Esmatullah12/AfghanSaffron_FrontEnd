import { useEffect, useState } from "react";
import CartItem from "./CartItem";

interface CartItem{
  id: number,
  thumbnail: string;
  weight: string;
  quantity: number;
  name: string;
  price: number;
}
export default function CartItemList() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    <div className="space-y-4">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))
      )}
    </div>
  );
}
