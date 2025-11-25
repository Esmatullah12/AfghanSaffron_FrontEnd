import Button from "../components/common/Button";
import Layout from "../components/layout/Layout";
import CartItemList from "./../components/Cart/CartItemList";
import CouponBox from "./../components/Cart/CouponBox";
import OrderSummary from "./../components/Cart/OrderSummary";
import PaymentMethods from "./../components/Cart/PaymentMethods";

export default function Cart() {
  return (
    <Layout>
      <div className="w-full bg-gray-100 p-6 md:p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 ">

        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6 p-6 rounded-2xl bg-white">
          <h2 className="text-2xl font-semibold font-display text-primary">Shopping Cart</h2>
          <div className="grid grid-cols-4 text-center gap-4 mb-2 font-bold">
            <div>Product</div>
            <div className="pl-8">Quantity</div>
            <div className="flex justify-end">Price</div>
          </div>

          <CartItemList />

          <div className="flex gap-x-4">
            <Button text="Back" className="text-black bg-transparent border-gray-400 px-6 hover:bg-primary hover:text-white hover:transition duration-500 ease-in-out" />
            <Button text="Cancel Order " className="bg-red-100 text-black transition duration-300 ease-in-out px-4 border-secondary hover:bg-secondary hover:text-white hover:border-primary hover:transition duration-500 ease-in-out" />
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <CouponBox />
          <OrderSummary />
          <PaymentMethods />
          
        </div>
      </div>
    </div>
    </Layout>
  );
}
