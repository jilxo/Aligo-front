import React from "react";
import Row from "../Grid/row";
import Column from "../Grid/column";
import Subtitle from "../Subtitle/subtitle";
import P from "../P/P";
import Font from "../FontAwesome/Font";
import Span from "../Span/Span";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { LogoAligo } from "../exports";
import Map from "../Map/map";
import Img from "../Imgs/img";

const Footer = () => {
    return (
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
        <Column $cols={5} $flex_end>
          <Map/>
          <P  $textCenter="end">Medellín, Colombia <br/>
            Cra. 43B #16-95 Oficina 1601 <br/>
            Edificio Cámara Colombiana de la Infraestructura <br/>
          </P>
        </Column>
      </Row>
    )
}
export default Footer