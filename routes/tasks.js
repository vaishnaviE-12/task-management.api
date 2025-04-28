
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { validateTask, validateUpdateTask } = require('../middleware/validate');

// Routes
router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getTaskById);
router.post('/', validateTask, taskController.createTask);
router.put('/:id', validateUpdateTask, taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;

