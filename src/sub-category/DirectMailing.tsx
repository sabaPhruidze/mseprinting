import { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  GlobalMainTitle,
  GlobalImageWrapperWithFloat,
  GlobalTextContainer,
  GlobalPart,
  Globalh2TitleWithMB20,
} from "../style/GlobalStyle";
import { fetchDirectMailingData } from "../data/sub-category data/AllSubCategoryData";
import { CommonDocument } from "../types/DataTypes";

export default function DirectMailing() {
  const [directMailingData, setDirectMailingData] =
    useState<CommonDocument | null>(null);

  useEffect(() => {
    const getDirectMailingData = async () => {
      const data = await fetchDirectMailingData();
      if (data) {
        setDirectMailingData(data);
      }
    };

    getDirectMailingData();
  }, []);

  const memoizedData = useMemo(() => directMailingData, [directMailingData]);

  return (
    <GlobalContainerColumn>
      <GlobalMainTitle>{memoizedData?.one.title}</GlobalMainTitle>

      <GlobalTextContainer>
        <GlobalImageWrapperWithFloat>
          <img src={memoizedData?.third} alt={memoizedData?.one.title} />
        </GlobalImageWrapperWithFloat>

        {memoizedData?.two.map((item, index) => (
          <div key={index}>
            <Globalh2TitleWithMB20>{item.title}</Globalh2TitleWithMB20>
            {item.content && <GlobalPart>{item.content}</GlobalPart>}
          </div>
        ))}
      </GlobalTextContainer>
    </GlobalContainerColumn>
  );
}
