export class Memento{
    constructor(estado){
        this.estado = estado // recebe o parâmetro e armazena na propriedade "this.estado"
    }
    getEstado(){
        return this.estado // retorna o valor armazenado em this.estado
    }
}

// serve para objetos poderem acessar