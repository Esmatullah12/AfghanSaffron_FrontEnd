import { AiOutlineUser, AiOutlineHistory, AiOutlineHeart } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import { Button, UserProfileImg } from "../../../../components/ui";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store/store";
import { useLanguage } from "../../../../i18n/LanguageContext";

interface UserMenuContentProps {
  isLoggedIn: boolean;
  onClose: () => void;
  onLogout: () => void;
  openLogin: () => void;
}

const UserMenuContent = ({
  isLoggedIn,
  onClose,
  onLogout,
  openLogin,
}: UserMenuContentProps) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleClick = (to: string) => {
    navigate(to);
  };

  const user = useSelector((state: RootState) => state.auth.user?.userInfo);

  if (isLoggedIn && user) {
    const menuItems = [
      { icon: AiOutlineUser, label: t.userMenu.myProfile, to: "/profile" },
      { icon: AiOutlineHistory, label: t.userMenu.orderHistory, to: "/profile/#order-history" },
      { icon: AiOutlineHeart, label: t.userMenu.wishlist, to: "/profile/#fav-products" },
    ];

    return (
      <>
        <UserProfileImg/>

        <div className="py-2">
          {menuItems.map((item) => (
            <a
              key={item.label}
              onClick={() => { onClose(); handleClick(item.to); }}
              className="flex items-center gap-3 px-5 py-3 text-gray-800 hover:bg-purple-50 hover:text-[#44155B] transition-all"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}

          <button
            onClick={() => { onLogout(); onClose(); navigate("/")}}
            className="flex w-full items-center gap-3 px-5 py-3 text-red-600 hover:bg-red-50 transition-all"
          >
            <IoLogOutOutline className="h-5 w-5" />
            <span>{t.userMenu.logout}</span>
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="p-6 text-center space-y-5">

      <div className="w-18 h-18 mx-auto bg-gray-100 rounded-full flex items-center justify-center border border-gray-300 ring-4 ring-purple-200">
        <AiOutlineUser className="h-12 w-12 text-gray-400" />
      </div>

      <h3 className="text-lg font-semibold text-gray-800">{t.userMenu.welcome}</h3>
      <p className="text-sm text-gray-600">{t.userMenu.signInPrompt}</p>

      <div className="space-y-3 pt-3 flex flex-col items-center">
        <Button disabled={false} className="w-full" text={t.userMenu.login} onClick={() => { openLogin(); setTimeout(() => onClose(), 50); }} />

        <Button
          disabled={false}
          className="w-full"
          text={t.userMenu.signUp}
          onClick={() => {
            onClose();
            navigate("/register");
          }}
        />
      </div>
    </div>
  );
};

export default UserMenuContent;
