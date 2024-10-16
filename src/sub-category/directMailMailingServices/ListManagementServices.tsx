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
} from "../../style/GlobalStyle"; // Ensure the styled components are correctly imported
import { fetchListManagementServicesData } from "../../data/sub-category data/AllSubCategoryData"; // Import the fetch function
import ImageWithSEO from "../../importantparts/ImageWithCEO"; // Import ImageWithSEO for handling the image
import { LIST_MANAGEMENT_SERVICES_IMAGE } from "../../data/sub-category data/ImageWithCEOData"; // Use the correct image for ListManagementServices
import { SubCategoryCommonTypes } from "../../types/DataTypes"; // Import the necessary type

export default function ListManagementServices() {
  const [listManagementServicesData, setListManagementServicesData] =
    useState<SubCategoryCommonTypes | null>(null); // Using SubCategoryCommonTypes type

  useEffect(() => {
    const getListManagementServicesData = async () => {
      const data = await fetchListManagementServicesData();
      if (data) {
        setListManagementServicesData(data);
      }
    };

    getListManagementServicesData();
  }, []);

  const memoizedData = useMemo(
    () => listManagementServicesData,
    [listManagementServicesData]
  );
  const navigate = useNavigate();

  return (
    <div>
      {/* Full-screen section with background image using ImageWithSEO */}
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div> {/* Add this overlay div */}
        <ImageWithSEO
          src={LIST_MANAGEMENT_SERVICES_IMAGE.src} // Keep using DIGITAL_PRINTING_IMAGE
          alt={LIST_MANAGEMENT_SERVICES_IMAGE.alt}
          title={LIST_MANAGEMENT_SERVICES_IMAGE.title}
          geoData={LIST_MANAGEMENT_SERVICES_IMAGE.geoData}
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
