import paypal from "../../../assets/payment/paypal.png";
import stripe from "../../../assets/payment/stripe.png";
import bitcoin from "../../../assets/payment/betcoin.png";
import { Button } from "../../../components/ui";
import React from "react";

const paymentMethods = [
  { id: 1, name: "Cash on Delivery", logo: null },
  { id: 2, name: "paypal", logo: paypal },
  { id: 3, name: "stripe", logo: stripe },
  { id: 4, name: "bitcoin", logo: bitcoin }
];

interface Props {
  selectedMethod: number | null;
  onChange: (id: number) => void;
  onCheckout: () => void;
  loading: boolean;
}


const PaymentMethods : React.FC<Props> = ({selectedMethod, onChange, onCheckout, loading}) => {

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-300">
      <h3 className="font-semibold mb-3 border-b border-gray-300 pb-2">Payment Method</h3>

      <div className="gap-3 mb-4 grid grid-cols-4">
        {paymentMethods.map((method) => (
        <button
          key={method.id}
          onClick={() => onChange(method.id)}
          className={`
            p-2 rounded-lg h-12 w-full cursor-pointer bg-gray-100
            border flex items-center justify-center gap-2
            ${selectedMethod === method.id
              ? "border-2 border-purple-700 bg-purple-50"
              : "border-gray-300"}
          `}
        >
          {method.logo ? (
            <img
              className="h-full"
              src={method.logo}
              alt={method.name}
            />
          ) : (
            <span className="text-xs leading-3.5 font-bold text-gray-800">
              {method.name}
            </span>
          )}
        </button>
      ))}

      </div>

      <Button disabled={loading || !selectedMethod} onClick={onCheckout} text={loading ? "Processing..." : "Proceed to Checkout"} className="w-full"/>
    </div>
  );
}

export default PaymentMethods;