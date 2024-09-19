export class Caretaker{
    constructor(nome){ // construtor recebe um parâmetro "nome"
        this.nome = nome // o parâmetro é armazenado na propriedade this.nome
        this.listaMementos = [] // array vazio, instancia objetos 
    }
    
    save(memento){ // recebe um parâmetro que é um objeto
        if(this.listaMementos.length>=15){  // verifica o comprimento da lista 
            this.listaMementos.shift()  // se for, remove o primeiro elemento da lista (o maias antigo), 
            // deixando espaço para adicionar um novo
            this.listaMementos.push(memento)  // adiciona um elemento no final da lista
        }
        else{
            this.listaMementos.push(memento) // se tiver menos, só vai adicionar um novo memento no final da fila
        }
    }
    getListaMementos(){
        console.clear() // começa limpando o console
        var string = "" // variável inicializada como vazia
        this.listaMementos.forEach(elemento =>{ // itera sobre cada elemento na lista memento
            string+=elemento.getEstado()+"\n\n" // adiciona o resultado do getEstado na variável string
        })
        return string // retorna a string
    }
    
    getIndex(id){  // o metodo retorna o memento que esta localizado no índice da lista de mementos
        return this.listaMementos[id]
    }
    getAll(){
        return this.listaMementos // o metodo retorna a lista de mementos
    }
}