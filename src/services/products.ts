export type ProductProps = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
  count: number;
};

async function request<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return res?.json() as T;
}
export const fetchProducts = async () =>
  await request<ProductProps[]>("https://fakestoreapi.com/products");
export const fetchProduct = async (id: number) =>
  await request<ProductProps>(`https://fakestoreapi.com/products/${id}`);
