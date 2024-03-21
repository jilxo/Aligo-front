import React from "react"
import styled from "styled-components"

const Icon = styled.img`
  width: ${props => props.$size ? props.$size : "70px"};
  height: ${props => props.$size ? props.$size : "70px"};
  margin: ${props => props.$margin ? props.$margin : "5%"};`

export default Icon