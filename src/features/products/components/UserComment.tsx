import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { Button } from "../../../components/ui";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../store/store";
import { createReview, fetchReviews } from "../../review";

interface UserCommentProps {
  productId: number;
  rating?: number;
  comment?: string;
}

const UserComment : React.FC<UserCommentProps> = ({productId}) => {
  const [form, setForm] = useState<UserCommentProps>({
    productId,
    rating: undefined,
    comment: ""
  });

  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [selectedStar, setSelectedStar] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  // const [success, setSuccess] = useState<string>("");
  // const [error, setError] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) : void => {
    const {value} = e.target;
    setForm(prev => ({...prev, comment: value}))
  };

   const handleSubmit = async () => {
    if (!form.rating || !form.comment?.trim()) { 
      console.log("Please select a rating and write a comment.")
      return;
    }

    setLoading(true);

    try {
      await dispatch(createReview({
        productId: form.productId,
        rating: form.rating,
        comment: form.comment
      })).unwrap();

      console.log("Your comment has been submitted successfully!");
      setForm(prev => ({ ...prev, comment: "", rating: undefined}));
      setSelectedStar(null);

      // Refresh reviews list
      dispatch(fetchReviews({
        pageIndex: 0,
        pageSize: 10,
        searchBy: "",
        productId: form.productId,
      }));

    } catch (err) {
      console.error("Failed to submit comment:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl bg-white p-5 rounded-xl mx-auto mb-11 ">
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
              onClick={() =>{setSelectedStar(star); setForm(prev => ({ ...prev, rating: star })); setHoveredStar(null);}}
              className={`cursor-pointer transition-all duration-200
                ${isActive ? "text-amber-500 opacity-100" : "opacity-40"}
              `}
            />
          );
        })}
      </div>

      <textarea
        placeholder="Write your comment..."
        value={form.comment}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-2xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-0 resize-none"
        rows={4}
      />

      <Button text={loading ? "Sending..." : "Submit"} onClick={handleSubmit} disabled={loading}/>
      </div>
  );
};

export default UserComment;
