import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const baseURL = import.meta.env.VITE_API_URL;

const UserProfileImg: React.FC = () => {
  const user = useSelector(
    (state: RootState) => state.auth.user?.userInfo
  );

  if (!user) return null; // or a skeleton loader

  const userImage = user.picture;

  const imageSrc =
    userImage?.startsWith("https://lh3.googleusercontent.com/")
      ? userImage
      : userImage
      ? `${baseURL}/${userImage}`
      : null;

  return (
    <div className="px-5 py-6 bg-gradient-to-br from-purple-50 to-pink-50 border-b border-gray-200">
      <div className="flex items-center gap-4">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover ring-4 ring-purple-200"
          />
        ) : (
          <div className="w-16 h-16 bg-gradient-to-br from-[#44155B] to-[#E42F1C] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            {user.firstName?.charAt(0).toUpperCase()}
          </div>
        )}

        <div>
          <p className="font-semibold text-gray-900">{user.firstName}</p>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileImg;
