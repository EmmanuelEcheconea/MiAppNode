const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {mongoose} = require('./database');
const app = express();

//Setting
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev')); //nos dice que peticiones nos hace  y demas
app.use(express.json());

//Routers
app.use('/api/task',require('./routes/task.routers'));

//Static files
app.use(express.static( path.join(__dirname,'public')));

//Staring the server
app.listen(app.get('port'),()=>{
    console.log("estoy andando");
})