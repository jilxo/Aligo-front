import React from "react";
import Row from "../../../components/Grid/row";
import Subtitle from "../../../components/Subtitle/subtitle";
import Column from "../../../components/Grid/column";
import Span from "../../../components/Span/Span";
import P from "../../../components/P/P";

const Testimonials = () => {
    return (
        <Row $m="5%">
            <Row>
                <Column className="center">
                    <Subtitle>
                        <Span>
                            Protegemos su vida digital...
                        </Span>
                    </Subtitle>
                </Column>
            </Row>
            <Row>
                <Column $cols={3}>
                    <P>Especialistas en Ciberseguridad</P>
                </Column>
                <Column>
                    <P>Somos líderes en ciberseguridad, destacando por servicios de élite. Nuestro equipo de expertos altamente calificados se anticipa a amenazas digitales, brindando defensa sólida contra diversos ataques.</P>
                </Column>
            </Row>
            <Row>
                <Column $cols={3}>
                    <P>Sin límites</P>
                </Column>
                <Column>
                    <P>Rompemos límites para proteger la vida digital de nuestros aliados. Comprometidos a superar expectativas, garantizamos seguridad integral, eliminando barreras que amenacen la continuidad del negocio.</P>
                </Column>
            </Row>
            <Row>
                <Column $cols={3}>
                    <P>Servicio Adaptable</P>
                </Column>
                <Column>
                    <P>Adaptamos servicios de ciberseguridad a necesidades únicas. Flexibles y modulares, nos ajustamos a requisitos específicos, brindando protección eficiente para pequeñas empresas o corporaciones globales con enfoque personalizado.</P>
                </Column>
            </Row>
        </Row>
    )
}
export default Testimonials