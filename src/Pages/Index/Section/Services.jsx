import React from "react";
import Row from "../../../components/Grid/row";
import Column from "../../../components/Grid/column";
import Subtitle from "../../../components/Subtitle/subtitle";
import P from "../../../components/P/P";
import Span from "../../../components/Span/Span";
import { StyledButton } from "../../../components/Button/Button";

const Services = () => {
    return (
        <Row $m="5%">
            <Row>
                <Column className="center">
                    <Subtitle>
                        Cónoce nuestros servicios
                    </Subtitle>
                </Column>
            </Row>
            <Column>
                <Subtitle $size="40px" ><Span $color="Blue">Servicios de ciberdefensa</Span></Subtitle>
                <P $size="30px">Proteja sus datos con nuestra ciberseguridad avanzada y confiable.</P>
            </Column>
            <Column>
                <Subtitle $size="40px"><Span>Servicios de ciberseguridad</Span></Subtitle>
                <P $size="30px">Resiliencia garantizada con nuestras soluciones líderes en ciberseguridad.</P>
            </Column>
            <Column>
                <Subtitle $size="40px"><Span $color="DarkRed">servicios de ciberinteligencia</Span></Subtitle>
                <P $size="30px">Obtenga insights cruciales con nuestra ciberinteligencia estratégica y proactiva.</P>
            </Column>
            <Row>
                <Column>
                    <StyledButton text="Mas info" $color="Blue"  onClick={() => {window.location.href = "blueteam" }} />
                </Column>
                <Column>
                    <StyledButton text="Mas info" />
                </Column>
                <Column>
                    <StyledButton text="Mas info" $color="DarkRed" />
                </Column>
            </Row>
        </Row>
    )
}
export default Services