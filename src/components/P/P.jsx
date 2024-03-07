import React from "react";
import styled from "styled-components";

const P = styled.p`
  color: white;
  font-size: ${props => props.$size ? props.$size : "large"};
  ${props => props.$margin_1 ? `margin-left:10px; margin-right:10px;` : ""}
  text-align: ${props => props.$textCenter ? props.$textCenter : "start"};
  margin: ${props => props.$m ? props.$m : ""};
  transition: all 0.2s ease-in-out;

`;

export default P