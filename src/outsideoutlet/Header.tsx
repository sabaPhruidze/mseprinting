import React from "react";
import LOGO from "../assets/icon/MSE Graphics.svg";
import {
  ButtonContainer,
  TransparentButton,
  HeaderContainer,
  Logo,
  NavMenu,
  NavItem,
  NavLink,
} from "../style/HeaderStyles";

export default function Header() {
  return (
    <div>
      <HeaderContainer>
        <Logo>
          <img src={LOGO} alt="Banner" height="60" />
        </Logo>
        <NavMenu>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Products & Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Login</NavLink>
          </NavItem>
        </NavMenu>
      </HeaderContainer>
      <ButtonContainer>
        <TransparentButton>Request a Quote</TransparentButton>
        <TransparentButton>Send a File</TransparentButton>
      </ButtonContainer>
    </div>
  );
}
