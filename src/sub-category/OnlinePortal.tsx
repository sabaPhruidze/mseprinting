import { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
  Globalh2TitleWithMB20,
  GlobalImageWrapperWithFloat,
  GlobalTextContainer,
  GlobalPart,
  GlobalMainTitle,
} from "../style/GlobalStyle";
import { fetchOnlinePortalData } from "../data/sub-category data/AllSubCategoryData";
import { CommonDocument } from "../types/DataTypes";

export default function OnlinePortal() {
  const [onlinePortalData, setOnlinePortalData] =
    useState<CommonDocument | null>(null);

  useEffect(() => {
    const getOnlinePortalData = async () => {
      const data = await fetchOnlinePortalData();
      if (data) {
        setOnlinePortalData(data);
      }
    };

    getOnlinePortalData();
  }, []);

  const memoizedData = useMemo(() => onlinePortalData, [onlinePortalData]);

  return (
    <GlobalContainerColumn>
      <GlobalTextContainer>
        <GlobalImageWrapperWithFloat>
          <img src={memoizedData?.three} alt={memoizedData?.one.title} />
        </GlobalImageWrapperWithFloat>
        <GlobalMainTitle>{memoizedData?.one.title}</GlobalMainTitle>
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
