import React from "react";
import Row from "../../../components/Grid/row";
import Column from "../../../components/Grid/column";
import Subtitle from "../../../components/Subtitle/subtitle";
import P from "../../../components/P/P";
import { StyledButton } from "../../../components/Button/Button";
import Icon from "../../../components/Imgs/Icon";
import { Icon_1, Icon_2, Icon_3 } from "../../../components/exports";

const Pilars = () => {
  return (
    <Row $m="5%">
      <Column >
        <Subtitle $textOrientation="start" $size="60px">
          Para nosotros tu
          seguridad es
          primero
        </Subtitle>
        <P $textOrientation="start">
          Balanceamos y alineamos perfectamente los
          tres pilares de la seguridad de la información sin
          agregar riesgos a las operaciones
        </P>
        <StyledButton text="Contáctanos"  onClick={() => { window.location.hash = "contact"; }} />
      </Column>
      <Column $cols={6} $flex_center>
        <div className="center">
          <Icon src={Icon_1} />
          <P $margin_1 >Personas</P>
        </div>
        <div className="center">
          <Icon src={Icon_2} />
          <P $margin_1 >Procesos</P>
        </div>
        <div className="center">
          <Icon src={Icon_3} />
          <P $margin_1 >Tecnología</P>
        </div>
      </Column>
    </Row>)
}

export default Pilars