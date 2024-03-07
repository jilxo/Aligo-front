import React from "react";
import Row from "../../../components/Grid/row";
import Column from "../../../components/Grid/column";
import Img from "../../../components/Imgs/img";
import Subtitle from "../../../components/Subtitle/subtitle";
import Span from "../../../components/Span/Span";
import P from "../../../components/P/P";
import { Foto2 } from "../../../components/exports";

const Ciber360 = ()=>{
    return (
        <Row $m="5%">
        <Column className="center">
          <Img src={Foto2}></Img>
        </Column>
        <Column>
          <Subtitle>
            <Span>Ciberseguridad 360°</Span>
          </Subtitle>
          <P>
            Nuestro principal objetivo es brindar soluciones desde un enfoque integral y holístico para la seguridad informática de nuestros clientes al proporcionar soluciones preventivas, correctivas y de control.
          </P>
        </Column>
      </Row>
    )

}
export default Ciber360