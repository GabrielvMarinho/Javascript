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
        let i =0;
        var matriz=[]
        //entrar em cada maquina da lista de maquinas
        this.listaMaquinas.forEach(maquina => {

            matriz[i] = []
            //se for uma maquina valida ele vai pegar todos os dados atualizados da máquina
            if (maquina && typeof maquina.getTemperatura === 'function') {
                matriz[i].push(this.listaMaquinas[i].getNome())

                var [legenda, dados] = maquina.getAll();
                
                dados.forEach((dado, index) =>{


                        //metodo observer que vai passar pela lista de paineis e mandar notificações de erro ( é feito
                        // antes mesmo de mandar os dados para o painel ou terminar de alimentar a matriz de dados )
                        this.listaPaineis.forEach(painel =>{
                            painel.getListaMaquinas().forEach(maquina1=>{
                                if(maquina1.getNome()==maquina.getNome()){
                                    var mensagem = document.getElementById("mensagem"+painel.getNomePainel())

                                    var achou = false
                                    var dadosCriticos = 80
                                    var hist = false

                                    if (dado >= dadosCriticos ){
                                        var notificacao = document.createElement("h1")
                                        notificacao.className = "mensagemErro"
                                        Array.from(mensagem.children).forEach(elemento =>{
                                            if(elemento.innerText.search(maquina.getNome())!==-1){
                                                achou = true
                                            }   
                                            
                                        })

                                        
                                        
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

                                        if(!hist || !achou){
                                            //notificação personalizada baseada na legenda da máquina
                                            notificacao.innerText=`${maquina.getNome()} possui ${legenda[index]} crítica!`
                                            mensagem.appendChild(notificacao)
                                        }
                                        
                                    }    
                                    if(dado>=100){
                                        var div = document.getElementsByClassName("divMaquinaComum"+maquina.getNome().replace(" ", ""))
                                        var label = document.getElementsByClassName("labelLigaDesliga" +maquina.getNome())
    
                                        for(var i=0; i<div.length;i++){
                                            div[i].classList.add("danificado")
                                            label[i].style.display="none"
                                            console.log(div[i].classList)
    
                                        }
                                        var mensagem = document.getElementById("mensagem"+painel.getNomePainel())
    
                                        var notificacao = document.createElement("h1")
                                        notificacao.className = "mensagemErro"
                                        notificacao.innerText=`${maquina.getNome()} possui um DEFEITO OPERACIONAL GRAVE!`
                                        mensagem.appendChild(notificacao)
                                        //define a maquina como danificada
                                        maquina.setDanificado()
    
                                    }
                                }    
                                    
                                })
                                
                            })
                            
                    
                    
                
                    //alimenta matriz para dados serem enviados
                    matriz[i].push(dado)
                })
                
            } else {
                console.error("Máquina não possui o método getTemperatura ou é inválida.");
            }
            i +=1
        });
        //adiciona um atributo matriz para salvar o estado da máquina e facilitar criação do memento
        this.matriz = matriz
        
        //chama metodo observer que vai notificar dos novos dados e atualizar os graficos
        this.metodoObserver()
        
    }
    createMemento(){
        return new Memento(this.matriz)
    }
    getCaretaker(){
        return this.caretaker
    }
    metodoObserver(){
        //passa por todos os paineis e manda a matriz de dados 
        this.listaPaineis.forEach(painel =>{
            painel.receberDados(this.matriz);
        });
    }

}   