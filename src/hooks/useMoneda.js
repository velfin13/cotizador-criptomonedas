import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  --webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

export const useMoneda = (label, initialState = "", opciones) => {
  //state del hook monda
  const [moneda, actualizarMonedas] = useState(initialState);

  const SelectMonedas = () => {
    const hanledChange = (e) => {
      actualizarMonedas(e.target.value);
    };

    return (
      <Fragment>
        <Label>{label}</Label>
        <Select onChange={hanledChange} value={moneda}>
          <option value="">--Selecionar--</option>
          {opciones.map((opcion) => (
            <option key={opcion.codigo} value={opcion.codigo}>
              {opcion.nombre}
            </option>
          ))}
        </Select>
      </Fragment>
    );
  };

  return [moneda, SelectMonedas, actualizarMonedas];
};
