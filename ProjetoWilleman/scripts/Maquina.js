
export class Maquina {
    constructor(nome, tipoGrafico) {
        this.nome = nome;
        this.temperatura=50;// graus celcius 
        this.umidade=50;// percentual ->>>>>>>>>>>>>>>>>>>>>>>todos em porcentagem de 0% sendo seguro e 100% sendo crítico
        this.pressao=50;// milimetros por segundo 
        this.vibracao=50;// bar 
        this.tipoGrafico = tipoGrafico;
        this.legenda = ["TEMPERATURA", "UMIDADE", "PRESSÃO", "VIBRAÇÃO"];
        this.maquinaON = true;
        this.danificado = false;

    }
    getMaquinaOn(){
        return this.maquinaON
    }

    getDanificado (){
        return this.danificado
    }

    setDanificado () {
        this.danificado = true;
        this.maquinaON = false;
    }

    mudarMaquinaON () {
        if(!this.danificado){
            if (this.getMaquinaOn()){
                this.maquinaON = false;
            }
            else{
                this.pressao =50;
                this.temperatura =50;
                this.vibracao =50;
                this.umidade =50;
                this.maquinaON = true;
            }
    }
    else{
        alert("impossivel ligar, esta estragada")

    }
        
    }

    

    getNome(){

        return this.nome
    }
    getTemperatura(){
        

        if(this.temperatura>=100){
            this.temperatura=100
            return this.temperatura
        }
        else if(this.temperatura<=0){
            this.temperatura += Math.round((Math.random() * 2)*10)/10
            this.temperatura = parseFloat(this.pressao.toFixed(1));
            return this.temperatura
        }
        this.temperatura += Math.round((Math.random() * 2-1)*10)/10
        this.temperatura = parseFloat(this.temperatura.toFixed(1));
        return this.temperatura
    }
    getUmidade(){
        
        if(this.umidade>=100){
            this.umidade=100
            return this.umidade
        }
        else if(this.umidade<=0){
            this.umidade += Math.round((Math.random() * 2)*10)/10
            this.umidade = parseFloat(this.umidade.toFixed(1));
            return this.umidade
        }
        this.umidade += Math.round((Math.random() * 2-1)*10)/10
        this.umidade = parseFloat(this.umidade.toFixed(1));
        return this.umidade
    }
    getPressao(){
        

        if(this.pressao>=100){
            this.pressao=100
            return this.pressao
        }
        else if(this.pressao<=0){
            this.pressao += Math.round((Math.random() * 2)*10)/10
            this.pressao = parseFloat(this.pressao.toFixed(1));
            return this.pressao
        }
        this.pressao += Math.round((Math.random() * 2-1)*10)/10
        this.pressao = parseFloat(this.pressao.toFixed(1));
        return this.pressao

    }
    getVibracao(){

        if(this.vibracao>=100){
            this.vibracao=100
            return this.vibracao
        }
        else if(this.vibracao<=0){
            this.vibracao += Math.round((Math.random() * 2)*10)/10
            this.vibracao = parseFloat(this.vibracao.toFixed(1));
            return this.vibracao
        }
        this.vibracao += Math.round((Math.random() * 2-1)*10)/10
        this.vibracao = parseFloat(this.vibracao.toFixed(1));
        return this.vibracao
    }
    getAll(){
        
        if (this.maquinaON == true){
            var array  = [];
            array.push(this.getTemperatura())
            // array.push(this.getUmidade())
            // array.push(this.getPressao())
            // array.push(this.getVibracao())

            return array
        } else {
            return [0,0,0,0];
        }
    }
    getLegenda(){
        return this.legenda;
    }
    
    getTipo(){
        return this.tipoGrafico;
    }
    
}
