import { useEffect, useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import ImageWithSEO from "../../importantparts/ImageWithCEO";
import { ADA_WAYFINDING_SIGNS_IMAGE } from "../../data/sub-category data/ImageWithCEOData";
import { SubCategoryCommonTypes } from "../../types/DataTypes";
import {
  fetchEducationData,
  fetchFinanceData,
  fetchHealthCareData,
  fetchLegalData,
  fetchManufacturingData,
  fetchPoliticalData,
  fetchRealEstateData,
  fetchRestaurantsData,
  fetchRetailData,
} from "../../data/sub-category data/AllSubCategoryData";

const fetchDataMap: {
  [key: string]: () => Promise<SubCategoryCommonTypes | null>;
} = {
  education: fetchEducationData,
  finance: fetchFinanceData,
  healthcare: fetchHealthCareData,
  legal: fetchLegalData,
  manufacturing: fetchManufacturingData,
  political: fetchPoliticalData,
  realestate: fetchRealEstateData,
  restaurants: fetchRestaurantsData,
  retail: fetchRetailData,
};

export default function IndustrySpecific() {
  const location = useLocation();
  const [industryData, setIndustryData] =
    useState<SubCategoryCommonTypes | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const industryKey = location.pathname.split("/").pop()?.toLowerCase();
    const fetchData = industryKey ? fetchDataMap[industryKey] : null;

    const getIndustryData = async () => {
      if (fetchData) {
        try {
          const data = await fetchData();
          if (data) setIndustryData(data);
        } catch (error) {
          console.error(
            `Error fetching data for industry: ${industryKey}`,
            error
          );
        }
      }
    };

    getIndustryData();
  }, [location.pathname]);

  const memoizedData = useMemo(() => industryData, [industryData]);

  return (
    <div>
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        <ImageWithSEO
          src={ADA_WAYFINDING_SIGNS_IMAGE.src}
          alt={ADA_WAYFINDING_SIGNS_IMAGE.alt}
          title={ADA_WAYFINDING_SIGNS_IMAGE.title}
          geoData={ADA_WAYFINDING_SIGNS_IMAGE.geoData}
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
          {memoizedData?.two?.map((item, index) => (
            <GlobalPart key={index}>{item}</GlobalPart>
          ))}
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
