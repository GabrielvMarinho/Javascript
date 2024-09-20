export class Operador{
    constructor(nome){ // recebe um parâmetro
        this.nome = nome // armazena na propriedade this.nome
    }

    // o metodo retorna o valor armazenado em this.nome
    getNome(){
        return this.nome 
    }
}