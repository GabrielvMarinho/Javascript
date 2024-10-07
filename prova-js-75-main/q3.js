// q3.js
/**
 * Questão 3: Cálculo do IMC (Índice de Massa Corporal)
 *
 * Implemente uma função chamada calculaIMC que recebe dois parâmetros: peso (em kg) e altura (em metros).
 * A função deve calcular o Índice de Massa Corporal (IMC) e retornar o valor calculado, arredondado para uma casa decimal.
 *
 * Requisitos:
 * 1. A função deve aceitar apenas números positivos como parâmetros.
 * 2. Se qualquer um dos parâmetros não for um número positivo, a função deve retornar null.
 * 3. O IMC é calculado pela fórmula: IMC = peso / (altura * altura).
 * 4. A função deve retornar o valor do IMC arredondado para uma casa decimal.
 *
 * Exemplos:
 * calculaIMC(70, 1.75) deve retornar 22.9
 * calculaIMC(85, 1.80) deve retornar 26.2
 * calculaIMC(-70, 1.75) deve retornar null
 * calculaIMC(70, '1.75') deve retornar null
 *
 * Exportação:
 * Certifique-se de exportar a função calculaIMC para ser testada corretamente.
 */


function calculaIMC(kg, altura){
    if(kg<=0 || altura<=0 || typeof kg == 'string' || typeof altura == 'string'){
        return null
    }
    var imc = (kg / (altura * altura))
    
    return parseFloat(imc.toFixed(1))

}
console.log(calculaIMC(70, 1.75))

module.exports = calculaIMC