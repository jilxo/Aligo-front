import React from "react";
import styled from "styled-components";
import Title from "../Title/title";

const Subtitle = styled(Title)`
  font-size: ${props => props.$size ? props.$size : "70px"};
  margin-top: ${props =>props.$margin ? props.$margin : "5%"};
  margin-bottom: ${props =>props.$margin ? props.$margin : "5%"};
  text-align: ${props => props.$textOrientation ? props.$textOrientation : ""};
`;
export default Subtitle