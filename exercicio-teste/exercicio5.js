// exercicio5.js
// Enunciado: Crie uma função que conta quantas vogais existem em uma string.
// Deve ser exportada a função contarVogais

const { array } = require("yargs")

function contarVogais(string){
    string.toLowerCase()
    arrayV = ["a", "e", "i", "o", "u"]
    cont=0
    for(let i of string){
        if(arrayV.includes(i)){
            cont++
        }
    }
    return cont
}

module.exports = contarVogais