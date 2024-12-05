import { useContext, useMemo } from "react";
import { rootContext } from "../Root";
import CarouselComponent from "../importantparts/CarouselComponent";
import WhatWeDoCards from "../importantparts/WhatWeDoCards";
import HomeServices from "../importantparts/HomeServices";
import TwoButtons from "../importantparts/TwoButtons";
import SuccesfullySend from "../importantparts/SuccesfullySend";
import HelmetComponent from "../importantparts/Helmet"; // Import HelmetComponent for SEO
import {
  WhyUsSpecialContainer,
  WWDCTitle,
  WWDCParagraph,
} from "../style/HomeStyles";
export default function Home() {
  const context = useContext(rootContext);

  if (!context) {
    throw new Error("rootContext must be used within a Root provider");
  }

  const { state } = context;
  const { rqSSend } = useMemo(() => state, [state.rqSSend]);

  return (
    <div style={{ position: "relative" }}>
      {/* HelmetComponent for SEO */}
      <HelmetComponent
        title=" MSE Printing - Premium Printing & Marketing Solutions"
        description="Discover our wide range of high-quality printing, signage, and marketing solutions to elevate your brand."
      />
      <CarouselComponent />
      <WhatWeDoCards />
      <HomeServices />
      <TwoButtons />
      {rqSSend && <SuccesfullySend />}
      <WhyUsSpecialContainer>
        <WWDCTitle>Why us</WWDCTitle>
        <WWDCParagraph>
          Highlight Printing has been a trusted partner in the printing industry
          since 1985, offering unparalleled expertise and a commitment to
          excellence. As a locally owned business in Minneapolis, we stand out
          among the “Land of 10,000 Printers” with our decades of experience and
          a dedicated team of career graphics professionals. Each team member
          brings specialized knowledge and cross-departmental training to ensure
          every project is executed with precision and care. Our
          customer-centric approach sets us apart, focusing on understanding
          individual client preferences and providing a personalized experience
          tailored to specific requirements such as purchase orders, delivery
          instructions, and reordering needs. We pride ourselves on delivering
          top-quality results by leveraging the latest in printing technologies
          and design software, ensuring that every project meets the highest
          standards. Whether it’s a simple business card or a complex marketing
          campaign, our clients benefit from our innovation, efficiency, and
          attention to detail. Recognizing the importance of deadlines, we
          prioritize fast turnaround times without compromising on quality,
          making us a reliable choice for any printing need. By focusing on our
          clients’ unique objectives, marketing goals, and budget constraints,
          we deliver customized solutions that drive success and build long-term
          partnerships.
        </WWDCParagraph>
      </WhyUsSpecialContainer>
    </div>
  );
}
