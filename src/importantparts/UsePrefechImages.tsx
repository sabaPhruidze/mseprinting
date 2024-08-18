import { useEffect } from "react";

export const usePrefetchImages = (images: string[]) => {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);
};
