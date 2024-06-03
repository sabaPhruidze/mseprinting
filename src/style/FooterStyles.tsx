import styled from "styled-components";
import { RowFlex, ColumnFlex } from "./GlobalStyle";
import { WWDCTitle } from "./HomeStyles";

export const FooterContainer = styled(ColumnFlex)`
  width: 100%;
  height: 400px;
  background-color: ${(props) => props.theme.White};
`;
export const DividingLineBox = styled(RowFlex)`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.DarkBlue};
  text-align: center;
  padding: 0 40px 0 60px;
`;

export const Icons = styled(RowFlex)``;
export const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin: 10px 20px;
  filter: invert(100%) sepia(7%) saturate(7500%) hue-rotate(165deg)
    brightness(120%) contrast(106%);
`;
export const Quote = styled(WWDCTitle)`
  color: white;
  font-size: 20px;
  margin-bottom: 0;
`;
export const ProductsAboutUsBox = styled(ColumnFlex)`
  width: 100%;
  height: 260px;
`;
export const TermsConditionsBox = styled(RowFlex)`
  width: 100%;
  height: 80px;
  background-color: green;
`;
