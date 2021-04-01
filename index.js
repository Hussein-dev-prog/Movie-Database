const express = require('express')
const app = express()
app.use('/static', express.static('public'));
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(3000, () => console.log('ok'));
app.get('/test', (req, res) => {
    res.status(200).send("ok")
})
app.get('/time', (req, res) => {
    let time = TIME;
    res.status(200).send(String(time));
})
