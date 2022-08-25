let express = require('express');
let http = require('http');
let app = express();

//Richiesta pagina home
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
});
app.get('/*.js', (req, res) => {
    res.sendFile(__dirname + '/scripts/' + req.params[0] + '.js');
});
app.get('/*.css', (req, res) => {
    res.sendFile(__dirname + '/css/' + req.params[0] + '.css');
});

let server = http.createServer(app);
server.listen(8080);