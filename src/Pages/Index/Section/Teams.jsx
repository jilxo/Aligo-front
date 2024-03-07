import React from "react";
import Row from "../../../components/Grid/row";
import Column from "../../../components/Grid/column";
import Subtitle from "../../../components/Subtitle/subtitle";
import P from "../../../components/P/P";
import Font from "../../../components/FontAwesome/Font";
import { StyledButton } from "../../../components/Button/Button";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import Span from "../../../components/Span/Span";
const Teams = () => {
    return(
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
    )
}

export default Teams