const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.get('/api/jokes/:id', JokeController.getOneJokeById);
    app.get('/api/jokes/random', JokeController.getOneRandomJoke);
    app.post('/api/jokes/new', JokeController.createNewJoke);
    app.put('/api/jokes/update/:id', JokeController.updateExistingJokeById);
    app.delete('/api/jokes/delete/:id', JokeController.deleteAnExistingJokeById);
}