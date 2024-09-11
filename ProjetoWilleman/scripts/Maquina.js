
export class Maquina {
    constructor(nome, tipoGrafico, labels) {
        this.nome = nome;
        this.temperatura=50;// graus celcius 
        this.umidade=50;// percentual ->>>>>>>>>>>>>>>>>>>>>>>todos em porcentagem de 0% sendo seguro e 100% sendo crítico
        this.pressao=50;// milimetros por segundo 
        this.vibracao=50;// bar 
        this.tipoGrafico = tipoGrafico;
        this.labels = labels;

    }
    getNome(){
        return this.nome
    }
    getTemperatura(){
        this.temperatura += Math.round((Math.random() * 2-1)*10)/10
        this.temperatura = parseFloat(this.temperatura.toFixed(1));

        if(this.temperatura>=100){
            this.temperatura=100
            return this.temperatura
        }
        else if(this.temperatura<=0){
            this.temperatura=0
            return this.temperatura
        }
        return this.temperatura
    }
    getUmidade(){
        this.umidade += Math.round((Math.random() * 2-1)*10)/10
        this.umidade = parseFloat(this.umidade.toFixed(1));

        if(this.umidade>=100){
            this.umidade=100
            return this.umidade
        }
        else if(this.umidade<=0){
            this.umidade=0
            return this.umidade
        }
        return this.umidade
    }
    getPressao(){
        this.pressao += Math.round((Math.random() * 2-1)*10)/10
        this.pressao = parseFloat(this.pressao.toFixed(1));

        if(this.pressao>=100){
            this.pressao=100
            return this.pressao
        }
        else if(this.pressao<=0){
            this.pressao=0
            return this.pressao
        }
        return this.pressao

    }
    getVibracao(){
        
        this.vibracao += Math.round((Math.random() * 2-0.95)*10)/10
        this.vibracao = parseFloat(this.vibracao.toFixed(1));

        if(this.vibracao>=100){
            this.vibracao=100
            return this.vibracao
        }
        else if(this.vibracao<=0){
            this.vibracao=0
            return this.vibracao
        }
        return this.vibracao
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
