// exercicio2.js
// Enunciado: Crie uma função que recebe um array de números e retorna a soma de todos os elementos.
// Deve ser exportada a função somaArray

function somaArray(array){
    sum =0
    array.forEach(element => {
        sum +=element    
    });
    return sum
}

module.exports = somaArray