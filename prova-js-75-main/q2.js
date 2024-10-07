// q2.js
/**
 * Questão 2: Encontrar a palavra mais longa em um texto
 *
 * Implemente uma função chamada palavraMaisLonga que recebe uma string (texto) como parâmetro
 * e retorna a palavra mais longa encontrada no texto. Caso haja mais de uma palavra com o mesmo
 * comprimento, retorne a primeira.
 *
 * Requisitos:
 * 1. A função deve aceitar apenas strings como entrada.
 * 2. Se o parâmetro não for uma string válida, a função deve retornar null.
 * 3. A função deve desconsiderar pontuações e retornar apenas a palavra.
 * 4. Caso o texto esteja vazio, deve retornar uma string vazia ("").
 *
 * Exemplos:
 * palavraMaisLonga("O rato roeu a roupa do rei de Roma") deve retornar "roupa"
 * palavraMaisLonga("Nada é impossível!") deve retornar "impossível"
 * palavraMaisLonga("Caminhar, correr, saltar.") deve retornar "Caminhar"
 * palavraMaisLonga(12345) deve retornar null
 * palavraMaisLonga("") deve retornar ""
 */

function palavraMaisLonga(string){
    if(typeof string !== "string"){
        return null
    }
    if(string ==""){
        return ""
    }
    string = string.replace(",", "")
    string = string.replace(".", "")
    string = string.replace("!", "")

    array = string.split(" ")
    maiorPalavra = null
    array.forEach(element => {
        if(maiorPalavra===null){
            maiorPalavra = element
        }else if(maiorPalavra.length<element.length){
            maiorPalavra = element
        }
    });

    return maiorPalavra

}

module.exports = palavraMaisLonga