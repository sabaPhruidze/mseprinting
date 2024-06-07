import { useMemo } from "react";
import WWDCCard from "./WWDCCard";
import {
  WWDCContainer,
  WWDCCSpecialitiesContainers,
  WWDCTitle,
  WWDCParagraph,
} from "../style/HomeStyles";

export default function WhatWeDoCards() {
  const specialitiesContent = useMemo(
    () => (
      <>
        <WWDCTitle>OUR SPECIALTIES</WWDCTitle>
        <WWDCParagraph>
          For exceptional printing of banners, posters, business cards,
          stationery, or invitations, we’ve got you covered.
          &nbsp;&nbsp;&nbsp;Trust mseprinting for the high-quality products and
          professional service your business deserves. Partner with us for
          outstanding results.
        </WWDCParagraph>
      </>
    ),
    []
  );

  return (
    <WWDCContainer>
      <WWDCCSpecialitiesContainers>
        {specialitiesContent}
      </WWDCCSpecialitiesContainers>
      <div>
        <WWDCCard />
      </div>
    </WWDCContainer>
  );
}
