export default function OrderSummary() {
  return (
    <div className="bg-white p-4 rounded-2xl">
      <h3 className="font-semibold mb-3 border-b pb-3">Order Summary</h3>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Discount</span>
          <span>$0.00</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Delivery</span>
          <span>$29.99</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500" >Tax</span>
          <span>$39.99</span>
        </div>

        <div className="flex justify-between font-semibold text-lg pt-2">
          <span className="text-gray-500" >Total</span>
          <span>$1879.93</span>
        </div>
      </div>
    </div>
  );
}
