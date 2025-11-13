import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import Button from "../common/Button";
import {products} from "../../data/products";

const ProductShowCase: React.FC = () => {
  const [liked, setLiked] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLiked((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-display font-semibold text-primary tracking-wider text-4xl mb-14">Product Showcase</h2>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12 cursor-pointer">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-sm transition duration-300"
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
                    className="flex items-center justify-center bg-white p-2 rounded-full shadow-md w-10 h-10 hover:bg-[#fcefeeff]"
                  >
                    {liked.includes(product.id) ? (
                      <FaHeart className="text-xl cursor-pointer" style={{ color: "#E42F1C" }} />
                    ) : (
                      <FaRegHeart className="text-xl text-gray-700 hover:text-primary cursor-pointer" />
                    )}
                  </button>

                  <button className="group w-10 h-10 relative bg-white flex items-center justify-center rounded-full shadow-md hover:shadow-lg transition  hover:bg-[#f2e0fcff]">
                    <HiOutlineShoppingBag className="text-2xl text-gray-800 transition-colors duration-300 group-hover:text-primary cursor-pointer" />
                    <FaPlus className="absolute rounded-full right-2 bottom-2 bg-white text-[12px] text-gray-800  shadow-sm transition-colors duration-300 group-hover:text-primary cursor-pointer group-hover:bg-[#f2e0fcff]" />
                  </button>
                </div>
              </div>

              <div className="text-center px-6 py-6">
                <h3 className="font-display text-primary text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>

                <div className="my-3">
                  <span className="line-through text-gray-400 mr-2 text-sm">${product.oldPrice}</span>
                  <span className="text-red-600 font-bold text-lg">${product.price}</span>
                </div>
                <Button text="Buy Now"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ProductShowCase;

