import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem;
  width: 100%;
`;

const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 2rem;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    text-shadow: 0px 0px 20px #fff;
  }
`;
const NavItemA = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 2rem;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    text-shadow: 0px 0px 20px #fff;
  }
`;

const DropdownItem = styled.div`
  color: #fff;
  text-decoration: none;
  margin-right: 2rem;
  margin-top: 1rem;

  cursor: pointer;
  position: relative;
  &:hover {
    text-shadow: 0px 0px 20px #fff;
  }
`;

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 0.5rem;
  display: none;
  ${DropdownItem}:hover & {
    display: flex;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavItem to="/">Home</NavItem>
      <NavItemA href="/#about">Conocenos</NavItemA>
      <DropdownItem>
        Servicios
        <DropdownMenu>
          <NavItem to="/blueteam">CIBERDEFENSA</NavItem>
          <NavItem to ="/redteam">REDTEAMING</NavItem> 
        </DropdownMenu>
      </DropdownItem>
      <NavItemA href="#contact">Contactanos</NavItemA>
    </NavbarContainer>
  );
};

export default Navbar;
