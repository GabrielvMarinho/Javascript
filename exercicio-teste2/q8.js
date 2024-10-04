/**
 * Questão 8: Encontrar caracteres duplicados em uma string
 *
 * Implemente uma função chamada encontrarDuplicados que receba uma string como parâmetro
 * e retorne um objeto onde as chaves são os caracteres duplicados e os valores são o número
 * de vezes que cada caractere aparece na string.
 *
 * Exemplo:
 * const resultado = encontrarDuplicados("programacao web e mobile");
 * console.log(resultado);
 * // Deve imprimir algo como:
 * // { r: 2, o: 3, a: 3, m: 2, ' ': 3, e: 3, b: 2 }
 *
 * Observação: Considere espaços em branco como caracteres válidos.
 * Ignore diferenças entre maiúsculas e minúsculas (case-insensitive).
 */
function encontrarDuplicados(frase){
    frase = frase.toLowerCase();
    objeto = {}
    for(var i=0; i<frase.length; i++){
        objeto[frase[i]] = 0
    }

    for(var i=0; i<frase.length; i++){
        objeto[frase[i]]+=1
    }
    for(var i=0; i<frase.length; i++){
        if(objeto[frase[i]]==1){
            delete objeto[frase[i]]
        }
    }

    return objeto
}

module.exports = encontrarDuplicados
