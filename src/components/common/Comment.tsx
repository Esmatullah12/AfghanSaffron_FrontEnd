import type { FC } from "react";
import { FaStar } from "react-icons/fa";

interface CommentProps {
  profileImage: string;
  fullName: string;
  rating: number; // 1 - 5
  date: string;
  comment: string;
}

const Comment: FC<CommentProps> = ({
  profileImage,
  fullName,
  rating,
  date,
  comment,
}) => {
  return (
    <div className="flex gap-4 p-4 bg-white rounded-xl pb-4">
      {/* Profile Image */}
      <div className="w-14 h-14 p-1 bg-purple-200 rounded-full">
        <img
          src={profileImage}
          alt={fullName}
          className="rounded-full object-cover"
        />
      </div>
      

      {/* Content */}
      <div className="flex-1">
        {/* Name & Date */}
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-gray-800">{fullName}</h4>
          <span className="text-sm text-gray-500">{date}</span>
        </div>

        {/* Stars */}
        <div className="flex gap-1 mt-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={
                star <= rating
                  ? "text-yellow-400"
                  : "text-gray-300"
              }
              size={14}
            />
          ))}
        </div>

        {/* Comment */}
        <p className="mt-2 text-gray-600 text-sm leading-relaxed">
          {comment}
        </p>
      </div>
    </div>
  );
};

export default Comment;
