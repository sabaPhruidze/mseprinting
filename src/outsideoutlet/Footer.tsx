import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  FooterContainer,
  DividingLineBox,
  ProductsAboutUsBox,
  TermsConditionsBox,
  Icons,
  Icon,
  Quote,
  ProductsAboutUsColumn,
  ColumnTitle,
  ColumnContext,
  VerticalLine,
  ProductsAboutUsCont,
  TermsConditionsLinks,
  Address,
  TermsConditionsLink,
  HorzontalLine,
  ProductsAboutContainer,
} from "../style/FooterStyles";

import { BlogAndPoliciesData } from "../data/FooterData";
import { fetchHomeServicesData } from "../data/ProductsServicesContainerData";
import { HomeServicesFullType } from "../types/DataTypes";

import FACEBOOK from "../assets/icon/footer/social/FACEBOOK.svg";
import INSTAGRAM from "../assets/icon/footer/social/INSTAGRAM.svg";
import XTWITTER from "../assets/icon/footer/social/XTWITTER.svg";
import LINKEDIN from "../assets/icon/footer/social/LINKEDIN.svg";

export default function Footer() {
  const navigate = useNavigate();
  const [footerData, setFooterData] = useState<HomeServicesFullType | null>(
    null
  );
  const [filteredFooterData, setFilteredFooterData] = useState<string[]>([]);

  const ICON_DATA = useMemo(
    () => [FACEBOOK, INSTAGRAM, XTWITTER, LINKEDIN],
    []
  );

  useEffect(() => {
    const getFooterFullData = async () => {
      const data = await fetchHomeServicesData();
      if (data && data.left && data.left.length > 0) {
        setFooterData(data);
        filterFooterData(data.left);
      }
    };
    getFooterFullData();
  }, []);

  const filterFooterData = useCallback((data: string[]) => {
    const screenWidth = window.innerWidth;
    let filteredData = data;

    if (screenWidth < 650) {
      filteredData = data.filter((item) => item === "Printing & Copying");
    } else if (screenWidth < 900) {
      filteredData = data.filter((item) =>
        ["Printing & Copying", "Labels & Packaging"].includes(item)
      );
    } else if (screenWidth < 1150) {
      filteredData = data.filter((item) =>
        [
          "Printing & Copying",
          "Labels & Packaging",
          "Tradeshows & Events",
        ].includes(item)
      );
    } else if (screenWidth < 1450) {
      filteredData = data.filter((item) =>
        [
          "Printing & Copying",
          "Labels & Packaging",
          "Tradeshows & Events",
          "Industry Specific",
        ].includes(item)
      );
    } else if (screenWidth < 1680) {
      filteredData = data.filter((item) =>
        [
          "Printing & Copying",
          "Labels & Packaging",
          "Tradeshows & Events",
          "Industry Specific",
          "Signs",
        ].includes(item)
      );
    } else if (screenWidth < 2100) {
      filteredData = data.filter((item) =>
        [
          "Printing & Copying",
          "Labels & Packaging",
          "Tradeshows & Events",
          "Industry Specific",
          "Signs",
          "Tradeshows & Events",
        ].includes(item)
      );
    } else {
      filteredData = data.filter((item) =>
        [
          "Printing & Copying",
          "Labels & Packaging",
          "Tradeshows & Events",
          "Industry Specific",
          "Signs",
          "Tradeshows & Events",
          "Direct Mail & Mailing Services",
        ].includes(item)
      );
    }

    setFilteredFooterData(filteredData);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (footerData?.left) {
        filterFooterData(footerData.left);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially to set the right state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [footerData, filterFooterData]);

  const getRightSideData = useCallback(
    (title: string) => {
      if (!footerData) return [];

      switch (title) {
        case "Printing & Copying":
          return footerData.PrintingAndCopying || [];
        case "Direct Mail & Mailing Services":
          return footerData.DirectMailAndMailingServices || [];
        case "Signs":
          return footerData.Signs || [];
        case "Online Ordering Portals":
          return footerData.OnlineOrderingPortals
            ? [footerData.OnlineOrderingPortals]
            : [];
        case "Graphic Design":
          return footerData.GraphicDesign ? [footerData.GraphicDesign] : [];
        case "Labels & Packaging":
          return footerData.LabelsAndPackaging || [];
        case "Marketing Services":
          return footerData.MarketingServices || [];
        case "Tradeshows & Events":
          return footerData.TradeshowsAndEvents || [];
        case "Fulfillment Services":
          return footerData.FulfillmentServices || [];
        case "Industry Specific":
          return footerData.IndustrySpecific || [];
        default:
          return [];
      }
    },
    [footerData]
  );

  return (
    <FooterContainer>
      <DividingLineBox>
        <Quote>Trusted Excellence in Every Print</Quote>
        <Icons>
          {ICON_DATA.map((icon) => (
            <Icon src={icon} alt={icon} key={icon} />
          ))}
        </Icons>
      </DividingLineBox>
      <ProductsAboutContainer>
        <ProductsAboutUsBox>
          {filteredFooterData.map((data, index) => (
            <ProductsAboutUsCont key={data}>
              <ProductsAboutUsColumn>
                <ColumnTitle>{data}</ColumnTitle>
                {getRightSideData(data).map((context: string) => (
                  <ColumnContext key={context}>{context}</ColumnContext>
                ))}
              </ProductsAboutUsColumn>
              {index < filteredFooterData.length - 1 && <VerticalLine />}
            </ProductsAboutUsCont>
          ))}
        </ProductsAboutUsBox>
        <HorzontalLine />
      </ProductsAboutContainer>
      <TermsConditionsBox>
        <Address>
          © MSE Inc., 25 Fairmount Ave, East Providence, RI 02914, USA -
          Registered in the United States of America.
        </Address>
        <TermsConditionsLinks>
          {BlogAndPoliciesData.map((data) => (
            <TermsConditionsLink
              key={data.name}
              onClick={() => navigate(data.link)}
            >
              {data.name} {data.name !== "Environmental Message" ? "|" : ""}
            </TermsConditionsLink>
          ))}
        </TermsConditionsLinks>
      </TermsConditionsBox>
    </FooterContainer>
  );
}
