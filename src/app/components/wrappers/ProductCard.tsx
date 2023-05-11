import { IProduct } from "@/app/services/product";
import Image from "next/image";
import Link from "next/link";
import { ProductImage } from "./ProductImage";

export const Product: React.FC<IProduct> = ({
  category,
  description,
  image,
  price,
  title,
  id,
}) => {
  return (
    <Link href={`/products/${id}`} className="h-96">
      <div className="h-96 max-w-sm">
        <div className="relative max-h-72 h-full hover:scale-110 max-w-2xl overflow-hidden transition-all ">
          <ProductImage src={image} alt={title} />
        </div>
        <h3 className="mt-6 text-sm text-gray-700">{title}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">{price} EUR</p>
      </div>
    </Link>
  );
};
