/**
 * Questão 1: Soma de dois números
 *
 * Implemente uma função chamada somaNumeros que recebe dois parâmetros numéricos
 * e retorna a soma desses dois números.
 *
 * Requisitos:
 * 1. A função deve aceitar números inteiros e decimais.
 * 2. A função deve lidar corretamente com números negativos.
 * 3. Se um dos parâmetros não for um número válido, a função deve retornar NaN.
 *
 * Exemplos:
 * somaNumeros(2, 3) deve retornar 5
 * somaNumeros(-1, 1) deve retornar 0
 * somaNumeros(3.5, 2.7) deve retornar 6.2
 * somaNumeros('a', 2) deve retornar NaN
 */

function somaNumeros(x, y){
    if (typeof x !== 'number' || typeof y !== 'number') {
        return NaN;
    }
    return x+y
}

module.exports = somaNumeros