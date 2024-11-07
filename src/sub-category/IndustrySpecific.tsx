import { useEffect, useState, useMemo, useCallback } from "react";
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
} from "../style/GlobalStyle";
import ImageWithSEO from "../importantparts/ImageWithCEO";
import { SubCategoryCommonTypes } from "../types/DataTypes";
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
} from "../data/sub-category data/AllSubCategoryData";
import {
  EDUCATION_IMAGE_DATA,
  FINANCE_IMAGE_DATA,
  HEALF_CARE_IMAGE_DATA,
  LEGAL_IMAGE_DATA,
  MANUFACTURING_IMAGE_DATA,
  POLITICAL_IMAGE_DATA,
  REAL_ESTATE_IMAGE_DATA,
  RESTAURANT_IMAGE_DATA,
  RETAIL_IMAGE_DATA,
} from "../data/sub-category data/ImageWithCEOData";

// Map for each data-fetching function and corresponding image data
const fetchDataMap: Record<
  string,
  { fetchData: () => Promise<SubCategoryCommonTypes | null>; image: any }
> = {
  education: { fetchData: fetchEducationData, image: EDUCATION_IMAGE_DATA },
  finance: { fetchData: fetchFinanceData, image: FINANCE_IMAGE_DATA },
  healthcare: { fetchData: fetchHealthCareData, image: HEALF_CARE_IMAGE_DATA },
  legal: { fetchData: fetchLegalData, image: LEGAL_IMAGE_DATA },
  manufacturing: {
    fetchData: fetchManufacturingData,
    image: MANUFACTURING_IMAGE_DATA,
  },
  political: { fetchData: fetchPoliticalData, image: POLITICAL_IMAGE_DATA },
  realestate: { fetchData: fetchRealEstateData, image: REAL_ESTATE_IMAGE_DATA },
  restaurants: {
    fetchData: fetchRestaurantsData,
    image: RESTAURANT_IMAGE_DATA,
  },
  retail: { fetchData: fetchRetailData, image: RETAIL_IMAGE_DATA },
};

export default function IndustrySpecific() {
  const location = useLocation();
  const navigate = useNavigate();
  const [industryData, setIndustryData] =
    useState<SubCategoryCommonTypes | null>(null);

  const industryKey = useMemo(
    () => location.pathname.split("/").pop()?.toLowerCase(),
    [location.pathname]
  );

  const industryConfig = useMemo(
    () => (industryKey ? fetchDataMap[industryKey] : null),
    [industryKey]
  );

  const getIndustryData = useCallback(async () => {
    if (industryConfig) {
      try {
        const data = await industryConfig.fetchData();
        setIndustryData(data);
      } catch (error) {
        console.error(
          `Error fetching data for industry: ${industryKey}`,
          error
        );
      }
    }
  }, [industryConfig, industryKey]);

  useEffect(() => {
    getIndustryData();
  }, [getIndustryData]);

  const memoizedData = useMemo(() => industryData, [industryData]);

  return (
    <div>
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        {industryConfig && (
          <ImageWithSEO
            src={industryConfig.image.src}
            alt={industryConfig.image.alt}
            title={industryConfig.image.title}
            geoData={industryConfig.image.geoData}
            loading="eager"
          />
        )}
        <TitleAndButtonContainer>
          <FullScreenTitle>
            {memoizedData?.one?.title || "Default Title"}
          </FullScreenTitle>
          <GlobalMainContent>
            {memoizedData?.one?.content || "Content unavailable."}
          </GlobalMainContent>
          <FullScreenButton onClick={() => navigate("/request-quote")}>
            {memoizedData?.one?.button || "Request a Quote"}
          </FullScreenButton>
        </TitleAndButtonContainer>
      </FullBackgroundContainerZERO>

      <GlobalContainerColumn>
        <GlobalTextContainer>
          {memoizedData?.two ? (
            memoizedData.two.map((item, index) => (
              <GlobalPart key={index}>{item}</GlobalPart>
            ))
          ) : (
            <p>Additional information is unavailable.</p>
          )}
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
