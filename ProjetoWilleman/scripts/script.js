import { Maquina } from './Maquina.js'
import { Grafico } from './Grafico.js'
import { PainelDeControle } from './PainelDeControle.js'

const maq1 = new Maquina("maquina 1", parseInt(Math.random() * 50+50));
const maq2 = new Maquina("maquina 2", parseInt(Math.random() * 50+50));
const maq3 = new Maquina("maquina 3", parseInt(Math.random() * 50+50));
const maq4 = new Maquina("maquina 4", parseInt(Math.random() * 50+50));
// var div1 = document.getElementById("divmaq1");
// var div2 = document.getElementById("divmaq2");
// var div3 = document.getElementById("divmaq3");
// var div4 = document.getElementById("divmaq4");
// var canva = document.getElementById("canva");


const grafico1 = new Grafico("polarArea", ["maquina1", "maquina2", "maquina3"], [maq1, maq2, maq3])
const painel = new PainelDeControle("Painel do gabi")
grafico1.adicionarDados()
console.log(grafico1.listaMaquinas[0].getTemperatura())

painel.addGrafico(grafico1)
painel.mostrarGrafico("canva", 0)

//atualizar os dados do grafico
painel.atualizarGrafico(0)



// function atualizarTemperaturas() {
    
//     maq1.temperatura = parseInt(Math.random() * 50+50);
//     maq2.temperatura = parseInt(Math.random() * 50+50);
//     maq3.temperatura = parseInt(Math.random() * 50+50);
//     maq4.temperatura = parseInt(Math.random() * 50+50);

//     document.getElementById("maq1").innerText = maq1.getTemperatura();
//     document.getElementById("maq2").innerText = maq2.getTemperatura();
//     document.getElementById("maq3").innerText = maq3.getTemperatura();
//     document.getElementById("maq4").innerText = maq4.getTemperatura();
    

//     console.log(maq1.getTemperatura)
//     div1.classList.remove("vermelho", "branco");
//     div2.classList.remove("vermelho", "branco");
//     div3.classList.remove("vermelho", "branco");
//     div4.classList.remove("vermelho", "branco");

    
//     mudarCor(maq1, div1)
//     mudarCor(maq2, div2)
//     mudarCor(maq3, div3)
//     mudarCor(maq4, div4)
//     // grafico.data.datasets[0].data = [maq1.getTemperatura(), maq2.getTemperatura(), maq3.getTemperatura(), maq4.getTemperatura()];
//     // grafico.update();
// }
// function mudarCor(maq, div){
    
//     if(maq.temperatura>50){
//         div.classList.add("vermelho")
//     }
//     else{
//         div.classList.add('branco');
//     }
// }
// function iniciarAtualizacao() {
//     atualizarTemperaturas();
//     setInterval(atualizarTemperaturas, 1000);
// }

// const chart = document.getElementById("canva")


// window.onload = iniciarAtualizacao;

