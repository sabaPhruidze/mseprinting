import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselData from "./CarouselData";

export default function CarouselComponent() {
  const carouselData = CarouselData();
  return (
    <Carousel fade>
      {carouselData.map((data, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={data.image}
            alt={data.alt}
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>{data.title}</h3>
            <p>{data.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
