import { useState } from "react";
import { FaRegStar } from "react-icons/fa";

const StarRating = () => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  return (
    <div className="flex gap-1 my-6">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaRegStar
          key={star}
          size={20}
          className={`cursor-pointer transition-opacity duration-200 ${
            hoveredStar !== null && star <= hoveredStar
              ? "opacity-100"
              : "opacity-40"
          }`}
          onMouseEnter={() => setHoveredStar(star)}
          onMouseLeave={() => setHoveredStar(null)}
        />
      ))}
    </div>
  );
};

export default StarRating;
