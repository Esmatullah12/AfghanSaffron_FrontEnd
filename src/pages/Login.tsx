import { useState } from "react";
import { FiX } from "react-icons/fi";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";

type Props = {
  onClose: () => void;
};

export default function LoginModal({ onClose }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white w-[380px] p-6 rounded-2xl shadow-xl relative">

        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4">
          <FiX size={22} className="text-gray-600 hover:text-black" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center">Agent Login</h2>
        <p className="text-center text-gray-500 text-sm mt-1">
          Hey, Enter your details to get sign in <br /> to your account
        </p>

        {/* Email */}
        <div className="mt-6">
          <label className="text-sm text-gray-600 font-medium">Enter Email / Phone No</label>
          <div className="border rounded-xl px-3 mt-1 flex items-center">
            <input
              type="text"
              className="flex-1 py-3 outline-none"
              placeholder="Enter Email / Phone No"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mt-4">
          <label className="text-sm text-gray-600 font-medium">Password</label>
          <div className="border rounded-xl px-3 mt-1 flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              className="flex-1 py-3 outline-none"
              placeholder="Password"
            />
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <FiEyeOff className="text-gray-500" />
              ) : (
                <FiEye className="text-gray-500" />
              )}
            </button>
          </div>
        </div>

        {/* Trouble signing in */}
        <div className="text-sm text-gray-600 mt-4">Having trouble in sign in?</div>

        {/* Sign in button */}
        <button className="w-full mt-4 bg-purple-600 text-white py-3 rounded-xl font-medium hover:bg-purple-700">
          Sign in
        </button>

        {/* Divider */}
        <div className="text-center my-4 text-sm text-gray-500">Or Sign in with</div>

        {/* Social Buttons */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 border px-4 py-2 rounded-xl w-[30%] justify-center">
            <FcGoogle size={22} /> 
          </button>

          <button className="flex items-center gap-2 border px-4 py-2 rounded-xl w-[30%] justify-center">
            <FaApple size={22} />
          </button>

          <button className="flex items-center gap-2 border px-4 py-2 rounded-xl w-[30%] justify-center">
            <FaFacebook size={22} className="text-blue-600" />
          </button>
        </div>

        {/* Bottom text */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account? <span className="text-purple-600 font-medium cursor-pointer">Request Now</span>
        </p>
      </div>
    </div>
  );
}
