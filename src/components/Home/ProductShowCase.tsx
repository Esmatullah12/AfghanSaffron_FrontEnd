// src/components/ProductShowcase.tsx
import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { BsBagPlus } from "react-icons/bs";

const products = [
  {
    id: 1,
    image: "https://media.istockphoto.com/id/1449264365/photo/dry-saffron-threads-in-a-glass-jar-scattered-on-a-white-table.jpg?s=612x612&w=0&k=20&c=LasastJc1cewZ_7G5IUpUEp-8cXDSO8LbeHk3C9zDJw=",
    title: "Men Sport Shoes",
    description: "This is the best shoe you can buy at this price point.",
    price: 1989,
  },
  {
    id: 2,
    image: "https://img.lovepik.com/photo/20211124/large/lovepik-saffron-picture_500901559.jpg",
    title: "Running Sneakers",
    description: "Comfortable and stylish sneakers for everyday wear.",
    price: 1599,
  },
  {
    id: 3,
    image: "https://thumbs.dreamstime.com/b/saffron-threads-purple-crocus-flowers-decorative-container-bowl-filled-vibrant-red-next-to-bunch-delicate-400550895.jpg",
    title: "Casual Trainers",
    description: "Perfect blend of comfort and fashion.",
    price: 1799,
  },
  {
    id: 4,
    image: "https://img.freepik.com/free-photo/aromatic-saffron-still-life-composition_23-2149186994.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Air Force Style",
    description: "Classic design with a modern twist.",
    price: 2099,
  },
  {
    id: 5,
    image: "https://img.freepik.com/premium-photo/flower-264_1173582-1264.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Streetwear Shoes",
    description: "Ideal for a sporty yet trendy look.",
    price: 1899,
  },
  {
    id: 6,
    image: "https://img.freepik.com/free-photo/top-view-saffron-still-life-arrangement_23-2149130096.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Urban Walkers",
    description: "Lightweight and durable for all-day comfort.",
    price: 1699,
  },
];

const ProductShowcase: React.FC = () => {
  const [liked, setLiked] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="py-16 px-6 bg-gray-50">
  <h2 className="text-3xl max-w-6xl mx-auto px-6 font-semibold mb-10 text-center tracking-wide text-gray-800">
    Product Showcase
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {products.map((product) => (
      <div
        key={product.id}
        className="bg-white border border-gray-200 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] 
                   hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 
                   transition-all duration-300 ease-out"
      >
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-t-xl">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
          />

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex space-x-3">
            <button
              onClick={() => toggleLike(product.id)}
              className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm hover:shadow-md transition"
            >
              {liked.includes(product.id) ? (
                <FaHeart className="text-xl" style={{ color: "#E42F1C" }} />
              ) : (
                <FaRegHeart className="text-xl text-gray-700 hover:text-[#E42F1C]" />
              )}
            </button>

            <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm hover:shadow-md transition">
              <BsBagPlus className="text-xl text-gray-700 hover:text-blue-600" />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
          <p className="text-gray-500 text-sm mt-2 leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-semibold text-gray-900">${product.price}</span>
            <button className="bg-gray-900 text-white px-5 py-1.5 text-sm rounded-full hover:bg-gray-800 transition-all">
              Buy
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default ProductShowcase;
