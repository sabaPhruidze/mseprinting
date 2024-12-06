import React from "react";
import { Helmet } from "react-helmet-async";

interface HelmetComponentProps {
  title: string;
  description?: string;
}

const HelmetComponent: React.FC<HelmetComponentProps> = ({
  title,
  description,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export default HelmetComponent;
