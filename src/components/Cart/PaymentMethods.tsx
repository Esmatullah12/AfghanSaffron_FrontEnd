import Button from "../common/Button";

export default function PaymentMethods() {
  return (
    <div className="bg-white p-4 rounded-2xl">
      <h3 className="font-semibold mb-3">Payment Method</h3>

      <div className="flex gap-3 mb-4">
        <button className="p-3 border rounded-lg">PayPal</button>
        <button className="p-3 border rounded-lg">Stripe</button>
        <button className="p-3 border rounded-lg">Credit Card</button>
        <button className="p-3 border rounded-lg">Bitcoin</button>
      </div>
      <Button text="Proceed to Checkout" className="w-full"/>
    </div>
  );
}
