const { createTask, listTasks } = require("./functions")
const cors = require('cors');

const express = require("express")

const app = express()
app.use(express.json())

const port = 9999


app.use(cors());

app.post("/insert-tasks", async (req, res) =>{
    tasks = req.body
    
    res.send(createTask(tasks))
})
app.get("/get-tasks", async (req, res) =>{
    
    
    tasks = await listTasks()
    
    res.json(tasks)
})


app.listen(port)