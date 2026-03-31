import { LuCircleAlert } from "react-icons/lu";
import Button from "./Button";

type ConfirmationModalProps = {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmationModal = ({
  isOpen,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel
}: ConfirmationModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 animate-in fade-in zoom-in duration-200">
        <div className="flex flex-col items-center text-center">
          <div className="bg-red-50 p-3 rounded-full mb-4">
            <LuCircleAlert className="text-red-600 text-6xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">{title}</h2>
          <p className="text-gray-600 mb-6">{message}</p>

          <div className="flex gap-3 w-full">
            {/* <button 
              onClick={onCancel}
              className="flex-1 px-4 py-2 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors"
            >
              {cancelText}
            </button> */}
            <Button disabled={false} text={"Cancel"} onClick={onCancel} className="bg-white text-black w-full border-gray-400 hover:border-primary"/>

            <Button disabled={false} text={"Delete"} onClick={onConfirm} className=" w-full bg-red-600 text-white border border-red-600 hover:bg-red-700 hover:text-white transition-colors shadow-lg shadow-red-200"/>
            {/* <button 
              onClick={onConfirm}
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
            >
              {confirmText}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;