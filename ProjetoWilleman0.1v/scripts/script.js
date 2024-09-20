//importando as classes
import { Maquina } from './Maquina.js'
import { PainelDeControle } from './PainelDeControle.js'
import { Servidor } from './Servidor.js'
import { Operador } from './Operador.js'

//instanciando operador
const operador1 = new Operador("gabriel")
const operador2 = new Operador("bia")
const operador3 = new Operador("fulano")

//instanciando server
const server = new Servidor("server")

//lista de maquinas temporárias //bar, line, radar, doughnut, area
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
const painel = new PainelDeControle(operador1.getNome(), lista, operador1)

lista = [server.getMaquinaIndex(3),server.getMaquinaIndex(2),server.getMaquinaIndex(5)]
const painel2 = new PainelDeControle(operador2.getNome(), lista, operador2)

lista = [server.getMaquinaIndex(4)]
const painel3 = new PainelDeControle(operador3.getNome(), lista, operador3)

//adiciona paineis ao server
server.adicionarPainel(painel)
server.adicionarPainel(painel2)
server.adicionarPainel(painel3)

//função contínua
function atualizarDados() {
    //FUNÇÃO OBSERVER -> chama todo os objetos na lista de paineis de server e manda os dados para eles
    server.atualizar()
    // mostra o histórico memento e salva, muito importante para não ter spans nas mensagens de erro
    server.getCaretaker().save(server.createMemento())
    console.log(server.getCaretaker().getListaMementos())
}

//função que chama o atualizarDados com um delay
function iniciarAtualizacao() {
    atualizarDados();
    setInterval(atualizarDados, 500);
}

//chama o metodo quando a janela carregar
window.onload = iniciarAtualizacao;