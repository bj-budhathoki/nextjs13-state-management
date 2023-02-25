import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { AddToCart } from "../../../components/AddToCart";
import { ImageCard } from "../../../components/ImageCard";
import { Product } from "../../../components/Product";
import { ProductDescription } from "../../../components/ProductDescription";
import { fetchProduct } from "../../../services/products";

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const product = await fetchProduct(+params?.id);
  return (
    <div className="container mx-auto flex items-center flex-wrap py-12">
      <div className="flex gap-10 w-full">
        <div className="w-96">
          <ImageCard image={product?.image} name={product?.title} />
        </div>
        <ProductDescription product={product} />
      </div>
    </div>
  );
};

export default ProductDetail;
