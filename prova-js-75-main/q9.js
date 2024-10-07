// q9.js
/**
 * Questão 9: Controle de compras em um supermercado
 *
 * Implemente uma função chamada controleDeCompras que recebe um array de objetos, onde cada objeto
 * representa um item de supermercado com as seguintes propriedades:
 *  - nome: string (nome do item)
 *  - quantidade: número (quantidade comprada)
 *  - preco: número (preço unitário do item)
 *
 * A função deve retornar um objeto com:
 * a) O valor total gasto na compra. (totalGasto)
 * b) O item mais caro (considerando o preço total: preco * quantidade) eo preço total desse item. (itemMaisCaro.nome e itemMaisCaro.precoTotal)
 * c) A lista de itens comprados (apenas os nomes). (listaItens)
 *
 * Requisitos:
 * 1. O array deve conter apenas objetos válidos com as propriedades especificadas.
 * 2. Se o array estiver vazio ou qualquer item não for válido, a função deve retornar null.
 * 3. O valor total deve ser calculado somando o preço total de cada item (quantidade * preco).
 * 4. O item mais caro deve ser o que tem o maior preço total.
 * 5. A lista de itens comprados deve conter apenas os nomes dos produtos.
 *
 * Exemplos:
 * controleDeCompras([
 *   { nome: "Arroz", quantidade: 2, preco: 5 },
 *   { nome: "Feijão", quantidade: 1, preco: 7 },
 *   { nome: "Leite", quantidade: 3, preco: 3 }
 * ]) deve retornar:
 * {
 *   totalGasto: 26,
 *   itemMaisCaro: { nome: "Leite", precoTotal: 9 },
 *   listaItens: ["Arroz", "Feijão", "Leite"]
 * }
 *
 * controleDeCompras([]) deve retornar null
 * controleDeCompras([{ nome: "Pão", quantidade: -2, preco: 5 }]) deve retornar null
 *
 * Exportação:
 * Certifique-se de exportar a função controleDeCompras para ser testada corretamente.
 */


function controleDeCompras(arrayObjetos){
    if(arrayObjetos.length===0){
        return null
    }
    
    var soma = 0
    var maiscaro = null
    var nomemaiscaro=null
    var listaItens=[]
    var totalGasto = 0
    var erro=false
    arrayObjetos.forEach(i => {
        if(i.preco<=0 || i.quantidade<=0){
            erro=true
        }
        listaItens.push(i.nome)
        soma = i.quantidade
        var tot = i.quantidade*i.preco
        totalGasto +=tot

        if(maiscaro===null){
            nomemaiscaro = i.nome
            maiscaro = tot
        }
        else if(maiscaro<(tot)){
            nomemaiscaro = i.nome
            maiscaro = tot
        }
    });
    if(erro){
        return null
    }
    var itemMaisCaro = {}
    itemMaisCaro.nome = nomemaiscaro
    itemMaisCaro.precoTotal = maiscaro


    return {totalGasto:totalGasto, itemMaisCaro:itemMaisCaro, listaItens:listaItens}
}



module.exports =controleDeCompras