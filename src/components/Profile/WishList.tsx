import React from "react";
import Button from "../common/Button";
import ProductShowCase from "../Home/ProductShowCase";
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

// Mock favorite products
const mockWishlist: Product[] = [
  {
      "id": 6,
      "name": "Pushal",
      "description": "Pushal saffron is known for its long, vibrant red threads and rich aroma, offering exceptional flavor and color for every dish. Carefully hand-picked from the finest crocus flowers, this premium grade saffron ensures purity, freshness, and natural potency. Ideal for cooking, desserts, tea, and health uses, Pushal saffron delivers authentic quality you can trust.",
      "averageRating": 4.5,
      "salePrice": 4.99,
      "regularPrice": 8.99,
      "weight": 1,
      "grade": "A",
      "mainImageUrl": "Uploads/Inventory/d0a6eb6b-16d3-49a7-bf39-7dfeda055590.jpg"
    },
    {
      "id": 7,
      "name": "Super Negin",
      "description": "Super Negin saffron is the highest grade of saffron, known for its long, thick, and vivid red stigmas with minimal yellow parts. It offers an intense aroma, rich flavor, and deep golden color, making it ideal for premium culinary use. Carefully hand-picked and expertly dried, Super Negin saffron delivers exceptional purity, potency, and quality in every strand.",
      "averageRating": 5,
      "salePrice": 9.99,
      "regularPrice": 15.99,
      "weight": 1,
      "grade": "A",
      "mainImageUrl": "Uploads/Inventory/d47a02a2-dfdf-4829-9363-3b77b4eecd6d.webp"
    }
];

const UserWishlist: React.FC = () => {
  return (
   <section id="fav-products" className="bg-gray-100 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display font-semibold text-primary tracking-wider text-3xl mb-14">Your Favorite Products</h2>
        <ProductList products={mockWishlist} />
      </div>
    </section>
  );
};

export default UserWishlist;
