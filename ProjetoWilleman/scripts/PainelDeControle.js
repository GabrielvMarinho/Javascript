import { Maquina } from './Maquina.js'
import { Memento } from './Memento.js';

export class PainelDeControle{
    constructor(nomePainel, listaMaquinas){
        this.nomePainel = nomePainel
        this.listaMaquinas = listaMaquinas
        this.listaChart =[]
        listaMaquinas.forEach(maquina =>{
            if(maquina instanceof Maquina){

                
                var div = document.createElement("div")
                div.id = "div"+maquina.getNome()+this.getNomePainel()
                document.body.appendChild(div)
                var divCorreta = document.getElementById(div.id)

                //criando canvas para o grafico
                var canvas = document.createElement("canvas")
                canvas.id = maquina.getNome()+this.getNomePainel()

                //criando status danificado ou nao danificado
                var statusDanificado = document.createElement("h1");
                statusDanificado.innerText = "Não danificado"
                statusDanificado.id = "statusDanificado" + maquina.getNome()+this.getNomePainel();

                //criando status ligado ou desligado
                var statusLigado = document.createElement("h1");
                statusLigado.innerText = "Ligado"
                statusLigado.id = "statusLigado" + maquina.getNome()+this.getNomePainel();

                //criando botao de ligar e desligar
                var botaoLiga = document.createElement("button")
                botaoLiga.innerText = "CLIQUE BEM AQUI"
                botaoLiga.id = "botaoLiga" + maquina.getNome()+this.getNomePainel();

                var mensagemErro = document.createElement("h2")
                mensagemErro.id = "mensagem" + maquina.getNome()+this.getNomePainel();

                botaoLiga.addEventListener("click", maquina.mudarMaquinaON.bind(maquina))

                //adicionando todos os itens
                divCorreta.appendChild(canvas)
                divCorreta.appendChild(statusLigado)
                divCorreta.appendChild(statusDanificado)
                divCorreta.appendChild(botaoLiga)
                divCorreta.appendChild(mensagemErro)



                this.listaChart.push( new Chart(canvas.id, {
                    type: this.listaMaquinas[this.listaMaquinas.length-1].getTipo(),
                    data: {
                        datasets: [{
                            backgroundColor: [  // Cores de fundo das barras
                                'rgba(255, 99, 132, 0.6)', // Red
                                'rgba(255, 206, 86, 0.6)', // Yellow
                                'rgba(75, 192, 192, 0.6)', // Green
                                'rgba(153, 102, 255, 0.6)' // Purple
                            ],
                            borderColor: [  // Cores da borda das barras
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)'
                            ],
                            borderWidth: 1 // Largura da borda
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
                                text:maquina.getNome()
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

            if(dadosCorresp){
                for(var y=0;y<dadosCorresp.length;y++){
                    array.push(dadosCorresp[y])

                }
            }

            var h1 = document.getElementById("statusDanificado" + maquina.getNome() + this.getNomePainel())

            if (maquina.getDanificado()){
                h1.innerText = "DANIFICADO"

            } 

            var mensagem = document.getElementById("mensagem"+maquina.getNome()+this.getNomePainel())
            var h1 = document.getElementById("statusLigado" + maquina.getNome() + this.getNomePainel())
            if (!maquina.getMaquinaOn()){
                h1.innerText = "DESLIGADO"
                mensagem.innerText =""

            }else{
                h1.innerText = "LIGADO"
            }
            
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