import React from "react";
type AddToCardProps = {
  price: number;
};
export const AddToCart: React.FC<AddToCardProps> = ({ price }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
        <p className="font-bold text-xl">{price || "00"}$</p>
        <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
          Add to cart
        </button>
      </div>
    </div>
  );
};
