import { GoogleLogin } from "@react-oauth/google";
import { useAppDispatch } from "../../hooks/useAuth";
import { loginWithGoogle } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <GoogleLogin
    shape="circle"
      onSuccess={(credentialResponse) => {
          const idToken = credentialResponse.credential;
          if (!idToken) return;

        dispatch(loginWithGoogle(idToken));
        navigate("/");
      }}
      onError={() => {
        console.log("Google Login Failed");
      }}
    />
  );
};

export default GoogleLoginButton;


// import { useGoogleLogin } from "@react-oauth/google";
// import { useAppDispatch } from "../../hooks/useAuth";
// import { loginWithGoogle } from "../../features/auth/authSlice";

// const GoogleLoginButton = () => {
//   const dispatch = useAppDispatch();

//   const login = useGoogleLogin({
//     onSuccess: (tokenResponse) => {
//       dispatch(loginWithGoogle(tokenResponse.access_token));
//     },
//     onError: () => {
//       console.log("Google Login Failed");
//     },
//   });

//   return (
//     <button
//       onClick={() => login()}
//       className="flex items-center gap-3 border border-gray-300 px-6 py-2 w-full rounded-full hover:bg-gray-100 transition"
//     >
//       <img
//         src="https://developers.google.com/identity/images/g-logo.png"
//         alt="Google"
//         className="w-5 h-5"
//       />
//       <span className="font-medium text-black">Continue with Google</span>
//     </button>
//   );
// };

// export default GoogleLoginButton;
