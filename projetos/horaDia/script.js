var date = new Date()
horasAtuais = date.getHours()

horas = document.getElementById("horas")

horas.innerText = horasAtuais
var imagem = document.getElementById("imagem")
if(horasAtuais>5 && horasAtuais<13){
    document.body.style.background= 'linear-gradient(to top, #FF9585, #75AFE6)';
    imagem.src="imagens/manha.jpg"
    document.body.style.color = "#000";

} else if(horasAtuais>=13 && horasAtuais<19){
    document.body.style.backgroundColor="#EA7A1F";
    imagem.src="imagens/tarde.avif"
    document.body.style.color = "#000";


}else{
    document.body.style.backgroundColor="#26437E";
    imagem.src="imagens/noite.avif"
    document.body.style.color = "#fff";


}
