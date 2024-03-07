import React, { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../Button/Button";
import Column from "../Grid/column";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
  
  
  & input , textarea {
    all: unset;
    border: none;
    border-bottom: 1px solid red;
    padding: 8px 16px;
    font-size: 16px;
    width: 100vh;
    outline: none;
  }
`;


const Form = () => {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar datos a API o servidor
    console.log({
      nombreCompleto,
      empresa,
      telefono,
      correo,
      mensaje,
    });
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <label htmlFor="nombreCompleto">NOMBRE COMPLETO</label>
          <input
            type="text"
            id="nombreCompleto"
            name="nombreCompleto"
            value={nombreCompleto}
            onChange={(e) => setNombreCompleto(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="empresa">EMPRESA</label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="telefono">TELÉFONO MOVIL</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="correo">CORREO ELECTRÓNICO</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="mensaje">MENSAJE</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </InputContainer>
        <Column $flex_end><StyledButton text="Enviar mensaje"/></Column>
      </form>
    </FormContainer>
  );
};

export default Form;
