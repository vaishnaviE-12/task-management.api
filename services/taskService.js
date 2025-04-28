const { v4: uuidv4 } = require('uuid');
 const storage = require('../utils/storage');

// // Get all tasks
exports.getAllTasks = async (status, page, limit) => {
  let tasks = storage.getTasks();
  if (status) {
    tasks = tasks.filter(task => task.status === status);
  }
  const start = (page - 1) * limit;
  const paginatedTasks = tasks.slice(start, start + parseInt(limit));
  return paginatedTasks;
};

// // Get task by ID
exports.getTaskById = async (id) => {
  const tasks = storage.getTasks();
  return tasks.find(task => task.id === id);
};

// // Create a task
exports.createTask = async (data) => {
  const tasks = storage.getTasks();
  const newTask = { id: uuidv4(), ...data };
  tasks.push(newTask);
  storage.saveTasks(tasks);
  return newTask;
};

// // Update a task
exports.updateTask = async (id, data) => {
  const tasks = storage.getTasks();
  const index = tasks.findIndex(task => task.id === id);
  if (index === -1) return null;
  tasks[index] = { ...tasks[index], ...data };
  storage.saveTasks(tasks);
  return tasks[index];
};

// // Delete a task
exports.deleteTask = async (id) => {
  const tasks = storage.getTasks();
  const index = tasks.findIndex(task => task.id === id);
  if (index === -1) return null;
  tasks.splice(index, 1);
  storage.saveTasks(tasks);
  return true;
};




 