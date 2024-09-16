import { useState, useCallback, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCarouselData } from "../data/CarouselData";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  CarouselControl,
  CarouselContainer,
  CarouselIcon,
  CarouselTitle,
  CarouselButton,
  CarouselOverlay,
} from "../style/HomeStyles";
import { GlobalMainContent } from "../style/GlobalStyle";
import "../style/CustomCarousel.css";
import ImageWithSEO from "./ImageWithCEO";
import { CAROUSEL_DATA } from "../data/CarouselData";
import { CarouselType } from "../types/DataTypes";

export default function CarouselComponent() {
  const [index, setIndex] = useState(0);
  const [carouselMainData, setCarouselMainData] = useState<CarouselType[]>([]);
  const navigate = useNavigate();

  const handleSelect = useCallback((selectedIndex: number) => {
    setIndex(selectedIndex);
  }, []);

  const handlePrev = useCallback(() => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, []);

  const handleNext = useCallback(() => {
    setIndex((prevIndex) =>
      Math.min(prevIndex + 1, carouselMainData.length - 1)
    );
  }, [carouselMainData.length]);

  useEffect(() => {
    const getCarouselData = async () => {
      const data = await fetchCarouselData();
      if (data && data.length > 0) {
        setCarouselMainData(data);
      }
    };

    getCarouselData();
  }, []);

  const carouselItems = useMemo(
    () =>
      carouselMainData.length > 0
        ? carouselMainData.map((data, idx) => (
            <Carousel.Item key={idx}>
              <CarouselContainer>
                <ImageWithSEO
                  src={CAROUSEL_DATA[idx].src} // Correctly accessing the image source
                  alt={data.alt} // Fetched from the API
                  title={data.title} // Fetched from the API
                  loading={idx < 2 ? "eager" : "lazy"} // Eager loading for the first two images, lazy for others
                />
                <CarouselOverlay />
                <Carousel.Caption className="custom-carousel-caption">
                  {data.text && (
                    <GlobalMainContent>{data.text}</GlobalMainContent>
                  )}
                  {data.link && (
                    <CarouselButton onClick={() => navigate(data.link)}>
                      Learn more ...
                    </CarouselButton>
                  )}
                  <CarouselTitle>{data.title}</CarouselTitle>
                </Carousel.Caption>
              </CarouselContainer>
            </Carousel.Item>
          ))
        : CAROUSEL_DATA.map((imageData, idx) => (
            <Carousel.Item key={idx}>
              <CarouselContainer>
                <ImageWithSEO
                  src={imageData.src} // Correctly accessing the image source
                  alt={imageData.alt || `Image ${idx + 1}`} // Fallback alt text
                  title={imageData.title || `Image ${idx + 1}`} // Fallback title
                  loading={idx < 2 ? "eager" : "lazy"} // Eager loading for the first two images, lazy for others
                />
                <CarouselOverlay />
              </CarouselContainer>
            </Carousel.Item>
          )),
    [carouselMainData, navigate]
  );

  return (
    <div style={{ position: "relative" }}>
      <Carousel activeIndex={index} onSelect={handleSelect} fade>
        {carouselItems}
      </Carousel>
      <CarouselControl
        className={`left ${index === 0 && "disabled"}`}
        onClick={handlePrev}
      >
        <CarouselIcon
          className="carousel-control-prev-icon"
          style={{ display: "flex" }}
        />
      </CarouselControl>
      <CarouselControl
        className={`right ${
          index === carouselMainData.length - 1 && "disabled"
        }`}
        onClick={handleNext}
      >
        <CarouselIcon
          className="carousel-control-next-icon"
          style={{ display: "flex" }}
        />
      </CarouselControl>
    </div>
  );
}
