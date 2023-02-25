import Image from "next/image";
import React from "react";

export const HomeBanner = () => {
  return (
    <div id="home__banner" className="relative w-full h-96 lg:h-[150]">
      <Image
        src={
          "https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_960_720.jpg"
        }
        alt="banner img"
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};
