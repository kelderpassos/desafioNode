const app = require('./api');
require('dotenv').config()

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
