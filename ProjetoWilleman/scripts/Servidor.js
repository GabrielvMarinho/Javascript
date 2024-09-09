import { Maquina } from "./Maquina.js"
import { PainelDeControle } from "./PainelDeControle.js"

export class Servidor{
    constructor(nome){
        this.nome = nome
        this.listaPaineis = []
        this.listaMaquinas = []
    }
    adicionarMaquina(maquina){
        if(maquina instanceof Maquina){
            this.listaMaquinas.push(maquina)
         }
         else{
             console.log("erro não é objeto maquina")
         }
     
    }
    adicionarPainel(painel){
        if(painel instanceof PainelDeControle){
           this.listaPaineis.push(painel)
        }
        else{
            console.log("erro não é objeto gráfico")
        }
    }
    atualizar(){
        var i =0;
        var matriz=[]
        this.listaMaquinas.forEach(maquina => {
            matriz[i] = []
            if (maquina && typeof maquina.getTemperatura === 'function') {
                matriz[i].push(this.listaMaquinas[i].getNome())
                maquina.getAll().forEach( dado =>{
                    matriz[i].push(dado)
                })
                
            } else {
                console.error("Máquina não possui o método getTemperatura ou é inválida.");
            }
            i +=1
        });
        this.listaPaineis.forEach(painel =>{
            painel.receberDados(matriz)
        });

    }

}   