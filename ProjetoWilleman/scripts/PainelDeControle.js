import { Maquina } from './Maquina.js'
import { Memento } from './Memento.js';

export class PainelDeControle{
    constructor(nomePainel, listaMaquinas, operador){
        this.nomePainel = nomePainel
        this.listaMaquinas = listaMaquinas
        this.listaChart =[]
        this.operador = operador

        var section = document.createElement("section")
        section.id = "section"+this.getNomePainel()
        document.body.appendChild(section)

        var nomeOperador = document.createElement("h1")
        nomeOperador.innerText = "PAINEL DE "+this.operador.getNome();
        section.appendChild(nomeOperador)

        var divMaquinas = document.createElement("div")
        divMaquinas.id = "divMaquinas"+this.getNomePainel()
        divMaquinas.className ="divMaquinas"
        section.appendChild(divMaquinas)

        listaMaquinas.forEach(maquina =>{

            if(maquina instanceof Maquina){

                
                

                
                
                var div = document.createElement("div")
                div.id = "div"+maquina.getNome()+this.getNomePainel()
                divMaquinas.appendChild(div)
                div.className ="divMaquinaComum"
                var divCorreta = document.getElementById(div.id)

                //criando canvas para o grafico
                var canvas = document.createElement("canvas")
                canvas.id = maquina.getNome()+this.getNomePainel()

                


                //criando status danificado ou nao danificado

                
                //////

                //criando div para o botao
                var divLigaDesliga = document.createElement("div")
                divLigaDesliga.id = "divLabel" + maquina.getNome()+this.getNomePainel();
                divLigaDesliga.className = "divLabel"

                //criando botao de ligar e desligar com checkbox e label
                var checkbox = document.createElement("input")
                checkbox.type="checkbox"
                checkbox.id = "checkBox" + maquina.getNome()+this.getNomePainel();
                checkbox.className = "checkbox"

              
                var divBola = document.createElement("div")
                divBola.className="bola" + maquina.getNome()
                divBola.classList.add("bola")
                var label = document.createElement("label")
                label.htmlFor = checkbox.id
                label.className="labelLigaDesliga" + maquina.getNome()
                label.id = "label" + maquina.getNome()+this.getNomePainel();
                label.classList.add("labelToggle")
                divBola.classList.add("bolaToggle")
                divBola.style.transform = 'translateX(120%)'
                
                label.appendChild(divBola)

                label.addEventListener("click", mudar)
                
                function mudar(){
                    if(maquina.getMaquinaOn()==true){
                        var bolas = document.getElementsByClassName("bola" +maquina.getNome())
                        var label = document.getElementsByClassName("labelLigaDesliga" +maquina.getNome())
                        for (var i = 0; i < bolas.length; i++) {
                            bolas[i].style.transition = 'transform 0.3s ease, background-color 0.3s ease';
                            bolas[i].style.transform = 'translateX(0%)';
                            label[i].classList.add("active")

                        }
                        
                        
                    }
                    else{
                        var label = document.getElementsByClassName("labelLigaDesliga" +maquina.getNome())
                        var bolas = document.getElementsByClassName("bola" +maquina.getNome())

                        for (var i = 0; i < bolas.length; i++) {
                            bolas[i].style.transform = 'translateX(120%)';
                            label[i].classList.remove("active")


                        }
                        

                    }
                }

                //adicionando na div label
                divLigaDesliga.appendChild(label)
                section.appendChild(divLigaDesliga);



                ///////


                //mensagem de erro
                

                checkbox.addEventListener("click", maquina.mudarMaquinaON.bind(maquina))

                //adicionando todos os itens
                

                divCorreta.appendChild(canvas)
                divCorreta.appendChild(divLigaDesliga)
                divCorreta.appendChild(checkbox)







                this.listaChart.push( new Chart(canvas.id, {
                    type: this.listaMaquinas[this.listaMaquinas.length-1].getTipo(),
                    data: {
                        datasets: [{
                            backgroundColor: [  // Cores de fundo das barras
                                'rgba(189, 213, 234, 0.6)', // Red
                                'rgba(247, 247, 255, 0.6)', // Yellow
                                'rgba(112, 138, 173, 0.6)', // Green
                                'rgba(123, 140, 154, 0.6)' // Purple
                            ],
                            borderColor: [  // Cores da borda das barras
                                'rgba(189, 213, 234, 1)',
                                'rgba(247, 247, 255, 1)',
                                'rgba(112, 138, 173, 1)',
                                'rgba(123, 140, 154, 1)'
                            ],
                            borderWidth: 2 // Largura da borda
                        }],
                        
                    },
                    options: {
                        scales: {
                            r: {
                                beginAtZero:true,
                                max:100
                            }},
                        responsive: true,
                        plugins: {
                            title:{
                                display:true,
                                text:maquina.getNome(),
                                color:"#fff",
                                font:{
                                    weight:'100'
    
                                }
                            },
                            
                            tooltip: {
                                callbacks: {
                                    label: function(tooltipItem) {
                                        const dataIndex = tooltipItem.dataIndex;
                                        const labelsCustomizadas = maquina.getLegenda();
                                        return labelsCustomizadas[dataIndex-1] + ': ' + tooltipItem.raw; 
                                    }
                                }
                            },
                
                        
                        
                        }
                   
                    }
                }));
            }
            else{
                console.log("ERRO NÃO É GRÁFICO INSTANCE")
            }
        })
        var msgTitulo = document.createElement("h1")
        msgTitulo.id = "mensagemTitulo"+this.getNomePainel();
        msgTitulo.className = "msgTitulo"
        msgTitulo.innerText="CENTRAL DE NOTIFICAÇÕES DE "+operador.getNome()
        section.appendChild(msgTitulo)


        var mensagemErro = document.createElement("div")
        mensagemErro.id = "mensagem"+this.getNomePainel();
        mensagemErro.className = "mensagemErroDiv"
        section.appendChild(mensagemErro)
    }
    getNomePainel(){
        return this.nomePainel
    }
    receberDados(dados){
        var i=0;
        var array=[];
        //o for ta baseado no tamanho da lista de maquinas mas deve ser baseado no tamanho da lista de dado
        this.listaMaquinas.forEach( maquina =>{

            const dadosCorresp = dados.find(dado =>dado[0] === maquina.getNome())
            let maiorvalor = 0
            if(dadosCorresp){
                for(var y=0;y<dadosCorresp.length;y++){
                    array.push(dadosCorresp[y])
                    if(dadosCorresp[y]>maiorvalor){
                        maiorvalor = dadosCorresp[y]
                    }
                }
            }


           

            const startColor = [55, 65, 79];
            const endColor = [254, 95, 85]; 
            

            const percentage = (maiorvalor-60)*2.5/100;

            
            var div = document.getElementById("div"+maquina.getNome()+this.getNomePainel())

            
            // const só fica dentro do if
            if(maiorvalor<=60){
                var r = Math.round(startColor[0]);
                var g = Math.round(startColor[1]);
                var b = Math.round(startColor[2]);

            }
            else{
                var r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * percentage);
                var g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * percentage);
                var b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * percentage);
            }
            div.style.backgroundColor =`rgb(${r}, ${g}, ${b})`




            
            
            if (this.listaChart[i]) {
                this.listaChart[i].data.datasets[0].data = dadosCorresp;
                this.listaChart[i].update();
            }
            i++;
            })
        }
    

    
    getListaMaquinas(){
        return this.listaMaquinas
    }
}