import React from "react";
import {
  HomeServicesContainer,
  HomeServicesDarkCover,
  WWDCTitle,
  HomeServicesContext,
  HomeServicesButton,
} from "../style/HomeStyles";

export default function HomeServices() {
  return (
    <HomeServicesContainer>
      <HomeServicesDarkCover>
        <WWDCTitle>Products & Services</WWDCTitle>
        <HomeServicesContext>
          At MSE PRINTING, we provide a wide range of high-quality printing and
          signage services to meet all your business needs. Whether you need
          banners, posters, or trade show displays, we've got you covered. Our
          comprehensive printing solutions include brochures, business cards,
          manuals, and direct mail services to help you effectively reach your
          audience. We also specialize in custom graphics for vehicles, windows,
          and interior decor. Additionally, our expert team offers graphic
          design, marketing services, and online ordering portals to streamline
          your projects. Let us help you make a lasting impression with our
          premium print and design solutions.
        </HomeServicesContext>
        <HomeServicesButton>Learn More ...</HomeServicesButton>
      </HomeServicesDarkCover>
    </HomeServicesContainer>
  );
}
