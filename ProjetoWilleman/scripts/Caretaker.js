import { Memento } from "./Memento.js"
export class Caretaker{
    constructor(nome){
        this.nome = nome
        this.listaMementos = []
    }
    save(memento){
        this.listaMementos.append(memento)
    }
}