import {
  DoubleCardContainer,
  RequestQuoteBGImage,
  SendFileBGImage,
  RequsetQuoteBGHalf,
  RequsetQuoteTitle,
  SendFileTitle,
} from "../style/HomeStyles";

import HALF_DARK from "../assets/icon/home/doublecard/DARK_HALF_CIRCLE.svg";
import HALF_LIGHT from "../assets/icon/home/doublecard/LIGHT_HALF_CIRCLE.svg";

export default function DoubleCards() {
  return (
    <DoubleCardContainer>
      <RequestQuoteBGImage>
        <RequsetQuoteBGHalf src={HALF_DARK} alt="HALF_DARK" />
        <RequsetQuoteTitle>Request a Quote</RequsetQuoteTitle>
      </RequestQuoteBGImage>
      <SendFileBGImage>
        <RequsetQuoteBGHalf src={HALF_LIGHT} alt="HALF_LIGHT" />
        <SendFileTitle>Send a File</SendFileTitle>
      </SendFileBGImage>
    </DoubleCardContainer>
  );
}
