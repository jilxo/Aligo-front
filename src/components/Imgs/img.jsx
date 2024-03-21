import React from "react"
import styled from "styled-components"

const Img = styled.img`
  width:${props => props.$size ? props.$size : "75%"};
  border-radius: ${props => props.$border ? props.$border : " 20px "};
  box-shadow: ${props => props.$shadow ? props.$shadow : `-80px 80px 200px rgba(0, 162, 255, 0.2)`};
`


export default Img 