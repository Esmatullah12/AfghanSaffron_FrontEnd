import { useState } from "react";
import { FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  averageRating: number;
  totalRating: number;
  readOnly?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  averageRating,
  totalRating,
  readOnly = true,
}) => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  const getActiveStars = (rating: number) => {
    const integerPart = Math.floor(rating);
    const decimalPart = rating - integerPart;
    return decimalPart > 0.4 ? integerPart + 1 : integerPart;
  };

  const activeStars =
    hoveredStar ?? getActiveStars(averageRating);

  return (
    <div className="flex items-center gap-0.5 my-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaRegStar
          key={star}
          size={18}
          className={`transition-opacity duration-200 text-amber-400 ${
            star <= activeStars ? "opacity-100" : "opacity-30"
          }`}
          onMouseEnter={!readOnly ? () => setHoveredStar(star) : undefined}
          onMouseLeave={!readOnly ? () => setHoveredStar(null) : undefined}
        />
      ))}

      <span className="ml-2 text-sm text-gray-500">
        ({totalRating} reviews)
      </span>
    </div>
  );
};

export default StarRating;
