let express = require('express');
let http = require('http');
let app = express();

//app.get()
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
});
let server = http.createServer(app);
server.listen(80);