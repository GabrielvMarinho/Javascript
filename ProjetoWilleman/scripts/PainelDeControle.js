import { Maquina } from './Maquina.js'

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
                type: this.listaMaquinas[this.listaMaquinas.length-1].getTipo(),
                data: {
                    labels: this.listaMaquinas[this.listaMaquinas.length-1].getLabels(),
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2], // Dados para o gráfico
                        backgroundColor: [  // Cores de fundo das barras
                            'rgba(255, 99, 132, 0.6)', // Red
                            'rgba(54, 162, 235, 0.6)', // Blue
                            'rgba(255, 206, 86, 0.6)', // Yellow
                            'rgba(75, 192, 192, 0.6)', // Green
                            'rgba(153, 102, 255, 0.6)' // Purple
                        ],
                        borderColor: [  // Cores da borda das barras
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1 // Largura da borda
                    }],
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                }
            }));
        }
        else{
            console.log("ERRO NÃO É GRÁFICO INSTANCE")
        }
    }
}