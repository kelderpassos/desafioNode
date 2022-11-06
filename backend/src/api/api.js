const express = require('express');
const cors = require('cors');
const loginRoute = require('../routes/loginRoutes')
const userRoute = require('../routes/userRoutes');
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(cors());

app.use(loginRoute);
app.use(userRoute);

module.exports = app;