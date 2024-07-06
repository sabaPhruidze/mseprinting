import React, { useState } from "react";
import { Carousel, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { GlobalContainerColumn } from "../style/GlobalStyle";

const posts = [
  {
    title:
      "How Great Leave-Behinds Make Your Presentations Even More Effective",
    date: "Jul 02, 2024",
  },
  {
    title: "Boost Fundraising for Nonprofits",
    date: "Jun 25, 2024",
  },
  {
    title: "Elevate Your On-site Event with Marketing",
    date: "Jun 18, 2024",
  },
  {
    title: "Creating Your Brand Style Guide",
    date: "Jun 11, 2024",
  },
  {
    title: "New Post 5",
    date: "Jun 04, 2024",
  },
  {
    title: "New Post 6",
    date: "May 28, 2024",
  },
  {
    title: "New Post 7",
    date: "May 28, 2024",
  },
  {
    title: "New Post 8",
    date: "May 28, 2024",
  },
];

const Container = styled.div`
  position: relative;
  min-width: 100%;
  padding: 80px;
  @media (max-width: 1024px) {
    padding: 40px;
  }
  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const CarouselItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 300px;
`;

const StyledCard = styled(Card)`
  min-width: 23%;
  margin: 1%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  height: 100%;

  &:hover {
    transform: scale(1.05);
  }

  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;

const CardTitle = styled(Card.Title)`
  font-size: 1.2rem;
  font-weight: bold;
`;

const CardText = styled(Card.Text)`
  font-size: 1rem;
  color: gray;
`;

const CarouselControl = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  border: none;
  font-size: 2rem;
  z-index: 1;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.Black};
  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }

  &:focus {
    outline: none;
  }
`;

const CarouselIcon = styled.span`
  width: 20px;
  height: 20px;
  background-size: 100%, 100%;
`;

const FeaturedPosts = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex < posts.length / 4 - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const renderCarouselItems = () => {
    const items = [];
    for (let i = 0; i < posts.length; i += 4) {
      items.push(
        <Carousel.Item key={i}>
          <CarouselItemWrapper>
            {posts.slice(i, i + 4).map((post, idx) => (
              <StyledCard key={idx}>
                <Card.Body>
                  <CardTitle>{post.title}</CardTitle>
                  <CardText>{post.date}</CardText>
                </Card.Body>
              </StyledCard>
            ))}
          </CarouselItemWrapper>
        </Carousel.Item>
      );
    }
    return items;
  };

  return (
    <Container>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        indicators={false}
      >
        {renderCarouselItems()}
      </Carousel>
      <CarouselControl className="left" onClick={handlePrev}>
        <CarouselIcon
          className="carousel-control-prev-icon"
          style={{ display: "flex" }}
        />
      </CarouselControl>
      <CarouselControl className="right" onClick={handleNext}>
        <CarouselIcon
          className="carousel-control-next-icon"
          style={{ display: "flex" }}
        />
      </CarouselControl>
    </Container>
  );
};

export default FeaturedPosts;
