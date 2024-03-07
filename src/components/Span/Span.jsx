import React from "react"
import styled from "styled-components"
import { ThemeHex, PressThemeHex, PressThemeRGBA, ThemeRGBA } from "../Theme";


const Span = styled.span`
color: ${props => ThemeHex[props.$color] || ThemeHex["default"]};
text-shadow: 0 0 10px rgba(230, 46, 45, 0);
transition: all 0.2s ease-in-out;
&:hover{
  text-shadow: 0 0 10px ${porps => porps.$color ? `${ThemeRGBA[porps.$color]}  0.8)` : `${ThemeRGBA["default"]}  0.8)`};
}
`
export default Span