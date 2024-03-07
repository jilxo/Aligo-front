import React from "react"
import Row from "../../../components/Grid/row"
import Column from "../../../components/Grid/column"
import Subtitle from "../../../components/Subtitle/subtitle"
import Span from "../../../components/Span/Span"
import P from "../../../components/P/P"

const AboutUs = () => {
    return (
        <Row className="center" $m="5%">
            <Column  >
                <Subtitle $textOrientation="center">
                    <Span>ALIGO </Span>es una empresa de ciberseguridad que piensa y hace las cosas de una manera
                    diferente ...
                </Subtitle>
                <Row className="center" $m="0%">
                    <Column $cols={7} >
                        <P $textCenter="center" >
                            ... somos el mejor<Span> aliado </Span>y<Span> amigo </Span> de nuestros clientes a la hora de
                            proteger sus activos más importantes.
                        </P>
                    </Column>
                </Row>

            </Column>
        </Row>
    )
}

export default AboutUs
