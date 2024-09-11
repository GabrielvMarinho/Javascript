import { Memento } from "./Memento.js"
export class Caretaker{
    constructor(nome){
        this.nome = nome
        this.listaMementos = []
    }
    save(memento){
        this.listaMementos.push(memento)
    }
    getListaMementos(){
        var string = ""
        this.listaMementos.forEach(elemento =>{
            string+=elemento.getEstado()
        })
        return string
    }
    getIndex(id){
        return this.listaMementos[id]
    }
}