/**
 * Questão 6: Manipulação de Objeto de Livro
 *
 * Implemente uma função chamada manipulacaoObjeto que não recebe parâmetros.
 * Esta função deve criar e manipular um objeto representando um livro,
 * realizando uma série de operações e retornando o objeto final.
 *
 * Requisitos:
 * a) Crie um objeto chamado "livro" com as propriedades: "titulo", "autor" e "anoPublicacao", com os seguintes dados:
 *    titulo: "O Alquimista",
 *    autor: "Paulo Coelho",
 *    anoPublicacao: 1988
 * b) Acesse a propriedade "titulo" do objeto "livro" e imprima no console.
 * c) Altere a propriedade "anoPublicacao" do objeto "livro" para 1992.
 * d) Adicione a propriedade "editora" ao objeto "livro" com o valor: "Rocco".
 * e) Adicione um método ao objeto "livro" chamado "getIdade" que retorne quantos anos o livro tem (ano atual - ano de publicação do livro).
 * f) Adicione um método ao objeto "livro" chamado "getDescricao" que retorne uma string contendo todas as informações do livro, no seguinte formato:
 *    'O livro "titulo" foi escrito por "autor" e publicado em "anoPublicacao".'.
 *
 * Retorne o objeto livro completo ao final da função.
 */



function manipulacaoObjeto(){
    livro = {
        titulo:"O Alquimista",
        autor: "Paulo Coelho",
        anoPublicacao: 1988
    };
    console.log(livro.titulo);
    livro.anoPublicacao = 1992;
    livro.editora = "Rocco";
    livro["getIdade"] = function(){
        const data = new Date();
        ano_atual = data.getFullYear();
        anos = parseInt(ano_atual) - this.anoPublicacao;
        return anos;
    };
    livro["getDescricao"] = function(){
        return `O livro "${this.titulo}" foi escrito por "${this.autor}" e publicado em "${this.anoPublicacao}".`
    }
    console.log(livro.titulo)
    console.log(livro.autor)
    console.log(livro.anoPublicacao)
    console.log(livro.editora)
    console.log(livro.getIdade())
    console.log(livro.getDescricao())

    return livro
};
module.exports = manipulacaoObjeto;