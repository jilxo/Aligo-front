import React from "react";
import Row from "../../../components/Grid/row";
import Column from "../../../components/Grid/column";
import Subtitle from "../../../components/Subtitle/subtitle";
import Span from "../../../components/Span/Span";
import P from "../../../components/P/P";

const Statistics = () => {
    return (
        <Row $m="5%">
        <Column >
          <Subtitle $textOrientation="center">
            <Span>96%</Span> de nuestros clientes
          </Subtitle>
          <Row className="center" $m="0%">
            <Column $cols={7} >
              <P $textCenter = "center" $margin_1>
                afirman que con ALIGO tienen una visualización más amplia de sus controles que les permite mitigar los riesgos estratégicos de sus negocios
              </P>
            </Column>
          </Row>
        </Column>
      </Row>
    )
}

export default Statistics