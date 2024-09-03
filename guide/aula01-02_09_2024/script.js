//comentario de uma linha

/**
 * 
 * comentario de mais linhas
 * 
 */
var a = 24
console.log(a)
var b = 34
console.log(b)
const date = new Date()
const anoAtual = date.getFullYear()


var i = prompt("Digite sua idade: ");

i <16?alert("voce não pode votar"):i <18?alert("você pode votar"):i <65?alert("você é obrigado a votar"):alert("seu voto é facultativo")


let anoQueNasceu = anoAtual-i;
alert(`voce nasceu no ano de ${anoQueNasceu}`);

let mes = parseInt(prompt("Digite um número de 1 a 12"));


let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

switch (mes){
    case 1:
        alert(meses[mes-1])
        break;
    case 2:
        alert(meses[mes-1])
        break;
    case 3:
        alert(meses[mes-1])
        break;
    case 4:
        alert(meses[mes-1])
        break;
    case 5:
        alert(meses[mes-1])
        break;
    case 6:
        alert(meses[mes-1])
        break;
    case 7:
        alert(meses[mes-1])
        break;
    case 8:
        alert(meses[mes-1])
        break;
    case 9:
        alert(meses[mes-1])
        break;
    case 10:
        alert(meses[mes-1])
        break;
    case 11:
        alert(meses[mes-1])
        break;
    case 12:
        alert(meses[mes-1])
        break;
    default:
        alert("numero invalido")
    
}
