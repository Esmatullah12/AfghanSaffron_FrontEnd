import type React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import ProductCard from "./ProductCard";

const ProductList: React.FC = () => {
  const listIds = useSelector((state: RootState) => state.product.listIds);
  const products = useSelector((state: RootState) => state.product.products);

  return (
    <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12 cursor-pointer">
      {listIds.map((id) => (
        <ProductCard key={id} product={products[id]} />
      ))}
    </div>
  );
};

export default ProductList;
