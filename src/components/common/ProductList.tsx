import type React from "react";
import ProductCard from "./ProductCard";

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

interface ProductListProps{
  products: Product[];
}

const ProductList :React.FC<ProductListProps> = ({products}) => {
  return (
    <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12 cursor-pointer">
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default ProductList;