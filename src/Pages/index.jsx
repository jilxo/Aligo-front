import React, { Children, useState } from "react";
import Container from "../components/containers";
import Row from "../components/row";
import Column from "../components/column";
import styled from "styled-components";
import Form from "../components/form";
import Maps from "../components/map";
import { StyledButton, PressThemeHex, PressThemeRGBA, ThemeHex, ThemeRGBA } from "../components/Button";
import LogoTemp from "../assets/img/Foto.jpg"
import LogoAligo from "../assets/img/Aligo.png"
import Icon_1 from "../assets/img/Icon_1.png"
import Icon_2 from "../assets/img/Icon_2.png"
import Icon_3 from "../assets/img/Icon_3.png"
import Foto2 from "../assets/img/Foto2.jpg"
import Cert from "../assets/img/certifi.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTwitter, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Logo = styled.h1`
  text-align:${props => props.$textOrientation ? props.$textOrientation : ""};
  transition: all 0.2s ease-in-out;
`;
const Title = styled(Logo)`
  font-size: 75px;
  font-family: 'Codec_Pro_ExtraBold';
`;
const Subtitle = styled(Title)`
  font-size: ${props => props.$size ? props.$size : "70px"};
  margin-top: 5%;
  margin-bottom: 5%;
  text-align: ${props => props.$textOrientation ? props.$textOrientation : ""};
`;
const Span = styled.span`
  color: ${props => ThemeHex[props.$color] || ThemeHex["default"]};
  text-shadow: 0 0 10px rgba(230, 46, 45, 0);
  transition: all 0.2s ease-in-out;
  &:hover{
    text-shadow: 0 0 10px ${porps => porps.$color ? `${ThemeRGBA[porps.$color]}  0.8)` : `${ThemeRGBA["default"]}  0.8)`};
  }
`
const P = styled.p`
  color: white;
  font-size: ${props => props.$size ? props.$size : "large"};
  ${props => props.$margin_1 ? `margin-left:10px; margin-right:10px;` : ""}
  text-align: ${props => props.$textCenter ? props.$textCenter : "start"};
  margin: ${props => props.$m ? props.$m : ""};
  transition: all 0.2s ease-in-out;

`;

const Img = styled.img`
  width:${props => props.$size ? props.$size : "75%"};
  border-radius: ${props => props.$border ? props.$border : " "};
  box-shadow: -80px 80px 200px rgba(0, 162, 255, 0.2);
`
const Icon = styled.img`
  width: 70px;
  height: 70px;
  margin: 5%;
`
const Font = styled(FontAwesomeIcon)`
  color: ${props => ThemeHex[props.$color] || ThemeHex["default"]} ;
  font-size: ${porps => porps.$size ? porps.$size : "large"};
  margin: 10px;
  &:hover{
    text-shadow: 0 0 10px ${porps => porps.$color ? `${ThemeRGBA[porps.$color]}  0.8)` : `${ThemeRGBA["default"]}  0.8)`};  }
`



export function IndexPage() {
  const [count, setCount] = useState(1)

  return (
    <Container>
      <Row $m="5%">
        <Column $cols={12}>
          <Title>
            Nos integramos en tu ecosistema
          </Title>
          <P $margin_1>
            Ciberseguridad 360°
          </P>
          <StyledButton text="Conócenos" onClick={() => { console.log("Conocenos " + count); setCount(count + 1) }} />
        </Column>
        <Column className="center">
          <Img src={LogoTemp} alt="" />
        </Column>
      </Row>
      <Row className="center" $m="5%">
        <Column  >
          <Subtitle $textOrientation="center">
            <Span>ALIGO </Span>es una empresa de ciberseguridad que piensa y hace las cosas de una manera
            diferente ...
          </Subtitle>
          <Row className="center" $m="0%">
            <Column $cols={7} >
              <P $textCenter = "center" >
                ... somos el mejor<Span> aliado </Span>y<Span> amigo </Span> de nuestros clientes a la hora de
                proteger sus activos más importantes.
              </P>
            </Column>
          </Row>

        </Column>
      </Row>
      <Row $m="5%">
        <Column >
          <Subtitle $textOrientation="start" $size="60px">
            Para nosotros tu
            seguridad es
            primero
          </Subtitle>
          <P $textOrientation="start">
            Balanceamos y alineamos perfectamente los
            tres pilares de la seguridad de la información sin
            agregar riesgos a las operaciones
          </P>
          <StyledButton text="Contáctanos" />
        </Column>
        <Column $cols={6} $flex_center>
          <div className="center">
            <Icon src={Icon_1} />
            <P $margin_1 >Personas</P>
          </div>
          <div className="center">
            <Icon src={Icon_2} />
            <P $margin_1 >Procesos</P>
          </div>
          <div className="center">
            <Icon src={Icon_3} />
            <P $margin_1 >Tecnología</P>
          </div>
        </Column>
      </Row>
      <Row $m="5%">
        <Column >
          <Subtitle $textOrientation="center">
            <Span>96%</Span> de nuestros clientes
          </Subtitle>
          <Row className="center" $m="0%">
            <Column $cols={7} >
              <P $textCenter = "center" $margin_1>
                afirman que con ALIGO tienen una visualización más amplia de sus controles que les permite mitigar los riesgos estratégicos de sus negocios
              </P>
            </Column>
          </Row>
        </Column>
      </Row>
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
            <StyledButton text="Mas info" $color="Blue" />
          </Column>
          <Column>
            <StyledButton text="Mas info" />
          </Column>
          <Column>
            <StyledButton text="Mas info" $color="DarkRed" />
          </Column>
        </Row>
      </Row>
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
      <Row $m="5%" $flex_center>
        <Column $flex_center $cols={12}>
          <Img src={LogoTemp} alt="" />
        </Column>
        <Column $cols={5} $flex_center className="center">
          <Subtitle $size="60px">
            ¿Necesitas un aliado de ciberseguridad?
          </Subtitle>
          <P $textCenter = "center">
            Estamos a tu disposición
          </P>
          <StyledButton text="Contáctanos" />
        </Column>
      </Row>
      <Row $m="5%">
        <Row $flex_center>
          <Column $flex_center>
            <Subtitle $size="80px">
              Únete a nuestro Equipo <Span>ALIGO</Span>
            </Subtitle>
          </Column>
        </Row>
        <Row $flex_center>
          <Column>
            <Font icon={faUsers} aria-hidden="true" $size="150px" ></Font>
            <P $textCenter = "center" $m="15%" $size="30px">
              Red Team
              Ciberseguridad
            </P>
            <StyledButton text="Vacantes" />
          </Column>
          <Column>
            <Font icon={faUsers} aria-hidden="true" $size="150px" $color="Blue" ></Font>
            <P $textCenter = "center" $m="15%" $size="30px">
              Blue Team
              Ciberdefensa
            </P>
            <StyledButton text="Vacantes" $color="Blue" />
          </Column>
          <Column>
            <Font icon={faUsers} aria-hidden="true" $size="150px" $color="Purple" ></Font>
            <P $textCenter = "center" $m="15%" $size="30px">
              Purple Team
              Ciberresiliencia
            </P>
            <StyledButton text="Vacantes" $color="Purple" />
          </Column>
          <Column>
            <Font icon={faUsers} aria-hidden="true" $size="150px" $color="Pink" ></Font>
            <P $textCenter = "center" $m="15%" $size="30px">
              Comercial y
              Administrativo
            </P>
            <StyledButton text="Vacantes" $color="Pink" />
          </Column>

        </Row>
      </Row>
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
      <Row $m="5%">
        <Column $flex_center className="center">
          <Column>
            <Subtitle><Span>Contáctanos</Span></Subtitle>
            <P $m="">Déjanos tus datos y nos pondremos en contacto contigo </P>
          </Column>
          <Form></Form>
        </Column>
      </Row>
      <Row>
        <Column>
          <Subtitle><Span>Conecta con nosotros</Span></Subtitle>
          <P>(+57) 310 418 7820 <br />
            defensores@aligo.com.co
          </P>
          <Row>
            <Font icon={faLinkedin} aria-hidden="true" $size="40px" $color="White" ></Font>
            <Font icon={faInstagram} aria-hidden="true" $size="40px" $color="White" ></Font>
            <Font icon={faFacebook} aria-hidden="true" $size="40px" $color="White"></Font>
            <Font icon={faTwitter} aria-hidden="true" $size="40px" $color="White"></Font>
            <Font icon={faYoutube} aria-hidden="true" $size="40px" $color="White" ></Font>
          </Row>
          <P>Política de privacidad <br />
            Política de seguridad de la información</P>
          <Img src={LogoAligo} $size=" " $border />
        </Column>
        <Column $cols={5}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3473176860894!2d-75.5706503!3d6.2178469000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428327655db01%3A0xa4406b1c943e2778!2sEdificio%20C%C3%A1mara%20Colombiana%20de%20la%20Infraestructura%20P.H.!5e0!3m2!1ses!2sco!4v1709309233433!5m2!1ses!2sco" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <P  $textCenter="end">Medellín, Colombia <br/>
            Cra. 43B #16-95 Oficina 1601 <br/>
            Edificio Cámara Colombiana de la Infraestructura <br/>
          </P>
        </Column>
      </Row>
    </Container>

  );
}