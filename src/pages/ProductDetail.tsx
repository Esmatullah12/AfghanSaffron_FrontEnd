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
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-10 pt-12 pb-0 bg-white">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-row md:flex-col gap-3 order-2 md:order-1 mt-4 md:mt-0">
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
          <div className="flex-1 order-1 md:order-2">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full max-w-sm aspect-square object-cover rounded-2xl shadow-lg border border-primary"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl tracking-wider font-semibold text-primary font-display">
            {product.title}
          </h2>
          <p className="text-sm text-gray-500 mt-2">by Afghan Saffron Co.</p>

          <div className="flex items-center gap-2 mt-3">
            <p className="text-2xl font-bold text-secondary">${product.price}</p>
            <span className="text-gray-400 line-through">{product.oldPrice}</span>
            <span className="bg-green-100 text-green-600 text-sm px-2 py-1 rounded-md">20% off</span>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed">
            {product.description.split(".")[0]} <span className="text-lg">...</span>
          </p>

          <div className="mt-4 flex gap-4">
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
              <button
                onClick={decrement}
                className="p-2 hover:bg-gray-100 transition-colors"
                aria-label="Decrease quantity"
              >
                <HiOutlineMinus className="w-4 h-4" />
              </button>

              <div className="px-8 py-2 font-medium min-w-[3rem] text-center">{quantity}</div>

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

          {/* Extra Info */}
          <div className="w-full py-4 bg-gray-100 my-5 rounded-2xl border border-gray-400">
            <div className="max-w-5xl mx-auto text-center mb-3">
              <p className="text-gray-600">Premium quality, ethically sourced, and crafted for wellness.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
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
      <div className="max-w-6xl mx-auto px-6 py-12 bg-white">
        <h2 className="text-3xl tracking-wider font-semibold text-primary font-display mb-4">Read more about {product.title}</h2>
        <p>{product.description}</p>
      </div>
    </Layout>
  );
};

export default ProductDetail;
