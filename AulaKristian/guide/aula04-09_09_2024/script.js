let frutas = ["maçã", "banana"];
console.log(frutas);

// push -> adiciona na ultima posição
frutas.push("uvinha", "laranjinha");
console.log(frutas);

// pop -> remove e retorna o valor
var fruta = frutas.pop();
console.log(fruta);
console.log(frutas);

// unshift -> adiciona ao inicio do array
frutas.unshift("pera", "abacaxi");
console.log(frutas);

//shift -> tira e retorn a primari posição
let primeiraFruta = frutas.shift();
console.log(frutas);
console.log(primeiraFruta);

//splice -> "(dita inicia, deleta baseado no inicio, adiciona no inicio setado)"
console.log(frutas);
frutas.splice(1, 1, "xxxx");
console.log(frutas);

//concat -> junta duas arrays sem alterar nenhuma delas
let frutas2 = ["kiwi", "abacate"];
let todasFrutas = frutas.concat(frutas2)
console.log(todasFrutas);

// forEach -> passa por todos os elementos
todasFrutas.forEach(fruta =>{
    console.log(fruta);
})
todasFrutas.forEach(function(item, indice){
    console.log(indice, item);
})

// map -> itera por cada posição e altera um novo array com função callback
let frutas3 = frutas.map(function(fruta){
    return fruta;
});
console.log(frutas3)


// filter -> retorna todos os valores
let frutas4 = frutas.filter(function(fruta){
    return fruta.length === 6;
});
console.log(frutas4)

// find -> cria um novo array e passa só o primeiro que acha
let frutas5 = frutas.find(function(fruta){
    return fruta.length === 6;
});
console.log(frutas5)

// findIndex -> a posição do primeiro elemento com o valor epecífico
let frutas6 = frutas.findIndex(function(fruta){
    return fruta.length === 5;
});
console.log(frutas6)


// every -> verifica se todos os elementos satisfazem
let frutas7 = frutas.every(function(fruta){
    return fruta.length === 5;
});
console.log(frutas7)

// every -> verifica se pelo menos um elemento satisfaz
let frutas8 = frutas.some(function(fruta){
    return fruta.length === 4;
});
console.log(frutas8)

// sort -> ordem alfabetica
console.log(frutas)
frutas.sort()
console.log(frutas)


// reverse -> inverte o array
console.log(frutas)
frutas.reverse()
console.log(frutas)


// join -> retorna em uma string
console.log(frutas)
var frutinhas = frutas.join(" -- ")
console.log(frutinhas)

// slice -> retorna um intervalo de array
var listinha = frutas.slice(1, 3)
console.log(listinha)


// include -> retorna se esta incluido ou não
var teste = frutas.includes("banana")
console.log(teste)


// OBJETO ->
const carro = {
    marca: "toyota",
    modelo: "corolla",
    ano: 2020,
    ligar: function(){
        console.log("o carro esta ligando")
    }
}


console.log(carro.marca);
