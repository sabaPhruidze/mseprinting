import React, { useState, useEffect } from "react";
import styled from "styled-components";
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

import {
  SignsData,
  PrintingAndCopyingData,
  TradeshowsAndEventsData,
  IndustrySpecificData,
  LabelsAndPackagingData,
  BlogAndPoliciesData,
} from "../data/FooterData";

import FACEBOOK from "../assets/icon/footer/social/FACEBOOK.svg";
import INSTAGRAM from "../assets/icon/footer/social/INSTAGRAM.svg";
import XTWITTER from "../assets/icon/footer/social/XTWITTER.svg";
import LINKEDIN from "../assets/icon/footer/social/LINKEDIN.svg";

export default function Footer() {
  const [productsAboutData, setProductsAboutData] = useState([
    {
      Title: "Sign",
      Context: SignsData,
    },
    {
      Title: "Labels & Packaging",
      Context: LabelsAndPackagingData,
    },
    {
      Title: "Tradeshows & Events",
      Context: TradeshowsAndEventsData,
    },
    {
      Title: "Industry Specific",
      Context: IndustrySpecificData,
    },
    {
      Title: "Printing & Copying",
      Context: PrintingAndCopyingData,
    },
  ]);

  const ICON_DATA = [FACEBOOK, INSTAGRAM, XTWITTER, LINKEDIN];

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let updatedData = [
        {
          Title: "Sign",
          Context: SignsData,
        },
        {
          Title: "Labels & Packaging",
          Context: LabelsAndPackagingData,
        },
        {
          Title: "Tradeshows & Events",
          Context: TradeshowsAndEventsData,
        },
        {
          Title: "Industry Specific",
          Context: IndustrySpecificData,
        },
        {
          Title: "Printing & Copying",
          Context: PrintingAndCopyingData,
        },
      ];

      if (screenWidth < 1480) {
        updatedData = updatedData.filter(
          (item) => item.Title !== "Printing & Copying"
        );
      }
      if (screenWidth < 1150) {
        updatedData = updatedData.filter(
          (item) => item.Title !== "Industry Specific"
        );
      }
      if (screenWidth < 878) {
        updatedData = updatedData.filter(
          (item) => item.Title !== "Tradeshows & Events"
        );
      }
      if (screenWidth < 600) {
        updatedData = updatedData.filter(
          (item) => item.Title !== "Labels & Packaging"
        );
      }

      setProductsAboutData(updatedData);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially to set the right state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          {productsAboutData.map((data) => (
            <ProductsAboutUsCont key={data.Title}>
              <ProductsAboutUsColumn>
                <ColumnTitle>{data.Title}</ColumnTitle>
                {data.Context.map((context) => (
                  <ColumnContext key={context}>{context}</ColumnContext>
                ))}
              </ProductsAboutUsColumn>
              {data.Title !==
              productsAboutData[productsAboutData.length - 1].Title ? (
                <VerticalLine />
              ) : (
                ""
              )}
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
            <TermsConditionsLink key={data}>
              {data} {data !== "Terms & Conditions" ? "|" : ""}
            </TermsConditionsLink>
          ))}
        </TermsConditionsLinks>
      </TermsConditionsBox>
    </FooterContainer>
  );
}
