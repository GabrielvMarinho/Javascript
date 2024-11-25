// 1#
// function downloadSimu(){
//     return new Promise((resolve, reject) => {        
//         if(0.5 > Math.random()){
//             resolve("Dados carregados")
//         }
//         else{
//             reject("Dados não carregados")
//         }
//     })
// }
// downloadSimu().then((resultado =>{
//     console.log(resultado)
// })).catch((erro) =>{
//     console.log(erro)
// })




// 2#
// function loginTentativa(x){
    
//     return new Promise((resolve, reject) =>{
//         if(x ==="login"){
//             resolve("Deu certo login")
//         }
//         else{
//             reject("Deu errado login")
//         }
//     })
// }

// loginTentativa("login").then(m =>{
//     console.log(m)

//     console.log("Deu certooo")
// }).catch( m=>{
//     console.log(m)
//     console.log("Deu erradooo")

// })


// 3#
function pedidoFeito(x){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(x==="1"){
                resolve("Pedido terminado")
            }
            reject("foi o pedido")
        }, 2000)
        
    })
}

pedidoFeito("1").then((m) =>{
    console.log("deu certo")
}).catch((m) => {
    console.log("Deu errado")
}).finally(() =>{
    console.log("sempre vai ta aqui")
})