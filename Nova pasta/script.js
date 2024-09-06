class Maquina {
    constructor(nome, temperatura) {
        this.nome = nome;
        this.temperatura = temperatura;
    }
}

const maq1 = new Maquina("maquina 1", parseInt(Math.random() * 100));
const maq2 = new Maquina("maquina 2", parseInt(Math.random() * 100));
const maq3 = new Maquina("maquina 3", parseInt(Math.random() * 100));
const maq4 = new Maquina("maquina 4", parseInt(Math.random() * 100));

var div1 = document.getElementById("divmaq1")
var div2 = document.getElementById("divmaq2")
var div3 = document.getElementById("divmaq3")
var div4 = document.getElementById("divmaq4")

function atualizarTemperaturas() {
    
    

    maq1.temperatura = parseInt(Math.random() * 100);
    maq2.temperatura = parseInt(Math.random() * 100);
    maq3.temperatura = parseInt(Math.random() * 100);
    maq4.temperatura = parseInt(Math.random() * 100);

    document.getElementById("maq1").innerText = maq1.temperatura;
    document.getElementById("maq2").innerText = maq2.temperatura;
    document.getElementById("maq3").innerText = maq3.temperatura;
    document.getElementById("maq4").innerText = maq4.temperatura;
    
   

    if(maq1.temperatura>50){
        div1.style.background="red"
    }
    
    if(maq2.temperatura>50){
        div2.style.background="red"
    }
    
    if(maq3.temperatura>50){
        div3.style.background="red"

    }
    
    if(maq4.temperatura>50){
        div4.style.background="red"

    }
    

}

function iniciarAtualizacao() {
    atualizarTemperaturas();
    setInterval(atualizarTemperaturas, 2000);
}

window.onload = iniciarAtualizacao;
