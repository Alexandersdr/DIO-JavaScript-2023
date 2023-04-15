
const precoEtanol = 3.99;
const precoGasolina = 4.99;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombutivel = 'Gasolina';

const litroConsumdos = distanciaEmKm / kmPorLitros;

if (tipoCombutivel === 'Etanol') {
    const valorGasto = litroConsumdos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litroConsumdos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

