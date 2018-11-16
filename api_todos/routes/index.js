const express = require('express');
const router = express.Router();
const todoRouter = require('./todo');

router.use('/api', todoRouter);

module.exports = router;
