import React, { useEffect, useState } from "react";
import api from "../../api/axiosInstance";
import ProductList from "../common/ProductList";

interface Product{
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

        <ProductList products={products} />
      </div>
    </section>
  );
};


export default ProductShowCase;

