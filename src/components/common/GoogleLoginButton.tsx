import { GoogleLogin } from "@react-oauth/google";
import { useAppDispatch } from "../../hooks/useAuth";
import { loginWithGoogle } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


 return (
     <div className="w-full">
      <GoogleLogin
        onSuccess={(res) => {
          const idToken = res.credential;
          if (!idToken) return;
          dispatch(loginWithGoogle(idToken));
          navigate("/");
        }}
        onError={() => console.log("Google Login Failed")}
        width="100%"
        shape="circle"
      />
    </div>
  );
};

export default GoogleLoginButton;



// import { GoogleLogin } from "@react-oauth/google";
// import { useAppDispatch } from "../../hooks/useAuth";
// import { loginWithGoogle } from "../../features/auth/authSlice";
// import { useNavigate } from "react-router-dom";

// const GoogleLoginButton = () => {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   return (
//     <GoogleLogin
//     shape="circle"
//       onSuccess={(credentialResponse) => {
//           const idToken = credentialResponse.credential;
//           if (!idToken) return;

//         dispatch(loginWithGoogle(idToken));
//         navigate("/");
//       }}
//       onError={() => {
//         console.log("Google Login Failed");
//       }}
//     />
//   );
// };

// export default GoogleLoginButton;