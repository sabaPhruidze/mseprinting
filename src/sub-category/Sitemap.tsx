import { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  SMContainer,
  SMHeader,
  SMList,
  SMItem,
  NestedList,
} from "../style/SitemapStyles";
import { fetchHomeServicesDatas } from "../data/ProductsServicesContainerData";
import { HomeServicesFullDatasType } from "../types/DataTypes";

const Sitemap = () => {
  const navigate = useNavigate();
  const [servicesData, setServicesData] =
    useState<HomeServicesFullDatasType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHomeServicesDatas();
      if (data) {
        setServicesData(data);
      }
    };
    fetchData();
  }, []);

  const leftSideItems = useMemo(() => {
    return servicesData?.left || [];
  }, [servicesData]);

  const getNestedData = useCallback(
    (hoveredItem: string) => {
      if (!servicesData) return [];

      switch (hoveredItem) {
        case "Printing & Copying":
          return servicesData.PrintingAndCopying || [];
        case "Direct Mail & Mailing Services":
          return servicesData.DirectMailAndMailingServices || [];
        case "Signs":
          return servicesData.Signs || [];
        case "Labels & Packaging":
          return servicesData.LabelsAndPackaging || [];
        case "Marketing Services":
          return servicesData.MarketingServices || [];
        case "Tradeshows & Events":
          return servicesData.TradeshowsAndEvents || [];
        case "Fulfillment Services":
          return servicesData.FulfillmentServices || [];
        case "Industry Specific":
          return servicesData.IndustrySpecific || [];
        default:
          return [];
      }
    },
    [servicesData]
  );

  return (
    <SMContainer>
      <SMHeader>SITEMAP</SMHeader>
      <SMList>
        {/* Main Navigation */}
        <SMItem $level={1} onClick={() => navigate("/")}>
          Home
        </SMItem>
        <SMItem $level={1} onClick={() => navigate("/about-us")}>
          About Us
        </SMItem>
        <SMItem $level={1} onClick={() => navigate("/ContactUs")}>
          ContactUs
        </SMItem>
        <SMItem $level={1} onClick={() => navigate("/request-quote")}>
          Request a Quote
        </SMItem>
        <SMItem $level={1} onClick={() => navigate("/send-file")}>
          Place an Order
        </SMItem>

        {/* Dynamic Sections */}
        {leftSideItems.map((category, index) => {
          const categoryPath = `/${category
            .toLowerCase()
            .replace(/ & /g, "-")
            .replace(/\s/g, "-")}`;

          return (
            <NestedList key={index}>
              <SMItem $level={2} onClick={() => navigate(categoryPath)}>
                {category}
              </SMItem>
              <NestedList>
                {getNestedData(category).map((item, idx) => {
                  const itemPath = item.link?.startsWith("/")
                    ? item.link // Use link as-is if it already starts with "/"
                    : `/${item.link}`; // Add "/" if missing

                  return (
                    <SMItem
                      key={idx}
                      $level={3}
                      onClick={() => navigate(itemPath)}
                    >
                      {item.title}
                    </SMItem>
                  );
                })}
              </NestedList>
            </NestedList>
          );
        })}

        {/* Static Pages */}
        <SMItem $level={1} onClick={() => navigate("/accessibility")}>
          Accessibility
        </SMItem>
        <SMItem $level={1} onClick={() => navigate("/blog")}>
          Blog
        </SMItem>
        <SMItem $level={1} onClick={() => navigate("/privacy-policy")}>
          Privacy Policy
        </SMItem>
        <SMItem $level={1} onClick={() => navigate("/terms-conditions")}>
          Terms & Conditions
        </SMItem>
        <SMItem $level={1} onClick={() => navigate("/eoe-diversity")}>
          EOE & Diversity
        </SMItem>
        <SMItem $level={1} onClick={() => navigate("/environmental-message")}>
          Environmental Message
        </SMItem>
      </SMList>
    </SMContainer>
  );
};

export default Sitemap;
