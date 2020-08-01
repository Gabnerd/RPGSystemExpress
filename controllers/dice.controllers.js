var returnObj = {
    "numberFaces": 0,
    "numberDice": 0,
    "values": []
};

exports.roll = function (req, res) {
    var dice = req.params.dado;
    var numberDice = dice.split(dice[1])[0];
    var numberFaces = dice.split(dice[1])[1];
    returnObj = { "numberFaces": 0, "numberDice": 0, "values": [] };
    returnObj.numberFaces = numberFaces;
    for (let index = 0; index < numberDice; index++) {
        var value = Math.floor(Math.random() * (numberFaces - 1)) + 1;
        returnObj.numberDice = numberDice;
        returnObj.values.push({ "value": value });
    }
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(returnObj));
}