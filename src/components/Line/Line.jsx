import styled from "styled-components";
import { ThemeHex } from "../Theme";

const Line = styled.div`
width:100%;
height:10px;
background-color: ${(props) => props.$color? ThemeHex[props.$color] : ThemeHex["default"]}; 
`;

export default Line;