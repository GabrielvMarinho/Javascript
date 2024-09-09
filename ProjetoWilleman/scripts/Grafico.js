export class Grafico{
    
    constructor(tipoGrafico, labels, listaMaquinas){
        this.tipoGrafico = tipoGrafico,
        this.labels = labels
        this.listaMaquinas = listaMaquinas
    }

    // adicionarDados () {
    //     this.listaDados = [];

    //     this.listaMaquinas.forEach(maquina => {
    //         if (maquina && typeof maquina.getTemperatura === 'function') {
    //             this.listaDados.push(maquina.getTemperatura());
    //         } else {
    //             console.error("Máquina não possui o método getTemperatura ou é inválida.");
    //         }
    //     });
    //     return this.listaDados
    // }
    getListMaquinas(){
        return this.listaMaquinas
    }

    getTipo(){
        return this.tipoGrafico
    }
    getLabels(){
        return this.labels
    }
    getmaquina(){
        return this.maquina
    }
    getListaDados(){
        return this.listaDados
    }

    

}