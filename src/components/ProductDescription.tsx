import React from "react";
import { ProductProps } from "../services/products";
import { AddToCart } from "./AddToCart";
import { Rating } from "./Rating";
type ProductDescription = {
  product: ProductProps;
};
export const ProductDescription: React.FC<ProductDescription> = ({
  product,
}) => {
  return (
    <div className="w-96 flex flex-col gap-5">
      <div className="font-bold uppercase mb-2">Description</div>
      <div>
        <p>{product?.description}</p>
      </div>
      <Rating rating={Math.ceil(product?.rating?.rate)} />
      <AddToCart price={product?.price} />
    </div>
  );
};
