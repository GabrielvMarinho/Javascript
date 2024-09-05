a = document.getElementById("enviar")
a.addEventListener("click", dados)
var sexo = null
var imagem = document.getElementById("imagem")
function dados(){
    //testar se é uma string 
    var data = document.getElementById("anoNasc").value
    if(data=="" || data>2024){
        alert("DATA INVÁLIDA")
        return 0
    }
    
    var idade = 2024-data

    var masc = document.getElementById("masc")
    var femin = document.getElementById("femin")

    if(masc.checked){

        if(idade>50){
            imagem.src="imagens/homemvelho.jfif"
        }
        else{
            imagem.src="imagens/homemjovem.avif"

        }
    }
    else if(femin.checked){
        if(idade>50){
            imagem.src="imagens/mulhervelha.jfif"
        }
        else{
            imagem.src="imagens/mulhernova.webp"

        }
    }
    else{
        alert("SELECIONE UM GÊNERO")
    }
    

}