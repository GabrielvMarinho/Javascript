
export class Maquina {
    constructor(nome, tipoGrafico, labels) {
        this.nome = nome;
        this.temperatura=0;
        this.umidade=0;
        this.pressao=0;
        this.vibracao=0;
        this.tipoGrafico = tipoGrafico;
        this.labels = labels;

    }
    getNome(){
        return this.nome
    }
    getTemperatura(){
        return Math.random() * 50+50
    }
    getUmidade(){
        return Math.random() * 50+50
    }
    getPressao(){
        return Math.random() * 50+50
    }
    getVibracao(){
        return Math.random() * 50+50
    }
    getAll(){
        var array  = [];
        array.push(this.getTemperatura())
        array.push(this.getUmidade())
        array.push(this.getPressao())
        array.push(this.getVibracao())
        return array
    }
    
    getTipo(){
        return this.tipoGrafico
    }
    getLabels(){
        return this.labels
    }
}
