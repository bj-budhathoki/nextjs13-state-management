import Image from "next/image";
import React from "react";
import { useProductStore } from "../store";

export const ImageCard: React.FC = () => {
  const { title, image } = useProductStore.getState();
  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full h-72">
        <Image
          src={image || ""}
          alt={title || ""}
          fill
          style={{
            objectFit: "contain",
          }}
          className="hover:grow hover:shadow-lg hover:scale-105 duration-75"
        />
      </div>
      <div className="pt-2">
        <p>{title || ""}</p>
      </div>
    </div>
  );
};
