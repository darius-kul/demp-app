import Link from "next/link";
import { memo } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white shadow  dark:bg-gray-800 mt-auto">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex justify-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {currentYear}{" "}
          <Link
            className="opacity-50 hover:opacity-100 transition-opacity"
            href="/"
          >
            Demo.{" "}
          </Link>
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default memo(Footer);
