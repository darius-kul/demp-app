import Link from "next/link";

const ShopHeader = () => {
  return (
    <header className="bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            My shop
          </span>
        </Link>
      </div>
    </header>
  );
};

export default ShopHeader;
