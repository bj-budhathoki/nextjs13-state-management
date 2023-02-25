import React from "react";
import { ProductProps } from "../services/products";
import { useProductStore } from "../store";
import { AddToCart } from "./AddToCart";
import { Rating } from "./Rating";

export const ProductDescription: React.FC = () => {
  const { description } = useProductStore.getState();
  return (
    <div className="w-96 flex flex-col gap-5">
      <div className="font-bold uppercase mb-2">Description</div>
      <div>
        <p>{description}</p>
      </div>
      <Rating />
      <AddToCart />
    </div>
  );
};
