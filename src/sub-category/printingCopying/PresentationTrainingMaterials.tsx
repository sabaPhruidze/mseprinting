import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  GlobalContainerColumn,
  GlobalPart,
  GlobalTextContainer, // Import the styled component for text wrapping
  FullBackgroundContainerZERO, // Updated styled component for the full background
  TitleAndButtonContainer, // Styled component for title and button wrapping
  FullScreenTitle, // Styled component for the main title in the background
  FullScreenButton, // Styled component for the "Request a Quote" button
  GlobalMainContent,
} from "../../style/GlobalStyle";
import { fetchPresentationTrainingMaterialsData } from "../../data/sub-category data/AllSubCategoryData"; // Use the correct data fetching function
import { CommonDocumentWAS } from "../../types/DataTypes";
import ImageWithSEO from "../../importantparts/ImageWithCEO"; // Import ImageWithSEO for handling the image
import { PRESENTATION_TRAINING_MATERIALS_IMAGE } from "../../data/sub-category data/ImageWithCEOData"; // Import the correct image data

export default function PresentationTrainingMaterials() {
  const [
    presentationTrainingMaterialsData,
    setPresentationTrainingMaterialsData,
  ] = useState<CommonDocumentWAS | null>(null);

  useEffect(() => {
    const getPresentationTrainingMaterialsData = async () => {
      const data = await fetchPresentationTrainingMaterialsData();
      if (data) {
        setPresentationTrainingMaterialsData(data);
      }
    };

    getPresentationTrainingMaterialsData();
  }, []);

  const memoizedData = useMemo(
    () => presentationTrainingMaterialsData,
    [presentationTrainingMaterialsData]
  );
  const navigate = useNavigate();

  return (
    <div>
      {/* Full-screen section with background image using ImageWithSEO */}
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div> {/* Add this overlay div */}
        <ImageWithSEO
          src={PRESENTATION_TRAINING_MATERIALS_IMAGE.src} // Use PRESENTATION_TRAINING_MATERIALS_IMAGE for the image source
          alt={PRESENTATION_TRAINING_MATERIALS_IMAGE.alt}
          title={PRESENTATION_TRAINING_MATERIALS_IMAGE.title}
          geoData={PRESENTATION_TRAINING_MATERIALS_IMAGE.geoData}
          loading="eager"
        />
        <TitleAndButtonContainer>
          <FullScreenTitle>{memoizedData?.front?.title}</FullScreenTitle>
          <GlobalMainContent>{memoizedData?.front?.content}</GlobalMainContent>
          <FullScreenButton
            onClick={() => {
              navigate("/request-quote");
            }}
          >
            {memoizedData?.front?.button}
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
