import { useState } from "react";
import { FiX, FiEye, FiEyeOff } from "react-icons/fi";
import { Button } from "../../../components/ui";
import type { AppDispatch } from "../../../store/store";
import { useDispatch } from "react-redux";
import { loginUser } from "../authSlice";
import { getLocalLikes } from "../../../utils/localStorageHelpers";
import { useNavigate } from "react-router-dom";
import GoogleLoginButton from "../../../components/ui/GoogleLoginButton";
import { useLanguage } from "../../../i18n/LanguageContext";

type Props = {
  onClose: () => void;
};

export const LoginForm = ({ onClose }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError(t.login.requiredError);
      return;
    }

    const result = await dispatch(
      loginUser({
        email,
        password,
      })
    );

    if (loginUser.rejected.match(result)) {
      setError(t.login.incorrectError);
      return;
    }

    const user = result.payload;
    const localLikes = getLocalLikes();

    if (localLikes.length > 0) {
      try {
        await fetch(`${import.meta.env.VITE_API_URL}/favorites/sync`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({ productIds: localLikes }),
        });

          localStorage.removeItem("likedProducts");
        } catch (err) {
          console.error("Failed to sync local likes", err);
        }
      }
      onClose();
  };

  return (
    <>
      <div className="fixed inset-x-0 top-16 bottom-0 z-40"/>
        <div className="fixed inset-0 z-45 flex min-h-screen items-center justify-center">
          <div className="relative w-full max-w-[380px] mx-4 bg-white p-6 rounded-2xl shadow-2xl border border-gray-400 pointer-events-auto">
            <button onClick={onClose} className="absolute top-1 right-1 cursor-pointer p-2 rounded-xl hover:bg-purple-100 transition-all ">
              <FiX size={22} className="text-gray-600 hover:text-black" />
            </button>

            <h2 className="text-2xl font-bold text-center">{t.login.title}</h2>
            <p className="text-center text-gray-500 text-sm mt-1">
              {t.login.subtitle}
            </p>

          <div className="mt-3">
            <label className="text-sm text-gray-600 font-medium">{t.login.emailLabel}</label>
            <div className="mt-1 flex h-10 items-center bg-transparent reg-input border border-gray-400 text-primary px-3 h-9 rounded-full outline-none">
              <input onChange={(e) => setEmail(e.target.value)} type="text" className="flex-1 py-3 outline-none" placeholder={t.login.emailPlaceholder} />
            </div>
          </div>

          <div className="mt-1">
            <label className="text-sm text-gray-600 font-medium">{t.login.passwordLabel}</label>
            <div className="mt-1 flex h-10 items-center bg-transparent reg-input border border-gray-400 text-primary px-3 rounded-full outline-none">
              <input
                type={showPassword ? "text" : "password"}
                className="flex-1 py-3 outline-none"
                placeholder={t.login.passwordPlaceholder}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={() => setShowPassword(!showPassword)} >
                {showPassword ? <FiEyeOff className="text-gray-500" /> : <FiEye className="text-gray-500" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-100 text-red-600 text-sm p-2 rounded-md mt-2">
              {error}
            </div>
          )}

          <Button disabled={false} onClick={handleLogin} text={t.login.signIn} className="w-full h-10 mt-4"/>

            <div className="text-center my-2 text-sm text-gray-500">{t.login.orSignIn}</div>
            <GoogleLoginButton />
            <p className="text-center text-sm text-gray-600 mt-4">
              {t.login.noAccount}{" "}
              <span onClick={() => navigate("/register")} className="text-purple-600 cursor-pointer font-bold">{t.login.requestNow}</span>
            </p>
          </div>
      </div>
    </>
  );
}

export default LoginForm;
