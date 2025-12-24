import { GoogleLogin } from "@react-oauth/google";
import { useAppDispatch } from "../../hooks/useAuth"; // or wherever your hooks are
import { loginWithGoogle } from "../../features/auth/authSlice";

const GoogleLoginButton = () => {
  const dispatch = useAppDispatch();

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const idToken = credentialResponse.credential;
        if (!idToken) return;

        dispatch(loginWithGoogle(idToken));
      }}
      onError={() => {
        console.log("Google Login Failed");
      }}
    />
  );
};

export default GoogleLoginButton;
