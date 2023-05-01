const express = require('express')
const app = express()
const port = 3000

app.get('/homepage', (req, res) => {
    res.send(`<h1>Welcome</h1>` + `<p>Welcome to Home Page</p>`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})