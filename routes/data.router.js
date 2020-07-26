module.exports = function(app) {

    var jogadores = require('../controllers/data.controllers.js');

    // Create a new Customer
    app.post('/api/jogadores', jogadores.create);

    // Retrieve all Customer
    app.get('/api/jogadores', jogadores.findAll);

    //Save Players in data.json
    app.get('/api/jogadores/save', jogadores.save);

    // Retrieve a single Customer by Id
    app.get('/api/jogadores/:name', jogadores.findOne);

    // Update a Customer with Id
    app.put('/api/jogadores/:id', jogadores.update);

    // Delete a Customer with Id
    app.delete('/api/jogadores/:id', jogadores.delete);



}