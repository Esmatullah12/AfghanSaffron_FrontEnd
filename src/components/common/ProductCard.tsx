import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import Button from "./Button";
import LikeButton from "./LikeButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import type { AppDispatch } from "../../store/store";

interface ProductCardProps{
 product: {
    id:number
    name:string,
    description:string,
    averageRating:number,
    salePrice:number,
    regularPrice:number,
    weight:number,
    grade:string,
    mainImageUrl:string
 }
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  const [liked, setLiked] = useState<number[]>([]);
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_API_URL;
  const dispatch = useDispatch<AppDispatch>();
  
  const toggleLike = (id: number) => {
    setLiked((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(addToCart({ id: product.id, name: product.name, price: product.salePrice, weight: product.weight, thumbnail: product.mainImageUrl}));
  };
  
  return (
    <div
      onClick={() => handleProductClick(product.id)}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-sm transition duration-300"
    >
      <div className="relative">
        <img
          src={`${baseURL}/${product.mainImageUrl}`}
          alt={product.name}
          className="w-full h-64 object-cover hover:scale-105 transition duration-500"
        />

        <div className="absolute top-4 right-4 flex gap-3">
          <LikeButton isLiked={liked.includes(product.id)} onToggle={() => toggleLike(product.id)} />

          <button
            onClick={(e) => { handleAddToCart(e);  e.stopPropagation();}}
            className="group w-10 h-10 relative bg-white flex items-center justify-center rounded-full shadow-md hover:shadow-lg transition hover:bg-[#f2e0fcff]"
            aria-label="add to cart"
          >
            <HiOutlineShoppingBag className="text-2xl text-gray-600 transition-colors duration-300 group-hover:text-primary cursor-pointer" />
            <FaPlus className="absolute right-2 bottom-2 text-[12px] bg-white rounded-full text-gray-600 shadow-sm transition-colors duration-300 group-hover:text-primary group-hover:bg-[#f2e0fcff]" />
          </button>
        </div>
      </div>

      <div className="text-center px-6 py-6">
        <h3 className="font-display text-primary text-xl font-semibold mb-2">{product.name}</h3>

        <p className="text-gray-500 text-sm leading-relaxed">
          {product.description.split(".")[0]}
          <span className="text-lg">...</span>
        </p>

        <div className="my-3">
          <span className="line-through text-gray-400 mr-2 text-sm">${product.regularPrice}</span>
          <span className="text-red-600 font-bold text-lg">${product.salePrice}</span>
        </div>

        <Button
          text="Buy Now"
          onClick={(e) => {
            e.stopPropagation();
            handleProductClick(product.id);
          }}
        />
      </div>
    </div>
  );
};

export default ProductCard;