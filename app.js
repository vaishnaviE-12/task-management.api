const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const tasksRouter = require('./routes/tasks');
const errorHandler = require('./middleware/errorHandler');


const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Rate limiter
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100,
});
app.use(limiter);

// Routes
app.use('/tasks', tasksRouter);


// Error Handling Middleware
app.use(errorHandler);

// Server

app.get('/', (req, res) => {
  res.send('Welcome to the Task Management App!');
});
app.listen(5000,()=>{
  console.log('server running at:http://localhost:5000/')
})
