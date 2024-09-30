// exercicio1.js
// Enunciado: Crie uma função que recebe um número e retorna "par" se o número for par e "ímpar" se for ímpar.
// Deve ser exportada a função parOuImpar

function parOuImpar(n){
    if(n%2==0){
        return "par";
    }
    return "ímpar";
}
module.exports = parOuImpar;