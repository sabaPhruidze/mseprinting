import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
`;

export const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const GlobalButton = styled.button`
  background-color: ${(props) => props.theme.Transparent};
  color: ${(props) => props.theme.White};
  border: 1px solid;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  transition: 0.3s ease;
  border-radius: 20px;
  &:hover {
    background-color: #102948;
    color: #1d6a8c;
  }
  &:focus {
    transform: scale(0.9);
  }
`;
export const GlobalMainContent = styled.p`
  margin-top: 10px;
  font-size: 16px;
  text-align: left;
  margin: 0;
  margin-bottom: 10px;
  @media (max-width: 900px) {
    text-align: center;
  }
  @media (max-width: 630px) {
    text-align: center;
  }
`;
export const GlobalContainerColumn = styled(ColumnFlex)`
  width: 100%;
  min-height: 100%;
  padding: 40px 80px;
  @media (max-width: 1024px) {
    padding: 40px;
  }
  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

export const GlobalContainerRow = styled(RowFlex)`
  width: 100%;
  min-height: 100%;
`;

export const GlobalBoxColumnStart = styled(ColumnFlex)`
  width: 100%;
  align-items: flex-start;
  margin-bottom: 30px;
`;
export const GlobalMainTitle = styled.h1`
  color: ${(props) => props.theme.Black};
  margin-bottom: 10px;
`;

export const Globalh2Title = styled.h2`
  margin-bottom: 0;
  font-size: 22px;
  font-weight: bold;
`;
// special for image
export const GlobalImageWrapperWithFloat = styled.div`
  float: right;
  width: 30%; // Reduced width to allow more space for text
  margin-left: 20px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 1000px) {
    float: none;
    width: 100%;
    margin-left: 0;
    margin-bottom: 20px;
  }
`;

// represetative
export const GlobalRepresentativesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  width: 100%;
  margin-top: 1rem;

  @media (min-width: 1000px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const GlobalRepresentativeCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px 20px;
  width: 100%;

  input {
    margin-right: 10px;
  }

  label {
    font-size: 1.1rem;
    color: #333;
  }

  &:hover {
    background-color: #e6f7ff;
  }
`;

export const GlobalContainerRowWithWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export const GlobalImageWrapperWithFlex = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  padding-left: 20px;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const GlobalBoxColumnStart1 = styled.div`
  flex: 1;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

//

export const GlobalTextContainer = styled.div`
  overflow: hidden; // To clear the float and wrap content properly
  max-width: 1200px;
  @media (max-width: 1000px) {
    max-width: 100%; // Ensure text takes full width on small screens
  }
`;
// special for image
export const Globalh2TitleWithMB20 = styled.h2`
  margin-bottom: 0;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const AlignedTextContainer = styled.div`
  text-align: left;
  margin-left: 0; // No extra margin on the left
  padding-left: 0; // No extra padding on the left
  width: 100%; // Takes full width of the container
`;

export const Globalh3Title = styled.h3`
  font-size: 18px;
`;

export const GlobalPartBox = styled.span`
  font-size: 18px;
`;

export const GlobalPart = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const GlobalRow = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  list-style: none;

  &::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 10px;
    background-color: ${(props) => props.theme.Black};
    border-radius: 50%;
  }
`;

export const GlobalSpecialPart = styled.span`
  color: ${(props) => props.theme.MediumBlue};
  cursor: pointer;
`;
export const GlobalSpecialPartDark = styled(GlobalSpecialPart)`
  color: ${(props) => props.theme.Black};
  font-weight: 600;
`;
export const GlobalList = styled.ul`
  padding-left: 20px;
  margin-bottom: 20px;
`;

export const GlobalListItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
  list-style: disc;
`;

export const GlobalOrderedList = styled.ol`
  padding-left: 20px;
  margin-bottom: 20px;
`;

export const GlobalOrderedListItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
  list-style: decimal;
`;
export const GlobalNestedList = styled.ul`
  padding-left: 20px;
  margin-top: 10px;
`;

export const GlobalNestedListItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
  list-style: disc;
`;

// added
interface FullBackgroundContainerProps {
  bgimage: string; // Define that the bgimage prop will be a string
}
// Styled component for the full-width background image section
export const FullBackgroundContainer = styled.div<FullBackgroundContainerProps>`
  background-image: url(${(props) => props.bgimage});
  background-size: cover;
  background-position: center;
  height: 400px; // Full viewport height
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
  padding: 0 80px;
`;

// Custom FullBackgroundContainer using flex properties
export const FullBackgroundContainerZERO = styled.div`
  height: 400px; // Fixed height for the container
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
  padding: 0px;
  overflow: hidden; // Ensure content doesn't overflow the container
  position: relative; // To position the overlay content (title and button)

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; // Ensures image covers full width
    height: 100%; // Ensures image takes full height
    object-fit: cover; // Behaves like background-size: cover;
    z-index: -2; // Ensures image is behind the overlay and content
  }

  .black-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); // Black color with 0.5 opacity
    z-index: -1; // Ensure the overlay is behind the content but above the image
  }
`;

// Ensure TitleAndButtonContainer stays the same or can be modified as needed

// Title and button container
export const TitleAndButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 60px;
  right: 0;
  padding: 0 20px;
  text-align: left;
  color: ${(props) => props.theme.White};
  z-index: 2;
  max-width: 1000px;
  @media (max-width: 1025px) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    left: 0;
    width: 100%;
    padding: 5px;
    bottom: 5px;
  }
`;

// Style for the main title inside the image
export const FullScreenTitle = styled.h1`
  font-size: 46px;
  font-weight: 900;
  margin-bottom: 20px;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.9);
  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`;
export const GlobalMainContentResources = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  color: ${(props) => props.theme.Black};
  text-align: left;
  margin: 10px 0;
  @media (max-width: 900px) {
    text-align: center;
  }
  @media (max-width: 630px) {
    text-align: center;
  }
`;

// Button style within the full background
export const FullScreenButton = styled(GlobalButton)`
  background-color: #ff0015; // Request a quote button color matching the second image
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  &:hover {
    background-color: #ff0015;
    color: #fff;
  }
`;
export const FloatedImageContainer = styled.div`
  float: right;
  margin-left: 20px;
  max-width: 400px;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
  @media (max-width: 700px) {
    margin-left: 0px;
  }
`;
