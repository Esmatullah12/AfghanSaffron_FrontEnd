import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../layout/Layout";
import { CartItemList, CouponBox, OrderSummary, PaymentMethods, clearCart, TouchNGoModal } from "../features/cart";
import type { RootState } from "../store/store";
import api from "../api/axiosInstance";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [paymentMethod, setPaymentMethod] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate total amount
  const productsCost = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);
  const discount = 0;
  const delivery = 0;
  const totalAmount = productsCost - discount + delivery;

  const placeOrder = async () => {
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
      setIsModalOpen(false);
      alert("Order placed successfully ✅");

    } catch (error) {
      console.error(error);
      alert("Failed to place order ❌");
    } finally {
      setLoading(false);
    }
  };

  const handleCheckout = () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    if (paymentMethod === 2) {
      setIsModalOpen(true);
    } else {
      placeOrder();
    }
  };

  return (
    <Layout>
      <div className="w-full bg-gray-100 p-6 md:p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 ">

        <div className="lg:col-span-2 space-y-6 p-6 rounded-2xl bg-white border border-gray-300">
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

    {/* Touch 'n Go Payment Modal */}
    <TouchNGoModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      amount={totalAmount}
      onPaid={placeOrder}
    />
    </Layout>
  );
}
