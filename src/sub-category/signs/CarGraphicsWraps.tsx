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
} from "../../style/GlobalStyle";
import { fetchCarGraphicsWrapsData } from "../../data/sub-category data/AllSubCategoryData";
import ImageWithSEO from "../../importantparts/ImageWithCEO";
import { DIGITAL_PRINTING_IMAGE } from "../../data/sub-category data/ImageWithCEOData";
import { SubCategoryCommonTypes } from "../../types/DataTypes";

export default function CarGraphicsWraps() {
  const [carGraphicsWrapsData, setCarGraphicsWrapsData] =
    useState<SubCategoryCommonTypes | null>(null);

  useEffect(() => {
    const getCarGraphicsWrapsData = async () => {
      const data = await fetchCarGraphicsWrapsData();
      if (data) {
        setCarGraphicsWrapsData(data);
      }
    };

    getCarGraphicsWrapsData();
  }, []);

  const memoizedData = useMemo(
    () => carGraphicsWrapsData,
    [carGraphicsWrapsData]
  );
  const navigate = useNavigate();

  return (
    <div>
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        <ImageWithSEO
          src={DIGITAL_PRINTING_IMAGE.src}
          alt={DIGITAL_PRINTING_IMAGE.alt}
          title={DIGITAL_PRINTING_IMAGE.title}
          geoData={DIGITAL_PRINTING_IMAGE.geoData}
          loading="eager"
        />
        <TitleAndButtonContainer>
          <FullScreenTitle>{memoizedData?.one?.title}</FullScreenTitle>
          <GlobalMainContent>{memoizedData?.one?.content}</GlobalMainContent>
          <FullScreenButton onClick={() => navigate("/request-quote")}>
            {memoizedData?.one?.button}
          </FullScreenButton>
        </TitleAndButtonContainer>
      </FullBackgroundContainerZERO>

      <GlobalContainerColumn>
        <GlobalTextContainer>
          {memoizedData?.two.map((item, index) => (
            <GlobalPart key={index}>{item}</GlobalPart>
          ))}
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
