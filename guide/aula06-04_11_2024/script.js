const mensagem = document.getElementById("mensagem")
const imagem = document.getElementById("imagem")
mensagem.innerHTML = "texto simples"

imagem.setAttribute("src", "gatooParaCss.jpg")

imagem.setAttribute("alt", "algo novo")

mensagem.classList.add("classeok")
mensagem.classList.toggle("ativo")
mensagem.classList.toggle("ativo")


const novoParagrafo = document.createElement("p")
novoParagrafo.textContent = "novo paragrafo"

mensagem.appendChild(novoParagrafo)


const lista = document.getElementById("lista")
const li = document.getElementById("li1")
lista.removeChild(li)

