import Button from "../components/common/Button";
import CartItemList from "./../components/Cart/CartItemList";
import CouponBox from "./../components/Cart/CouponBox";
import OrderSummary from "./../components/Cart/OrderSummary";
import PaymentMethods from "./../components/Cart/PaymentMethods";

export default function Cart() {
  return (
    <div className="w-full bg-gray-50 p-6 md:p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold">Shopping Cart</h2>
          <CartItemList />

          <div className="flex justify-between mt-6">
            <button className="px-4 py-2 bg-gray-200 rounded">Back</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded">
              Cancel Order
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <CouponBox />
          <OrderSummary />
          <PaymentMethods />
          <Button text="Proceed to Checkout" />
        </div>
      </div>
    </div>
  );
}
