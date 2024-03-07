import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeHex, PressThemeHex, PressThemeRGBA, ThemeRGBA } from "../Theme";
const Font = styled(FontAwesomeIcon)`
  color: ${props => ThemeHex[props.$color] || ThemeHex["default"]} ;
  font-size: ${porps => porps.$size ? porps.$size : "large"};
  margin: 10px;
  &:hover{
    text-shadow: 0 0 10px ${porps => porps.$color ? `${ThemeRGBA[porps.$color]}  0.8)` : `${ThemeRGBA["default"]}  0.8)`};  }
`
export default Font