import CartItem from "./CartItem";
import cartData from "../../data/cart";



export default function CartItemList() {
  return (
    <div className="space-y-4">
      {cartData.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
