import React, { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../../api/axiosInstance";
import LikeButton from "../common/LikeButton";
import Button from "../common/Button";
import ProductCard from "../common/ProductCard";

interface Product{
  id:number
  name:string,
  description:string,
  averageRating:number,
  price:number,
  weight:number,
  grade:string,
  mainImageUrl:string
}

const ProductShowCase: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const payload = {
        pageIndex: 0,
        pageSize: 10,
        searchBy: ""
      };

      try{
        const res = await api.post("api/Product/GetProductsList", payload);
        setProducts(res.data.data || res.data);
      }catch(err){
        console.log("error fetching products", err);
      }finally{
        setLoading(false);
      }
    };
    fetchProducts();
  }, [])

  if (loading) return <p>Loading...</p>;

  return (
    <section id="product-showcase" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-display font-semibold text-primary tracking-wider text-4xl mb-14">Product Showcase</h2>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12 cursor-pointer">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default ProductShowCase;

