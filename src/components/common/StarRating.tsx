import { useState } from "react";
import { FaRegStar } from "react-icons/fa";

const StarRating = () => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  return (
    <div className="flex gap-0.5 my-4 items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaRegStar
          key={star}
          size={19}
          className={`cursor-pointer text-yellow-500 transition-opacity duration-200 ${
            hoveredStar !== null && star <= hoveredStar
              ? "opacity-100"
              : "opacity-40"
          }`}
          onMouseEnter={() => setHoveredStar(star)}
          onMouseLeave={() => setHoveredStar(null)}
        />
      ))}
      <span>( Reviews 44 )</span>
    </div>
  );
};

export default StarRating;
