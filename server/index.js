const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "todo",
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/api/pending", (req, res) => {
  const sqlGet =
    "SELECT todos.task, todos.id FROM todos WHERE todos.completed = false;";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

app.post("/api/create", (req, res) => {
  const task = req.body.task;

  const sqlInsert = "INSERT INTO todos (task, completed) VALUES (?, false);";

  db.query(sqlInsert, [task], (err, result) => {
    res.send(result);
  });
});

app.delete("/api/delete", (req, res) => {
    const id = req.body.id
    const sqlDelete = "DELETE FROM todos WHERE id = ?;";

    db.query(sqlDelete, [id], (err, result) => {
        res.send(result)
    })
})

app.put("/api/update", (req,res) => {
    const id = req.body.data.id
    const sqlUpdate = "UPDATE todos SET completed = TRUE WHERE id = ?;"

    db.query(sqlUpdate, [id], (err, result) => {
        res.send(result)
    })

})

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
