require('./modals/db');

const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');

const PORT =process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const user = require('./routes/api/user');
app.use('/api/user',user);

const advertisement = require('./routes/api/advertisement');
app.use('/api/advertisement',advertisement);

app.listen(PORT,()=>{
    console.log("Server is running on port : "+ PORT);
});

