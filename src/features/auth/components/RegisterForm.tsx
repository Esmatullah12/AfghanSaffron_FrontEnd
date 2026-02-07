import React from "react";
import registerImg from "../../../assets/register.jpg";
import { Button } from "../../../components/ui";
import api from "../../../api/axiosInstance";
import GoogleLoginButton from "../../../components/ui/GoogleLoginButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/registerSchema";
import type { RegisterFormData } from "../schemas/registerSchema";

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const response = await api.post("api/Auth/register", data);
      const result = response.data;

      if (result.success) {
        alert(result.message);
      } else {
        console.log(result.errors);
      }
    } catch (err) {
      console.error("Registration error", err);
    }
  };

  return (
    <div className="py-10 bg-gray-200 flex items-center justify-center px-8">
      <div className="text-white p-6 rounded-2xl max-w-3xl border border-gray-300 grid grid-cols-1 md:grid-cols-2 gap-5 bg-white">
        <div className="rounded-2xl overflow-hidden border border-gray-300 hidden md:block h-115">
          <img
            src={registerImg}
            className="w-full h-full object-cover object-bottom"
            alt="Signup Illustration"
          />
        </div>

        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-3xl font-display font-semibold text-primary">
            CREATE ACCOUNT
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <input
                className="bg-transparent reg-input border border-gray-300 text-primary px-3 h-9 rounded-full outline-none"
                {...register("firstName")}
                placeholder="First Name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs ml-2">{errors.firstName.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                className="bg-transparent reg-input border border-gray-300 text-primary px-3 h-9 rounded-full outline-none"
                {...register("lastName")}
                placeholder="LastName"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs ml-2">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <input
              className="bg-transparent reg-input border border-gray-300 text-primary px-3 h-9 rounded-full outline-none"
              type="email"
              {...register("email")}
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs ml-2">{errors.email.message}</p>
            )}
          </div>
          <div className="grid grid-cols-4 gap-x-4">
            <input
              className="col-span-1 reg-input bg-transparent border border-gray-300 text-primary px-3 h-9 rounded-full outline-none"
              defaultValue="+60"
            />
            
            <div className="col-span-3">
              <input
                className="reg-input bg-transparent border w-full border-gray-300 text-primary px-3 h-9 rounded-full outline-none"
                {...register("phone")}
                placeholder="Phone"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs ml-2">
                  {errors.phone?.message}
                </p>
              )}
            </div>
          </div>
          
          <div className="flex flex-col">
            <textarea
              className="p-3 h-14 w-full reg-input border border-gray-300 rounded-2xl bg-transparent text-primary resize-none outline-none"
              {...register("address")}
              placeholder="Shipping Address"
            />
            {errors.address && (
              <p className="text-red-500 text-xs ml-2">{errors.address.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <input
              className="bg-transparent reg-input border border-gray-300 text-primary px-3 h-9 rounded-full outline-none"
              type="password"
              {...register("password")}
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs ml-2">{errors.password.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <input
              className="bg-transparent reg-input border border-gray-300 text-primary px-3 h-9 rounded-full outline-none"
              type="password"
              {...register("confirmPassword")}
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs ml-2">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className="">
            <div className="flex items-center gap-1 text-sm pl-1">
              <div className="term-checkbox-wrapper">
                <span className="checkbox">
                  <input
                    id="terms-checkbox"
                    type="checkbox"
                    {...register("termsAccepted")}
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
            {errors.termsAccepted && (
              <p className="text-red-500 text-xs ml-2">{errors.termsAccepted.message}</p>
            )}
          </div>

          <Button
            disabled={isSubmitting}
            text={isSubmitting ? "Creating..." : "Create Account"}
            className="h-10"
          />
          <div className="flex justify-center">
            <GoogleLoginButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;