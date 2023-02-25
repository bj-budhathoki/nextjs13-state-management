"use client";
import Image from "next/image";
import React from "react";
import { useProductCarts } from "../../store";

const Cart = () => {
  const { items, total } = useProductCarts();
  return (
    <div className="max-w-5xl p-5 mx-auto my-10 border rounded h-fit">
      <h3 className="text-4xl font-bold">Shopping Cart</h3>
      <div className="flex gap-10 mt-10">
        <div className="flex flex-col w-3/5">
          {items?.map((item) => (
            <div key={item?.id} className="flex justify-between py-5 border-t">
              <div className="flex gap-10">
                <div className="relative h-32 w-28">
                  <Image src={item?.image} alt={item?.title} fill />
                </div>
                <div className="flex-1 mt-2">
                  <p className="font-bold text-gray-400">{item?.title}</p>
                  <p className="mt-2 text-gray-400">Quantity: {item?.count}</p>
                </div>
              </div>
              <div className="font-bold text-gray-400">
                ${item?.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col flex-auto gap-10 px-4 py-6 bg-gray-100 rounded sm:px-5 h-fit">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p className="font-bold">Order Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <button
            type="button"
            className="px-5 py-3 font-medium text-white bg-green-500 rounded"
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
