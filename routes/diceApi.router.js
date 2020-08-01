module.exports = function(app) {
    var dice = require("../controllers/dice.controllers.js");

    app.get('/api/dice/:dado', dice.roll);
}