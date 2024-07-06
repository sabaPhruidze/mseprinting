import React, { useState } from "react";
import { Carousel, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import TEST from "../assets/icon/test.jpg";

const posts = [
  {
    title:
      "How Great Leave-Behinds Make Your Presentations Even More Effective",
    date: "Jul 02, 2024",
    image: TEST,
  },
  {
    title: "Boost Fundraising for Nonprofits",
    date: "Jun 25, 2024",
    image: TEST,
  },
  {
    title: "Elevate Your On-site Event with Marketing",
    date: "Jun 18, 2024",
    image: TEST,
  },
  {
    title: "Creating Your Brand Style Guide",
    date: "Jun 11, 2024",
    image: TEST,
  },
  {
    title: "New Post 5",
    date: "Jun 04, 2024",
    image: TEST,
  },
  {
    title: "New Post 6",
    date: "May 28, 2024",
    image: TEST,
  },
  {
    title: "New Post 7",
    date: "May 28, 2024",
    image: TEST,
  },
  {
    title: "New Post 8",
    date: "May 28, 2024",
    image: TEST,
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
  height: 250px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }

  .card-body {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    padding: 10px;
    text-align: left;
  }
`;

const CardImage = styled.div<{ src: string }>`
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

const CardTitle = styled(Card.Title)`
  font-size: 1.2rem;
  font-weight: bold;
`;

const CardText = styled(Card.Text)`
  font-size: 1rem;
  color: white;
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

  const itemsPerPage = 4;
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? totalPages - 1 : newIndex;
    });
  };

  const handleNext = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= totalPages ? 0 : newIndex;
    });
  };

  const renderCarouselItems = () => {
    const items = [];
    for (let i = 0; i < posts.length; i += itemsPerPage) {
      items.push(
        <Carousel.Item key={i}>
          <CarouselItemWrapper>
            {posts.slice(i, i + itemsPerPage).map((post, idx) => (
              <StyledCard key={idx}>
                <CardImage src={post.image} />
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
        controls={false}
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
