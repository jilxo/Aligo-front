import React from "react";
import Row from "../../../components/Grid/row";
import Column from "../../../components/Grid/column";
import Subtitle from "../../../components/Subtitle/subtitle";
import P from "../../../components/P/P";
import Img from "../../../components/Imgs/img";
import { Cert } from "../../../components/exports";
import Span from "../../../components/Span/Span";
const Certs = () => {
    return(
        <Row $m="5%">
        <Column>

          <Subtitle $textOrientation="start">Estamos</Subtitle>
          <Subtitle $textOrientation="center"><Span>Certificados</Span></Subtitle>

          <P $size="40px">
            Nuestro equipo de expertos altamente capacitados posee certificaciones reconocidas a nivel mundial, asegurando que estamos a la vanguardia de las últimas amenazas cibernéticas y tecnologías emergentes.
          </P>

        </Column>
        <Column $flex_end>
          <Img src={Cert} $size="60%" />
        </Column>
      </Row>
    )
}

export default Certs