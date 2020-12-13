import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import imagen from "./cryptomonedas.png";
import { Formulario } from "./components/Formulario";
import { Resultado } from "./components/Resultado";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

export const App = () => {
  //declaracion de states
  const [criptomoneda, guardarCriptomoneda] = useState("");
  const [moneda, guardarMoneda] = useState("");

  //state para guardar el resultado de la cotizacion
  const [resultado, guardarResultado] = useState({});

  useEffect(() => {
    const CotizarCriptomoneda = async () => {
      //prevenir que se ejecute
      if (moneda === "") return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);

      guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
    };
    CotizarCriptomoneda();
  }, [criptomoneda, moneda]);

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="criptomonedas" />
      </div>
      <div>
        <Heading>Cotiza monedas al instante</Heading>
        <Formulario
          guardarCriptomoneda={guardarCriptomoneda}
          guardarMoneda={guardarMoneda}
        />
        <Resultado resultado={resultado} />
      </div>
    </Contenedor>
  );
};
