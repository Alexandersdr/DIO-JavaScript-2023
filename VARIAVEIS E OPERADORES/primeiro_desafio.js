
const precoCombustivel = 4.79;
const kmPorLitros = 15;
const distanciaEmKm = 1000;

const litroConsumdos = distanciaEmKm / kmPorLitros;
const valorGasto = litroConsumdos * precoCombustivel;


console.log(valorGasto.toFixed(2));