import React, { useEffect } from "react";
import ProductList from "../../products/components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store/store";
import { fetchFavorites } from "../../products/productSlice";

const UserWishlist: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { ids, loading, error } = useSelector((state: RootState) => state.product.favorites);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  if (loading) return <div className="text-center py-20">Loading favorites...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
   <section id="fav-products" className="bg-gray-100 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display font-semibold text-primary tracking-wider text-3xl mb-14">Your Favorite Products</h2>
        {ids.length > 0 ? (
          <ProductList productIds={ids} />
        ) : (
          <p className="text-center text-gray-500 py-10 text-xl font-display tracking-wider">You have no favorite products yet.</p>
        )}
      </div>
    </section>
  );
};

export default UserWishlist;
