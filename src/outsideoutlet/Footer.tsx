import { useState, useEffect, useCallback, useMemo } from "react";
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
  ProductsAboutContainer,
} from "../style/FooterStyles";

import { BlogAndPoliciesData } from "../data/FooterData";
import { fetchHomeServicesDatas } from "../data/ProductsServicesContainerData";
import { HomeServicesFullDatasType } from "../types/DataTypes";

import FACEBOOK from "../assets/icon/footer/social/FACEBOOK.svg";
import INSTAGRAM from "../assets/icon/footer/social/INSTAGRAM.svg";
import XTWITTER from "../assets/icon/footer/social/XTWITTER.svg";
import LINKEDIN from "../assets/icon/footer/social/LINKEDIN.svg";

import NavigateAndScroll from "../importantparts/NavigateAndScroll"; // Adjust the import path as necessary

export default function Footer() {
  const [footerData, setFooterData] =
    useState<HomeServicesFullDatasType | null>(null);
  const [filteredFooterData, setFilteredFooterData] = useState<string[]>([]);

  const ICON_DATA = useMemo(
    () => [FACEBOOK, INSTAGRAM, XTWITTER, LINKEDIN],
    []
  );

  const LINK_DATA = useMemo(
    () => [
      "https://www.facebook.com/MSEGRAPHICS",
      "https://www.instagram.com/",
      "https://twitter.com/",
      "https://www.linkedin.com/",
    ],
    []
  );

  useEffect(() => {
    const getFooterFullData = async () => {
      const data = await fetchHomeServicesDatas();
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

    if (screenWidth < 700) {
      filteredData = data.filter((item) => item === "Printing & Copying");
    } else if (screenWidth < 1000) {
      filteredData = data.filter((item) =>
        ["Printing & Copying", "Direct Mail & Mailing Services"].includes(item)
      );
    } else if (screenWidth < 1350) {
      filteredData = data.filter((item) =>
        [
          "Printing & Copying",
          "Direct Mail & Mailing Services",
          "Signs",
        ].includes(item)
      );
    } else if (screenWidth < 1700) {
      filteredData = data.filter((item) =>
        [
          "Printing & Copying",
          "Direct Mail & Mailing Services",
          "Tradeshows & Events",
          "Industry Specific",
        ].includes(item)
      );
    } else if (screenWidth < 1680) {
      filteredData = data.filter((item) =>
        [
          "Printing & Copying",
          "Direct Mail & Mailing Services",
          "Tradeshows & Events",
          "Industry Specific",
          "Signs",
        ].includes(item)
      );
    } else if (screenWidth < 2100) {
      filteredData = data.filter((item) =>
        [
          "Printing & Copying",
          "Direct Mail & Mailing Services",
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
          "Direct Mail & Mailing Services",
          "Labels & Packaging",
          "Tradeshows & Events",
          "Industry Specific",
          "Signs",
          "Tradeshows & Events",
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
          {ICON_DATA.map((icon, index) => (
            <a
              href={LINK_DATA[index]}
              target="_blank"
              rel="noopener noreferrer"
              key={icon}
            >
              <Icon src={icon} alt={`social-icon-${index}`} />
            </a>
          ))}
        </Icons>
      </DividingLineBox>
      <ProductsAboutContainer>
        <ProductsAboutUsBox>
          {filteredFooterData.map((data, index) => (
            <ProductsAboutUsCont key={data}>
              <ProductsAboutUsColumn>
                <ColumnTitle>{data}</ColumnTitle>
                {getRightSideData(data).map((context) => (
                  <ColumnContext key={context.title}>
                    <NavigateAndScroll path={context.link}>
                      {context.title}
                    </NavigateAndScroll>
                  </ColumnContext>
                ))}
              </ProductsAboutUsColumn>
              {index < filteredFooterData.length - 1 && <VerticalLine />}
            </ProductsAboutUsCont>
          ))}
        </ProductsAboutUsBox>
      </ProductsAboutContainer>
      <TermsConditionsBox>
        <Address
          href="https://www.google.com/maps/place/Highlight+Printing/@-37.7148319,144.8896027,18.5z/data=!4m6!3m5!1s0x6ad65bea297b0ba7:0xa72aaac9642bf35d!8m2!3d-37.714703!4d144.889527!16s%2Fg%2F1vppsnqj?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          3839 Washington Ave N Ste 101, Minneapolis, MN 55412
        </Address>
        <TermsConditionsLinks>
          {BlogAndPoliciesData.map((data) => (
            <TermsConditionsLink key={data.name}>
              <NavigateAndScroll path={data.link}>
                {data.name} {data.name !== "Environmental Message" ? "|" : ""}
              </NavigateAndScroll>
            </TermsConditionsLink>
          ))}
        </TermsConditionsLinks>
      </TermsConditionsBox>
    </FooterContainer>
  );
}
