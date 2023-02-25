"use client";
import React from "react";
import { useProductCarts, useProductStore } from "../store";

export const AddToCart = () => {
  const { price, id, ...rest } = useProductStore.getState();
  return (
    <div>
      <div className="flex flex-col items-center justify-between text-gray-900 md:flex-row">
        <p className="text-xl font-bold">{price?.toFixed(2) || "00"}$</p>
        <button
          onClick={() => {
            useProductCarts.setState((state) => {
              const item = state.items?.find((item) => item?.id === id);
              let items = [];
              if (item) {
                items = state.items?.map((val) =>
                  val?.id === item?.id ? { ...val, count: val?.count + 1 } : val
                );
              } else {
                items = [...state?.items, { price, id, count: 1, ...rest }];
              }
              return {
                items: items,
                total: state.total + price,
              };
            });
          }}
          className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
