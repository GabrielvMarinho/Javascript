import { Grafico } from './Grafico.js'

export class PainelDeControle{
    constructor(nomePainel){
        this.nomePainel = nomePainel
        this.listaGraficosdados = []
        this.listaChart =[]
    }
    receberDados(dados){
        var i=0;
        var array=[];
        this.listaGraficosdados.forEach( grafico =>{
            grafico.getListMaquinas().forEach( maquina => {
                dados.forEach( dado => {
                    if (maquina.getNome()==dado[i]){
                        array.push(dado[1])
                    }
                })


            })

            this.listaChart[i].data.datasets[0].data = array

            this.listaChart[i].update();

            i++;
        })

        

    }
    addGrafico(grafico, id){
        if(grafico instanceof Grafico){
            this.listaGraficosdados.push(grafico)
            this.listaChart.push( new Chart(id, {
                type: this.listaGraficosdados[this.listaGraficosdados.length-1].getTipo(),
                data: {
                    labels: this.listaGraficosdados[this.listaGraficosdados.length-1].getLabels(),
                    datasets: [{
                        label: "Generico"
                    }]
                }
            }));
        }
        else{
            console.log("ERRO NÃO É GRÁFICO INSTANCE")
        }
    }
    
}