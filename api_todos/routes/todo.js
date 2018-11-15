const express = require('express');
const todoRouter = express.Router();
const todoController = require('../controllers/todoController');

todoRouter.get('/todo', todoController.getTodos);
todoRouter.post('/todo', todoController.createTodo);
todoRouter.get('/:todo_id', todoController.getTodo);
// todoRouter.put('/:todo_id', )




module.exports = todoRouter;
