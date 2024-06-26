import styled from "styled-components";
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
  Globalh2Title,
  Globalh3Title,
  GlobalPartBox,
  GlobalPart,
  GlobalSpecialPart,
} from "../GlobalStyle";

export const AccesibilityContainer = styled(GlobalContainerColumn)`
  padding: 40px 50px;
`;
export const AccesibilityBox = styled(GlobalBoxColumnStart)``;
export const AccesibilityStarth2Title = styled(Globalh2Title)``;
export const AccesibilityStarth3Title = styled(Globalh3Title)``;

export const AccesibilityContent = styled(GlobalPart)``;
export const AccesibilityInsideBox = styled(GlobalBoxColumnStart)`
  margin-bottom: 5px;
`;
export const AccesibilityPartBox = styled(GlobalPartBox)``;
export const AccesibilityPart = styled(AccesibilityContent)``;

export const AccesibilityMail = styled(GlobalSpecialPart)`
  color: ${(props) => props.theme.MediumBlue};
`;
