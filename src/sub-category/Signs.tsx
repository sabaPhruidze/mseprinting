import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import HelmetComponent from "../importantparts/Helmet";
import {
  GlobalContainerColumn,
  Globalh2TitleWithMB20,
  GlobalPart,
  GlobalTextContainer,
  FullBackgroundContainerZERO,
  TitleAndButtonContainer,
  FullScreenTitle,
  FullScreenButton,
  GlobalMainContent,
} from "../style/GlobalStyle";
import { fetchSignsData } from "../data/sub-category data/AllSubCategoryData";
import { CommonDocument } from "../types/DataTypes";
import ImageWithSEO from "../importantparts/ImageWithCEO";
import { SIGNS_IMAGE } from "../data/sub-category data/ImageWithCEOData";

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

  const navigate = useNavigate();
  const memoizedData = useMemo(() => signsData, [signsData]);

  return (
    <div>
      <HelmetComponent
        title="Signs and Banners | MSE Printing"
        description="Discover MSE Printing's high-quality signs and banners for all business needs. Custom signage solutions with fast online ordering."
      />

      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        <ImageWithSEO
          src={SIGNS_IMAGE.src}
          alt={SIGNS_IMAGE.alt}
          title={SIGNS_IMAGE.title}
          geoData={SIGNS_IMAGE.geoData}
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
      <GlobalContainerColumn>
        <GlobalTextContainer>
          {memoizedData?.two.map((item, index) => (
            <div key={index}>
              <Globalh2TitleWithMB20>{item.title}</Globalh2TitleWithMB20>
              {item.content && <GlobalPart>{item.content}</GlobalPart>}
            </div>
          ))}
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
