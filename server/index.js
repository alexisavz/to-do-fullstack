const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "todo"
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get("/", (erq, res) => {})

app.get("/api/pending", (req, res) => {
    const sqlGet = "SELECT todos.task, todos.id FROM todos WHERE todos.completed = false;"
    db.query(sqlGet, (err, result) => {
        res.send(result)
    })
})

app.listen(3001, () => {
    console.log("Server running on port 3001")
})