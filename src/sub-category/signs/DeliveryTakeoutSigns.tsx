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
import { fetchDeliveryTakeoutSignsData } from "../../data/sub-category data/AllSubCategoryData";
import ImageWithSEO from "../../importantparts/ImageWithCEO";
import { DELIVERY_TAKOUT_SIGNS_IMAGE } from "../../data/sub-category data/ImageWithCEOData";
import { SubCategoryCommonTypes } from "../../types/DataTypes";

export default function DeliveryTakeoutSigns() {
  const [deliveryTakeoutSignsData, setDeliveryTakeoutSignsData] =
    useState<SubCategoryCommonTypes | null>(null);

  useEffect(() => {
    const getDeliveryTakeoutSignsData = async () => {
      const data = await fetchDeliveryTakeoutSignsData();
      if (data) {
        setDeliveryTakeoutSignsData(data);
      }
    };

    getDeliveryTakeoutSignsData();
  }, []);

  const memoizedData = useMemo(
    () => deliveryTakeoutSignsData,
    [deliveryTakeoutSignsData]
  );
  const navigate = useNavigate();

  return (
    <div>
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        <ImageWithSEO
          src={DELIVERY_TAKOUT_SIGNS_IMAGE.src}
          alt={DELIVERY_TAKOUT_SIGNS_IMAGE.alt}
          title={DELIVERY_TAKOUT_SIGNS_IMAGE.title}
          geoData={DELIVERY_TAKOUT_SIGNS_IMAGE.geoData}
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
