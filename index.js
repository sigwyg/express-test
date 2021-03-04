const express = require('express')

const app = express()
var path = require('path');
const port = 3003

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})
app.get('/send', (req, res) => {
  res.sendFile(path.join(__dirname + '/send.html'))
})

app.post('/auth', (req, res) => {
  //res.send("Received POST Data!");
  res.redirect('/send')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
