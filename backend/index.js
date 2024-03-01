const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); 

//ROUTES//

//POST tasks

app.post("/tasks", async (req, res) => {
  try {
   
    const { description } = req.body;
    const newTask = await pool.query(
      "INSERT INTO tasks (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newTask.rows[0]);

  } catch (err) {
    console.error(err.message);
  }
});

//GET Tasks

app.get("/tasks", async(req, res) =>{
  try {
    const allTasks = await pool.query("SELECT * FROM tasks");
    res.json(allTasks.rows);
  } catch (err) {
    console.error(err.message)
  }
})

//Gerando uma Task

app.get("/tasks/:id", async (req, res) =>{
  try {
    const { id } = req.params;
    const tasks = await pool.query("SELECT * FROM tasks WHERE tasks_id = $1", [
      id
    ]);
    res.json(tasks.rows[0]);

  } catch (err) {
    console.error(err.message)
  }
});

//PUT Task

app.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTasks = await pool.query(
      "UPDATE tasks SET description = $1 WHERE tasks_id = $2", 
    [description, id]
    );

    res.json("Task foi atualizada!");

  } catch (err) {
    console.log.error(err.message)
  }
});

//DELETE task

app.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await pool.query("DELETE FROM tasks WHERE tasks_id = $1", [
      id
    ]);
    res.json("A task foi deletada!");
  } catch (err) {
    console.log(err.message);
  }
});


app.listen(5000,() => {
  console.log("Servidor online : porta 5000");
});