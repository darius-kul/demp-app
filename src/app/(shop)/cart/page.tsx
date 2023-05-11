import { CartProducts } from "./components/CartProducts";
import { CartTotals } from "./components/CartTotals";

export default function Page() {
  return (
    <div className="pt-[4rem]">
      <div className="mx-auto max-w-5xl items-start justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          <CartProducts />
        </div>
        <CartTotals />
      </div>
    </div>
  );
}
