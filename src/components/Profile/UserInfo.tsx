import Button from "../common/Button";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import React, { useState } from "react";
import api from "../../api/axiosInstance";

interface InfoProps {
  label?: string;
  value?: string;
  name?: string;
  isEditing?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserInfo: React.FC = () => {
  const user = useSelector(
    (state: RootState) => state.auth.user?.userInfo
  );

  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    firstName: user?.name || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    address: user?.address || "",
    jobTitle: user?.jobTitle || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!user?.id) {
      console.error("User ID missing");
      return;
  }

  const formData = new FormData();
  Object.entries(form).forEach(([key, value]) => {
    formData.append(key, value as string);
  });

  formData.append("id", user.id);

  try {
    // Let Axios handle headers automatically
    await api.put(`api/UMS/updateUserInfo/${user.id}`, formData);

    setIsEditing(false);
    console.log("User updated successfully");
  } catch (error) {
    console.error("Update failed", error);
  }
};



  return (
    <section id="product-showcase" className="bg-gray-100">
      <div className="max-w-6xl px-8 mx-auto py-10 bg-gray-100">
        <h1 className="font-semibold mb-1 text-3xl font-display text-primary">
          Profile
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          View and manage your profile details.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col items-center">
            <div className="w-50 h-50 rounded-full border border-gray-200 flex bg-purple-200 items-center justify-center mb-2">
              <img
                src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"
                alt={user?.name}
                className="w-46 h-46 rounded-full object-cover"
              />
            </div>

            <h2 className="text-2xl weight-bold font-semibold mb-4">
              {user?.name} {user?.lastName}
            </h2>

            <div className="flex flex-col gap-3 w-full">
              <Button
                className="w-full rounded-full bg-primary text-white py-2 text-sm font-medium hover:bg-white transition"
                text={isEditing ? "Cancel" : "Edit Profile"}
                disabled={false}
                onClick={() => setIsEditing(!isEditing)}
              />

              <Button
                className="w-full rounded-full py-2 text-sm font-medium bg-white text-primary hover:shadow transition"
                text="Change Password"
                disabled={false}
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Bio & Details</h3>
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <Info label="First Name" name="name" value={form.firstName} isEditing={isEditing} onChange={handleChange} />
              <Info label="Last Name" name="lastName" value={form.lastName} isEditing={isEditing} onChange={handleChange} />
              <Info label="Email" name="email" value={form.email} isEditing={isEditing} onChange={handleChange} />
              <Info label="Phone Number" name="phoneNumber" value={form.phoneNumber} isEditing={isEditing} onChange={handleChange} />
              <Info label="Address" name="address" value={form.address} isEditing={isEditing} onChange={handleChange} />
              <Info label="Job Title" name="jobTitle" value={form.jobTitle} isEditing={isEditing} onChange={handleChange} />
            </div>

            {isEditing && (
              <div className="mt-6 flex justify-end">
                <Button
                  className="rounded-full bg-primary text-white px-6 py-2 text-sm"
                  text="Save"
                  disabled={false}
                  onClick={handleSave}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Info: React.FC<InfoProps> = ({
  label,
  value,
  name,
  isEditing,
  onChange,
}) => (
  <div>
    <p className="text-gray-500 text-lg mb-1">{label}</p>

    {isEditing ? (
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded-lg px-3 py-2"
      />
    ) : (
      <p className="font-medium text-lg text-gray-800">{value}</p>
    )}
  </div>
);

export default UserInfo;
