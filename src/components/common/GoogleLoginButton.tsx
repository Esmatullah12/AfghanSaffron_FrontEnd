import { GoogleLogin } from "@react-oauth/google";
import api from "../../api/axiosInstance";

const GoogleLoginButton = () => {
  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        const idToken = credentialResponse.credential;
        if (!idToken) return;

        try {
          const response = await api.post("/api/Auth/google", { idToken });

          localStorage.setItem(
            "user",
            JSON.stringify({ token: response.data.token })
          );

          console.log("Google login successful", response.data);
        } catch (error) {
          console.error("Google login failed", error);
        }
      }}
      onError={() => {
        console.log("Google Login Failed");
      }}
    />
  );
};

export default GoogleLoginButton;
