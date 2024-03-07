import React from "react";
import styled from "styled-components";

const Logo = styled.h1`
  text-align:${props => props.$textOrientation ? props.$textOrientation : ""};
  transition: all 0.2s ease-in-out;
`;

export default Logo