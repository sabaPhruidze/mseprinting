import styled from "styled-components";

interface SitemapItemProps {
  $level?: number; // Optional level prop
}

export const SMContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  color: #333;
`;

export const SMHeader = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const SMList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NestedList = styled.ul`
  list-style: none;
  margin-left: 20px; /* Indentation for nested items */
`;

export const SMItem = styled.li<SitemapItemProps>`
  font-size: 1rem;
  margin: 8px 0;
  cursor: pointer;
  color: #d90000; /* Red text color */
  text-decoration: underline;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: none;
    color: #a60000;
  }

  /* Custom colorful bullet using ::before */
  &::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 10px;
    border-radius: 50%; /* Makes it a circle */
    background-color: ${({ $level }) =>
      $level === 1
        ? "#FF5733" // Level 1: Orange
        : $level === 2
        ? "#33B5FF" // Level 2: Blue
        : $level === 3
        ? "#28A745" // Level 3: Green
        : "#FFBD33"}; /* Default: Yellow */
  }
`;
