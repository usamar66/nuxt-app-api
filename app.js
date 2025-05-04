const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/students', studentRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;