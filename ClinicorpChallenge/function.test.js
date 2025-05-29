const fs = require('fs/promises');

const { createTask, listTasks } = require("./functions")

path = "database.json"

//teste populando banco de dados e testando, deleta o teste para nao popular o db com dados falsos
test("Adicionar uma task retorna ela em get-tasks", async ()=>{
    
    description = "Criar Login"
    responsable = "Bruno"
    _status = "Done"
    await createTask([{"description":description, "responsable":responsable, "status":_status}])

    tasks = await listTasks()

    taskExists = false

    for(i in tasks){
        console.log(tasks[i])
        if(tasks[i].description == description && tasks[i].responsable == responsable && tasks[i].status == _status ){
            taskExists = true
            delete tasks[i]
            console.log(tasks)
            json = {"tasks":tasks}
            await fs.writeFile(path, JSON.stringify(json, null, 2), 'utf-8');
            break
        }
    }

    expect(taskExists).toBe(true)


})
