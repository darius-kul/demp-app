"use client";

import { experimental_useFormStatus } from "react-dom";

export const CustomButton = () => {
  const { pending } = experimental_useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center justify-center rounded-full py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
    >
      Add Todo 2
    </button>
  );
};
