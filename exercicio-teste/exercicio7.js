// exercicio7.js
// Enunciado: Crie uma função que recebe um array de números e realiza as seguintes operações:
// a) Adiciona 1 a cada elemento do array.
// b) Filtra os números pares.
// c) Ordena os números em ordem decrescente.
// d) Retorna a soma dos elementos resultantes.
// Deve ser exportada a função manipularArray

function manipularArray(array){

    for(var i=0; i<array.length; i++){
        array[i] =array[i]+1
    }
    for(var i=0; i<array.length; i++){
        if(!(array[i]%2==0)){
            array.splice(i, 1)
        }
    }

    for(var i=0; i<array.length; i++){
        for(var ii; ii<array.length; ii++){
            if(array[ii]<array[ii+1]){
                var aux = array[ii]
                array[ii] = array[ii+1]
                array[ii+1] = aux

            }

        }
    }
    var sum=0
    for(var i=0; i<array.length; i++){
        sum +=array[i]
    }

    return sum


}
module.exports = manipularArray