document.getElementById("submit").addEventListener("click", buscarCidade)


async function buscarCidade(event){
    event.preventDefault()
    const cidade = document.getElementById("cidade").value.trim()
    
    const url = `http://api.weatherapi.com/v1/current.json?key=a694c95224f147249a3192757242511&q=${cidade}&aqi=no`
    console.log(url)
    try{
        const response = await fetch(url)
        if(!response.ok){
            alert("Error fetching")
        }
        else{
            const data = await response.json()
            if(data.erro){
                alert("City doesn't exist")
                return
            }
            else{
                console.log("deu certo")
                document.getElementById("resultado").style.display = "flex"
                document.getElementById("condiAtual").textContent = data.current.condition.text
                document.getElementById("imagem").src = data.current.condition.icon
                document.getElementById("tempAtual").textContent = data.current.temp_c+"c°"
                document.getElementById("humidity").textContent = data.current.humidity+"%"
                const day = document.getElementById("mainPage")
        
                if(data.current.is_day){
                    day.classList.remove("night")
                    day.classList.add("day")
                }else{
                    day.classList.remove("day")
                    day.classList.add("night")
                }
            }
        }
       
        
        
        
    }
    catch(error){
        alert(error)
    }
}