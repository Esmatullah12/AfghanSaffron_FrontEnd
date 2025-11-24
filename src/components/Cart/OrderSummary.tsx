export default function OrderSummary() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-3">Order Summary</h3>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Discount</span>
          <span>$0.00</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery</span>
          <span>$29.99</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>$39.99</span>
        </div>

        <div className="flex justify-between font-semibold text-lg pt-2 border-t">
          <span>Total</span>
          <span>$1879.93</span>
        </div>
      </div>
    </div>
  );
}
