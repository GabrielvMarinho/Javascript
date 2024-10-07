// q8.js
/**
 * Questão 8: Contar vogais em uma string
 *
 * Implemente uma função chamada contarVogais que receba uma string como parâmetro
 * e retorne um objeto onde as chaves são as vogais encontradas na string (a, e, i, o, u)
 * e os valores são o número de vezes que cada vogal aparece na string.
 *
 * Requisitos:
 * 1. A contagem deve ser case-insensitive (ignorando maiúsculas e minúsculas).
 * 2. Se não houver vogais na string, retorne um objeto vazio.
 *
 * Exemplo:
 * const resultado = contarVogais("Desenvolvimento Web e Mobile");
 * console.log(resultado);
 * // Deve imprimir algo como:
 * // { e: 6, o: 2, i: 2 }
 *
 * Observação: Apenas as vogais (a, e, i, o, u) devem ser consideradas.
 */

function contarVogais(string){
    string = string.toLowerCase()
    vogais = {}
    array = string.split("")
    var letras = []
    array.forEach(letra => {
        if(letra==="a"||letra==="e"||letra==="i"||letra==="o"||letra==="u"){
            letras.push(letra)
            console.log(letra)

        }
    });
    letras.forEach(letraEspecifica =>{
        if(vogais[letraEspecifica]===undefined){
            vogais[letraEspecifica] = 1
        }else{
            vogais[letraEspecifica]++
        }

    })
    return vogais
}

module.exports = contarVogais