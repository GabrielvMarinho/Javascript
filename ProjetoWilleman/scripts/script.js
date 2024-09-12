//importando as classes
import { Maquina } from './Maquina.js'
import { PainelDeControle } from './PainelDeControle.js'
import { Servidor } from './Servidor.js'
import { Caretaker } from './Caretaker.js'

//criando objeto Caretaker
const caretaker = new Caretaker("caretaker")
//criando objeto Server
const server = new Servidor("server")

//lista de maquinas temporárias
let listaMaquinas =[new Maquina("MAQUINA 1", "polarArea"),
                    new Maquina("MAQUINA 2", "polarArea")]
                    
//adicionando maquinas ao server
server.addlistaMaquina(listaMaquinas)
//criando objeto Painel e criando graficos
const painel = new PainelDeControle("Painel do gabi", server.getlistaMaquinas())

//adiciona paineis ao server
server.adicionarPainel(painel)

function atualizarTemperaturas() {
    //FUNÇÃO OBSERVER -> chama todo os objetos na lista de paineis de server e manda os dados para eles
    server.atualizar()
    caretaker.save(server.createMemento())
    //mostra o histórico memento
    console.clear()
    console.log(caretaker.getListaMementos())
}

//função que chama o atualizarTemperaturas com um delay
function iniciarAtualizacao() {
    atualizarTemperaturas();
    setInterval(atualizarTemperaturas, 200);
}
//chama o metodo quando a janela carregar
window.onload = iniciarAtualizacao;