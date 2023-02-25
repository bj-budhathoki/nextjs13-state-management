import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { AddToCart } from "../../../components/AddToCart";
import { ImageCard } from "../../../components/ImageCard";
import { Product } from "../../../components/Product";
import { ProductDescription } from "../../../components/ProductDescription";
import { fetchProduct } from "../../../services/products";
import { useProductStore } from "../../../store";
import { StoreInitializer } from "../../../utils/storeInitializer";

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const product = await fetchProduct(+params?.id);
  useProductStore.setState(product);
  return (
    <div className="container flex flex-wrap items-center py-12 mx-auto">
      <StoreInitializer {...product} />
      <div className="flex w-full gap-10">
        <div className="w-96">
          <ImageCard />
        </div>
        <ProductDescription />
      </div>
    </div>
  );
};

export default ProductDetail;
