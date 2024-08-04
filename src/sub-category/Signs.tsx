import { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
  Globalh2TitleWithMB20,
  GlobalPart,
  GlobalMainTitle,
} from "../style/GlobalStyle";
import { fetchSignsData } from "../data/sub-category data/AllSubCategoryData";
import { CommonDocument } from "../types/DataTypes";

export default function Signs() {
  const [signsData, setSignsData] = useState<CommonDocument | null>(null);

  useEffect(() => {
    const getSignsData = async () => {
      const data = await fetchSignsData();
      if (data) {
        setSignsData(data);
      }
    };

    getSignsData();
  }, []);

  const memoizedData = useMemo(() => signsData, [signsData]);

  return (
    <GlobalContainerColumn>
      <GlobalMainTitle>{memoizedData?.one.title}</GlobalMainTitle>
      {memoizedData?.two.map((item, index) => (
        <GlobalBoxColumnStart key={index}>
          <Globalh2TitleWithMB20>{item.title}</Globalh2TitleWithMB20>
          {item.content && <GlobalPart>{item.content}</GlobalPart>}
        </GlobalBoxColumnStart>
      ))}
    </GlobalContainerColumn>
  );
}
