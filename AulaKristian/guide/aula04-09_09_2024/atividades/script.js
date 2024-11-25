//-------------------   1

var numero = -2
numero >0? console.log("positivo"):numero<0?console.log("negativo"):console.log("igual á zero")

//-------------------   2
var nota1 = 8;
var nota2 = 9;
var nota3 = 5;
var media = (nota1+nota2+nota3)/3

media >7?console.log("Aprovado"):media>2.5?console.log("em exame"):console.log("reprovado")
//-------------------   3

for(var i=0; i<30; i+=3){
    console.log(i)
}
//-------------------   4
fatorial = 5
fat =1
for(var i=1; i<=fatorial; i++){
    fat = fat*i
    console.log(fat)
}

//-------------------   5

ano = 2026
if(ano%100!=0 && ano%4==0 ){
    console.log("bissexto")
}
else{
    console.log("não bissexto")
}
//-------------------   6

tempC = 0
tempF = (tempC * 9/5) + 32
console.log(tempF)

//-------------------   7

let string = "ovos"
if(string == string.split("").reverse().join("")){
    console.log("é palindromo")
}
else{
    console.log("não é palindromo")
}


//-------------------   8

let array = [1, 3, 523, 2, 5, 22, 4, 43, 22]
console.log(Math.max.apply(null, array))

//-------------------   9

let array1=[10, 1, 4, 5, 2, 4, 6, 8, 1, 9]
var aux;
for(var i=0; i<array1.length; i++){
    
    if(array1[i]>array1[i+1]){
        aux = array1[i]
        array1[i] = array1[i+1]
        array1[i+1] = aux
        i -=i

    }
}
console.log(array1)

//-------------------   1.1

function adicionar(x, y){
    return x+y
}
console.log(adicionar(10, 6))

//-------------------   1.2
function subtrair(x, y){
    return x-y
}
console.log(subtrair(10, 6))

//-------------------   1.3
function produto(x, y){return x*y}
console.log(produto(6, 10))

//-------------------   1.4
function ehPar(x){
    return x%2==0
}
console.log(ehPar(5))

//-------------------   1.5

function calcularMedia(array){
    var sum=0
    array.forEach(elemento => {
        sum +=elemento
    });
    return sum
}

console.log(calcularMedia([3, 4, 4, 6, 2, 2, 4, 78]))

//-------------------   1.6
function maiuscula(string){
    return string.toUpperCase()
}
console.log(maiuscula("testezao"))

//-------------------   1.7

function maiorQue(arrayx, num){
    
    const final = arrayx.filter(element => element>num)
    
    return final;
}
console.log(maiorQue([3, 5, 5, 2, 3, 5, 3], 4))

//-------------------   1.8


function quantasVezes(array99, num){
    return array99.filter(elemento => elemento===num).length
}
console.log("\n", quantasVezes([2, 3, 2, 1, 4, 5, 3, 8, 8, 76], 3))


//-------------------   1.9

function contarVogais(string){
    string = string.split("");
    var vogais = "aeiou";
    var cont=0;
    string.forEach(elemento =>{
        if(vogais.includes(elemento))
        cont++
    });
    return cont
}
console.log(contarVogais("teste bem aqui"))

//-------------------   1.10
function ateOnum(num){
    var array=[]
    for(var i=1 ; i<=10; i++){
        array.push(i)
    }
    return array
}
console.log(ateOnum(10))

//-------------------   1.11

const carro = {
    marca: "toyota",
    modelo: "modelo",
    ano: "2020",

    getIdade(){
        return 2024-this.ano;
    },
    getDescricao(){
        string = this.marca+" -- "+this.modelo+" -- "+this.ano;
        return string
    }
}
console.log(carro.marca)
carro.ano = "2025"
console.log(carro.getIdade())
console.log(carro.getDescricao())

//-------------------   1.12
function aleat(){
    return parseInt(Math.random()*100)
}
console.log(aleat())

//-------------------   1.13

var hoje = new Date()
var cemDias = new Date(hoje)
cemDias.setDate(hoje.getDate()+100)
console.log(cemDias)
console.log(cemDias)

//-------------------   1.14

const conta = {
    saldo: 0,
    titular: "gabriel",
    depositar(quantia){
        this.saldo +=quantia
    },
    
    sacar(quantia){
        this.saldo -=quantia
    },
    verSaldo(quantia){
        return this.saldo
    }
}


//-------------------   1.15

var frutas = ["maça", "banana", "laranja"]
console.log(frutas[1])
frutas.push("manga")
console.log(frutas)
frutas.reverse().pop()
frutas.sort()
console.log(frutas)
console.log(frutas.length)
for(var i=0; i<frutas.length; i++){
    console.log(frutas[i])

}
frutas.forEach(elemento => {
    console.log(elemento)
})

var arrayTamanho = frutas.map(function(fruta){
    return fruta.length
});
console.log(arrayTamanho)

var arrayCondi = frutas.filter(function(fruta){
    if(fruta.length>5){
        return fruta
    }
})
console.log(arrayCondi)

arrayNum = [2, 3, 5, 6, 3, 7, 9]
var somArray = arrayNum.reduce(function(sum, elemento){
    return sum+elemento
})
console.log(somArray)