import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import {
  GlobalContainerColumn,
  GlobalPart,
  GlobalTextContainer,
  FullBackgroundContainerZERO,
  TitleAndButtonContainer,
  FullScreenTitle,
  FullScreenButton,
  GlobalMainContent,
  FloatedImageContainer,
} from "../../style/GlobalStyle";
import { fetchMKBookletsData } from "../../data/sub-category data/AllSubCategoryData";
import { CommonDocumentWAS } from "../../types/DataTypes";
import ImageWithSEO from "../../importantparts/ImageWithCEO";
import {
  CATALOGYS_BOOKLETS_IMAGE,
  MANUALS_CATALOGS_BOOKLETS_RIGHT_IMAGE,
} from "../../data/sub-category data/ImageWithCEOData";
import HelmetComponent from "../../importantparts/Helmet";

export default function MCBooklets() {
  const [mcBookletsData, setMcBookletsData] =
    useState<CommonDocumentWAS | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getMcBookletsData = async () => {
      const data: CommonDocumentWAS | null = await fetchMKBookletsData();
      if (data) {
        setMcBookletsData(data);
      }
    };

    getMcBookletsData();
  }, []);

  const memoizedData = useMemo(() => mcBookletsData, [mcBookletsData]);

  return (
    <div>
      {/* HelmetComponent for SEO */}
      <HelmetComponent
        title="Manuals, Catalogs & Booklets | MSE Printing"
        description="Order professional manuals, catalogs, and booklets customized to your brand at MSE Printing. Enhance your presentation with high-quality materials."
      />

      {/* Full-screen background section */}
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        <ImageWithSEO
          src={CATALOGYS_BOOKLETS_IMAGE.src}
          alt={CATALOGYS_BOOKLETS_IMAGE.alt}
          title={CATALOGYS_BOOKLETS_IMAGE.title}
          geoData={CATALOGYS_BOOKLETS_IMAGE.geoData}
          loading="eager"
        />
        <TitleAndButtonContainer>
          <FullScreenTitle>{memoizedData?.front?.title}</FullScreenTitle>
          <GlobalMainContent>{memoizedData?.front?.content}</GlobalMainContent>
          <FullScreenButton onClick={() => navigate("/request-quote")}>
            {memoizedData?.front?.button}
          </FullScreenButton>
        </TitleAndButtonContainer>
      </FullBackgroundContainerZERO>

      {/* Text content below the background image */}
      <GlobalContainerColumn>
        <GlobalTextContainer>
          {/* Floated image to the right */}
          <FloatedImageContainer>
            <ImageWithSEO
              src={MANUALS_CATALOGS_BOOKLETS_RIGHT_IMAGE.src}
              alt={MANUALS_CATALOGS_BOOKLETS_RIGHT_IMAGE.alt}
              title={MANUALS_CATALOGS_BOOKLETS_RIGHT_IMAGE.title}
              geoData={MANUALS_CATALOGS_BOOKLETS_RIGHT_IMAGE.geoData}
              loading="lazy"
            />
          </FloatedImageContainer>

          {/* The text will wrap around the above floated image */}
          <GlobalPart>{memoizedData?.one.content}</GlobalPart>

          {memoizedData?.two.map((item, index) => (
            <GlobalPart key={index}>{item}</GlobalPart>
          ))}
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
