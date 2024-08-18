import React, { useEffect } from "react";
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
  loading?: "eager" | "lazy"; // Add loading prop to the interface
}

const SEOImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 60% 60%;
  transition: opacity 0.5s ease-in-out; // Add smooth loading transition
  opacity: 0;

  &.loaded {
    opacity: 1;
  }
`;

const ImageWithSEO: React.FC<ImageWithSEOProps> = ({
  src,
  alt,
  title,
  geoData,
  loading = "eager", // Default to "eager" loading for immediate display
}) => {
  useEffect(() => {
    if (geoData) {
      console.log(`Geo-tagging: ${geoData.latitude}, ${geoData.longitude}`);
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

  return (
    <SEOImage
      src={src}
      alt={alt}
      loading={loading}
      className="image"
      onLoad={(e) => (e.currentTarget.className += " loaded")} // Apply loaded class on image load
    />
  );
};

export default ImageWithSEO;
