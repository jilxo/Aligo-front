import React from "react";
import Navbar from "../components/Nav/Navbar";
import { Footer } from "./Index/Exports";
import Container from "../components/Grid/containers";
import { styled } from "styled-components";
import { HackImg, auditor, cert, cloud, consultor, devops, diag, forent, goverment, hack_img_invert, hunt, incident, malware, pentesting, socialing, sorcodana, vciso, vulnerability } from "../components/exports";
import Row from "../components/Grid/row";
import P from "../components/P/P";
import Column from "../components/Grid/column";
import Title from "../components/Title/title";
import Span from "../components/Span/Span";
import Subtitle from "../components/Subtitle/subtitle";
import Line from "../components/Line/Line";
import Icon from "../components/Imgs/Icon";

const BackImage = styled.div`
    background-image: url(${HackImg});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    filter: blur(5px);
    z-index: -2;
    position: absolute;
    
`;
const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 102vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: -2.4;
`;





export const RedTeamPage = () => {
    return (
        <>
            <BackgroundOverlay />
            <BackImage />
            <Container>
                <Row>
                    <Navbar />
                </Row>
                <Row $m="5%" $flex_end>
                    <Column $cols={5}  >
                        <Title>
                            Transformando vulnerabilidades en oportunidades de <Span> seguridad</Span>
                        </Title>
                        <P $size="30px">Servicios proactivos y reactivos</P>
                    </Column>
                </Row>

                <Row $m="5%">
                    <Column $cols={7} >
                        <Subtitle $size="60px">
                            Servicios de Diagnóstico
                        </Subtitle>
                        <Subtitle>

                        </Subtitle>
                        <Line />

                    </Column>
                        <Row>
                            <Column $flex_center >                                  
                                <Icon $size="70px" $margin="auto" src={hack_img_invert}/>
                                <Subtitle $textOrientation="Center" $size="25px">Hacking ético</Subtitle>   
                            </Column>
                            <Column $flex_center >                                   
                                <Icon $size="70px" $margin="auto" src={pentesting}/>
                                <Subtitle $textOrientation="Center" $size="25px">Pentesting</Subtitle>
                                <Span $color ="White" className="center">a demanda o continuo</Span>
                            </Column>
                            <Column $flex_center>                                  
                                <Icon $size="70px" $margin="auto" src={cert}/>
                                <Subtitle $textOrientation= "Center" $size="25px" >Certificación de aplicaciones</Subtitle>   
                            </Column>
                            <Column $flex_center >                                  
                                <Icon $size="100px" $margin="auto" src={diag}/>
                                <Subtitle $textOrientation="Center" $size="25px">Diagnóstico</Subtitle>   
                            </Column>
                        </Row>
                        <Row>
                        <Column $flex_center >                                  
                                <Icon $size="70px" $margin="auto" src={sorcodana}/>
                                <Subtitle $textOrientation="Center" $size="25px">Análisis de código fuente</Subtitle>   
                            </Column>
                            <Column $flex_center >                                   
                                <Icon $size="110px" $margin="auto" src={devops}/>
                                <Subtitle $textOrientation="Center" $size="25px">TheDeep</Subtitle>   
                            </Column>
                            <Column $flex_center>                                  
                                <Icon $size="90px" $margin="auto" src={socialing}/>
                                <Subtitle $textOrientation= "Center" $size="25px" >Ingenieria Social</Subtitle>   
                            </Column>
                            <Column $flex_center >                                  
                                <Icon $size="100px" $margin="auto" src={vulnerability}/>
                                <Subtitle $textOrientation="Center" $size="25px">Gestión de vulnerabilidades</Subtitle>   
                            </Column>
                        </Row>
                </Row>
                <Row $m = "5">
                <Column $cols={7} >
                        <Subtitle $size="60px">
                            Servicios de Consultoria
                        </Subtitle>
                        <Subtitle>

                        </Subtitle>
                        <Line />

                    </Column>

                    <Row>
                        <Column/>
                    <Column $flex_center >                                  
                                <Icon $size="70px" $margin="auto" src={vciso}/>
                                <Subtitle $textOrientation="Center" $size="25px">VCISO</Subtitle>
                                <Span $color ="White" className="center">Director de seguridad</Span>   
                                <Span $color ="White" className="center">virtual</Span>   
                            </Column>
                            <Column $flex_center >                                   
                                <Icon $size="70px" $margin="auto" src={consultor}/>
                                <Subtitle $textOrientation="Center" $size="25px">vConsultor</Subtitle>                         
                            </Column>
                            <Column $flex_center>                                  
                                <Icon $size="70px" $margin="auto" src={auditor}/>
                                <Subtitle $textOrientation= "Center" $size="25px" >vAuditor</Subtitle>
                                <Span $color ="White" className="center" >Auditoria de</Span>   
                                <Span $color ="White" className="center">seguridad virtual</Span>   
                            </Column>
                        <Column/>

                    </Row>

                    <Row>
                        <Column/>
                        <Column $flex_center >                                   
                            <Icon $size="70px" $margin="auto" src={goverment}/>
                            <Subtitle $textOrientation="Center" $size="25px">Gobierno de seguridad</Subtitle>                         
                        </Column>
                        <Column $flex_center >                                   
                            <Icon $size="70px" $margin="auto" src={cloud}/>
                            <Subtitle $textOrientation="Center" $size="25px">Seguridad en la nube</Subtitle>                         
                        </Column>
                        <Column/>
                    </Row>
                    <Row $m="5%">
                        <Column $cols={7}>
                        <Subtitle $size="60px">Servicio de Respuesta</Subtitle>
                        <Subtitle/>
                        <Line/>
                        </Column>
                    </Row>
                    <Row>
                    <Column/>
                        <Column $flex_center >                                   
                            <Icon $size="70px" $margin="auto" src={incident}/>
                            <Subtitle $textOrientation="Center" $size="25px">Atención de incidentes</Subtitle>                         
                        </Column>
                        <Column $flex_center >                                   
                            <Icon $size="70px" $margin="auto" src={hunt}/>
                            <Subtitle $textOrientation="Center" $size="25px">Caza de Amenazas</Subtitle>                         
                        </Column>
                        <Column/>
                    </Row>
                    <Row $m="5%">
                        <Column $cols={7}>
                        <Subtitle $size="60px">Servicios de Remediación</Subtitle>
                        <Subtitle/>
                        <Line/>
                        </Column>
                    </Row>
                    <Row>
                    <Column/>
                        <Column $flex_center >                                   
                            <Icon $size="70px" $margin="auto" src={forent}/>
                            <Subtitle $textOrientation="Center" $size="25px">Análisis Forence</Subtitle>                         
                        </Column>
                        <Column $flex_center >                                   
                            <Icon $size="70px" $margin="auto" src={malware}/>
                            <Subtitle $textOrientation="Center" $size="25px">Análsis de malware</Subtitle>                         
                        </Column>
                        <Column/>
                    </Row>
                </Row>
                <Footer />

            </Container>
        </>
    )
}