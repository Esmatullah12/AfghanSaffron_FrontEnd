import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../layout/Layout";
import { CartItemList, CouponBox, OrderSummary, PaymentMethods, clearCart, TouchNGoModal } from "../features/cart";
import type { RootState } from "../store/store";
import api from "../api/axiosInstance";
import { useToast } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { showToast } = useToast();
  const { t } = useLanguage();

  const [paymentMethod, setPaymentMethod] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productsCost = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);
  const discount = 0;
  const delivery = 0;
  const totalAmount = productsCost - discount + delivery;

  const placeOrder = async () => {
    if (cartItems.length === 0) {
      showToast(t.cart.toastEmpty, "error");
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
      showToast(t.cart.toastSuccess, "success");

    } catch (error) {
      console.error(error);
      showToast(t.cart.toastFailed, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCheckout = () => {
    if (!paymentMethod) {
      showToast(t.cart.toastSelectPayment, "error");
      return;
    }

    if (cartItems.length === 0) {
      showToast(t.cart.toastEmpty, "error");
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
          <h2 className="text-2xl font-semibold font-display text-primary border-b pb-2 border-gray-300">{t.cart.title}</h2>
          <div className="grid grid-cols-4 text-center gap-4 mb-2 font-bold">
            <div>{t.cart.product}</div>
            <div className="pl-8">{t.cart.quantity}</div>
            <div className="flex justify-end">{t.cart.price}</div>
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

    <TouchNGoModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      amount={totalAmount}
      onPaid={placeOrder}
    />
    </Layout>
  );
}
