//importando as classes
import { Maquina } from './Maquina.js'
import { PainelDeControle } from './PainelDeControle.js'
import { Servidor } from './Servidor.js'
import { Operador } from './Operador.js'

//instanciando operador
const operador1 = new Operador("gabriel")
const operador2 = new Operador("bia")

//instanciando server
const server = new Servidor("server")

//lista de maquinas temporárias
let listaMaquinas =[new Maquina("MAQUINA 1", "polarArea"),
                    new Maquina("MAQUINA 2", "polarArea"),
                    new Maquina("MAQUINA 3", "polarArea"),
                    new Maquina("MAQUINA 4", "polarArea"),
                    new Maquina("MAQUINA 5", "polarArea"),
                    new Maquina("MAQUINA 6", "polarArea")];

//adicionando maquinas ao server
server.addlistaMaquina(listaMaquinas)

//criando objeto Painel e criando graficos

var lista = [server.getMaquinaIndex(0),server.getMaquinaIndex(1),server.getMaquinaIndex(2)]
const painel = new PainelDeControle("Painel do gabi", lista, operador1)

var lista = [server.getMaquinaIndex(3),server.getMaquinaIndex(2),server.getMaquinaIndex(5)]
const painel2 = new PainelDeControle("Painel da bia", lista, operador2)
// const painel1 = new PainelDeControle("Painel do gabis", server.getlistaMaquinas())

//adiciona paineis ao server
server.adicionarPainel(painel)
server.adicionarPainel(painel2)
// server.adicionarPainel(painel1)

function atualizarTemperaturas() {
    //FUNÇÃO OBSERVER -> chama todo os objetos na lista de paineis de server e manda os dados para eles
    server.atualizar()
    // mostra o histórico memento e salva, muito importante para não ter spans nas mensagens de erro
    server.getCaretaker().save(server.createMemento())
    // console.log(server.getCaretaker().getListaMementos())
}

//função que chama o atualizarTemperaturas com um delay
function iniciarAtualizacao() {
    atualizarTemperaturas();
    setInterval(atualizarTemperaturas, 200);
}
//chama o metodo quando a janela carregar
window.onload = iniciarAtualizacao;