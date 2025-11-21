import { useState } from "react";
import { FiX, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import Button from "../components/common/Button";

type Props = {
  onClose: () => void;
};

export const Login = ({ onClose }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div 
  className="fixed inset-x-0 top-16 bottom-0 bg-black/40 z-40 pointer-events-none"
/>

  {/* MODAL CONTAINER */}
  <div className="fixed inset-0 z-45 flex min-h-screen items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-[380px] mx-4 bg-white p-6 rounded-2xl shadow-2xl border border-gray-400 pointer-events-auto">
          <button onClick={onClose} className="absolute top-1 right-1 cursor-pointer p-2 rounded-xl hover:bg-purple-100 transition-all ">
            <FiX size={22} className="text-gray-600 hover:text-black" />
          </button>

          <h2 className="text-2xl font-bold text-center">Login to your Account</h2>
          <p className="text-center text-gray-500 text-sm mt-1">
            Login and start shopping now!
          </p>

          <div className="mt-3">
            <label className="text-sm text-gray-600 font-medium">Enter Email</label>
            <div className="mt-1 flex h-10 items-center bg-transparent reg-input border border-gray-400 text-primary px-3 h-9 rounded-full outline-none">
              <input type="text" className="flex-1 py-3 outline-none" placeholder="Enter Email / Phone No" />
            </div>
          </div>

          <div className="mt-1">
            <label className="text-sm text-gray-600 font-medium">Password</label>
            <div className="mt-1 flex h-10 items-center bg-transparent reg-input border border-gray-400 text-primary px-3 rounded-full outline-none">
              <input
                type={showPassword ? "text" : "password"}
                className="flex-1 py-3 outline-none"
                placeholder="Password"
              />
              <button onClick={() => setShowPassword(!showPassword)} >
                {showPassword ? <FiEyeOff className="text-gray-500" /> : <FiEye className="text-gray-500" />}
              </button>
            </div>
          </div>


          <Button text="Sign In" className="w-full h-10 mt-4"/>

          <div className="text-center my-2 text-sm text-gray-500">Or Sign in with</div>

          <button className="google-btn w-full border border-primary h-10 rounded-full flex justify-center items-center py-1 cursor-pointer mt-2">
            <FcGoogle size={28} /> <span className="ml-2">Sign in with Google</span>
          </button>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <span className="text-purple-600 cursor-pointer font-bold">Request Now</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;