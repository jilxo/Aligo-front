import React from "react";
import styled from "styled-components";
import { ThemeHex, PressThemeHex, PressThemeRGBA, ThemeRGBA } from "../Theme";


function DivBase(props) {
  const { text, img,  ...rest } = props;
  return <input type="submit" {...rest}  value={text}/>
    
}

export const StyledButton = styled(DivBase)`
  all : unset;
  background-color: ${props => ThemeHex[props.$color] || ThemeHex["default"]}; 
  color: #ffffff; 
  text-align: center;
  font-family: "Jane Caps", sans-serif;
  font-size: 20px;
  // text-decoration: underline;
  padding: 10px 20px;
  border-radius: 30px;
  width: 150px;
  height: 40px;
  box-shadow: 0 0 20px ${porps =>porps.$color?  `${ThemeRGBA[porps.$color]}  0.5)`: `${ThemeRGBA["default"]}  0.5)`};
  transition: all 0.1s ease-in-out;

  &:hover {
    box-shadow: 0 0 20px ${porps =>porps.$color?  `${ThemeRGBA[porps.$color]}  0.8)`: `${ThemeRGBA["default"]}  0.8)`};
  }
  &:active {
    background-color: ${props => PressThemeHex[props.$color] || PressThemeHex["default"]}; 
    box-shadow: 0 0 20px ${porps =>porps.$color?  `${PressThemeRGBA[porps.$color]}  0.8)`: `${PressThemeRGBA["default"]}  0.8)`};
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;
