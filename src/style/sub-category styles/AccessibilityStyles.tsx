import styled from "styled-components";
import { ColumnFlex } from "../GlobalStyle";

export const AccesibilityContainer = styled(ColumnFlex)`
  width: 100%;
  min-height: 100%;
  padding: 80px 50px;
`;
export const AccesibilityBox = styled(ColumnFlex)`
  width: 100%;
  align-items: flex-start;
  margin-bottom: 50px;
`;
export const AccesibilityStarth2Title = styled.h2`
  margin-bottom: 30px;
  font-size: 30px;
`;
export const AccesibilityStarth3Title = styled.h3`
  font-size: 24px;
`;

export const AccesibilityContent = styled.p`
  font-size: 18px;
`;
export const AccesibilityInsideBox = styled(ColumnFlex)`
  width: 100%;
  align-items: flex-start;
  margin-bottom: 10px;
`;
export const AccesibilityPartBox = styled.span`
  font-size: 18px;
`;
export const AccesibilityPart = styled(AccesibilityContent)``;

export const AccesibilityMail = styled.span`
  color: ${(props) => props.theme.MediumBlue};
`;
