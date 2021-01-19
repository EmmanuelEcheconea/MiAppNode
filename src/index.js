const express = require('express');
const morgan = require('morgan');
const app = express();

//Setting
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev')); //nos dice que peticiones nos hace  y demas
app.use(express.json());

//Routers
app.use(require('./routes/task.routers'));

//Static files


//Staring the server
app.listen(app.get('port'),()=>{
    console.log("estoy andando");
})