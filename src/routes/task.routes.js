const express = require('express');
const router = express.Router();
const NoteModel = require('../models/notes')

//All post
router.get('/', async (req, res) => {
   const notesRs = await NoteModel.find();  //consult all data in that collection  //async
   res.json(notesRs);
});

//Create note  //status:'Creando post'
router.post('/', async (req, res) => {
   // console.log(req.body);
   //catch/get sended values by user
    const {title, content, author} = req.body;
    var newNote = new NoteModel({
        title: title,
        content: content,
        author: author
    });

    console.log(newNote);
    //save note in DB
    await newNote.save();
    
    res.json({
        message:'Post Guardado'
     });
 });


//Read post //get() 1 nota /:id
router.get('/:id', async (req, res) => {
    //console.log(req.params.id);
    const nota = await NoteModel.findById(req.params.id);
    res.json(nota);
 });

//Edit post //put() /:id  
router.put('/:id', async (req, res) => {
    console.log(req.params.id, req.body);
    const {title, content, author} = req.body;
    const notaU = await NoteModel.findByIdAndUpdate(req.params.id, 
        {
            title,
            content,
            author
        }
    );
    //findOneAndUpdate  //función más actual
    res.json({
        status:'Editando post id señalado'
     });
 });

 //Delete post //delete()
router.delete('/:id', async (req, res) => {
    const notaD = await NoteModel.findByIdAndDelete(req.params.id);    
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

module.exports = router;