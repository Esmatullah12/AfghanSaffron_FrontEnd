import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import Layout from "../components/layout/Layout";
import Button from "../components/common/Button";
import LikeButton from "../components/common/LikeButton";

const ProductDetail: React.FC = () => {
    const {id} = useParams<{id: string}>();
    const product = products.find(p => p.id === Number(id));
    const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || '');
    const [selectedSize, setSelectedSize] = useState("1gr");

    if (!product) {
        return <div className="text-center mt-20 text-gray-500">Product not found.</div>;
    }

  return (
    <Layout>
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
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

      {/* Right: Product Info */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">{product.title}</h2>
        <p className="text-sm text-gray-500 mt-2">by Afghan Saffron Co.</p>

        <div className="flex items-center gap-2 mt-3">
          <p className="text-2xl font-bold text-primary">{product.price}</p>
          <span className="text-gray-400 line-through">{product.oldPrice}</span>
          <span className="bg-green-100 text-green-600 text-sm px-2 py-1 rounded-md">20% off</span>
        </div>

        <p className="text-gray-600 mt-4">
          {product.description}
        </p>
        <div className="mt-8 flex gap-4">
          <Button text="Add to Cart" />
          <LikeButton isLiked={false} onToggle={() => console.log('like')} />
        </div>

        {/* Extra Info */}
        <div className="mt-8 text-sm text-gray-500">
          <p>✔ 100% Organic & Pure</p>
          <p>✔ Hand-picked & Naturally Dried</p>
          <p>✔ Ships in 3–5 business days</p>
        </div>
      </div>
    </div>
    </Layout>
    
  );
};

export default ProductDetail;
