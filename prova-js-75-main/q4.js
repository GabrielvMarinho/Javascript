// q4.js
/**
 * Questão 4: Soma dos múltiplos de 3 e 5 abaixo de um número dado
 *
 * Implemente uma função chamada somaMultiplos que recebe um número como parâmetro.
 * Esta função deve calcular a soma de todos os números naturais menores que o número dado
 * que são múltiplos de 3 ou 5.
 *
 * Requisitos:
 * 1. O número fornecido deve ser um número inteiro positivo, caso contrário deverá retorna null.
 * 2. Considere apenas números naturais menores que o valor passado como parâmetro.
 * 3. O número deve ser múltiplo de 3 ou 5.
 * 4. A função deve retornar o valor da soma.
 *
 * Exemplo:
 * somaMultiplos(10) deve retornar 23 (3 + 5 + 6 + 9).
 * somaMultiplos(1000) deve calcular a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.
 */


function somaMultiplos(n){
    var soma =0
    if(n<=0 || n%1!==0){
        return null
    }
    for(var i=n-1; i>0; i--){
        if(i%3===0 || i%5===0){
            soma +=i
        }
    }
    return soma

}
console.log(somaMultiplos(10))
module.exports = somaMultiplos