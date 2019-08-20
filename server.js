const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

//Connect DB
connectDB();

app.get('/', (req, res) =>
    res.json({ msg: 'Welcome to Guillermo Hernandez personal website!' })
);

app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
