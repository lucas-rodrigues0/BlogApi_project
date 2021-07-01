const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const userController = require('./controllers/userController');
const loginController = require('./controllers/loginController');
const categoriesController = require('./controllers/categoriesController');
const postController = require('./controllers/postController');

const app = express();

app.use(bodyParser.json());

app.use('/user', userController);
app.use('/login', loginController);
app.use('/categories', categoriesController);
app.use('/post', postController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
