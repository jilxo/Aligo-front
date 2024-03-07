import React from "react";
import Row from "../../../components/Grid/row";
import Column from "../../../components/Grid/column";
import Subtitle from "../../../components/Subtitle/subtitle";
import Span from "../../../components/Span/Span";
import { StyledButton } from "../../../components/Button/Button";

const Colab = () => {
    return (
        <Row $m="5%">
        <Column>
          <Row>
            <Column $cols={9}>
              <Subtitle $size="90px">
                <Span>Sin importar cuál
                  sea tu necesidad, podemos resolverlo para</Span> TI <Span>.</Span>
              </Subtitle>
            </Column>
          </Row>
          <Column className="" $flex_end>
            <StyledButton text="Aligo CoLAB" />
          </Column>
        </Column>
      </Row>
    )
}
export default Colab