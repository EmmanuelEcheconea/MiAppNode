const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mern-tasks';

mongoose.connect(URI)
.then(db => console.log('la base de datos se conecto'))
.catch(err => console.log('error al conectar a la DB'));

module.exports = mongoose;