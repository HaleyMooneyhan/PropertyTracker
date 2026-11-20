const express = require('express')
const sqlite3 = require('sqlite3')
const app = express()
const port = 3000
app.get("/", (req, res) => {
    res.send("rental tracker is running");

})
app.listen(port, ()=> {
    console.log('Server running on port 3000')
})