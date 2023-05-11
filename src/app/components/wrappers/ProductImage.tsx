"use client";

import Image from "next/image";
import { useState } from "react";

interface IProductImage {
  src: string;
  alt: string;
  size?: string;
}

export const ProductImage: React.FC<IProductImage> = ({
  src,
  alt,
  size = "max-w-xs",
}) => {
  const [loading, setLoading] = useState(true);
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-contain transition-all ${size} ${
        loading ? "scale-110 blur-xl grayscale" : "scale-100 blur-0 grayscale-0"
      }`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
};
