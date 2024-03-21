import React from "react";
import Navbar from "../../components/Nav/Navbar";
import { Footer } from "../Index/Exports";
import Container from "../../components/Grid/containers";
import Img from "../../components/Imgs/img";
import { TheAgent, TheWall, TheFence, World } from "../../components/exports";
import Subtitle from "../../components/Subtitle/subtitle";
import Row from "../../components/Grid/row";
import Column from "../../components/Grid/column";
import Span from "../../components/Span/Span";
import styled from "styled-components";
import { ThemeHex } from "../../components/Theme";
import Icon from "../../components/Imgs/Icon";
import P from "../../components/P/P";


const Line = styled.div`
    width: 100%;
    height: 10px;
    background-color: ${props => props.$color ? ThemeHex[props.$color] : ThemeHex['default']};
`;


const BlueTeamPage = () => {
    return (
        <Container>
            <Navbar />
            <Row>
                <Column >
                    <Img $border="0px" $shadow src={World} alt="World" />
                </Column>
                <Column className="center">
                    <Subtitle >
                        Somos tu <Span>ALIGO</Span> de ciberseguridad...
                    </Subtitle>
                </Column>
            </Row>
            <Row $m="5%">
                <Column $cols={7}>
                    <Subtitle>
                        Servicios de Control
                    </Subtitle>
                    <Line $color="Blue" />
                </Column>
                <Row>
                    <Column $flex_center>
                        <Img $shadow $border $size="250px" src={TheFence} />
                        <P $textCenter="center">
                            TheFence
                        </P>
                        <P $textCenter="center">
                            Seguridad integral
                        </P>
                    </Column>
                    <Column $flex_center>
                        <Img $shadow $border $size="500px" src={TheAgent} />
                        <P $textCenter="center">
                            TheAgent
                        </P>
                        <P $textCenter="center">
                            Agentes de
                            Seguridad
                        </P>
                    </Column>
                    <Column $flex_center>
                        <Img $shadow $border src={TheWall} />
                        <P $textCenter="center">
                            TheWall
                        </P>
                        <P $textCenter="center">
                            Un firewall que
                            va más allá
                        </P>
                    </Column>


                </Row>
            </Row>
            <Row $m="5%">
                <Column $cols={7}>
                    <Subtitle>
                        Servicos de Detección
                    </Subtitle>
                    <Line $color="Blue" />
                </Column>
                <Row>
                    <Column $flex_center>
                        <Img $shadow $border $size="250px" src={TheFence} />
                        <P $textCenter="center">
                            TheXOC
                        </P>
                        <P $textCenter="center">
                            Centro de Operaciones de Seguridad
                        </P>
                    </Column>
                    <Column $flex_center>
                        <Img $shadow $border $size="500px" src={TheAgent} />
                        <P $textCenter="center">
                            TheNOC
                        </P>
                        <P $textCenter="center">
                            Control de Operaciones en
                            la Red
                        </P>
                    </Column>
                    <Column $flex_center>
                        <Img $shadow $border src={TheWall} />
                        <P $textCenter="center">
                            TheIDS
                        </P>
                        <P $textCenter="center">
                            Detección
                            de Intrusos
                        </P>
                    </Column>


                </Row>
            </Row>

            <Footer />
        </Container>
    )
}
export default BlueTeamPage