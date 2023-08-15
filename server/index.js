const express = require('express')
const app = express()
const mysql = require('mysql2')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "todo"
})

app.get("/", (erq, res) => {})

app.listen(3001, () => {
    console.log("Server running on port 3001")
})