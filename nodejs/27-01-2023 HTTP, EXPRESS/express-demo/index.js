const express = require('express');
const app = express();
const parser = require('body-parser');
app.use(parser.urlencoded({ extended: false }));

const db = {
    username: "bibin",
    password: "1234"
}

app.get('/', (req, res) => {
    res.status(200);
    res.send('<h1>Landing page</h1>');
});

app.get('/login', (req, res) => {
    res.status(200);
    res.sendFile(`${__dirname}/login.html`);
});

app.post('/login', (req, res) => {
    console.log(req.body.username)
    if (db.username === req.body.username && db.password === req.body.password) {
        res.send(`<h1> Hi ${req.body.username} you are logged in!....</h1>`)
    } else {
        res.send("<h1>username or password incorrect</h1>")
    }
})

app.listen(5000, () => {
    console.log('server started');
});
