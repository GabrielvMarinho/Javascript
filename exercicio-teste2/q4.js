/**
 * Questão 4: Soma dos termos pares da sequência de Fibonacci
 *
 * Implemente uma função chamada somaFibonacciPares que não recebe parâmetros.
 * Esta função deve calcular a soma dos termos pares da sequência de Fibonacci
 * cujos valores não excedam cinquenta mil.
 *
 * Requisitos:
 * 1. A sequência de Fibonacci deve começar com 0 e 1.
 * 2. Considere apenas os termos pares da sequência.
 * 3. Inclua na soma apenas os termos que não excedam 50.000.
 * 4. A função deve retornar o valor da soma.
 *
 * Exemplo:
 * Os primeiros termos da sequência são: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * Os termos pares são: 2, 8, 34, ...
 * A soma dos termos pares que não excedem 50.000 deve ser calculada.
 */

function f(){
    x =0;
    y =1;
    soma=0
    for(var i=0; i>-1; i++){
        if(x%2==0){
            
            soma +=x
            if(soma>50000){
                break
            }
        }
        aux = x+y
        x = y
        y = aux
    }
    return soma
}
module.exports = f