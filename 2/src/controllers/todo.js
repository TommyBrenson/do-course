const Todo = require('../models/todo');

module.exports = {
    async getAllTodos(req, res) {
        try {
            const todosCollection = await Todo.findAll({ raw: true });
            res.status(200).render('home', {todos: todosCollection});
        } catch(e) {
            console.log(e);
            res.status(500).send(e);
        }
    },

    async createTodo(req, res) {
        try {
            const todo = await Todo.create({ 
                title: req.body.title, 
                checked: req.body.checked
            });
            const todosCollection = await Todo.findAll({ raw: true });
            res.status(201).redirect('/');
        } catch(e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async updateTodo(req, res) {
        
        console.log(req.body);
        try {
            const todo = await Todo.findOne(
                { 
                    where: { 
                        id: req.params.id,
                    }
                });
            if (todo) {
                const updatedTodo = await Todo.update(
                { 
                    title: req.body.title, 
                    checked: req.body.checked 
                }, 
                {   
                    where: {
                        id: req.params.id
                    }
                });
                const todosCollection = await Todo.findAll({ raw: true });
                res.status(201).render('home', {todos: todosCollection});
            } else {
                res.status(404).send('Todo not found!');
            }
        } catch(e) {
            console.log(e);
            res.status(500).send(e);
        }
    }, 

    async deleteTodo(req, res) {
        try {
            const todo = await Todo.findOne({ 
                where: { 
                    id: req.params.id 
                } 
            });
            if (todo) {
                const deletedTodo = await Todo.destroy({
                    where: {
                        id: req.params.id
                    }
                });
                const todosCollection = await Todo.findAll({ raw: true });
                await res.status(201).render('home', {todos: todosCollection});
            } else {
                res.status(404).send('Todo not found!');
            }
        } catch(e) {
            res.status(500).send(e);
        }
    },
}