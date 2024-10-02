import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  GlobalContainerColumn,
  GlobalPart,
  GlobalTextContainer,
  FullBackgroundContainerZERO,
  TitleAndButtonContainer,
  FullScreenTitle,
  FullScreenButton,
  GlobalMainContent,
} from "../../style/GlobalStyle";
import { fetchBookPrintingData } from "../../data/sub-category data/AllSubCategoryData";
import { CommonDocumentWAS } from "../../types/DataTypes";
import ImageWithSEO from "../../importantparts/ImageWithCEO";
import { BOOK_PRINTING_IMAGE } from "../../data/sub-category data/ImageWithCEOData";

export default function BookPrinting() {
  const [bookPrintingData, setBookPrintingData] =
    useState<CommonDocumentWAS | null>(null);

  useEffect(() => {
    const getBookPrintingData = async () => {
      const data = await fetchBookPrintingData();
      if (data) {
        setBookPrintingData(data);
      }
    };

    getBookPrintingData();
  }, []);

  const memoizedData = useMemo(() => bookPrintingData, [bookPrintingData]);
  const navigate = useNavigate();

  return (
    <div>
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        <ImageWithSEO
          src={BOOK_PRINTING_IMAGE.src}
          alt={BOOK_PRINTING_IMAGE.alt}
          title={BOOK_PRINTING_IMAGE.title}
          geoData={BOOK_PRINTING_IMAGE.geoData}
          loading="eager"
        />
        <TitleAndButtonContainer>
          <FullScreenTitle>{memoizedData?.front?.title}</FullScreenTitle>
          <GlobalMainContent>{memoizedData?.front?.content}</GlobalMainContent>
          <FullScreenButton
            onClick={() => {
              navigate("/request-quote");
            }}
          >
            {memoizedData?.front?.button}
          </FullScreenButton>
        </TitleAndButtonContainer>
      </FullBackgroundContainerZERO>

      <GlobalContainerColumn>
        <GlobalTextContainer>
          {memoizedData?.two.map((item, index) => (
            <GlobalPart key={index}>{item}</GlobalPart>
          ))}
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
