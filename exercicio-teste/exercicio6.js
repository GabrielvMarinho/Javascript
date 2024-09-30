// exercicio6.js
// Enunciado: Crie uma função que recebe um array de números e retorna um novo array com os números 
// multiplicados por 2 e ordenados em ordem crescente.
// Deve ser exportada a função multiplicarEOrdenar


function multiplicarEOrdenar(array){
    for(var i=0; i<array.length; i++){
        for(var ii=0; ii<array.length; ii++){
            if(array[ii]> array[ii+1]){
                var aux = array[ii]
                array[ii] = array[ii+1]
                array[ii+1] = aux
                
            }
        }
    }
    for(var i=0 ; i<array.length; i++){
        array[i] =array[i]*2
    }
    console.log(array)
    return array
}
module.exports = multiplicarEOrdenar