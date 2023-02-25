import Image from "next/image";
import React from "react";
type ImageCardProps = {
  image: string;
  name: string;
};
export const ImageCard: React.FC<ImageCardProps> = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full h-72">
        <Image
          src={image || ""}
          alt={name || ""}
          fill
          style={{
            objectFit: "contain",
          }}
          className="hover:grow hover:shadow-lg hover:scale-105 duration-75"
        />
      </div>
      <div className="pt-2">
        <p>{name || ""}</p>
      </div>
    </div>
  );
};
