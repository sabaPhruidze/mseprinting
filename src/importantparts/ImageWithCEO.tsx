// ImageWithSEO.tsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface ImageWithSEOProps {
  src: string;
  alt: string;
  title: string;
  geoData?: {
    latitude: string;
    longitude: string;
    location: string;
  };
  loading?: "eager" | "lazy";
}

const SEOImage = styled.img<{ $isLoaded: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 60% 60%;
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.$isLoaded ? 1 : 0)};
`;

const ImageWithSEO: React.FC<ImageWithSEOProps> = ({
  src,
  alt,
  title,
  geoData,
  loading = "eager",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (geoData) {
    }

    const structuredData = {
      "@context": "http://schema.org",
      "@type": "ImageObject",
      contentUrl: src,
      description: alt,
      locationCreated: geoData
        ? {
            "@type": "Place",
            name: title,
            geo: {
              "@type": "GeoCoordinates",
              latitude: geoData.latitude,
              longitude: geoData.longitude,
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: geoData.location,
              addressRegion: "MN",
              addressCountry: "USA",
            },
          }
        : undefined,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [src, alt, title, geoData]);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.loading = loading;
    img.decoding = "sync";
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [src, loading]);

  return (
    <SEOImage
      src={src}
      alt={alt}
      loading={loading}
      $isLoaded={isLoaded}
      onLoad={() => setIsLoaded(true)}
    />
  );
};

export default React.memo(ImageWithSEO);
