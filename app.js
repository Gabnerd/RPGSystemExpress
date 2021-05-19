var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var indexRouter = require('./routes/index');
var mestreRouter = require('./routes/mestre');
var jogadorRouter = require('./routes/jogador');
var socket = require('socket.io');
var cors = require("cors");

app.use(cors());

app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/mestre", mestreRouter);
app.use("/jogador", jogadorRouter);


require('./routes/data.router.js')(app);
require('./routes/diceApi.router.js')(app);

var server = app.listen(process.env.PORT || 3000, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)

});

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log("new connection: " + socket.id);
    socket.on('update', update);

    function update(data) {
        socket.broadcast.emit('update', data);
    }
}
