const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello Node and Express!'))
//app.listen(port, () => console.log('Aplikacja uruchomiona na porcie $port}!'))
app.listen(port, () => console.log(`Aplikacja uruchomiona na porcie ${port}!`));
