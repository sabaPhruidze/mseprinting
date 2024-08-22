import { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
  GlobalPart,
  GlobalMainTitle,
  Globalh2TitleWithMB20,
  GlobalImageWrapperWithFloat, // Import the styled component for image wrapping
  GlobalTextContainer, // Import the styled component for text wrapping
} from "../../style/GlobalStyle";
import { fetchLabelsPackagingData } from "../../data/sub-category data/AllSubCategoryData";
import { LabelsPackagingDocument } from "../../types/DataTypes";

export default function LabelsPackaging() {
  const [labelsPackagingData, setLabelsPackagingData] =
    useState<LabelsPackagingDocument | null>(null);

  useEffect(() => {
    const getLabelsPackagingData = async () => {
      const data: LabelsPackagingDocument | null =
        await fetchLabelsPackagingData();
      if (data) {
        setLabelsPackagingData(data);
      }
    };

    getLabelsPackagingData();
  }, []);

  const memoizedData = useMemo(
    () => labelsPackagingData,
    [labelsPackagingData]
  );

  return (
    <GlobalContainerColumn>
      <GlobalMainTitle>{memoizedData?.one.title}</GlobalMainTitle>

      <GlobalTextContainer>
        <GlobalImageWrapperWithFloat>
          <img src={memoizedData?.four} alt={memoizedData?.one.title} />
        </GlobalImageWrapperWithFloat>

        {memoizedData?.two.map((item, index) => (
          <div key={index}>
            <Globalh2TitleWithMB20>{item.title}</Globalh2TitleWithMB20>
            <GlobalPart>{item.content}</GlobalPart>
          </div>
        ))}

        <GlobalPart>{memoizedData?.three.content}</GlobalPart>
      </GlobalTextContainer>
    </GlobalContainerColumn>
  );
}
