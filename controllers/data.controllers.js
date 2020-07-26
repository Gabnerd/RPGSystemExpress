var jogadores = {
    jogador1: {
        id: 1,
        nome: "Galrod1",
        vida: {
            maximo: 10,
            atual: 10
        },
        mana: {
            maximo: 1,
            atual: 0
        },
        movimento: 11,
        primeSocor: 20,
        sanidade: 25,
        exposicao: 0,
        luta: 36,
        forca: 36,
        destreza: 60,
        constituicao: 32,
        inteligencia: 28,
        perspicacia: 28,
        carisma: 32,
        level: 1,
        ataques: [{
            nome: "Cegar em área",
            atributos: "Alcance: 15m - Não gasta rodada - Uso único por luta"
        }],
        moedas: 500,
        inventario: [{
                nome: "Botas levianas",
                atributo: " + 2 movimento"
            },
            {
                nome: "Faca",
                atributo: "D5"
            },
            {
                nome: "Anel Brilhante",
                atributo: ""
            }
        ]
    },
    jogador2: {
        id: 2,
        nome: "Galrod2",
        vida: {
            maximo: 10,
            atual: 10
        },
        mana: {
            maximo: 1,
            atual: 0
        },
        movimento: 11,
        primeSocor: 20,
        sanidade: 25,
        exposição: 0,
        luta: 36,
        forca: 36,
        destreza: 60,
        constituicao: 32,
        inteligencia: 28,
        perspicacia: 28,
        carisma: 32,
        level: 1,
        ataques: [{
            nome: "Cegar em área",
            atributos: "Alcance: 15m - Não gasta rodada - Uso único por luta"
        }],
        moedas: 500,
        inventario: [{
                nome: "Botas levianas",
                atributo: " + 4 movimento"
            },
            {
                nome: "Faca",
                atributo: "D5"
            },
            {
                nome: "Anel Brilhante",
                atributo: ""
            }
        ]
    }
}

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

        // return
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