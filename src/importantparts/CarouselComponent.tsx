import { useState, useCallback, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCarouselData } from "../data/CarouselData";
import { CarouselType } from "../types/DataTypes";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  CarouselControl,
  CarouselContainer,
  CarouselIcon,
  CarouselTitle,
  CarouselContent,
  CarouselButton,
  CarouselOverlay,
} from "../style/HomeStyles";
import "../style/CustomCarousel.css";
import ImageWithSEO from "./ImageWithCEO";

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
        // Prefetch images individually within the useEffect
        data.forEach((item) => {
          const img = new Image();
          img.src = item.image;
          img.loading = "eager";
          img.decoding = "sync";
        });
      }
    };

    getCarouselData();
  }, []);

  const carouselItems = useMemo(
    () =>
      carouselMainData.map((data, idx) => (
        <Carousel.Item key={idx}>
          <CarouselContainer>
            <ImageWithSEO
              src={data.image}
              alt={data.alt}
              title={data.title}
              geoData={{
                latitude: "45.02524",
                longitude: "-93.28393",
                location: "Minneapolis, MN, USA",
              }}
              loading="eager"
            />
            <CarouselOverlay />
            <Carousel.Caption className="custom-carousel-caption">
              <CarouselTitle>{data.title}</CarouselTitle>
              <CarouselContent>{data.text}</CarouselContent>
              <CarouselButton onClick={() => navigate(data.link)}>
                Learn more ...
              </CarouselButton>
            </Carousel.Caption>
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
