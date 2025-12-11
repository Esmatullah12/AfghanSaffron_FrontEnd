import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { RiMentalHealthLine } from "react-icons/ri";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BiLeaf } from "react-icons/bi";
import { BsCupHot } from "react-icons/bs";
import api from "../api/axiosInstance";
import { IncrementDecrement } from "../components/common/IncrementDecrement";
import Button from "../components/common/Button";
import LikeButton from "../components/common/LikeButton";

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

interface product {
  id: string;
  name: string;
  description: string;
  salePrice: number;
  regularPrice: number;
  stockQuantity: number;
  weight: number;
  grade: string;
  mainImageUrl: string;
}

interface ProductImg{
  imagePath: string;
}

const ProductDetail: React.FC = () => {
  const [productImgs, setProductImgs] = useState<ProductImg[]>([]);
  const [product, setProduct] = useState<product | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const baseUrl = import.meta.env.VITE_API_URL;
  const [selectedImage, setSelectedImage] = useState(`${baseUrl}/${productImgs[0]?.imagePath}`);

useEffect(() => {
  if (productImgs.length > 0) {
    setSelectedImage(`${baseUrl}/${productImgs[0].imagePath}`);
  }
}, [productImgs, baseUrl]);

  useEffect(() =>{
    const fetchProduct = async () => {
      setLoading(true);
      try{
        const res = await api.get(`api/Product/GetDetail/${id}`);
        setProduct(res.data);
      }catch(err){
        console.log("error fetching product details", err);
      }finally{
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  useEffect(() =>{
    const fetchProductImages = async () => {
      try{
        const res = await api.get(`api/Product/ProductImages/${id}`);
        setProductImgs(res.data);
      }catch(err){
        console.log("error fetching product images", err);
      }
    }

    fetchProductImages();
  }, [id]);

 
  console.log(productImgs)
  
  if (loading) {
    return <div className="text-center mt-20 text-gray-500">Loading...</div>;
  }
  
  if (!product) {
    return <div className="text-center mt-20 text-gray-500">Product not found.</div>;
  }
  
  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-10 pt-12 pb-0 bg-white">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-row md:flex-col gap-3 order-1 md:order-1 mt-4 md:mt-0">
            {productImgs.map((img, index) => (
              <img
                key={index}
                src={`${baseUrl}/${img.imagePath}`}
                alt={product.name}
                onLoad={() => setSelectedImage(`${baseUrl}/${img.imagePath}`)}
                onClick={() => setSelectedImage(`${baseUrl}/${img.imagePath}`)}
                className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 transition-all duration-300 ${
                  selectedImage === `${baseUrl}/${img.imagePath}` ? "border-primary" : "border-gray-200"
                }`}
              />
            ))}
          </div>
          <div className="flex-1 order-1 md:order-2">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full max-w-sm aspect-square object-cover rounded-2xl shadow-lg border border-primary"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl tracking-wider font-semibold text-primary font-display">
            {product.name}
          </h2>
          <p className="text-sm text-gray-500 mt-2">by Afghan Saffron Co.</p>

          <div className="flex items-center gap-2 mt-3">
            <p className="text-2xl font-bold text-secondary">${product.salePrice}</p>
            <span className="text-gray-400 line-through">{product.regularPrice}</span>
            <span className="bg-green-100 text-green-600 text-sm px-2 py-1 rounded-md">20% off</span>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed">
            {product.description.split(".")[0]} <span className="text-lg">...</span>
          </p>

          <div className="mt-4 flex gap-4">
            <IncrementDecrement className="px-4 py-2"/>

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
        <h2 className="text-3xl tracking-wider font-semibold text-primary font-display mb-4">Read more about {product.name}</h2>
        <p>{product.description}</p>
      </div>
    </Layout>
  );
};

export default ProductDetail;
