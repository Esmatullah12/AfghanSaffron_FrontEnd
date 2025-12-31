import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import Button from "./Button";

const UserComment = () => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [selectedStar, setSelectedStar] = useState<number | null>(null);
  const [comment, setComment] = useState("");

  return (
    <div className="max-w-4xl bg-white p-5 rounded-xl mx-auto mb-11 ">
      {/* Stars */}
      <div className="flex gap-2 justify-center mb-4">
        {[1, 2, 3, 4, 5].map((star) => {
          const isActive =
            hoveredStar !== null
              ? star <= hoveredStar
              : star <= (selectedStar ?? 0);

          return (
            <FaRegStar
              key={star}
              size={30}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(null)}
              onClick={() => setSelectedStar(star)}
              className={`cursor-pointer transition-all duration-200
                ${isActive ? "text-amber-500 opacity-100" : "opacity-40"}
              `}
            />
          );
        })}
      </div>

      <textarea
        placeholder="Write your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full border border-gray-300 rounded-2xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-0 resize-none"
        rows={4}
      />

      {/* Submit Button */}
      <Button text={"Submit"}  disabled={false}/>
    </div>
  );
};

export default UserComment;
