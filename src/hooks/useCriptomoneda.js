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

export const useCriptomoneda = (label, stateinicial = "", optciones) => {
  //definir el state
  const [criptomoneda, guardarCriptomoneda] = useState(stateinicial);

  //funcion que captura los datos
  const handleChange = (e) => {
    guardarCriptomoneda(e.target.value);
  };

  //vista
  const SelectCriptomoneda = () => {
    return (
      <Fragment>
        <Label>{label}</Label>
        <Select value={criptomoneda} onChange={handleChange}>
          <option>
            --Selecionar--
          </option>
          {optciones.map((opcion) => (
            <option key={opcion.CoinInfo.Name} value={opcion.CoinInfo.Name}>
              {opcion.CoinInfo.FullName}
            </option>
          ))}
        </Select>
      </Fragment>
    );
  };

  return [criptomoneda, SelectCriptomoneda, guardarCriptomoneda];
};
