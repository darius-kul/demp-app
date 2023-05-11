import { Product } from "@/app/components/wrappers/ProductCard";
import { fetchProducts } from "@/app/services/product";

export const metadata = {
  title: "Demo | Products",
  description: "Some products",
};

export default async function Products() {
  const products = await fetchProducts({ error: false });
  return (
    <div className="pt-24">
      <div className="grid grid-cols-4 gap-8 px-6">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
