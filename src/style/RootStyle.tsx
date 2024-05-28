import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const RootHeader = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
`;

export const RootOutlet = styled.div`
  flex: 1; // This will make the outlet take the remaining space below the header
  z-index: 2;
  width: 100%;
  margin-top: -160px; // Adjust this value based on the height of your header
`;

export const RootFooter = styled.div`
  width: 100%;
  z-index: 3;
`;
