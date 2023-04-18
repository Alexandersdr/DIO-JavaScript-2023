function escrevaMeuNome(nome){
return 'Meu nome é ' + nome;

}

escrevaMeuNome('Alexander');

function verificarIdade(idade){
    if (idade >= 18){
        console.log(escrevaMeuNome('Alexander') +' é Maior')
    }else{
        console.log('Menor');
    }
}
verificarIdade(19)