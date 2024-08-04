import { useState, useCallback, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCarouselData } from "../data/CarouselData";
import { CarouselType } from "../types/DataTypes";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  CarouselControl,
  CarouselContainer,
  CarouselImg,
  CarouselIcon,
  CarouselTitle,
  CarouselContent,
  CarouselButton,
  CarouselOverlay,
} from "../style/HomeStyles";
import "../style/CustomCarousel.css";

const prefetchImage = (url: string) => {
  const img = new Image();
  img.src = url;
};

export default function CarouselComponent() {
  const [index, setIndex] = useState(0);
  const [carouselMainData, setCarouselMainData] = useState<CarouselType[]>([]);
  const navigate = useNavigate();

  const handleSelect = useCallback((selectedIndex: number) => {
    setIndex(selectedIndex);
  }, []);

  const handlePrev = useCallback(() => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  }, []);

  const handleNext = useCallback(() => {
    setIndex((prevIndex) =>
      prevIndex < carouselMainData.length - 1 ? prevIndex + 1 : prevIndex
    );
  }, [carouselMainData.length]);

  useEffect(() => {
    const getCarouselData = async () => {
      const data = await fetchCarouselData();

      if (data && data.length > 0) {
        setCarouselMainData(data);
        data.forEach((item) => prefetchImage(item.image));
      }
    };

    getCarouselData();
  }, []);

  const carouselItems = useMemo(
    () =>
      carouselMainData.map((data, idx) => (
        <Carousel.Item key={idx}>
          <CarouselContainer>
            <CarouselImg
              className="d-block w-100"
              src={data.image}
              alt={data.alt}
              loading="lazy"
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
