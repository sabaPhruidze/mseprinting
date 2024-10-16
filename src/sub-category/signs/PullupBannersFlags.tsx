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
import { fetchPullupBannersFlagsData } from "../../data/sub-category data/AllSubCategoryData";
import ImageWithSEO from "../../importantparts/ImageWithCEO";
import { PULL_UP_BANNERS_FLAGS_IMAGE } from "../../data/sub-category data/ImageWithCEOData";
import { SubCategoryCommonTypes } from "../../types/DataTypes";

export default function PullupBannersFlags() {
  const [pullupBannersFlagsData, setPullupBannersFlagsData] =
    useState<SubCategoryCommonTypes | null>(null);

  useEffect(() => {
    const getPullupBannersFlagsData = async () => {
      const data = await fetchPullupBannersFlagsData();
      if (data) {
        setPullupBannersFlagsData(data);
      }
    };

    getPullupBannersFlagsData();
  }, []);

  const memoizedData = useMemo(
    () => pullupBannersFlagsData,
    [pullupBannersFlagsData]
  );
  const navigate = useNavigate();

  return (
    <div>
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        <ImageWithSEO
          src={PULL_UP_BANNERS_FLAGS_IMAGE.src}
          alt={PULL_UP_BANNERS_FLAGS_IMAGE.alt}
          title={PULL_UP_BANNERS_FLAGS_IMAGE.title}
          geoData={PULL_UP_BANNERS_FLAGS_IMAGE.geoData}
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
