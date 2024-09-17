let ranking=[]
var botao = document.getElementById("botao")
botao.addEventListener("click", iniciarJogo)
function iniciarJogo(){
    let numero = parseInt(Math.random()*100);
    var nome = prompt("Digite seu nome: ");
    var cont = 0
    do{
        cont++
        var chute = prompt("Digite seu chute (1-100): ");
        if(chute>numero){
            alert("palpite muito alto");
        }else if(chute<numero){
            alert("palpite muito baixo")
        }else{
            alert(`VOCÊ ACERTOU COM ${cont} TENTATIVAS`)
            break;
        }
    }while(true);
    
    ranking.push({nome:nome, tentativas:cont})
    ranking.sort((a, b) => a.tentativas - b.tentativas);
    if(ranking.length==11){
        ranking.pop()
    }

    
    var div = document.getElementById("texto")
    while(div.firstChild){
        div.removeChild(div.firstChild)
    }
    ranking.forEach(element => {
        var h1 = document.createElement("h1")
        h1.innerText += element.nome +" - "+element.tentativas
        div.appendChild(h1)
    });

    
}
