const express = require('express');
const path = require('path');
const cors = require('cors');

const { mongoose } = require('./database');


const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(cors());//intercambio datos entre serv
app.use(express.json());//entender formato json, tipo bodyparser

//Routes
app.use('/blog/destinos/',require('./routes/task.routes'));
app.use('/blog/users/',require('./routes/task.users'));
//app.get('/api/destinos/', (req,res) => res.send('Nuevo post')));

//Static Files
//app.use(express.static(path.join(__dirname, 'public'))); //static files route, react


app.listen(app.get('port'), () =>{
    console.log(`Servidor en puerto ${app.set('port')}`); //parametrizando puerto, evitar problemas al montar en servidor prod
});
