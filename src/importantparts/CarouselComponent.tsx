import { useState, useCallback, useMemo } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselData from "../data/CarouselData";
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
  const carouselData = useMemo(() => CarouselData(), []);
  const [index, setIndex] = useState(0);

  const handleSelect = useCallback((selectedIndex: number) => {
    setIndex(selectedIndex);
  }, []);

  const handlePrev = useCallback(() => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  }, []);

  const handleNext = useCallback(() => {
    setIndex((prevIndex) =>
      prevIndex < carouselData.length - 1 ? prevIndex + 1 : prevIndex
    );
  }, [carouselData.length]);

  return (
    <div style={{ position: "relative" }}>
      <Carousel activeIndex={index} onSelect={handleSelect} fade>
        {carouselData.map((data, idx) => (
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
        ))}
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
        className={`right ${index === carouselData.length - 1 && "disabled"}`}
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
