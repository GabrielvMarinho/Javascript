import { Maquina } from "./Maquina.js"
import { PainelDeControle } from "./PainelDeControle.js"
import { Memento } from "./Memento.js"

export class Servidor{
    constructor(nome){
        this.nome = nome
        this.listaPaineis = []
        this.listaMaquinas = []
        
    }
    addlistaMaquina(lista){
        let existe=false;
        lista.forEach(elemento =>{
            if(elemento instanceof Maquina){
                this.listaMaquinas.forEach( maquina=>{
                    if(maquina.getNome()==elemento.getNome()){
                        console.log("maquina já adicionada")
                    }

                })
                if(existe==false){
                    this.listaMaquinas.push(elemento)
                }
            }
            else{
                console.log("erro não é objeto maquina")
            }
            existe=false
        })
        
    }
    getMaquinaIndex(id){
        return this.listaMaquinas[id]
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
        this.matriz = matriz
    }
    createMemento(){
        console.log("novo")
        return new Memento(this.matriz)
        
    }

}   