import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store/store";
import { fetchProducts } from "../productSlice";
import ProductList from "./ProductList";
import { useLanguage } from "../../../i18n/LanguageContext";

const ProductShowCase: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.product.list.loading);
  const error = useSelector((state: RootState) => state.product.list.error);
  const { language } = useLanguage();

  useEffect(() => {
    dispatch(fetchProducts({ pageIndex: 0, pageSize: 10, searchBy: "" }));
  }, [dispatch, language]);

  return (
  <section id="product-showcase" className="bg-gray-50 py-16">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="font-display font-semibold text-primary tracking-wider text-4xl mb-14">
        Product Showcase
      </h2>
      {loading ? (
        <p className="text-center font-display text-xl py-4 text-gray-500">Loading Products...</p>
      ) : error ? (
        <p className="text-center font-display text-xl py-4 text-red-500">{error}</p>
      ) : (
        <ProductList />
      )}
    </div>
  </section>
  );
};


export default ProductShowCase;