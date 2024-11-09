import styled from "styled-components";
import { ColumnFlex } from "./GlobalStyle";

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;

export const RootLoading = styled(ColumnFlex)`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  text-align: center;
  font-weight: 700;
`;
