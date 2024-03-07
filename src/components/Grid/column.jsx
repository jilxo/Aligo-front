import styled from "styled-components";

// Contenedor de columna
const Column = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: ${props => (props.$cols ? `${(props.$cols / 12) * 100}%` : '100%')};
  padding-right: 15px;
  padding-left: 15px; 
  margin:${props => props.$m ? props.$m : "2%"};

  ${props=> props.$flex_center ? `display: flex;
    justify-content: center;
    flex-direction: column;` : ``}
    ${props=> props.$flex_end ? `display: flex;
    justify-content: end;
    flex-direction: column;
    float: right;
    align-items: end;` : ``}
`;

export default Column;
