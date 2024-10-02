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
import { fetchApparelUniformsData } from "../../data/sub-category data/AllSubCategoryData";
import { CommonDocumentWAS } from "../../types/DataTypes";
import ImageWithSEO from "../../importantparts/ImageWithCEO";
import { APPAREL_UNIFORMS_IMAGE } from "../../data/sub-category data/ImageWithCEOData";

export default function ApparelUniforms() {
  const [apparelUniformsData, setApparelUniformsData] =
    useState<CommonDocumentWAS | null>(null);

  useEffect(() => {
    const getApparelUniformsData = async () => {
      const data = await fetchApparelUniformsData();
      if (data) {
        setApparelUniformsData(data);
      }
    };

    getApparelUniformsData();
  }, []);

  const memoizedData = useMemo(
    () => apparelUniformsData,
    [apparelUniformsData]
  );
  const navigate = useNavigate();

  return (
    <div>
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        <ImageWithSEO
          src={APPAREL_UNIFORMS_IMAGE.src}
          alt={APPAREL_UNIFORMS_IMAGE.alt}
          title={APPAREL_UNIFORMS_IMAGE.title}
          geoData={APPAREL_UNIFORMS_IMAGE.geoData}
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
