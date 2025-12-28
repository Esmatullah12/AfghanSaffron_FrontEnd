import React, { useState } from "react";
import register from "../assets/register.jpg";
import Layout from "../layout/Layout";
import { FcGoogle } from "react-icons/fc";
import Button from "../components/common/Button";
import api from "../api/axiosInstance";
import GoogleLoginButton from "../components/common/GoogleLoginButton";

interface SignUpData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phoneCountryCode: number;
  phone: string;
  address: string;
}

const SignUp: React.FC = () => {
  const [form, setForm] = useState<SignUpData>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phoneCountryCode: 60,
    phone: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;

    const parsedValue =
      target instanceof HTMLInputElement && target.type === "number"
        ? Number(value)
        : value;

    setForm((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("api/Auth/register", form)
      const data = response.data;
      if (data.success) {
        console.log("User created successfully!");
        console.log("Message:", data.message);
        console.log("Requires Email Verification:", data.requiresEmailVerification);
        console.log("Email Confirmed:", data.emailConfirmed);
        console.log("User Info:", data.userInfo);
        alert(data.message);
      } else {
        console.log("Registration failed:", data.errors);
        alert("Registration failed. Check errors in console.");
      }
    } catch (err) {
      console.log("Error Occured when Creating new User", err);
    }
  };

  return (
    <Layout>
      <div className="py-10 bg-gray-200 flex items-center justify-center px-8 border-b border-purple-300">
        <div className="text-white p-6 rounded-2xl max-w-3xl border border-gray-300 grid grid-cols-1 md:grid-cols-2 gap-5 bg-white">
          {/* LEFT IMAGE */}
          <div className="rounded-2xl overflow-hidden border border-gray-300 hidden md:block h-115">
            <img
              src={register}
              className="w-full h-full object-cover object-bottom"
              alt="Signup Illustration"
            />
          </div>

          {/* RIGHT FORM */}
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <h2 className="text-3xl font-display font-semibold text-primary">
              Create an account
            </h2>

            {/* First + Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <input
                className="bg-transparent reg-input border border-gray-400 text-primary px-3 h-9 rounded-full outline-none"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
              <input
                className="bg-transparent reg-input border border-gray-400 text-primary px-3 h-9 rounded-full outline-none"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <input
              className="bg-transparent reg-input border border-gray-400 text-primary px-3 h-9 rounded-full outline-none"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            {/* Phone row */}
            <div className="grid grid-cols-3 gap-4">
              <input
                className="bg-transparent reg-input border border-gray-400 text-primary px-3 h-9 rounded-full outline-none"
                type="number"
                name="phoneCountryCode"
                placeholder="Code"
                value={form.phoneCountryCode}
                onChange={handleChange}
                required
              />
              <input
                className="bg-transparent reg-input border border-gray-400 text-primary px-3 h-9 rounded-full outline-none col-span-2"
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Address */}
            <textarea
              className="bg-[#2A1B36] p-3 h-14 reg-input border border-gray-400 rounded-2xl bg-transparent text-primary resize-none outline-none"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              rows={2}
              required
            />

            {/* Password */}
            <input
              className="bg-transparent reg-input border border-gray-400 text-primary px-3 h-9 rounded-full outline-none"
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            {/* Confirm Password */}
            <input
              className="bg-transparent reg-input border border-gray-400 text-primary px-3 h-9 rounded-full outline-none"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            {/* ==== TERMS CHECKBOX ==== */}
            <div className="flex items-center gap-1 text-sm pl-1">
              <div className="term-checkbox-wrapper">
                <span className="checkbox">
                  <input
                    id="terms-checkbox"
                    type="checkbox"
                    required
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        termsAccepted: e.target.checked,
                      }))
                    }
                  />
                  <svg>
                    <use xlinkHref="#term-checkbox" />
                  </svg>
                </span>

                <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                  <symbol className="text-primary" id="term-checkbox" viewBox="0 0 22 22">
                    <path
                      fill="none"
                      stroke="currentColor"
                      d="M5.5,11.3L9,14.8L20.2,3.3l0,0c-0.5-1-1.5-1.8-2.7-1.8h-13c-1.7,0-3,1.3-3,3v13c0,1.7,1.3,3,3,3h13 c1.7,0,3-1.3,3-3v-13c0-0.4-0.1-0.8-0.3-1.2"
                    />
                  </symbol>
                </svg>
              </div>

              <label htmlFor="terms-checkbox" className="text-primary cursor-pointer select-none pb-1">
                I agree to the{" "}
                <span className="font-bold underline cursor-pointer">Terms &amp; Conditions</span>
              </label>
            </div>

            <Button disabled={false} text="Create Account" className="h-10" />
            <div className="flex justify-center">
              <GoogleLoginButton />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;