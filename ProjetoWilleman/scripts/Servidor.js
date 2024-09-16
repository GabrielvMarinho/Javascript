import { Maquina } from "./Maquina.js"
import { PainelDeControle } from "./PainelDeControle.js"
import { Memento } from "./Memento.js"
import { Caretaker } from "./Caretaker.js"

export class Servidor{
    constructor(nome){
        this.nome = nome
        this.listaPaineis = []
        this.listaMaquinas = []
        this.caretaker = new Caretaker()
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
    getlistaMaquinas(){
        return this.listaMaquinas
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

                        
                        //observer
                        this.listaPaineis.forEach(painel =>{
                            painel.getListaMaquinas().forEach(maquina1=>{
                                if(maquina1.getNome()==maquina.getNome()){
                                    var mensagem = document.getElementById("mensagem"+painel.getNomePainel())
                                    var achou = false
                                    var dadosCriticos = 80
                                    if (dado >= dadosCriticos ){
                                        var notificacao = document.createElement("h1")
                                        notificacao.className = "mensagemErro"
                                        Array.from(mensagem.children).forEach(elemento =>{
                                            if(elemento.innerText.search(maquina.getNome())!==-1){
                                                achou = true
                                            }   
                                            
                                        })
                                        if(!achou){
                                            notificacao.innerText=maquina.getNome()+" possui dados criticos!"
                                            mensagem.appendChild(notificacao)
                                        }
                                        
                                        var hist = false
                                        this.caretaker.getAll().forEach(elemento=>{
                                            elemento.estado.forEach(dado=>{
                                                for(var i=1; i<dado.length;i++){
                                                    if(dado[i]>=dadosCriticos){
                                                        if(dado[0]==maquina.getNome()){
                                                            hist = true

                                                        }
                                                    }
                                                }
                                            })
                                        })
                                        if(hist ==false){
                                            notificacao.innerText=maquina.getNome()+" possui dados criticos!"
                                            mensagem.appendChild(notificacao)
                                        }
                                        
                                        
                                        
                                    }    
                                }    
                                    
                                })
                                if(dado>=100){
                                    maquina.setDanificado()
                                }
                            })
                            
                    
                    
                
                    
                    matriz[i].push(dado)
                })
                
            } else {
                console.error("Máquina não possui o método getTemperatura ou é inválida.");
            }
            i +=1
        });
        
        this.metodoObserver(matriz)
        this.matriz = matriz
    }
    createMemento(){
        return new Memento(this.matriz)
    }
    getCaretaker(){
        return this.caretaker
    }
    metodoObserver(matriz){
        this.listaPaineis.forEach(painel =>{
            painel.receberDados(matriz);
        });
    }

}   