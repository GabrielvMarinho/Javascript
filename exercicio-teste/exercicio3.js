// Enunciado: Crie uma função que calcula o fatorial de um número.
// Deve ser exportada a função fatorial

function fatorial(n){
    fat=1
    for(i=1; i<=n; i++){
        fat *=i
    }
    return fat
}

module.exports = fatorial