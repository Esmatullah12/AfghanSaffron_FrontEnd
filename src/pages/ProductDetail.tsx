import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import Layout from "../components/layout/Layout";
import Button from "../components/common/Button";

interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

const ProductDetail: React.FC = () => {
    const {id} = useParams<{id: string}>();
    const product = products.find(p => p.id === Number(id));

    if (!product) {
        return <div className="text-center mt-20 text-gray-500">Product not found.</div>;
    }
  const images: ProductImage[] = [
    { id: 1, src: "", alt: "Saffron 1" },
    { id: 2, src: "/images/saffron2.jpg", alt: "Saffron 2" },
    { id: 3, src: "/images/saffron3.jpg", alt: "Saffron 3" },
    { id: 4, src: "/images/saffron4.jpg", alt: "Saffron 4" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState("1gr");

  return (
    <Layout>
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="flex gap-6">
        <div className="flex flex-col gap-3">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              onClick={() => setSelectedImage(image)}
              className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 transition-all duration-300 ${
                selectedImage.id === image.id ? "border-primary" : "border-gray-200"
              }`}
            />
          ))}
        </div>
        <div className="flex-1">
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Right: Product Info */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Premium Afghan Saffron</h2>
        <p className="text-sm text-gray-500 mt-2">by Afghan Saffron Co.</p>

        <div className="flex items-center gap-2 mt-3">
          <p className="text-2xl font-bold text-primary">$12.00</p>
          <span className="text-gray-400 line-through">$15.00</span>
          <span className="bg-green-100 text-green-600 text-sm px-2 py-1 rounded-md">20% off</span>
        </div>

        <p className="text-gray-600 mt-4">
          Experience the finest saffron from Afghanistan, known for its strong aroma and rich color. 
          Perfect for enhancing dishes, desserts, and drinks.
        </p>

        {/* Size */}
        <div className="mt-6">
          <p className="font-medium mb-2">Size:</p>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="1gr">1gr</option>
            <option value="2gr">2gr</option>
          </select>
        </div>

        {/* Add to Cart */}
        <div className="mt-8 flex gap-4">
          <Button text="Add to Cart" />
          <button className="border border-gray-300 text-gray-600 px-8 py-3 rounded-full font-medium hover:border-primary hover:text-primary transition-all duration-300">
            ♥
          </button>
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
