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
import { fetchInteriorOfficeLobbyDecorData } from "../../data/sub-category data/AllSubCategoryData";
import ImageWithSEO from "../../importantparts/ImageWithCEO";
import { INTERIOR_OFFICE_LOBBY_DECOR_IMAGE } from "../../data/sub-category data/ImageWithCEOData";
import { SubCategoryCommonTypes } from "../../types/DataTypes";

export default function InteriorOfficeLobbyDecor() {
  const [interiorOfficeLobbyDecorData, setInteriorOfficeLobbyDecorData] =
    useState<SubCategoryCommonTypes | null>(null);

  useEffect(() => {
    const getInteriorOfficeLobbyDecorData = async () => {
      const data = await fetchInteriorOfficeLobbyDecorData();
      if (data) {
        setInteriorOfficeLobbyDecorData(data);
      }
    };

    getInteriorOfficeLobbyDecorData();
  }, []);

  const memoizedData = useMemo(
    () => interiorOfficeLobbyDecorData,
    [interiorOfficeLobbyDecorData]
  );
  const navigate = useNavigate();

  return (
    <div>
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        <ImageWithSEO
          src={INTERIOR_OFFICE_LOBBY_DECOR_IMAGE.src}
          alt={INTERIOR_OFFICE_LOBBY_DECOR_IMAGE.alt}
          title={INTERIOR_OFFICE_LOBBY_DECOR_IMAGE.title}
          geoData={INTERIOR_OFFICE_LOBBY_DECOR_IMAGE.geoData}
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
