import Carousel from "react-bootstrap/Carousel";
import Banner from "../assets/icon/MSE Graphics.svg";
import Banner1 from "../assets/icon/MSE Graphics.svg";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CarouselComponent() {
  const caruselData = [
    {
      image: Banner,
      alt: "First Slide",
      title: "Zotac",
      text: "Graphics cards, mini PCs, and other gaming and computing devices.",
    },
    {
      image: Banner1,
      alt: "Second Slide",
      title: "Patriot Memory",
      text: "Computer memory modules and solid-state drives (SSDs)",
    },
  ];

  return (
    <Carousel fade>
      {caruselData.map((data, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={data.image}
            alt={data.alt}
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
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
