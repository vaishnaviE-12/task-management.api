const taskService = require('../services/taskService');

// Get all tasks
exports.getAllTasks = async (req, res, next) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    const tasks = await taskService.getAllTasks(status, page, limit);
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

// Get task by ID
exports.getTaskById = async (req, res, next) => {
  try {
    const task = await taskService.getTaskById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    next(err);
  }
};

// Create a new task
exports.createTask = async (req, res, next) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

// Update task
exports.updateTask = async (req, res, next) => {
  try {
    const task = await taskService.updateTask(req.params.id, req.body);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    next(err);
  }
};

// Delete task
exports.deleteTask = async (req, res, next) => {
  try {
    const result = await taskService.deleteTask(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    next(err);
  }
}








