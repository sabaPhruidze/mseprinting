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
  margin-bottom: 50px;
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

//

export const GlobalContainerRowWithWrap = styled.div`
  display: flex;
  flex-wrap: wrap; // Allows text to wrap under the image if necessary
  justify-content: space-between;
  align-items: flex-start;
`;

export const GlobalImageWrapperWithFlex = styled.div`
  flex: 0 0 40%; // Adjust this percentage to control the image width
  max-width: 40%; // Ensure the image doesn't exceed the allocated space
  padding-left: 20px; // Space between the image and text
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const GlobalBoxColumnStart1 = styled.div`
  flex: 1; // Takes the remaining width after the image
  align-self: flex-start; // Aligns text to the top of the container
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

//

export const GlobalTextContainer = styled.div`
  overflow: hidden; // To clear the float and wrap content properly

  @media (max-width: 1000px) {
    width: 100%; // Ensure text takes full width on small screens
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
