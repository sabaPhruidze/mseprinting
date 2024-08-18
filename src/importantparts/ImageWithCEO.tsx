import React from "react";
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
}

const SEOImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 60% 60%;
`;

const ImageWithSEO: React.FC<ImageWithSEOProps> = ({
  src,
  alt,
  title,
  geoData,
}) => {
  React.useEffect(() => {
    // Adding geo-tagging to the image metadata (EXIF data)
    if (geoData) {
      // You would need a library to manipulate EXIF data in real use case
      console.log(`Geo-tagging: ${geoData.latitude}, ${geoData.longitude}`);
    }

    // Structured Data Markup
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

    // Injecting structured data as a script tag
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [src, alt, title, geoData]);

  return <SEOImage src={src} alt={alt} />;
};

export default ImageWithSEO;
