import React from "react";
import { X } from "lucide-react";
import { Button } from "../../../components/ui";

interface TouchNGoModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  onPaid: () => void;
}

const TouchNGoModal: React.FC<TouchNGoModalProps> = ({
  isOpen,
  onClose,
  amount,
  onPaid,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 flex flex-col items-center ">
        {/* Close Button at Top Right Corner */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          <X size={24} />
        </button>

        {/* Amount above the QRCode */}
        <div className="text-center mb-6">
          <p className="text-gray-500 text-sm font-medium mb-1">Total Amount</p>
          <h3 className="text-3xl font-bold text-primary">${amount.toFixed(2)}</h3>
        </div>

        {/* QRCode at the Center */}
        <div className="bg-white p-4 rounded-2xl border-2 border-gray-100 shadow-inner mb-8">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TouchNGoPayment"
            alt="Touch 'n Go QR Code"
            className="w-48 h-48"
          />
        </div>

        {/* I paid My Orders Button at the bottom */}
        <Button
          onClick={onPaid}
          text="I paid My Orders"
          className="w-full rounded-full font-semibold shadow-lg shadow-primary/20"
        />
      </div>
    </div>
  );
};

export default TouchNGoModal;
