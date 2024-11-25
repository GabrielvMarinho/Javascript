var stor = localStorage.getItem("Nvisitas")

if(localStorage.getItem("Nvisitas") !== null){
    localStorage.setItem("Nvisitas", parseInt(stor)+1)
}else{
    localStorage.setItem("Nvisitas", 0)
}

var contagem = document.getElementById("contagem")
contagem.innerText = stor

var bemVindo = document.getElementById("bemVindo")
var nomeText = document.getElementById("nomeText")


var localNome = localStorage.getItem("nome")

nomeText.innerText = localNome
bemVindo.innerText = "Seja bem vindo(a) "

function salvarNome(){
    var nome = document.getElementById("nome")
    nome = nome.value

    if(nome){
        localStorage.setItem("nome", nome)

        nomeText.innerText = nome

        
    }else{
        alert("Digite um nome válido!")
    }
}