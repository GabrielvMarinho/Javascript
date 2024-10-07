// q10.js
/**
 * Questão 10: Manipulação de Array de Palavras
 *
 * Implemente uma função chamada manipularArrayPalavras que recebe um array de strings como parâmetro.
 * Esta função deve realizar uma série de operações no array e retornar um objeto com os resultados.
 *
 * Requisitos:
 * a) Crie uma cópia do array original.
 * b) Converta todas as palavras da cópia para letras maiúsculas.
 * c) Adicione a palavra "INÍCIO" no início da cópia do array.
 * d) Adicione a palavra "FIM" no final da cópia do array.
 * e) Encontre a palavra mais longa na cópia do array.
 * f) Crie um novo array apenas com as palavras que começam com a letra "A".
 *
 * Exemplo de uso:
 * const palavras = ["casa", "arvore", "carro", "aviao"];
 *   Exporte esses objetos:
 *   return {
 *   arrayOriginal: palavras,
 *   arrayCopia: arrayCopia,
 *   palavraMaisLonga: palavraMaisLonga,
 *   palavrasComA: palavrasComA
 * };
 *
 */

function manipularArrayPalavras(array){
    copia = array
    for(var i=0; i<copia.length; i++){
        copia[i] = copia[i].toUpperCase()
    }
    copia.splice(0, 0, "INÍCIO")
    copia.push("FIM")
    var maisLonga = null
    var arrayA = []
    for(var i=0; i<copia.length; i++){
        if(copia[i][0]==="A"){
            arrayA.push(copia[i])
        }
        if(maisLonga==null){
            maisLonga = array[i]
        }else if(maisLonga.length<array[i].length){
            maisLonga = array[i]
        }
    }
    return {arrayOriginal: array, arrayCopia: copia, palavraMaisLonga: maisLonga, palavrasComA: arrayA}
}
module.exports = manipularArrayPalavras