const autos = require("./db/index.js");

const autosArray = autos.lista;

function describirse(nroAuto) {
  const auto = autos.lista[nroAuto];
  if (nroAuto < 0 || nroAuto > autos.lista.length - 1) {
    return `No hay tantos autos`;
  } else {
    return `Hola soy el auto marca ${auto.marca} modelo ${auto.modelo}`;
  }
}

function porColor(color) {
  const resultados = [];

  for (let index = 0; index < autosArray.length; index++) {
    if (autosArray[index].color.toLowerCase() === color.toLowerCase()) {
      resultados.push(autosArray[index]);
    }
  }

  if (resultados.length === 0) {
    return `No hay autos color ${color}`;
  }

  return resultados;
}

console.log(porColor("rojo"));
