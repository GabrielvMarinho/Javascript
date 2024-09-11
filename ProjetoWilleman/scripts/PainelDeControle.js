import { Maquina } from './Maquina.js'
import { Memento } from './Memento.js';

export class PainelDeControle{
    constructor(nomePainel, listaMaquinas){
        this.nomePainel = nomePainel
        this.listaMaquinas = listaMaquinas
        this.listaChart =[]
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
            
            if (this.listaChart[i]) {
                this.listaChart[i].data.datasets[0].data = dadosCorresp;
                this.listaChart[i].update();
            }
            i++;
            })
        }
    

    
    



    
    addGrafico(maquina, id){
        if(maquina instanceof Maquina){
            
            this.listaChart.push( new Chart(id, {
                //TEM ALGUM ERRO AQUI
                type: this.listaMaquinas[this.listaMaquinas.length-1].getTipo(),
                data: {
                    labels: maquina.getLabels(),
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
                    responsive: true,
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function(tooltipItem) {
                                    const dataIndex = tooltipItem.dataIndex;
                                    const labelsCustomizadas = maquina.getLegenda();
                                    return labelsCustomizadas[dataIndex-1] + ': ' + tooltipItem.raw; // Altera os rótulos exibidos nos tooltips
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
    }
}