import React from "react";
import { Helmet } from "react-helmet-async";

interface HelmetComponentProps {
  title: string;
  description?: string;
  canonical?: string;
}

const HelmetComponent: React.FC<HelmetComponentProps> = ({
  title,
  description,
  canonical,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default HelmetComponent;
