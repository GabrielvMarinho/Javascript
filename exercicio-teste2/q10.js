/**
 * Questão 10: Manipulação de Array de Números
 *
 * Implemente uma função chamada manipularArray que recebe um array de números como parâmetro.
 * Esta função deve realizar uma série de operações no array e retornar um objeto com os resultados.
 *
 * Requisitos:
 * a) Crie uma cópia do array original.
 * b) Remova o primeiro e o último elemento da cópia do array.
 * c) Adicione o número 0 no início da cópia do array.
 * d) Adicione o número 10 no final da cópia do array.
 * e) Calcule a soma de todos os números na cópia do array.
 * f) Encontre o maior número na cópia do array.
 * g) Crie um novo array apenas com os números pares da cópia do array.
 *
 * Exemplo de uso:
 * const numeros = [1, 2, 3, 4, 5];
 *   Exporte esses objetos:
 *   return {
 *   arrayOriginal: numeros,
 *   arrayCopia: arrayCopia,
 *   soma: soma,
 *  maiorNumero: maiorNumero,
 *   numerosPares: numerosPares,
 * };
 *
 *
 */

function manipularArray(array){
    arrayCopia = array
    arrayCopia.pop()
    arrayCopia.shift()
    arrayCopia.splice(0, 0, 0)
    arrayCopia.push(10)
    var soma=0;
    maior = null

    arrayCopia.forEach(element => {
        if(maior==null){
            maior = element
        }else{
            if(maior<element){
                maior = element
            }
        }
        soma+=element
    
    });
    arrayFinal=[]
    arrayCopia.forEach(element=>{
        if(element%2==0){
            arrayFinal.push(element)
        }

    })
    return {
        arrayOriginal: array,
        arrayCopia: arrayCopia,
        soma: soma,
        maiorNumero: maior,
        numerosPares: arrayFinal,
    }
}

module.exports = manipularArray