import { Grafico } from './Grafico.js'

export class PainelDeControle{
    constructor(nomePainel){
        this.nomePainel = nomePainel
        this.listaGraficos = []
        this.listaChart =[]
    }
    addGrafico(grafico){
        if(grafico instanceof Grafico){
            this.listaGraficos.push(grafico)
        }
        else{
            console.log("ERRO NÂO È GRAFICO INSTANCE")
        }
    }
    mostrarGrafico(id, posicao){
        var display = document.getElementById(id);

        this.listaChart[posicao] = new Chart(display, {
            type: this.listaGraficos[posicao].getTipo(),
            data: {
                labels: this.listaGraficos[posicao].getLabels(),
                datasets: [{
                    label: "Generico",
                    data: this.listaGraficos[posicao].adicionarDados(),
                }]
            }
        });


    }
    atualizarGrafico(posi){



        this.listaChart[posi].data.datasets[0].data = this.listaGraficos[posi].adicionarDados();
        this.listaChart[posi].update();
    }

}