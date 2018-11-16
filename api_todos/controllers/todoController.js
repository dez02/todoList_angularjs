const mongoose = require('mongoose');
const Todo = require('../models/todoModel');

// GET ALL TODOS
exports.getTodos = (req, res) => {
  Todo.find(function(err, todos) {
    if (err)
      res.send(err)
    res.json(todos); // return all todos in JSON format
	});
};

// POST TODO
exports.createTodo = (req, res) => {
	const todo = new Todo();
	todo.name = req.body.name;

	todo.save(err => {
		if(err) {
			if (err.code == 11000)
				return res.json({ success: false, message: 'A todo with that\
				name already exists. '});
			else
				return res.send(err);
		}
		res.json({ message: 'Todo created!' });
	});
};

// GET TODO
exports.getTodo = (req, res) => {
	Todo.findById(req.params.todo_id, (err, todo) => {
		if(err) res.send(err);
			res.json(todo);
	});
};

// UPDATE TODO

// exports.updateTodo = (req, res) => {
// 	Todo.findById(req.params.todo_id, (err, todo) => {
// 		if(err) res.send(err);
// 		if (req.body.name) todo.name = req.body.name;
// 	});
// };




