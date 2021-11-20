const express = require('express');
const routerU = express.Router();
const usersModel = require('../models/users')

//All post
routerU.get('/', async (req, res) => {
   const usersRs = await usersModel.find();  //consult all data in that collection  //async
   res.json(usersRs);
});

//Create nota  //status:'Creando post'
routerU.post('/', async (req, res) => {
    console.log(req.body);
   //catch/get sended values by user
   const {nombre, apellido, edad, nacionalidad, profesion} = req.body;
    var newUser = new usersModel({
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        nacionalidad: nacionalidad,
        profesion: profesion
    });

    //console.log(newUser);
    //save new user
    await newUser.save();
    res.json({
        message:'User Guardado'
     });
 });


//Read user data //get() 1 usuario data /:id
routerU.get('/:id', async (req, res) => {
    //console.log(req.params.id);
    const nota = await usersModel.findById(req.params.id);
    res.json(nota);
 });

//Edit user //put() /:id  
routerU.put('/:id', async (req, res) => {
    const {nombre, apellido, edad, nacionalidad, profesion} = req.body; 
    //edit user  
    const userU = await usersModel.findByIdAndUpdate(req.params.id, 
        {
            nombre,
            apellido,
            edad,
            nacionalidad,
            profesion
        }
    );
    //findOneAndUpdate  //función más actual
    res.json({
        status:'Editando post id señalado'
     });
 });

 //Delete user //delete()
routerU.delete('/:id', async (req, res) => {
    const notaD = await usersModel.findByIdAndDelete(req.params.id);    
    res.json({
        status:'Elimina post id señalado'+notaD
     });
 });

 /*
 route.route(/)
    .get()
    .post()
 route.route(/:id)
    .get()
    .put()
    .delete()*/ 

 //

module.exports = routerU;