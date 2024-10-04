/**
 * Questão 7: Elementos comuns em dois arrays
 *
 * Implemente uma função chamada elementosComuns que receba dois arrays como parâmetros
 * e retorne um novo array com os elementos que aparecem em ambos os arrays.
 * Exemplo de uso:
 * const resultado = elementosComuns([1, 2, 3, 4, 5. 10, 15, 16], [3, 4, 5, 6, 7, 15, 24]);
 * console.log(resultado); // Deve imprimir: [3, 4, 5, 15]
 */

function elementosComuns(array1, array2){
    var arrayNovo = []
    for(var i=0; i<array1.length; i++){
        for(var y=0; y<array2.length; y++){
            if(array1[i]==array2[y]){
                arrayNovo.push(array1[i])
            }
        }
    }
    return arrayNovo
}
module.exports = elementosComuns