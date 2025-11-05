// src/components/ProductShowcase.tsx
import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { BsBagPlus } from "react-icons/bs";

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1646997577100-5bed5f97c465?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHNhZmZyb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    title: "Men Sport Shoes",
    description: "This is the best shoe you can buy at this price point.",
    price: 1989,
  },
  {
    id: 2,
    image: "/images/shoe2.jpg",
    title: "Running Sneakers",
    description: "Comfortable and stylish sneakers for everyday wear.",
    price: 1599,
  },
  {
    id: 3,
    image: "/images/shoe3.jpg",
    title: "Casual Trainers",
    description: "Perfect blend of comfort and fashion.",
    price: 1799,
  },
  {
    id: 4,
    image: "/images/shoe4.jpg",
    title: "Air Force Style",
    description: "Classic design with a modern twist.",
    price: 2099,
  },
  {
    id: 5,
    image: "/images/shoe5.jpg",
    title: "Streetwear Shoes",
    description: "Ideal for a sporty yet trendy look.",
    price: 1899,
  },
  {
    id: 6,
    image: "/images/shoe6.jpg",
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
    <div className="py-10 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">Product Showcase</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />

              <div className="absolute top-3 right-3 flex space-x-3">
                <button onClick={() => toggleLike(product.id)}>
                  {liked.includes(product.id) ? (
                    <FaHeart className="text-2xl" style={{ color: "#E42F1C" }} />
                  ) : (
                    <FaRegHeart className="text-2xl text-gray-700 hover:text-[#E42F1C]" />
                  )}
                </button>

                <button>
                  <BsBagPlus className="text-2xl text-gray-700 hover:text-blue-600" />
                </button>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{product.description}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-lg font-bold">${product.price}</span>
                <button className="bg-black text-white px-4 py-1 text-sm hover:bg-gray-800 transition-all">
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
