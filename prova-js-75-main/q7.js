// q7.js
/**
 * Questão 7: Unir e remover duplicados em dois arrays
 *
 * Implemente uma função chamada unirArrays que receba dois arrays como parâmetros
 * e retorne um novo array contendo todos os elementos dos dois arrays, sem elementos duplicados.
 *
 * Requisitos:
 * 1. O array resultante deve conter apenas elementos únicos (sem duplicatas).
 * 2. A ordem dos elementos deve seguir a ordem de aparecimento nos arrays originais.
 *
 * Exemplo de uso:
 * const resultado = unirArrays([1, 2, 3, 4], [3, 4, 5, 6]);
 * console.log(resultado); // Deve imprimir: [1, 2, 3, 4, 5, 6]
 */

function unirArrays(array1, array2){
    array2.forEach(element => {
        array1.push(element)
    });

    for(var i=array1.length; i>0; i--){
        for(var ii=array1.length; ii>0; ii--){
            if(array1[i]===array1[ii] && i!==ii){
               

                array1.splice(i, 1)

            }
        }
    }
    return array1
}
console.log(unirArrays([1, 2, 3, 4], [3, 4, 5, 6]))
module.exports = unirArrays