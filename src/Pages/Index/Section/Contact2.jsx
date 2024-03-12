import React from "react";
import Row from "../../../components/Grid/row";
import Column from "../../../components/Grid/column";
import Subtitle from "../../../components/Subtitle/subtitle";
import Span from "../../../components/Span/Span";
import Form from "../../../components/Form/form";
import P from "../../../components/P/P";

const Contact2 = ({id}) => {
    return(
        <Row $m="5%" id={id}>
        <Column $flex_center className="center">
          <Column>
            <Subtitle><Span>Contáctanos</Span></Subtitle>
            <P $m="">Déjanos tus datos y nos pondremos en contacto contigo </P>
          </Column>
          <Form></Form>
        </Column>
      </Row>
    )
}
export default Contact2