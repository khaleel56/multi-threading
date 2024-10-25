const express = require('express');
const router = express.Router();
const taskController = require('./controllers/taskController');

router.post('/computeTasks', taskController.computeTasks)

module.exports = router
