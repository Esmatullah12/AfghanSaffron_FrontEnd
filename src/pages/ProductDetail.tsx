import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import Layout from "../components/layout/Layout";
import Button from "../components/common/Button";
import LikeButton from "../components/common/LikeButton";
import { RiMentalHealthLine } from "react-icons/ri";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BiLeaf } from "react-icons/bi";
import { BsCupHot } from "react-icons/bs";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";

const features = [
  {
    icon: <RiMentalHealthLine className="text-3xl text-primary" />,
    title: "Mood Support",
  },
  {
    icon: <FaRegCircleCheck className="text-3xl text-primary" />,
    title: "Premium Purity",
  },
  {
    icon: <BsCupHot className="text-3xl text-primary" />,
    title: "Premium Aroma",
  },
  {
    icon: <BiLeaf className="text-3xl text-primary" />,
    title: "Natural & Sustainable",
  },
];

const ProductDetail: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || "");

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  if (!product) {
    return <div className="text-center mt-20 text-gray-500">Product not found.</div>;
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-10 py-18">
        <div className="flex gap-6">
          <div className="flex flex-col gap-3">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={product.title}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 transition-all duration-300 ${
                  selectedImage === img ? "border-primary" : "border-gray-200"
                }`}
              />
            ))}
          </div>

          <div className="flex-1">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl tracking-wider font-semibold text-primary font-display">
            {product.title}
          </h2>
          <p className="text-sm text-gray-500 mt-2">by Afghan Saffron Co.</p>

          <div className="flex items-center gap-2 mt-3">
            <p className="text-2xl font-bold text-secondary">{product.price}</p>
            <span className="text-gray-400 line-through">{product.oldPrice}</span>
            <span className="bg-green-100 text-green-600 text-sm px-2 py-1 rounded-md">20% off</span>
          </div>

          <p className="text-gray-600 mt-4">{product.description}</p>

          <div className="mt-6 flex gap-4">
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
              <button
                onClick={decrement}
                className="p-2 hover:bg-gray-100 transition-colors"
                aria-label="Decrease quantity"
              >
                <HiOutlineMinus className="w-4 h-4" />
              </button>

              <div className="px-4 py-2 text-base font-medium min-w-12 text-center">{quantity}</div>

              <button
                onClick={increment}
                className="p-2 hover:bg-gray-100 transition-colors"
                aria-label="Increase quantity"
              >
                <HiOutlinePlus className="w-4 h-4" />
              </button>
            </div>

            <Button text="Add to Cart" />
            <LikeButton isLiked={false} onToggle={() => console.log("like")} />
          </div>

          <div className="w-full py-6 bg-[#f2e0fcff] my-5 rounded-2xl">
            <div className="max-w-5xl mx-auto text-center mb-5">
              <p className="text-gray-600">Premium quality, ethically sourced, and crafted for wellness.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-3 rounded-2xl shadow-sm border border-gray-300"
                >
                  {f.icon}
                  <h3 className="mt-4 text-[10px] font-bold tracking-wide uppercase text-gray-600">
                    {f.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
