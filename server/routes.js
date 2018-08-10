const userController = require('./controllers/user-controller');

module.exports = (app) => {

    app.options('/api/*', (req, res) => {
        res.status(201).end()
    });

    app.get('/', (req, res) => {
        res.send({Message: "I am open"})
    })

    // User APIs
    app.post('/api/user/signup', userController.signupUser);
}