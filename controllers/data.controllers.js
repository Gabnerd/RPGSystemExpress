const fs = require('jsonfile');
var jogadores = require('./data.json');

exports.create = function(req, res) {
    var newPlayer = req.body;
    customers["jogador" + newPlayer.id] = newPlayer;
    console.log("--->After Post, customers:\n" + JSON.stringify(jogadores, null, 4));
    res.end("Post Successfully: \n" + JSON.stringify(jogadores, null, 4));
};

exports.findAll = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jogadores, null, 4));
};

exports.findOne = function(req, res) {
    var jogador
    for (let i = 0; i < 2; i++) {
        const element = jogadores["jogador" + (i + 1)];
        var name = req.params.name.toString();
        if (name == element.nome) {
            jogador = element;
        }
    }
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jogador, null, 4));
};

exports.update = function(req, res) {
    var id = parseInt(req.params.id);
    var updatedPlayer = req.body;
    if (jogadores["jogador" + id] != null) {
        // update data
        jogadores["jogador" + id] = updatedPlayer;
        // save
        fs.writeFile('./controllers/data.json', jogadores);
    } else {
        res.end("Don't Exist Customer:\n:" + JSON.stringify(updatedPlayer, null, 4));
    }
};

exports.delete = function(req, res) {
    var deletePlayer = jogadores["jogador" + req.params.id];
    delete jogadores["jogador" + req.params.id];
    console.log("--->After deletion, customer list:\n" + JSON.stringify(jogadores, null, 4));
    res.end("Deleted customer: \n" + JSON.stringify(deletePlayer, null, 4));
};

exports.save = function(req, res) {

}