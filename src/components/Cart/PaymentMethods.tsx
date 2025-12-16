import { useState } from "react";
import paypal from "../../assets/payment/paypal.png";
import stripe from "../../assets/payment/stripe.png";
import mastercard from "../../assets/payment/mastercard.png";
import bitcoin from "../../assets/payment/betcoin.png";
import Button from "../common/Button";

const paymentmethods = [
  { id: 1, name: "paypal", logo: paypal },
  { id: 2, name: "stripe", logo: stripe },
  { id: 3, name: "mastercard", logo: mastercard },
  { id: 4, name: "bitcoin", logo: bitcoin }
];

export default function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState<number | null>(null);

  return (
    <div className="bg-white p-5 rounded-2xl">
      <h3 className="font-semibold mb-3 border-b border-gray-300 pb-2">Payment Method</h3>

      <div className="gap-3 mb-4 grid grid-cols-4">
        {paymentmethods.map((method) => (
          <button
            key={method.id}
            onClick={() => setSelectedMethod(method.id)}
            className={`
              p-2.5 rounded-lg h-12 cursor-pointer bg-gray-100
              border 
              ${selectedMethod === method.id ? "border-2 border-purple-700" : "border-gray-300"}
            `}
          >
            <img className="h-full mx-auto" src={method.logo} alt={method.name} />
          </button>
        ))}
      </div>

      <Button text="Proceed to Checkout" className="w-full" disabled={false}/>
    </div>
  );
}
