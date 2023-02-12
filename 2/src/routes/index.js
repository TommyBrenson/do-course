const todoController = require('../controllers').todo;
const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        data: 'Todo API v1'
    })
});

router.get('/api/todos', todoController.getAllTodos);

router.post('/api/todo', todoController.createTodo);

router.put('/api/todos/:id', todoController.updateTodo);

router.delete('/api/todos/:id', todoController.deleteTodo);

module.exports = router;