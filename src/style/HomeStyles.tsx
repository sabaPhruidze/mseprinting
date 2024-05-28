import styled from "styled-components";
import { RowFlex, ColumnFlex } from "./GlobalStyle";

export const WWDCContainer = styled(RowFlex)`
  width: 100%;
  height: 800px;
`;
export const WWDCCSpecialitiesContainer = styled(ColumnFlex)`
  width: 400px;
  height: 800px;
  color: ${(props) => props.theme.DarkBlue};
`;
export const WWDCTitle = styled.h2`
  font-weight: 800;
  margin-bottom: 50px;
`;
export const WWDCParagraph = styled.p`
  font-weight: 400;
  font-size: 20px;
  text-align: center;
`;
