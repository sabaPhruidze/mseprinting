import { useState, useCallback, useMemo, useEffect } from "react";
import { fetchCarouselData, CarouselData } from "../data/CarouselData";
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

export default function CarouselComponent() {
  const [index, setIndex] = useState(0);
  const [carouselMainData, setCarouselMainData] = useState<CarouselData[]>([]);

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
            />
            <CarouselOverlay />
            <Carousel.Caption className="custom-carousel-caption">
              <CarouselTitle>{data.title}</CarouselTitle>
              <CarouselContent>{data.text}</CarouselContent>
              <CarouselButton>Learn more ...</CarouselButton>
            </Carousel.Caption>
          </CarouselContainer>
        </Carousel.Item>
      )),
    [carouselMainData]
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
