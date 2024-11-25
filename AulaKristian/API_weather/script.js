document.getElementById("submit").addEventListener("click", buscarCidade)


async function buscarCidade(event){
    event.preventDefault()
    const cidade = document.getElementById("cidade").value.trim()
    
    const url = `http://api.weatherapi.com/v1/current.json?key=a694c95224f147249a3192757242511&q=${cidade}&aqi=no`
    console.log(url)
    try{
        const response = await fetch(url)
        if(!response.ok){
            alert("erro ao fazer fetch")
        }
        const data = await response.json()
        if(data.erro){
            alert("Cidade não existe escreve direito rapaz")
            return
        }
        console.log()
        document.getElementById("temperatura").textContent = data.current.condition.text
        document.getElementById("imagem").textContent = data.current.condition.icon
        
        console.log(data)
    }
    catch(erro){
        console.log(erro)
    }
}