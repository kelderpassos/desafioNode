const express = require('express');
const cors = require('cors');
const userRoute = require('../routes/userRoutes');

const api = express();

api.use(express.json());
api.use(cors());

api.use(userRoute);

module.exports = api;