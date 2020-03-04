require('./modals/db');

const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT =process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const user = require('./routes/api/user');
app.use('/api/user',user);


app.listen(PORT,()=>{
    console.log("Server is running on port : "+ PORT);
});

