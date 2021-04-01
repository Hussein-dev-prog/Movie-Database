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
app.get('/hello/:id', (req, res) => {
    res.status(200).send("Hello, " + req.params.id)
})



app.get('/search', (req, res) => {
    const search = req.query.s;

    if (typeof search != 'undefined') {
        const response = {
            status: 200, message: "ok", data: search
        };

        res.send(response);
    }
    else {
        const response = {
            status: 500, error: true, message: "you have to provide a search"
        };


        res.status(500).send(response);

    }
});
