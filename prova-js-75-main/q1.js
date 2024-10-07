// q1.js
/**
 * Questão 1: Encontrar o maior de três números
 *
 * Implemente uma função chamada maiorNumero que recebe três números como parâmetros
 * e retorna o maior deles.
 *
 * Requisitos:
 * 1. A função deve aceitar apenas números inteiros.
 * 2. Se qualquer um dos parâmetros não for um número inteiro válido, a função deve retornar null.
 * 3. A função deve retornar o maior número entre os três valores.
 *
 * Exemplos:
 * maiorNumero(1, 5, 3) deve retornar 5
 * maiorNumero(10, 10, 9) deve retornar 10
 * maiorNumero(-1, -2, -3) deve retornar -1
 * maiorNumero(7.5, 2, 3) deve retornar null
 * maiorNumero(1, 'a', 3) deve retornar null
 */
function maiorNumero(x, y, z){
    var array = [x, y, z]
    var maior = null
    for(var i=0; i<array.length; i++){
        if(maior===null){
            maior = array[i]
        }else if(maior<array[i]){
            maior = array[i]
        }
        if(array[i]%1!==0){
            return null
        }
    }
        

    return maior

}
module.exports = maiorNumero