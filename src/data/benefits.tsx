import React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GoVerified } from "react-icons/go";

export type Benefit = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const benefits: Benefit[] = [
  {
    icon: <IoDiamondOutline className="text-5xl" style={{ color: "#44155B" }} />,
    title: "Premium Quality",
    description:
      "We ensure top-quality products made from the finest materials, designed to meet your expectations.",
  },
  {
    icon: <LiaShippingFastSolid className="text-5xl" style={{ color: "#44155B" }} />,
    title: "Free Shipping",
    description:
      "Enjoy free and fast delivery on all your orders, right to your doorstep without extra cost.",
  },
  {
    icon: <GoVerified className="text-5xl" style={{ color: "#44155B" }} />,
    title: "Warranty",
    description:
      "We stand by our products with a solid warranty to ensure your complete peace of mind.",
  },
];

export default benefits;
