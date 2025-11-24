export default function CouponBox() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-3">Coupon Code</h3>

      <input
        type="text"
        placeholder="Enter Your Coupon Code"
        className="w-full border p-2 rounded mb-3"
      />

      <button className="w-full bg-blue-600 text-white py-2 rounded">
        Apply Your Coupon
      </button>
    </div>
  );
}
