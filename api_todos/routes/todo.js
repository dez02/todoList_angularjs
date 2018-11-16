const express = require('express');
const todoRouter = express.Router();
const todoController = require('../controllers/todoController');

todoRouter.get('/todo', todoController.getTodos);
todoRouter.post('/todo', todoController.createTodo);
todoRouter.get('/todo/:todo_id', todoController.getTodo);
todoRouter.delete('/todo/:todo_id', todoController.deleteTodo)

module.exports = todoRouter;
