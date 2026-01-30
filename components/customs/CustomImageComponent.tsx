"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type Props = ImageProps & {
  skeletonClassName?: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

export default function CustomImageComponent({ skeletonClassName, src, width, height, alt, ...props }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {!loaded && <div className={`absolute inset-0 animate-pulse bg-gray-200 ${skeletonClassName}`} />}

      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        {...props}
        onLoad={() => setLoaded(true)}
        className={`${props.className ?? ""} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
      />
    </div>
  );
}
