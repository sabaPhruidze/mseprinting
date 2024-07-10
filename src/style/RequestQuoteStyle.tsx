import styled from "styled-components";
import {
  GlobalContainerRow,
  GlobalPartBox,
  GlobalSpecialPart,
  Globalh3Title,
  GlobalContainerColumn,
} from "./GlobalStyle";

import { RegisterForm } from "./LoginStyles";

export const RowContainer = styled(GlobalContainerRow)`
  padding: 50px 50px;
`;

export const RQContainerColumn = styled(GlobalContainerColumn)`
  justify-content: flex-start;
  align-items: start;
  text-align: left;
`;
export const RQPartBox = styled(GlobalPartBox)`
  font-size: 36px;
  color: ${(props) => props.theme.Black};
  margin-bottom: 50px;
  font-weight: 900;
`;

export const RQForm = styled(RegisterForm)`
  border: 0;
  max-width: 1000px;
  box-shadow: 0;
`;

export const RQSpecialPart = styled(GlobalSpecialPart)`
  color: ${(props) => props.theme.Black};
  margin-bottom: 50px;
  font-size: 36px;
  font-weight: 400;
`;
export const RQh3Title = styled(Globalh3Title)`
  font-weight: 600;
`;
