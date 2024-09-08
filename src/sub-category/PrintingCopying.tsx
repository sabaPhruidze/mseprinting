import { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  Globalh2TitleWithMB20,
  GlobalPart,
  GlobalTextContainer, // Styled component for text wrapping
  FullBackgroundContainer, // Styled component for the full background
  TitleAndButtonContainer, // Styled component for title and button wrapping
  FullScreenTitle, // Styled component for the main title in the background
  FullScreenButton, // Styled component for the "Request a Quote" button
} from "../style/GlobalStyle";
import { fetchCopyPrintingData } from "../data/sub-category data/AllSubCategoryData";
import { PrintingCopyingDocument } from "../types/DataTypes";

export default function PrintingCopying() {
  const [printingCopyingData, setPrintingCopyingData] =
    useState<PrintingCopyingDocument | null>(null);

  useEffect(() => {
    const getPrintingCopyingData = async () => {
      const data = await fetchCopyPrintingData();
      if (data) {
        setPrintingCopyingData(data);
      }
    };

    getPrintingCopyingData();
  }, []);

  const memoizedData = useMemo(
    () => printingCopyingData,
    [printingCopyingData]
  );

  return (
    <div>
      {/* Full-screen section with background image */}
      <FullBackgroundContainer bgimage={memoizedData?.four || ""}>
        <TitleAndButtonContainer>
          <FullScreenTitle>{memoizedData?.one.title}</FullScreenTitle>
          <FullScreenButton>Request a Quote</FullScreenButton>
        </TitleAndButtonContainer>
      </FullBackgroundContainer>

      {/* Text content below the background image */}
      <GlobalContainerColumn>
        <GlobalTextContainer>
          <GlobalPart>{memoizedData?.one.content}</GlobalPart>

          {memoizedData?.two.map((item, index) => (
            <div key={index}>
              <Globalh2TitleWithMB20>{item.title}</Globalh2TitleWithMB20>
              <GlobalPart>{item.content}</GlobalPart>
            </div>
          ))}

          <Globalh2TitleWithMB20>
            {memoizedData?.three.title}
          </Globalh2TitleWithMB20>
          <GlobalPart>{memoizedData?.three.firstPart}</GlobalPart>
          <GlobalPart>{memoizedData?.three.secondPart}</GlobalPart>
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
