const Joi = require('joi');

const taskSchema = Joi.object({
  title: Joi.string().required(),
  status: Joi.string().valid('pending', 'completed').required(),
});

const updateTaskSchema = Joi.object({
  title: Joi.string(),
  status: Joi.string().valid('pending', 'completed'),
}).or('title', 'status');

exports.validateTask = (req, res, next) => {
  const { error } = taskSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};

exports.validateUpdateTask = (req, res, next) => {
  const { error } = updateTaskSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};






