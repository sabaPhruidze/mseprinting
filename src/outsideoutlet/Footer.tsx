import {
  FooterContainer,
  DividingLineBox,
  ProductsAboutUsBox,
  TermsConditionsBox,
  Icons,
  Icon,
  Quote,
} from "../style/FooterStyles";

import FACEBOOK from "../assets/icon/footer/social/FACEBOOK.svg";
import INSTAGRAM from "../assets/icon/footer/social/INSTAGRAM.svg";
import XTWITTER from "../assets/icon/footer/social/XTWITTER.svg";
import LINKEDIN from "../assets/icon/footer/social/LINKEDIN.svg";

export default function Footer() {
  const ICON_DATA = [FACEBOOK, INSTAGRAM, XTWITTER, LINKEDIN];
  return (
    <FooterContainer>
      <DividingLineBox>
        <Quote>MSE Printing: Trusted Excellence in Every Print</Quote>
        <Icons>
          {ICON_DATA.map((icon) => (
            <Icon src={icon} alt={icon} key={icon} />
          ))}
        </Icons>
      </DividingLineBox>
      <ProductsAboutUsBox></ProductsAboutUsBox>
      <TermsConditionsBox></TermsConditionsBox>
    </FooterContainer>
  );
}
