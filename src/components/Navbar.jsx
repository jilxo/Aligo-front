
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem;
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;
  cursor: pointer;
  &:hover {
    text-shadow: 0px 0px 20px #fff;
  }
`;
const Logo = styled.a` 



`
const Navbar = () => {
  return (
    <NavbarContainer>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/Pruebas">About</NavItem>
      <NavItem href="#">Services</NavItem>
      <NavItem href="#">Contact</NavItem>
    </NavbarContainer>
  );
};

export default Navbar;
