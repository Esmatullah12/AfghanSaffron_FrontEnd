import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import Layout from "../layout/Layout";
import { addToCart } from "../features/cart/cartSlice";
import api from "../api/axiosInstance";
import { IncrementDecrement } from "../components/common/IncrementDecrement";
import Button from "../components/common/Button";
import LikeButton from "../components/common/LikeButton";
import { getLocalLikes, setLocalLikes } from "../utils/localStorageHelpers";
import StarRating from "../components/common/StarRating";
import features from "../data/features";
import Comment from "../components/common/Comment";
import UserComment from "../components/common/UserComment";

interface product {
  id: number;
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

interface ProductRating {
  productId: number;
  totalRating: number;
  averageRating: number;
}

interface UserCommenttype {
  id: number;
  userProfileImg: string;
  fullName: string;
  userJobTitle: string;
  rating: number;
  comment: string;
  date: string;
}

const ProductDetail: React.FC = () => {
  const [productImgs, setProductImgs] = useState<ProductImg[]>([]);
  const [product, setProduct] = useState<product | null>(null);
  const [liked, setLiked] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const [rating, setRating] = useState<ProductRating | null>(null);
  const [userComments, setUserComments] = useState<UserCommenttype[]>([]);
  
  const dispatch = useDispatch<AppDispatch>();
  
  const baseUrl = import.meta.env.VITE_API_URL;
  const [selectedImage, setSelectedImage] = useState(`${baseUrl}/${productImgs[0]?.imagePath}`);

  const offPercentage = product ? Math.round(((product.regularPrice - product.salePrice) / product.regularPrice) * 100) : 0;

  const user = JSON.parse(localStorage.getItem("user") || "null");

  useEffect(() => {
      if (!user) {
        setLiked(getLocalLikes());
      } else {
        api
          .get("/favorites", {
            headers: { Authorization: `Bearer ${user.token}` },
          })
          .then((res) => setLiked(res.data))
          .catch(() => setLiked([]));
      }
    }, []);

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

  useEffect(() => {
    const fetchUserComments = async () =>{
      const payload = {
        pageIndex: 0,
        pageSize: 10,
        searchBy: "",
        productId: id,
      };
      try{
        const res = await api.post(`api/Review/list`, payload);
        setUserComments(res.data.data);
      }catch(err){
        console.log("error fetching user comments", err);
      }
    }

    fetchUserComments();
  }, [id])

  const toggleLike = async (id: number) => {
    if (!user) {
      // Guest: store in localStorage
      const localLikes = getLocalLikes();
      const updatedLikes = localLikes.includes(id)
        ? localLikes.filter((item) => item !== id)
        : [...localLikes, id];
      setLocalLikes(updatedLikes);
      setLiked(updatedLikes);
    } else {
      // Logged-in: call API
      try {
        const res = await api.post(
          "api/FavoriteProduct",
          { productId: id },
          { headers: { Authorization: `Bearer ${user.token}` } }
        );

        if (res.status === 200) {
          setLiked((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
          );
        }
      } catch (error) {
        console.error("Failed to like product:", error);
      }
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

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const res = await api.get(`api/Review/productRating/${id}`);
        setRating(res.data);
      } catch (err) {
        console.error("Failed to fetch rating", err);
      }
    };

    if (id) fetchRating();
  }, [id]);

  
  if (loading) {
    return <div className="text-center mt-20 text-gray-500">Loading...</div>;
  }
  
  if (!product) {
    return <div className="text-center mt-20 text-gray-500">Product not found.</div>;
  }
  
  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-0 pt-12 pb-0 bg-white">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-row md:flex-col gap-3 order-1 md:order-1 mt-4 md:mt-0">
            {productImgs.map((img, index) => (
              <img
                key={index}
                src={`${baseUrl}/${img.imagePath}`}
                alt={product.name}
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
              isLiked={liked.includes(product.id)} 
              onToggle={() => toggleLike(product.id)} 
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
        {userComments.map((comment) => (
        <Comment
          key={comment.id}
          profileImage={comment.userProfileImg}
          fullName={comment.fullName}
          rating={comment.rating}
          date={new Date(comment.date).toDateString()}
          comment={comment.comment}
        />
        ))}
      </div>
      <UserComment productId={product.id}/>
    </Layout>
  );
};

export default ProductDetail;
