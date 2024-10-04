/**
 * Questão 3: FizzBuzz
 *
 * Implemente uma função chamada fizzBuzz que não recebe parâmetros.
 * Esta função deve imprimir números de 1 a 100, com as seguintes regras:
 *
 * - Para múltiplos de 3, imprima "Fizz" em vez do número.
 * - Para múltiplos de 5, imprima "Buzz" em vez do número.
 * - Para números que são múltiplos de 3 e 5, imprima "FizzBuzz".
 * - Para os demais números, imprima o próprio número.
 *
 * Requisitos:
 * 1. A função deve imprimir exatamente 100 linhas.
 * 2. Use console.log para imprimir cada linha.
 * 3. Não é necessário retornar nenhum valor, apenas imprimir.
 *
 * Exemplo de saída (primeiras 15 linhas):
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 * Fizz
 * 7
 * 8
 * Fizz
 * Buzz
 * 11
 * Fizz
 * 13
 * 14
 * assim sucessivamente até 100
 */



function f(){
    for(var i=1; i<=100; i++){
        if(i%3==0 && i%5==0){

            console.log("FizzBuzz")
        }else if(i%3==0){
            console.log("Fizz")
        }else if(i%5==0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
    console.log()
}

module.exports = f