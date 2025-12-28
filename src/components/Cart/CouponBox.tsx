import Button from "../common/Button";

export default function CouponBox() {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-300">
      <h3 className="font-semibold pb-3">Coupon Code</h3>

      <input
        type="text"
        placeholder="Enter Your Coupon Code"
        className="bg-transparent reg-input border border-gray-300 text-primary px-3 h-10 rounded-3xl mb-4 outline-none w-full"
      />

      <Button disabled={false} text="Apply Your Coupon" className="w-full" />
    </div>
  );
}
