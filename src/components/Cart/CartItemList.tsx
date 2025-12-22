import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

export default function CartItemList() {
  const cart = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();

  const handleClick = (to:string) => {
      navigate(to);
  };

  return (
    <div className="space-y-4">
      {cart.length === 0 ? (
        <>
          <p className="text-center text-2xl pt-10">Your cart is empty.</p>
          <div className="flex justify-center">
            <Button onClick={() => handleClick("/#product-showcase")} text="Products" disabled={false} />
          </div>
        </>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="flex gap-x-4">
            <Button
              disabled={false}
              text="Back"
              className="text-black bg-transparent border-gray-400 px-6 hover:bg-primary hover:text-white transition duration-500 ease-in-out"
            />
            <Button
              disabled={false}
              text="Cancel Order"
              className="bg-red-100 text-black px-4 border-secondary hover:bg-secondary hover:text-white hover:border-primary transition duration-500 ease-in-out"
            />
          </div>
        </>
      )}
    </div>
  );
}
