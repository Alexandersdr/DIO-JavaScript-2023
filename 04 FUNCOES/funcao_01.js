/* funções no javaScript*

function quadrado(valor){
    return valor * valor;
    //console.log('you name i:' + name);
}

console.log(quadrado(10)+ quadrado(10));

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez)*/

/*sayMyName('Renan');
sayMyName('Vitor');*/

function incrementarJuros(valor, percentualJuros){
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
    
}
console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));