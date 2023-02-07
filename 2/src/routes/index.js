const todoController = require('../controllers').todo;

module.exports = (app) => {
    app.get('/api', (req, res) => {
        res.status(200).send({
            data: 'Todo API v1'
        })
    });

    app.get('/api/todos', todoController.getAllTodos);
    
    app.post('/api/todo', todoController.createTodo);

    app.put('/api/todos/:id', todoController.updateTodo);

    app.delete('/api/todos/:id', todoController.deleteTodo);
}