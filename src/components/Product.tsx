import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductProps } from "../services/products";
type IProps = {
  product: ProductProps;
};
export const Product: React.FC<IProps> = ({ product }) => {
  return (
    <div className="flex flex-col w-full p-6 md:w-1/3 xl:w-1/4 hover:cursor-pointer">
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full h-72 xl:h-72">
          <Image
            src={product?.image}
            alt="banner img"
            fill
            style={{
              objectFit: "contain",
            }}
            className="duration-75 hover:grow hover:shadow-lg hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-between pt-3">
          <p className="">{product?.title}</p>
        </div>
        <p className="pt-1 font-bold text-gray-900">${product?.price}</p>
      </Link>
    </div>
  );
};
