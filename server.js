require('./modals/db');

const express = require ('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes= express.Router();
const PORT =process.env.PORT || 5000;

app.use(bodyParser.json());

const users = require('./routes/api/user');
app.use('/api/user',users);

app.listen(PORT,()=>{
    console.log("Server is running on port : "+ PORT);
});

