export class Caretaker{
    constructor(nome){
        this.nome = nome
        this.listaMementos = []
    }
    save(memento){
        if(this.listaMementos.length>=15){
            this.listaMementos.shift()
            this.listaMementos.push(memento)
        }
        else{
            this.listaMementos.push(memento)
        }
    }
    getListaMementos(){
        var string = ""
        this.listaMementos.forEach(elemento =>{
            string+=elemento.getEstado()+"\n\n"
        })
        return string
    }
    getIndex(id){
        return this.listaMementos[id]
    }
}