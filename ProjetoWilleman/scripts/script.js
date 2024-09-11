//importando as classes
import { Maquina } from './Maquina.js'
//import { Grafico } from './Grafico.js'
import { PainelDeControle } from './PainelDeControle.js'
import { Servidor } from './Servidor.js'
import { Caretaker } from './Caretaker.js'

//criando objeto Server
const server = new Servidor("server")

//criando objeto Maquina
const maq1 = new Maquina("maquina 1", "polarArea", ["maquina1", "asdasd"]);
const maq2 = new Maquina("maquina 2", "polarArea", ["maquina2", "asdasd"]);
const maq3 = new Maquina("maquina 3", "polarArea", ["maquina3", "asdasd"]);
const maq4 = new Maquina("maquina 4", "polarArea", ["maquina4", "asdasd"]);

//criando objeto Painel 
const painel = new PainelDeControle("Painel do gabi", [maq1, maq2, maq3, maq4])
// const painel1 = new PainelDeControle("Painel da bi", [maq1, maq2, maq3])

//criando objeto Grafico
// const grafico1 = new Grafico("polarArea", ["maquina1", "maquina2", "maquina3"], [maq1, maq2, maq3])
// const grafico2 = new Grafico("polarArea", ["maquina2", "maquina3", "maquina4"], [maq2, maq3, maq4])
// const grafico3 = new Grafico("pie", ["maquina2", "maquina3", "maquina4"], [maq2, maq3, maq4])
// const grafico4 = new Grafico("pie", ["maquina2", "maquina3", "maquina4"], [maq2, maq3, maq4])


//adicionando grafico ao painel
painel.addGrafico(maq1, "canva")
painel.addGrafico(maq2, "canva1")
painel.addGrafico(maq3, "canva2")
painel.addGrafico(maq4, "canva3")

// painel1.addGrafico(maq3, "canva2")
// painel1.addGrafico(maq4, "canva3")

//adiciona paineis ao server
server.adicionarPainel(painel)
// server.adicionarPainel(painel1)

//adicionando maquinas ao server
server.adicionarMaquina(maq1)
server.adicionarMaquina(maq2)
server.adicionarMaquina(maq3)
server.adicionarMaquina(maq4)


const caretaker = new Caretaker("caretaker")


function atualizarTemperaturas() {
    //FUNÇÃO OBSERVER -> chama todo os objetos na lista de paineis de server e manda os dados para eles
    server.atualizar()
    caretaker.save(server.createMemento())
    console.log(caretaker.getListaMementos())


    console.log("--------")
}
function iniciarAtualizacao() {
    //função que chama o atualizarTemperaturas com um delay
    atualizarTemperaturas();
    
    setInterval(atualizarTemperaturas, 1000);
}
//chama o metodo quando a janela carregar
window.onload = iniciarAtualizacao;

