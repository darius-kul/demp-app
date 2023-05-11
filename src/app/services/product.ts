const BASE_URL = "https://fakestoreapi.com";

export interface IProduct {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

interface Fetcher {
    error?: boolean;
}

export const fetchProducts = async ({ error = false }: Fetcher) => {
  const products = await fetch(`${BASE_URL}/products`);
  await new Promise((resolve) => setTimeout(resolve, 4000));
  if (!products.ok || error) {
    throw new Error("Error fetching products");
  }
    return await products.json() as IProduct[];
};

export const fetchProduct = async (id: string) => {
    const product = await fetch(`${BASE_URL}/products/${id}`);
    if (!product.ok) {
        throw new Error("Error fetching product");
    }
    return await product.json() as IProduct;
};