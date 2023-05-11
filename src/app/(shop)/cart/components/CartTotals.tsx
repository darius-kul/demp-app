"use client";

import { useCartContext } from "@/app/store/Cart";
import { useRouter } from "next/navigation";

export const CartTotals = () => {
  const { cart, clearCart } = useCartContext();
  const { push } = useRouter();
  const subTotal = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const tax = 5.99;
  const total = (subTotal + tax).toFixed(2);

  const handleClearCart = () => {
    clearCart();
    push("/products");
  };

  if (!cart.length) return null;
  return (
    <div className="mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">{subTotal}EUR</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Tax</p>
        <p className="text-gray-700">{tax}</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">{total}EUR</p>
          <p className="text-sm text-gray-700">including VAT</p>
        </div>
      </div>
      <button
        onClick={handleClearCart}
        className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
      >
        Check out
      </button>
    </div>
  );
};
