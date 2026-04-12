import { Button } from "../../../components/ui";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function CouponBox() {
  const { t } = useLanguage();

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-300">
      <h3 className="font-semibold pb-3">{t.coupon.title}</h3>

      <input
        type="text"
        placeholder={t.coupon.placeholder}
        className="bg-transparent reg-input border border-gray-300 text-primary px-3 h-10 rounded-3xl mb-4 outline-none w-full"
      />

      <Button disabled={false} text={t.coupon.apply} className="w-full" />
    </div>
  );
}
