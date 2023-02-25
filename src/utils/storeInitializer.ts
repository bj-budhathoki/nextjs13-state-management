"use client";
import { useRef } from "react";
import { useProductStore } from "../store";
import { ProductProps } from "../services/products";
export const StoreInitializer = (product: ProductProps) => {
  const isInitialized = useRef<boolean>(false);
  if (!isInitialized.current) {
    useProductStore.setState(product);
    isInitialized.current = true;
  }
  return null;
};
