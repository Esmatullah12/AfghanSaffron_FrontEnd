import Button from "../common/Button";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

interface InfoProps {
  label?: string;
  value?: string;
}

const UserInfo: React.FC = () => {
  const user = useSelector((state : RootState) => state.auth.user?.userInfo)

  return (
            <section id="product-showcase" className="bg-gray-100">

        <div className="max-w-6xl px-8 mx-auto py-10 bg-gray-100">
      <h1 className="font-semibold mb-1 text-3xl font-display text-primary">Profile</h1>
      <p className="text-sm text-gray-500 mb-6">
        View and manage your profile details.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col items-center">
          <div className="w-50 h-50 rounded-full border border-gray-200 flex bg-purple-200 items-center justify-center mb-2">
            <img
              src={"https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"}
              alt={user?.name}
              className="w-46 h-46 rounded-full object-cover"
            />
          </div>
          <h2 className="text-2xl weight-bold font-semibold mb-4">
            {user?.name} {user?.lastName}
          </h2>

          <div className="flex flex-col gap-3 w-full">
            <Button className="w-full rounded-full bg-primary text-white py-2 text-sm font-medium hover:bg-white transition" text="Edit Profile" disabled={false} />
            <Button className="w-full rounded-full py-2 text-sm font-medium bg-white text-primary hover:shadow transition" text="Change Password" disabled={false} />
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl p-6  border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Bio & Details</h3>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <Info label="First Name" value={user?.name} />
            <Info label="Last Name" value={user?.lastName} />
            <Info label="Email" value={user?.email} />
            <Info label="Phone Number" value={user?.phoneNumber} />
            <Info label="Address" value={user?.address} />
            <Info label="Job Title" value={user?.jobTitle} />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

const Info: React.FC<InfoProps> = ({ label, value }) => (
  <div>
    <p className="text-gray-500 text-lg mb-1">{label}</p>
    <p className="font-medium text-lg text-gray-800">{value}</p>
  </div>
);

export default UserInfo;
