// #1
// const url = 'https://jsonplaceholder.typicode.com/posts'

// fetch(url)
// .then((response)=>{
//     if(response.ok){
//         return response.json()
//     }
//     else{
//         console.log("erro")
//     }
// })
// .then((data)=>{
//     data.forEach(element => {
//         console.log(element.title)
//     });
// })


// #2
// const url = 'https://jsonplaceholder.typicode.com/comments'

// fetch(url)
// .then((response) =>{
//     if(response.ok){
//         return response.json()
//     }
//     else{
//         console.log("erro")
//     }
// })
// .then((data) =>{
//     data.forEach(element => {
//         if(element.postId==1){
//             if(element.body.includes("dolor")){
//                 console.log(element)
//             }
//         }
//     });
// })




document.getElementById("cepForm").addEventListener("submit", async(event) =>{
    event.preventDefault();
    const cep = document.getElementById("cep").value

    const url = `https://viacep.com.br/ws/${cep}/json/`

    try{
        const response =  await fetch(url)
        if(!response.ok){
            throw new Error("Erro ao buscar o CEP")
        }
        const data = await response.json()

        if(data.erro){
            alert("CEP não encontrado")
            return
        }

        document.getElementById("logradouro").textContent = `logradouro: ${data.logradouro}`
        document.getElementById("bairro").textContent = `bairro: ${data.bairro}`
        document.getElementById("localidade").textContent = `cidade: ${data.localidade}`
        document.getElementById("uf").textContent = `estado: ${data.uf}`

    }catch(erro){
        console.log(erro)
    }

})