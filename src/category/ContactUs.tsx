import React, { useEffect, useState } from "react";
import HelmetComponent from "../importantparts/Helmet"; // Import HelmetComponent for SEO
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
  GlobalMainTitle,
  Globalh2Title,
  GlobalMainContentContactUs,
  GlobalTextContainer,
} from "../style/GlobalStyle";

import { ContactUsDocument } from "../types/DataTypes";
import { fetchContactUsData } from "../data/sub-category data/AllSubCategoryData";

const ContactUs: React.FC = () => {
  const [ContactUsData, setContactUsData] = useState<ContactUsDocument | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchContactUsData();
      setContactUsData(data);
    };
    fetchData();
  }, []);

  return (
    ContactUsData && (
      <GlobalContainerColumn>
        {/* HelmetComponent for SEO */}
        <HelmetComponent
          title="Contact Us | MSE Printing"
          description="Get in touch with MSE Printing for inquiries, quotes, and assistance with your printing and marketing needs. Find our contact details and location here."
        />
        <GlobalTextContainer>
          <GlobalBoxColumnStart>
            <GlobalMainTitle>{ContactUsData.one.title}</GlobalMainTitle>
            {Array.isArray(ContactUsData.one.content) &&
              ContactUsData.one.content.map((text: any, index: number) => (
                <GlobalMainContentContactUs key={index}>
                  {text}
                </GlobalMainContentContactUs>
              ))}
          </GlobalBoxColumnStart>

          {ContactUsData.two.map((section, index) => (
            <GlobalBoxColumnStart key={index}>
              <Globalh2Title>{section.title}</Globalh2Title>
              {Array.isArray(section.content) &&
                section.content.map((text: any, subIndex: number) => (
                  <GlobalMainContentContactUs key={subIndex}>
                    {text}
                  </GlobalMainContentContactUs>
                ))}
            </GlobalBoxColumnStart>
          ))}
        </GlobalTextContainer>
      </GlobalContainerColumn>
    )
  );
};

export default ContactUs;
