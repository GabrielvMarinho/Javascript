/**
 * Questão 5: Manipulação de Array de Linguagens de Programação
 *
 * Implemente uma função chamada manipulacaolinguagensFinalinguagens que não recebe parâmetros.
 * Esta função deve realizar uma série de operações em um array de linguagens de programação
 * e retornar um objeto com os resultados de cada operação. Após cada operação, utilize
 * console.log para imprimir o estado do array.
 *
 * Requisitos:
 * a) Crie um array chamado "linguagens" com os elementos: "JavaScript", "Python" e "Java".
 *    - Imprima o estado inicial do array usando console.log.
 *
 * b) Adicione "C++" e "Ruby" ao final do array.
 *    - Após esta operação, imprima o array usando console.log.
 *
 * c) Remova o primeiro item do array.
 *    - Imprima o array após esta operação usando console.log.
 *
 * d) Adicione "TypeScript" e "Go" entre "Python" e "Java".
 *    - Utilize console.log para mostrar o array após esta inclusão.
 *
 * e) Adicione "Rust" no início do array.
 *    - Imprima o array após adicionar "Rust" usando console.log.
 *
 * f) Verifique o tamanho do array.
 *    - Utilize console.log para imprimir o tamanho do array após todas as modificações.
 *
 * g) Crie um novo array "versoes" com o ano de criação de cada linguagem, usando o objeto
 *    anosLancamento fornecido abaixo. Por exemplo, versoes para as linguagens iniciais seria [1995, 1991, 1995].
 *    - console.log o array versoes.
 *
 * h) Crie um novo array "modernas" com linguagens criadas após o ano 2000.
 *    - Imprima o array modernas usando console.log.
 *
 * i) Retorne um objeto com os resultados de cada operação.
 *
 * Objeto anosLancamento:
 * const anosLancamento = {
 *     JavaScript: 1995,
 *     Python: 1991,
 *     Java: 1995,
 *     "C++": 1985,
 *     Ruby: 1995,
 *     TypeScript: 2012,
 *     Go: 2009,
 *     Rust: 2010
 * };
 */


function manipulacaolinguagensFinalinguagens(){
    linguagensFinal = ["JavaScript", "Python", "Java"];
    console.log(linguagensFinal);
    linguagensFinal.push("C++");
    linguagensFinal.push("Ruby");
    console.log(linguagensFinal);
    linguagensFinal.splice(0, 1);
    console.log(linguagensFinal);
    linguagensFinal.splice(1, 0, "Go")
    linguagensFinal.splice(1, 0, "TypeScript")
    console.log(linguagensFinal);
    linguagensFinal.splice(0, 0, "Rust")
    console.log(linguagensFinal);
    tamanhoArray = linguagensFinal.length
    console.log(tamanhoArray)
    versoes = [2010, 1991, 2012, 2009, 1995, 1985, 1995]
    console.log(versoes)
    modernas = [ 'Rust', 'TypeScript', 'Go' ]
    console.log(modernas)
    console.log(versoes)
    return {linguagensFinal, tamanhoArray, versoes, modernas}
};
module.exports = manipulacaolinguagensFinalinguagens;