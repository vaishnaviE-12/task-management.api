let tasks = [];

exports.getTasks = () => {
  return tasks;
};

exports.saveTasks = (newTasks) => {
  tasks = newTasks;
};
