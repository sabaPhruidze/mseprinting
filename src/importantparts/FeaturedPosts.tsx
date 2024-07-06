import React, { useState } from "react";
import { Carousel, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import {
  Container,
  CarouselItemWrapper,
  StyledCard,
  CardTitle,
  CardText,
  CarouselControl,
  CarouselIcon,
  CardImage,
} from "../style/FeaturedPostsStyles";
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
