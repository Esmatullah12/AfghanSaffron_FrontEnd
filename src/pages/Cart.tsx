import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/common/Button";
import Layout from "../layout/Layout";
import CartItemList from "./../components/Cart/CartItemList";
import CouponBox from "./../components/Cart/CouponBox";
import OrderSummary from "./../components/Cart/OrderSummary";
import PaymentMethods from "./../components/Cart/PaymentMethods";
import type { RootState } from "../store/store";
import { clearCart } from "../features/cart/cartSlice";
import api from "../api/axiosInstance";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [paymentMethod, setPaymentMethod] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    const orderPayload = {
      shippingAddress: "Kabul, Afghanistan",
      paymentMethod: paymentMethod,
      orderItems: cartItems.map(item => ({
        productId: item.id,
        quantity: item.quantity,
      })),
    };

    try {
      setLoading(true);

      await api.post("/api/Order", orderPayload);

      dispatch(clearCart());
      alert("Order placed successfully ✅");

    } catch (error) {
      console.error(error);
      alert("Failed to place order ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="w-full bg-gray-100 p-6 md:p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 ">

        <div className="lg:col-span-2 space-y-6 p-6 rounded-2xl bg-white">
          <h2 className="text-2xl font-semibold font-display text-primary border-b pb-2 border-gray-300">Shopping Cart</h2>
          <div className="grid grid-cols-4 text-center gap-4 mb-2 font-bold">
            <div>Product</div>
            <div className="pl-8">Quantity</div>
            <div className="flex justify-end">Price</div>
          </div>

          <CartItemList />
          
        </div>

        <div className="space-y-6">
          <CouponBox />
          <OrderSummary />
          <PaymentMethods
              selectedMethod={paymentMethod}
              onChange={setPaymentMethod}
              onCheckout={handleCheckout}
              loading={loading}
          />
        </div>
      </div>
    </div>
    </Layout>
  );
}
