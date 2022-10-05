const dotEnv = require('dotenv')
dotEnv.config()

const express = require('express');
const port = 3000;
const app = express();
const connectDb=require('./db/connect')

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const routeTasks = require('./routes/tasks');

app.use('/api/tasks', routeTasks);
//server
app.listen(port, () => {
    console.log(`listening on ${port}`);
    connectDb(process.env.MONGO_URI);
});