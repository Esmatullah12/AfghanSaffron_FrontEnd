import type { FC } from "react";
import { FaRegStar } from "react-icons/fa";
import { resolveImageUrl } from "../../../utils";

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
    <div className="flex gap-5 p-4 bg-white rounded-xl pb-4 border border border-gray-200 shadow-sm hover:shadow-md transition my-1">
        {profileImage ? (
          <img
            src={resolveImageUrl(profileImage)}
            alt="userprofileimage"
            className="w-14 h-14 rounded-full object-cover ring-2 ring-purple-100"
          />
          ) : (
            <div className="ring-purple-100 ring-4 w-14 text-2xl h-14 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              {fullName?.charAt(0).toUpperCase()}
            </div>
          )}
      

      <div className="flex-1">
        <div className="flex items-center justify-between">
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

        <p className="mt-3 text-gray-700 text-sm leading-relaxed">
          {comment}
        </p>
      </div>
    </div>
  );
};

export default Comment;
