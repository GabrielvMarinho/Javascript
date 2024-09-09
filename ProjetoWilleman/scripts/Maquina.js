
export class Maquina {
    constructor(nome) {
        this.nome = nome;
    }
    getNome(){
        return this.nome
    }
    getTemperatura(){
        return Math.random() * 50+50
    }
}
