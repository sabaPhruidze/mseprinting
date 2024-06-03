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
  const ICON_DATA = [FACEBOOK, INSTAGRAM, XTWITTER, LINKEDIN];

  const ProductsAboutData = [
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
          {ProductsAboutData.map((data) => (
            <ProductsAboutUsCont key={data.Title}>
              <ProductsAboutUsColumn>
                <ColumnTitle>{data.Title}</ColumnTitle>
                {data.Context.map((context) => (
                  <ColumnContext key={context}>{context}</ColumnContext>
                ))}
              </ProductsAboutUsColumn>
              {data.Title !== "Printing & Copying" ? <VerticalLine /> : ""}
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
          {BlogAndPoliciesData.map((data: string) => (
            <TermsConditionsLink key={data}>
              {data} {data !== "Terms & Conditions" ? "|" : ""}
            </TermsConditionsLink>
          ))}
        </TermsConditionsLinks>
      </TermsConditionsBox>
    </FooterContainer>
  );
}
