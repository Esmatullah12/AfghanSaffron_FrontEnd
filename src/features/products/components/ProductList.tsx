import type React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import ProductCard from "./ProductCard";

interface ProductListProps {
  productIds?: number[];
}

const ProductList: React.FC<ProductListProps> = ({ productIds }) => {
  const listIds = useSelector((state: RootState) => state.product.listIds);
  const products = useSelector((state: RootState) => state.product.products);

  const displayIds = productIds || listIds;

  return (
    <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12 cursor-pointer">
      {displayIds.map((id) => (
        <ProductCard key={id} product={products[id]} />
      ))}
    </div>
  );
};

export default ProductList;
