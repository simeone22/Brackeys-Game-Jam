let express = require('express');
let http = require('http');
let app = express();

//Richiesta pagina home
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
});
app.get('/background.js', (req, res) => {
    res.sendFile(__dirname + '/scripts/index/background.js');
});
app.get('/player.js', (req, res) => {
    res.sendFile(__dirname + '/scripts/games/player.js');
});
app.get('/controls.js', (req, res) => {
    res.sendFile(__dirname + '/scripts/games/controls.js');
});

let server = http.createServer(app);
server.listen(8080);