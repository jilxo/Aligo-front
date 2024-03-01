import React from "react";
import styled from "styled-components";

export const ThemeHex = {
  "Blue" : "#5271ff;",
  "DarkRed": "#a81115",
  "Purple":"#5e17eb" ,
  "Pink":"#f18095", 
  "White" : "#fffff" ,
  default: "#E62E2D",
}
export const ThemeRGBA = {
  "Blue" : "rgba(82, 113, 255,",
  "DarkRed": "rgba(168, 17, 21,",
  "Purple": "rgba(94, 23, 235,",
  "Pink": "rgba(241, 128, 149,",
  "White": "rgba(255, 255, 255,",
  default: "rgba(230, 46, 45,",
}
export const PressThemeHex = {
  "Blue" : "#3e56c0;",
  "DarkRed": "#810d11",
  "Purple": "#4912b7",
  "Pink":"#d67183", 
  "White" : "#fffff" ,
  default: "#a81115",
}
export const PressThemeRGBA = {
  "Blue" : "rgba(62, 86, 192,",
  "DarkRed": "rgba(129, 13, 17,",
  "Purple": "rgba(73, 18, 183,",
  "Pink": "rgba(214, 113, 131,",
  "White": "rgba(255, 255, 255,",
  default: "rgba(168, 17, 21,",
}

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
