
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem;
`;

const NavItem = styled(Link)`
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
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/serivices">Services</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </NavbarContainer>
  );
};

export default Navbar;
