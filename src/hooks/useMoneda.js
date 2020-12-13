import React, { Fragment, useState } from "react";

export const useMoneda = (label, initialState = "", opciones) => {
  //state del hook monda
  const [moneda, actualizarMonedas] = useState(initialState);

  const SelectMonedas = () => {
    const hanledChange = (e) => {
      actualizarMonedas(e.target.value);
    };

    return (
      <Fragment>
        <label>{label}</label>
        <select onChange={hanledChange} value={moneda}>
          <option value="">--Selecionar--</option>
          {opciones.map((opcion) => (
            <option key={opcion.codigo} value={opcion.codigo}>
              {opcion.nombre}
            </option>
          ))}
        </select>
      </Fragment>
    );
  };

  return [moneda, SelectMonedas, actualizarMonedas];
};
