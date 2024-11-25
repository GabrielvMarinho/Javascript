const draggable = document.querySelectorAll(".draggable")

const dropzone = document.querySelectorAll(".dropzone")
const gal = document.getElementById("gal")
const fav = document.getElementById("fav")
draggable.forEach(i=>{
    i.addEventListener('dragstart', (event) =>{
        event.dataTransfer.setData("text/plain", event.target.id)

        i.classList.add("dragging")
    })
    i.addEventListener("click", ()=>{
        fav.children.forEach(k =>{
            if(k.classList.contains(".draggable")){
                gal.appendChild(i)
                fav.removeChild(i)
            }
        })
        
    })
    
    i.addEventListener("dragend", ()=>{
        i.classList.remove("dragging")
        
    })
    
    

})

dropzone.forEach(ii=>{
    ii.addEventListener("dragover", (event)=>{
        event.preventDefault()
        ii.classList.add("hovering")
    })
    ii.addEventListener("dragleave", ()=>{
        ii.classList.remove("hovering")
    })
    ii.addEventListener('drop', (event)=>{
        event.preventDefault()
        const id= event.dataTransfer.getData("text/plain", event.target.id)
        ii.classList.remove("hovering")

        ii.appendChild(document.getElementById(id)); 
    })
})