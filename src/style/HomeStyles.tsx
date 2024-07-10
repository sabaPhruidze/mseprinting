import styled from "styled-components";
import { RowFlex, ColumnFlex } from "./GlobalStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { GlobalButton } from "./GlobalStyle";

export const HomeLoading = styled(ColumnFlex)`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  text-align: center;
  font-weight: 700;
`;
//carousel
export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  @media (max-width: 630px) {
    height: 500px;
  }
  @media (max-width: 540px) {
    height: 600px;
  }
`;

export const CarouselOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const CarouselControl = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const CarouselImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 60% 60%;
`;
export const CarouselIcon = styled.span`
  width: 20px;
  height: 20px;
  background-size: 100%, 100%;
`;

export const CarouselTitle = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  text-align: left;

  /* @media (min-width: 768px) {
    font-size: 28px;
    text-align: left;
  } */
`;

export const CarouselContent = styled.p`
  margin-top: 10px;
  font-size: 16px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  text-align: left;
  margin: 0;
  margin-bottom: 10px;
  @media (max-width: 900px) {
    text-align: center;
  }
  @media (max-width: 630px) {
    text-align: center;
  }
`;

export const CarouselButton = styled(GlobalButton)`
  text-align: left;
  width: 150px;
`;
//card
export const WWDCContainer = styled(RowFlex)`
  width: 100%;
  margin: 20px 0;
  padding: 0 20px;
  height: auto;
  min-height: 600px;

  @media (max-width: 1400px) {
    flex-direction: column;
  }
  @media (min-width: 1600px) {
    justify-content: space-evenly;
  }
`;

export const WWDCCSpecialitiesContainers = styled(ColumnFlex)`
  width: 100%;
  max-width: 400px;
  color: ${(props) => props.theme.Black};
  margin-bottom: 20px;
  @media (max-width: 1400px) {
    max-width: 80%;
  }
  @media (min-width: 1900px) {
    max-width: 40%;
  }
`;

export const WWDCTitle = styled.h2`
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 26px;
    margin-bottom: 10px;
  }

  @media (min-width: 1024px) {
    font-size: 28px;
    margin-bottom: 10px;
  }

  @media (min-width: 1440px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

export const WWDCParagraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 17px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const CardContainer = styled(Card)`
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 40px;
  }
`;
//services
export interface HomeServicesContainerProps {
  $backgroundimage: string | null;
}

export const HomeServicesContainer = styled.div<HomeServicesContainerProps>`
  width: 100%;
  height: 400px;
  background: url(${(props) => props.$backgroundimage}) no-repeat center center;
  background-size: cover;
  position: relative;

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    height: 400px;
  }
`;
export const HomeServicesDarkCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding: 0 100px;
  color: white;

  @media (max-width: 768px) {
    height: 350px;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    height: 100%;
    padding: 0 10px;
  }
`;

export const HomeServicesTitle = styled(WWDCTitle)`
  text-align: left;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
`;

export const HomeServicesContext = styled(WWDCParagraph)`
  width: 900px;
  text-align: left;
  font-size: 1rem;

  @media (max-width: 1200px) {
    width: 700px;
  }

  @media (max-width: 992px) {
    width: 500px;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const HomeServicesButton = styled(CarouselButton)`
  margin-top: 20px;
  margin-left: 0px;
  max-width: 180px;

  @media (max-width: 768px) {
    margin-top: 0px;
  }

  /* @media (max-width: 480px) {
    max-width: 120px;
  } */
`;
// double cards

export const DoubleCardContainer = styled(RowFlex)`
  width: 100%;
  height: 500px;
  margin: 70px 0;
  padding: 0 50px;
  flex-wrap: nowrap;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0 50px;
  }
`;
export const RequestQuoteBGImage = styled(HomeServicesContainer)`
  background: url(${(props) => props.$backgroundimage}) no-repeat center center;
  width: calc(50% - 30px);
  background-size: cover;
  position: relative;
  border-radius: 25px;
  z-index: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  margin-bottom: 30px;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RequsetQuoteBGHalf = styled.img`
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 2;
  opacity: 0.9;
  border-radius: 25px;
`;

export const RequestQuoteTitle = styled(WWDCTitle)`
  color: ${(props) => props.theme.White};
  font-size: 26px;
  position: absolute;
  z-index: 3;
  top: 20px;
  left: calc(100% / 2 - 100px);
  @media (max-width: 1000px) {
    top: 10px;
  }
`;

export const SendFileBGImage = styled(RequestQuoteBGImage)`
  background: url(${(props) => props.$backgroundimage}) no-repeat center center;
`;

export const SendFileTitle = styled(RequestQuoteTitle)`
  color: ${(props) => props.theme.Black};
  left: calc(100% / 2 - 65px);
`;
