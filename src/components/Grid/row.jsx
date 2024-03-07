import React from "react";
import styled, { css } from "styled-components";

// Contenedor de fila
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${props => props.$m ? props.$m : "auto"};
  width: 100%;
  ${props=> props.$flex_end ? `
    justify-content: end;
    flex-direction: row;
    ` : ``}
    ${props=> props.$flex_center ? `
    justify-content: center;
    flex-direction: row;
    text-align: center;` : ``}
`;

export default Row;
