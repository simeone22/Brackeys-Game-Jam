let express = require('express');
let http = require('http');
let app = express();

//Richiesta pagina home
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
});
app.get('/levels/*', (req, res) => {

});
app.get('/lobbies', (req, res) => {
    res.sendFile(__dirname + '/pages/lobbies.html');
});
app.get('/*.js', (req, res) => {
    res.sendFile(__dirname + '/scripts/' + req.params[0] + '.js');
});
app.get('/audio/*', (req, res) => {
    res.sendFile(__dirname + '/media/audio/' + req.params[0]);
});
app.get('/images/*', (req, res) => {
    res.sendFile(__dirname + '/media/images/' + req.params[0]);
});
app.get('/*.css', (req, res) => {
    res.sendFile(__dirname + '/css/' + req.params[0] + '.css');
});
let server = http.createServer(app);
server.listen(8080);