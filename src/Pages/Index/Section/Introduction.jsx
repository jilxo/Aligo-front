import React, { useState } from "react";
import Column from "../../../components/Grid/column";
import Title from "../../../components/Title/title";
import P from "../../../components/P/P";
import { StyledButton } from "../../../components/Button/Button";
import Img from "../../../components/Imgs/img";
import Row from "../../../components/Grid/row";
import { LogoTemp } from "../../../components/exports";

const Introduction = () => {
    const [count, setCount] = useState(1)
    return (
        <Row $m="5%" >
            <Column $cols={12}>
                <Title>
                    Nos integramos en tu ecosistema
                </Title>
                <P $margin_1>
                    Ciberseguridad 360°
                </P>
                <StyledButton text="Conócenos" onClick={() => { window.location.hash = "about"; }} />
            </Column>
            <Column className="center">
                <Img src={LogoTemp} alt="" />
            </Column>
        </Row>

    )
}

export default Introduction