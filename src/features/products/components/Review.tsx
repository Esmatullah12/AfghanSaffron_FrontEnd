import type { FC } from "react";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { resolveImageUrl } from "../../../utils";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../store/store";
import { deleteReview } from "../../review";
import ConfirmationModal from "../../../components/ui/ConfirmationModal";

interface ReviewProps {
  id: number;
  profileImage: string;
  fullName: string;
  rating: number; // 1 - 5
  date: string;
  isCurrentUserReview: boolean;
  comment: string;
}

const Review: FC<ReviewProps> = ({
  id,
  profileImage,
  fullName,
  rating,
  date,
  comment,
  isCurrentUserReview
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteReview({ id, isConfirm: true }));
    setIsModalOpen(false);
  };

  return (
    <div className="flex gap-5 p-4 bg-white  pb-4 border-b border-gray-200 transition my-1">
      <ConfirmationModal
        isOpen={isModalOpen}
        title="Delete Review"
        message="Are you sure you want to delete this review? This action cannot be undone."
        confirmText="Delete"
        onConfirm={handleDelete}
        onCancel={() => setIsModalOpen(false)}
      />
        {profileImage ? (
          <img
            src={resolveImageUrl(profileImage)}
            alt="userprofileimage"
            className="w-14 h-14 rounded-full object-cover ring-4 ring-purple-100"
          />
          ) : (
            <div className="ring-purple-100 ring-4  w-16 text-xl h-14 bg-gradient-to-br from-[#44155B] to-[#E42F1C] rounded-full flex items-center justify-center text-white font-bold">
              {fullName?.charAt(0).toUpperCase()}
            </div>
          )}
      

      <div className="flex items-center justify-between w-full">
        <div >
          <div className="flex items-center gap-3">
            <h4 className="font-semibold text-gray-800">{fullName}</h4>
            <span className="text-sm text-gray-500">{date}</span>
          </div>

          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaRegStar
                key={star}
                className={
                  star <= rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
                size={15}
              />
            ))}
          </div>

          <p className="mt-1 text-gray-800 text-sm leading-relaxed">
            {comment}
          </p>
        </div>
        {isCurrentUserReview === true && (
          <button 
            className="text-gray-500 hover:text-red-500 flex justify-end pr-3"
            onClick={() => setIsModalOpen(true)}
          >
            <FiTrash2 size={22} className="cursor-pointer"/>
          </button>
        )}
      </div>
    </div>
  );
};

export default Review;
