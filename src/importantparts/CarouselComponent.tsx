import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselData from "../data/CarouselData";
import {
  CarouselControl,
  CarouselImg,
  CarouselIcon,
  CarouselTitle,
  CarouselContent,
  CarouselButton,
  CarouselOverlay,
} from "../style/HomeStyles";
import "../style/CustomCarousel.css";

export default function CarouselComponent() {
  const carouselData = CarouselData();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index < carouselData.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Carousel activeIndex={index} onSelect={handleSelect} fade>
        {carouselData.map((data, idx) => (
          <Carousel.Item key={idx}>
            <div style={{ position: "relative", width: "100%", height: 600 }}>
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
            </div>
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
