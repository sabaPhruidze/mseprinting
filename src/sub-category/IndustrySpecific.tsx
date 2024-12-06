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
import HelmetComponent from "../importantparts/Helmet"; // Import HelmetComponent for SEO
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

// Map for each data-fetching function, image data, and SEO metadata
const fetchDataMap: Record<
  string,
  {
    fetchData: () => Promise<SubCategoryCommonTypes | null>;
    image: any;
    title: string; // SEO title
    description: string; // SEO description
    canonical: string; // Canonical URL
  }
> = {
  education: {
    fetchData: fetchEducationData,
    image: EDUCATION_IMAGE_DATA,
    title: "Education Solutions | MSE Printing",
    description:
      "Tailored printing and marketing solutions for educational institutions by MSE Printing.",
    canonical: "https://www.mseprinting.com/industry-specific/education",
  },
  finance: {
    fetchData: fetchFinanceData,
    image: FINANCE_IMAGE_DATA,
    title: "Finance Industry Printing | MSE Printing",
    description:
      "Professional printing services designed for the finance sector, enhancing trust and communication.",
    canonical: "https://www.mseprinting.com/industry-specific/finance",
  },
  healthcare: {
    fetchData: fetchHealthCareData,
    image: HEALF_CARE_IMAGE_DATA,
    title: "Healthcare Printing Solutions | MSE Printing",
    description:
      "Reliable printing solutions for healthcare providers, supporting communication and patient care.",
    canonical: "https://www.mseprinting.com/industry-specific/healthcare",
  },
  legal: {
    fetchData: fetchLegalData,
    image: LEGAL_IMAGE_DATA,
    title: "Legal Industry Printing | MSE Printing",
    description:
      "Secure and professional printing services tailored for the legal industry by MSE Printing.",
    canonical: "https://www.mseprinting.com/industry-specific/legal",
  },
  manufacturing: {
    fetchData: fetchManufacturingData,
    image: MANUFACTURING_IMAGE_DATA,
    title: "Manufacturing Solutions | MSE Printing",
    description:
      "Customized printing and labeling solutions for the manufacturing industry by MSE Printing.",
    canonical: "https://www.mseprinting.com/industry-specific/manufacturing",
  },
  political: {
    fetchData: fetchPoliticalData,
    image: POLITICAL_IMAGE_DATA,
    title: "Political Campaign Printing | MSE Printing",
    description:
      "Effective printing solutions for political campaigns and advocacy by MSE Printing.",
    canonical: "https://www.mseprinting.com/industry-specific/political",
  },
  realestate: {
    fetchData: fetchRealEstateData,
    image: REAL_ESTATE_IMAGE_DATA,
    title: "Real Estate Printing Solutions | MSE Printing",
    description:
      "Promotional printing services for the real estate industry to showcase properties and listings.",
    canonical: "https://www.mseprinting.com/industry-specific/realestate",
  },
  restaurants: {
    fetchData: fetchRestaurantsData,
    image: RESTAURANT_IMAGE_DATA,
    title: "Restaurant Printing Services | MSE Printing",
    description:
      "Custom menus, signage, and more for restaurants by MSE Printing.",
    canonical: "https://www.mseprinting.com/industry-specific/restaurants",
  },
  retail: {
    fetchData: fetchRetailData,
    image: RETAIL_IMAGE_DATA,
    title: "Retail Industry Printing | MSE Printing",
    description:
      "Branding and promotional printing solutions for the retail industry by MSE Printing.",
    canonical: "https://www.mseprinting.com/industry-specific/retail",
  },
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
      {/* HelmetComponent for SEO */}
      {industryConfig && (
        <HelmetComponent
          title={industryConfig.title}
          description={industryConfig.description}
        />
      )}

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
