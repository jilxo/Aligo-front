import React from "react";
import Row from "../../../components/Grid/row";
import Column from "../../../components/Grid/column";
import Subtitle from "../../../components/Subtitle/subtitle";
import Img from "../../../components/Imgs/img";
import P from "../../../components/P/P";
import { LogoTemp } from "../../../components/exports";
import { StyledButton } from "../../../components/Button/Button";

const Contact1 = () => {
    return (
        <Row $m="5%" $flex_center>
        <Column $flex_center $cols={12}>
          <Img src={LogoTemp} alt="" />
        </Column>
        <Column $cols={5} $flex_center className="center">
          <Subtitle $size="60px">
            ¿Necesitas un aliado de ciberseguridad?
          </Subtitle>
          <P $textCenter = "center">
            Estamos a tu disposición
          </P>
          <StyledButton text="Contáctanos" />
        </Column>
      </Row>
    )
}

export default Contact1