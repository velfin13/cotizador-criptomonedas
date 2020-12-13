import React from "react";

export const Resultado = ({ resultado }) => {
  //prevenir que cargue si hay datos vacios
  if (Object.keys(resultado).length === 0) return null;

  console.log(resultado);
  return (
    <div>
      <p>
        El precio es: <span>{resultado.PRICE}</span>
      </p>
      <p>
        Precio mas alto del día: <span>{resultado.HIGHDAY}</span>
      </p>
      <p>
        Precio mas bajo del día: <span>{resultado.LOWDAY}</span>
      </p>
      <p>
        Variacion Últimas 24 Horas: <span>{resultado.CHANGEPCT24HOUR}</span>
      </p>
      <p>
        Ultima actualizacion: <span>{resultado.LASTUPDATE}</span>
      </p>
    </div>
  );
};
