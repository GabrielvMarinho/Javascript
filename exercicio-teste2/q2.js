// q2.js
/**
 * Questão 2: Verifica se um número é par
 *
 * Implemente uma função chamada ehPar que recebe um número como parâmetro
 * e retorna true se o número for par, ou false se for ímpar.
 *
 * Requisitos:
 * 1. A função deve aceitar apenas números inteiros.
 * 2. Zero deve ser considerado um número par.
 * 3. Se o parâmetro não for um número inteiro válido, a função deve retornar null.
 *
 * Exemplos:
 * ehPar(2) deve retornar true
 * ehPar(3) deve retornar false
 * ehPar(0) deve retornar true
 * ehPar(-4) deve retornar true
 * ehPar(3.5) deve retornar null
 * ehPar('a') deve retornar null
 */

function epar(x){
    
    if(x%2==0){
        return true
    }
    else if(Number.isInteger(x)==false){
        return null
    }else{
        return false
    }
}


module.exports = epar
