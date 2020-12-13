import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useMoneda } from "../hooks/useMoneda";
import { useCriptomoneda } from "../hooks/useCriptomoneda";
import axios from "axios";

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

  //state para listar lascriptomonedas
  const [listacripto, guardarlistacripto] = useState([]);

  //utilizamos el hook criptomoneda
  const [criptomoneda, SelectCriptomoneda] = useCriptomoneda(
    "Selecciona una Criptomoneda:",
    "",
    listacripto
  );

  //se definen las monedas
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

  //ejecutar el llamado a la API
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      const resultado = await axios.get(url);
      guardarlistacripto(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectMonedas />
      <SelectCriptomoneda />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};
