const express = require('express');
const cors = require('cors');
const { DB } = require('./DB');
const userRouter = require('./routes/users');

const postRouter = require('./routes/posts');
require('dotenv').config();
const app = express();
const port = 3001;

// Database connection
DB()
app.use(express.json())
app.use(cors())
app.use('/api', userRouter);
app.use('/api', postRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
