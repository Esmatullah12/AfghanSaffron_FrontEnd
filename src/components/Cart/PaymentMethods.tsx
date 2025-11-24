export default function PaymentMethods() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-3">Payment Method</h3>

      <div className="flex gap-3">
        <button className="p-3 border rounded-lg">PayPal</button>
        <button className="p-3 border rounded-lg">Stripe</button>
        <button className="p-3 border rounded-lg">Credit Card</button>
        <button className="p-3 border rounded-lg">Bitcoin</button>
      </div>
    </div>
  );
}
