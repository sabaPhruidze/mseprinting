import styled from "styled-components";

export const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const TransparentButton = styled.button`
  background-color: transparent;
  border: 2px solid #007bff;
  color: #007bff;
  font-size: 16px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background-color: #f8f8f8;
  padding: 0 20px;
  border-bottom: 2px solid #ddd;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin-right: 20px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  padding: 10px;

  &:hover {
    color: #007bff;
  }
`;
