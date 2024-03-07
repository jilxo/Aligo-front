import { counter } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import Row from "../../../components/Grid/row";
import Column from "../../../components/Grid/column";
import Subtitle from "../../../components/Subtitle/subtitle";
import Span from "../../../components/Span/Span";
import P from "../../../components/P/P";

const Counter = () => {
    return(
        <Row $m="5%">
        <Row>
          <Column $cols={12} className="center">
            <Subtitle>
              <Span>Estamos orgullosos de nuestros números</Span>
            </Subtitle>
          </Column>
        </Row>
        <Row $flex_center>
          <Column $flex_center>
            <Subtitle>
              14
            </Subtitle>
            <P $textCenter = "center">
              Años de
              experiencia
            </P>
          </Column>
          <Column $flex_center>
            <Subtitle>
              +40
            </Subtitle>
            <P $textCenter = "center">
              Empresas
            </P>
          </Column>
          <Column $flex_center>
            <Subtitle>
              25k
            </Subtitle>
            <P $textCenter = "center">
              Ataques prevenidos
            </P>
          </Column>
          <Column $flex_center>
            <Subtitle>
              200
            </Subtitle>
            <P $textCenter = "center">
              Vulnerabilidades detectadas
            </P>
          </Column>
          <Column $flex_center>
            <Subtitle>
              6
            </Subtitle>
            <P $textCenter = "center">
              Sectores
            </P>
          </Column>

        </Row>
        <Row>
          <Column $cols={12} className="center">
            <P>
              Y seguimos sumando...
            </P>
          </Column>
        </Row>
      </Row>
    )
}
export default Counter