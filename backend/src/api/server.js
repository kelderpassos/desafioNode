const api = require('./api');
require('dotenv').config();

const port = process.env.PORT;

api.listen(port, `Listening to ${port}`);
