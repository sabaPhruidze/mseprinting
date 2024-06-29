import styled from "styled-components";
import { RowFlex, ColumnFlex } from "./GlobalStyle";
import { WWDCTitle } from "./HomeStyles";

export const FooterContainer = styled(ColumnFlex)`
  width: 100%;
  height: 580px;
  background-color: ${(props) => props.theme.White};
`;

export const DividingLineBox = styled(RowFlex)`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.Black};
  text-align: center;
  padding: 0 60px 0 80px;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    padding: 5px 60px;
  }
`;

export const Icons = styled(RowFlex)``;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px 20px;
  filter: invert(100%) sepia(7%) saturate(7500%) hue-rotate(165deg)
    brightness(120%) contrast(106%);
  cursor: pointer;
  transition: transform 0.4s;
  &:hover {
    margin: 5px 20px;
    transform: scale(1.1);
  }
`;

export const Quote = styled(WWDCTitle)`
  color: white;
  font-size: 20px;
  margin-bottom: 0;
`;

export const ProductsAboutContainer = styled(ColumnFlex)`
  width: 100%;
  height: 480px;
`;

export const ProductsAboutUsBox = styled(RowFlex)`
  width: 100%;
  height: 510px;
  background-color: ${(props) => props.theme.LightGrey};
  justify-content: center; /* Center the box horizontally */
  align-items: flex-start; /* Align items to the start to ensure they are aligned properly */
  padding-top: 20px; /* Add padding to adjust the top spacing */
`;

export const ProductsAboutUsCont = styled(RowFlex)`
  width: 350px;
  height: 510px;
  justify-content: center; /* Center the container horizontally */
  align-items: flex-start; /* Ensure the container content aligns properly */

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    flex-direction: column;
  }
`;

export const ProductsAboutUsColumn = styled(ColumnFlex)`
  height: 100%;
  width: 330px;
  justify-content: flex-start; /* Align column content to the start */
  align-items: center; /* Ensure column content is centered horizontally */
  text-align: center; /* Ensure text content is centered horizontally */
  padding-top: 20px; /* Add padding to adjust the top spacing */

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;

export const VerticalLine = styled.div`
  border-left: 1px solid ${(props) => props.theme.Black};
  height: 70%;

  @media (max-width: 600px) {
    border-left: none;
    width: 70%;
  }
`;

export const ColumnTitle = styled(Quote)`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${(props) => props.theme.Black};
`;

export const ColumnContext = styled(Quote)`
  font-size: 14px;
  color: ${(props) => props.theme.Black};
  font-weight: 300;
  cursor: pointer;
  padding: 5px 0;
  transition: 0.4s;

  &:hover {
    text-decoration: underline;
  }
`;

export const HorzontalLine = styled.div`
  border-top: 1px solid ${(props) => props.theme.Black};
  width: 60%;
`;

export const TermsConditionsBox = styled(RowFlex)`
  width: 100%;
  height: 50px;
  padding: 0 80px;
  background-color: ${(props) => props.theme.Black};
  @media (max-width: 1300px) {
    flex-direction: column;
    height: auto;
    padding: 20px 80px;
  }

  @media (max-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Address = styled.a`
  font-size: 14px;
  color: ${(props) => props.theme.White};
  width: 500px;
  margin-bottom: 0;
  text-align: left;

  @media (max-width: 1300px) {
    text-align: center;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const TermsConditionsLinks = styled(RowFlex)`
  font-size: 14px;
  color: ${(props) => props.theme.White};
  flex-wrap: wrap;

  @media (max-width: 800px) {
    justify-content: center;
    text-align: center;
  }
`;

export const TermsConditionsLink = styled(ColumnContext)`
  font-size: 14px;
  font-weight: 200;
  color: ${(props) => props.theme.White};
  margin: 2px;

  @media (max-width: 800px) {
    margin: 5px 10px;
  }
`;
