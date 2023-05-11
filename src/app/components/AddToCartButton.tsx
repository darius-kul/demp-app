"use client";

import { useRouter } from "next/navigation";
import { IProduct } from "../services/product";
import { useCartContext } from "../store/Cart";

interface IAddToCartButton {
  product: IProduct;
}

export const AddToCartButton: React.FC<IAddToCartButton> = ({ product }) => {
  const { addToCart } = useCartContext();
  const { push } = useRouter();

  const handleAddToCart = () => {
    addToCart(product);
    push("/products");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 mr-3 h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
      Add to cart
    </button>
  );
};
