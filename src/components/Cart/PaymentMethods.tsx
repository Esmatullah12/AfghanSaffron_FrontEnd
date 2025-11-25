import Button from "../common/Button";

import paypal from "../../assets/payment/paypal.png";
import stripe from "../../assets/payment/stripe.png";
import mastercard from "../../assets/payment/mastercard.png";
import betcoin from "../../assets/payment/betcoin.png";

export default function PaymentMethods() {
  return (
    <div className="bg-white p-4 rounded-2xl">
      <h3 className="font-semibold mb-3">Payment Method</h3>
      <div className="gap-3 mb-4 grid grid-cols-4">
        <button className=" p-2 rounded-lg border border-gray-400 h-12">
          <img className="h-full mx-auto"  src={paypal} alt="paypal logo" />
        </button>
        <button className="p-2 rounded-lg border border-gray-400 h-12">
          <img className="h-full mx-auto" src={stripe} alt="stripe logo" />
        </button>
        <button className="p-2 rounded-lg border border-gray-400 h-12">
          <img className="h-full mx-auto" src={mastercard} alt="mastercard logo" />
        </button>
        <button className="p-2 rounded-lg border border-gray-400 h-12">
          <img className="h-full mx-auto" src={betcoin} alt="betcoin logo" />
        </button>
      </div>
      <Button text="Proceed to Checkout" className="w-full"/>
    </div>
  );
}
