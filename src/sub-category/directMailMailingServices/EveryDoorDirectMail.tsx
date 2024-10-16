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
} from "../../style/GlobalStyle"; // Make sure the styled components are correctly imported
import { fetchEveryDoorDirectMailData } from "../../data/sub-category data/AllSubCategoryData"; // Import the fetch function
import ImageWithSEO from "../../importantparts/ImageWithCEO"; // Import ImageWithSEO for handling the image
import { EVERY_DOOR_DIRECT_MAIL_IMAGE } from "../../data/sub-category data/ImageWithCEOData"; // Use the correct image for EveryDoorDirectMail
import { SubCategoryCommonTypes } from "../../types/DataTypes"; // Import the necessary type

export default function EveryDoorDirectMail() {
  const [everyDoorDirectMailData, setEveryDoorDirectMailData] =
    useState<SubCategoryCommonTypes | null>(null); // Using SubCategoryCommonTypes type

  useEffect(() => {
    const getEveryDoorDirectMailData = async () => {
      const data = await fetchEveryDoorDirectMailData();
      if (data) {
        setEveryDoorDirectMailData(data);
      }
    };

    getEveryDoorDirectMailData();
  }, []);

  const memoizedData = useMemo(
    () => everyDoorDirectMailData,
    [everyDoorDirectMailData]
  );
  const navigate = useNavigate();

  return (
    <div>
      {/* Full-screen section with background image using ImageWithSEO */}
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div> {/* Add this overlay div */}
        <ImageWithSEO
          src={EVERY_DOOR_DIRECT_MAIL_IMAGE.src} // Keep using DIGITAL_PRINTING_IMAGE
          alt={EVERY_DOOR_DIRECT_MAIL_IMAGE.alt}
          title={EVERY_DOOR_DIRECT_MAIL_IMAGE.title}
          geoData={EVERY_DOOR_DIRECT_MAIL_IMAGE.geoData}
          loading="eager"
        />
        <TitleAndButtonContainer>
          <FullScreenTitle>{memoizedData?.one?.title}</FullScreenTitle>
          <GlobalMainContent>{memoizedData?.one?.content}</GlobalMainContent>
          <FullScreenButton
            onClick={() => {
              navigate("/request-quote");
            }}
          >
            {memoizedData?.one?.button}
          </FullScreenButton>
        </TitleAndButtonContainer>
      </FullBackgroundContainerZERO>

      {/* Text content below the background image */}
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
