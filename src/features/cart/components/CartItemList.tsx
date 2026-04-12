import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { Button } from "../../../components/ui";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function CartItemList() {
  const cart = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleClick = (to:string) => {
      navigate(to);
  };

  return (
    <div className="space-y-4">
      {cart.length === 0 ? (
        <>
          <p className="text-center text-2xl pt-10">{t.cart.emptyMsg}</p>
          <div className="flex justify-center">
            <Button onClick={() => handleClick("/#product-showcase")} text={t.cart.products} disabled={false} />
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
              text={t.cart.back}
              className="text-black bg-transparent border-gray-400 px-6 hover:bg-primary hover:text-white transition duration-500 ease-in-out"
            />
            <Button
              disabled={false}
              text={t.cart.cancelOrder}
              className="bg-red-100 text-black px-4 border-secondary hover:bg-secondary hover:text-white hover:border-primary transition duration-500 ease-in-out"
            />
          </div>
        </>
      )}
    </div>
  );
}
