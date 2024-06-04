import styled from "styled-components";
import { RowFlex, ColumnFlex } from "./GlobalStyle";
import { WWDCTitle } from "./HomeStyles";

export const FooterContainer = styled(ColumnFlex)`
  width: 100%;
  height: 640px;
  background-color: ${(props) => props.theme.White};
`;

export const DividingLineBox = styled(RowFlex)`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.DarkBlue};
  text-align: center;
  padding: 0 60px 0 80px;
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
  height: 512px;
`;

export const ProductsAboutUsBox = styled(RowFlex)`
  width: 100%;
  height: 510px;
  background-color: ${(props) => props.theme.LightGrey};
`;

export const ProductsAboutUsCont = styled(RowFlex)`
  width: 320px;
  height: 510px;
`;

export const ProductsAboutUsColumn = styled(ColumnFlex)`
  height: 100%;
  width: 300px;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
`;

export const VerticalLine = styled.div`
  border-left: 1px solid ${(props) => props.theme.MediumBlue};
  height: 70%;
`;

export const ColumnTitle = styled(Quote)`
  font-size: 22px;
  font-weight: 600;
  margin: 10px 0 20px 0;
  color: ${(props) => props.theme.Black};
`;

export const ColumnContext = styled(Quote)`
  font-size: 14px;
  color: ${(props) => props.theme.MediumBlue};
  font-weight: 300;
  cursor: pointer;
  padding: 5px 0;
  transition: 0.4s;

  &:hover {
    text-decoration: underline;
  }
`;

export const HorzontalLine = styled.div`
  border-top: 1px solid ${(props) => props.theme.MediumBlue};
  width: 60%;
`;

export const TermsConditionsBox = styled(RowFlex)`
  width: 100%;
  height: 80px;
  padding: 0 80px;
`;

export const Address = styled.p`
  font-size: 14px;
  color: black;
  width: 500px;
  margin-bottom: 0;
`;

export const TermsConditionsLinks = styled(RowFlex)`
  font-size: 14px;
  color: black;
`;

export const TermsConditionsLink = styled(ColumnContext)`
  font-size: 14px;
  font-weight: 200;
  color: black;
  margin-left: 5px;
`;
