import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";

const products = [
  {
    id: 1,
    image: "https://media.istockphoto.com/id/1449264365/photo/dry-saffron-threads-in-a-glass-jar-scattered-on-a-white-table.jpg?s=612x612&w=0&k=20&c=LasastJc1cewZ_7G5IUpUEp-8cXDSO8LbeHk3C9zDJw=",
    title: "Super Negin",
    description: "The most prized saffron, composed solely of the longest, most potent, all-red threads.",
    price: 8,
    oldPrice: 12
  },
  {
    id: 2,
    image: "https://img.lovepik.com/photo/20211124/large/lovepik-saffron-picture_500901559.jpg",
    title: "2.5g Super Negin",
    description: "Rich, full-bodied aroma and vibrant color. A premium portion for culinary passion.",
    price: 16,
    oldPrice: 24
  },
  {
    id: 3,
    image: "https://thumbs.dreamstime.com/b/saffron-threads-purple-crocus-flowers-decorative-container-bowl-filled-vibrant-red-next-to-bunch-delicate-400550895.jpg",
    title: "Negin",
    description: "Features long, pure red threads providing premium quality with minimal yellow parts.",
    price: 12,
    oldPrice: 15
  },
  {
    id: 4,
    image: "https://img.freepik.com/free-photo/aromatic-saffron-still-life-composition_23-2149186994.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Pushal",
    description: "Includes red threads attached to a small portion of yellow style, offering proof of authenticity.",
    price: 8,
    oldPrice: 10
  },
  {
    id: 5,
    image: "https://img.freepik.com/premium-photo/flower-264_1173582-1264.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Dasteh",
    description: "Whole saffron strands including red and yellow parts — a traditional full-form presentation.",
    price: 6,
    oldPrice: 8

  },
  {
    id: 6,
    image: "https://img.freepik.com/free-photo/top-view-saffron-still-life-arrangement_23-2149130096.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Konj (White Saffron)",
    description: "Known as white saffron, consisting only of the aromatic but low-coloring yellow style parts.",
    price: 2,
    oldPrice: 3
  },
];

const ProductShowCase: React.FC = () => {
  const [liked, setLiked] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLiked((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-wide text-gray-900 mb-14">Product Showcase</h2>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12 cursor-pointer">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                />

                <div className="absolute top-4 right-4 flex gap-3">
                  <button
                    onClick={() => toggleLike(product.id)}
                    className="flex items-center justify-center bg-white p-2 rounded-full shadow-md w-10 h-10"
                  >
                    {liked.includes(product.id) ? (
                      <FaHeart className="text-xl cursor-pointer" style={{ color: "#E42F1C" }} />
                    ) : (
                      <FaRegHeart className="text-xl text-gray-700 cursor-pointer hover:text-[#E42F1C]" />
                    )}
                  </button>

                  <button className="group w-10 h-10 relative bg-white flex items-center justify-center rounded-full shadow-md hover:shadow-lg transition">
                    <HiOutlineShoppingBag className="text-2xl text-gray-800 transition-colors duration-300 group-hover:text-[#44155B] cursor-pointer" />
                    <FaPlus className="absolute rounded-full right-2 bottom-2 bg-white text-[12px] text-gray-800 shadow-sm transition-colors duration-300 group-hover:text-[#44155B] cursor-pointer" />
                  </button>
                </div>
              </div>

              <div className="text-center px-6 py-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>

                <div className="my-3">
                  <span className="line-through text-gray-400 mr-2 text-sm">${product.oldPrice}</span>
                  <span className="text-red-600 font-bold text-lg">${product.price}</span>
                </div>

                <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm hover:bg-black transition-all cursor-pointer">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ProductShowCase;

