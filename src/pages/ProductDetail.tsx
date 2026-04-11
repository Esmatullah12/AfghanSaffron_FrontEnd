import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import Layout from "../layout/Layout";
import { addToCart } from "../features/cart";
import { IncrementDecrement, Button } from "../components/ui";
import { LikeButton, StarRating, UserComment } from "../features/products/components";
import features from "../data/features";
import Review from "../features/products/components/Review";
import { fetchReviews } from "../features/review";
import {
  fetchProductDetail,
  fetchProductImages,
  fetchProductRating,
  addToFavorites,
  removeFromFavorites,
} from "../features/products";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);

  const dispatch = useDispatch<AppDispatch>();

  const product = useSelector((state: RootState) => state.product.products[productId]);
  const detail = useSelector((state: RootState) => state.product.details[productId]);
  const currentProduct = useSelector(
      (state: RootState) => state.product.products[productId]
    );
  const rating = useSelector((state: RootState) => state.product.ratings[productId]);
  const { reviews, loading: reviewsLoading, error: reviewsError } = useSelector((state: RootState) => state.review);

  const images = detail?.images || [];
  const loading = detail?.loading ?? true;

  const baseUrl = import.meta.env.VITE_API_URL;
  const [selectedImage, setSelectedImage] = useState<string>("");

  const user = JSON.parse(localStorage.getItem("user") || "null");

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetail(productId));
      dispatch(fetchProductImages(productId));
      dispatch(fetchProductRating(productId));
      dispatch(fetchReviews({
        pageIndex: 0,
        pageSize: 10,
        searchBy: "",
        productId,
      }));
    }
  }, [productId, dispatch]);

  useEffect(() => {
    if (images.length > 0 && !selectedImage) {
      setSelectedImage(`${baseUrl}/${images[0]}`);
    }
  }, [images, baseUrl, selectedImage]);

  const offPercentage = product
    ? Math.round(((product.regularPrice - product.salePrice) / product.regularPrice) * 100)
    : 0;

  const isLiked = currentProduct?.isFavorite ?? false;
  const favoriteProductId = currentProduct?.favoriteProductId;

  const toggleLike = () => {
    if (!user) return;
    if (isLiked) {
      if (favoriteProductId == null) return;
      dispatch(removeFromFavorites({ favoriteProductId, productId }));
    } else {
      dispatch(addToFavorites(productId));
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    if (!product) return;
    e.stopPropagation();
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.salePrice,
        weight: product.weight,
        thumbnail: product.mainImageUrl,
      })
    );
  };

  return (
    <Layout>
      {loading ? (
          <div className="text-center font-display text-xl py-4 text-gray-500">Loading Product Detail...</div>
      ) : (
        <div>
          <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-0 pt-12 pb-0 bg-white">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-row md:flex-col gap-3 order-1 md:order-1 mt-4 md:mt-0">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={`${baseUrl}/${img}`}
                  alt={product.name}
                  onClick={() => setSelectedImage(`${baseUrl}/${img}`)}
                  className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 transition-all duration-300 ${
                    selectedImage === `${baseUrl}/${img}` ? "border-primary" : "border-gray-200"
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
            <h2 className="text-4xl tracking-wider font-semibold text-primary font-display">
              {product.name}
            </h2>
            <p className=" text-gray-500 mt-2">by Afghan SilkRoad Co.</p>

            <div className="flex items-center gap-2 mt-3">
              <p className="text-2xl font-bold text-secondary">${product.salePrice}</p>
              <span className="text-gray-400 line-through">{product.regularPrice}</span>
              <span className="bg-green-100 text-green-600 text-sm px-2 py-1 rounded-md">{offPercentage}% off</span>
            </div>

            {rating && (
              <StarRating
                averageRating={rating.averageRating}
                totalRating={rating.totalRating}
              />
            )}

            <div className="mt-2 flex gap-4">
              <IncrementDecrement count={1} productId={product.id} className="px-4 py-1"/>

              <Button text="Add to Cart" onClick={handleAddToCart} disabled={false} />
              <LikeButton
                isLiked={isLiked}
                onToggle={toggleLike}
              />
            </div>

            {/* Extra Info */}
            <div className="py-4 bg-gray-100 my-5 rounded-2xl border border-gray-400 max-w-xl mx-auto">
              <div className="max-w-5xl mx-auto text-center mb-3">
                <p className="text-gray-600">Premium quality, ethically sourced, and crafted for wellness.</p>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-4 justify-items-center md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center p-3 w-22 rounded-2xl shadow-sm border border-gray-300"
                  >
                    {f.icon}
                    <h3 className="mt-2 text-[9px] font-bold tracking-wide uppercase text-gray-600">
                      {f.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 py-12 bg-white">
          <h2 className="text-3xl tracking-wider font-semibold text-primary font-display mb-4">Read more about {product.name}</h2>
          <p className="text-lg">
            {product.description.split("\\").map((para, i) => (
              <span key={i}>
                {para.trim()}
                <br /><br />
              </span>
            ))}
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-6 py-2 bg-white">
          {reviewsLoading ? (
            <p className="text-center py-4 text-gray-500">Loading reviews...</p>
          ) : reviewsError ? (
            <p className="text-center py-4 text-red-500">{reviewsError}</p>
          ) : reviews.length > 0 ? (
            reviews.map((comment) => (
              <Review
                key={comment.id}
                id={comment.id}
                profileImage={comment.userProfileImg}
                fullName={comment.fullName}
                rating={comment.rating}
                date={new Date(comment.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
                comment={comment.comment}
                isCurrentUserReview={comment.isCurrentUserReview}
              />
            ))
          ) : (
            <p className="text-center py-4 text-gray-500 font-display text-xl tracking-wider">No reviews yet.</p>
          )}
        </div>
        <UserComment productId={product.id}/>
      </div>
      )}
      
    </Layout>
  );
};

export default ProductDetail;
