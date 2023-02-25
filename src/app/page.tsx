import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { SectionNav } from "../components/SectionNav";
import { Product } from "../components/Product";
import { fetchProducts } from "../services/products";

export default async function Home() {
  const products = await fetchProducts();
  return (
    <main className="">
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <SectionNav />
          {products?.map((product) => (
            <Product key={product?.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
