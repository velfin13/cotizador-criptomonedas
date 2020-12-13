import React from "react";
import styled from "@emotion/styled";
import { useMoneda } from "../hooks/useMoneda";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

export const Formulario = () => {
  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
  ];

  //utilizamos el hook useMoneda
  const [moneda, SelectMonedas] = useMoneda(
    "Selecciona una moneda",
    "",
    MONEDAS
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(moneda);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectMonedas />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};
