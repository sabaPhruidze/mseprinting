import { useEffect } from "react";

export const usePrefetchImages = (images: string[]) => {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.loading = "eager"; // Ensure images are preloaded eagerly
      img.decoding = "sync"; // Synchronously decode the image to speed up rendering
    });
  }, [images]);
};
