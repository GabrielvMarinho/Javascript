
const fs = require("fs/promises")

path = "database.json"

async function createTask(listTasks){
    
    var json = {}
    
    json = await fs.readFile(path, "utf-8")

    
    json = JSON.parse(json)


    listTasks.forEach(task => {
        id = __getIncrementedId(json)
        json.tasks[id] = {
            "description":task.description,
            "responsable":task.responsable,
            "status":task.status
        }
    });
    
    await fs.writeFile(path, JSON.stringify(json, null, 2), "utf-8", (e) =>{})
        
    return "Tarefas Criadas"

}
    

   



function __getIncrementedId(json){
    i = 1
    while(true){
        if(!json.tasks[i]){
            return i
        }
        i = i+1
    }
}

async function listTasks(){

    var json = await fs.readFile(path, "utf-8")
    json = JSON.parse(json)
    
    return json.tasks
}


module.exports = {createTask, listTasks}