import { create } from "zustand";
import { ProductProps } from "../services/products";

export const useProductStore = create<ProductProps>((set) => ({
  id: 0,
  title: "",
  image: "",
  price: 0,
  description: "",
  rating: {
    rate: 0,
    count: 0,
  },
}));
interface ItemsProps extends ProductProps {
  count: number;
}
export const useProductCarts = create<{
  total: number;
  items: ItemsProps[];
}>((set) => ({
  items: [],
  total: 0,
}));
