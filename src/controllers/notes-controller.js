const Note = require('../models/Notes');
const notesController = {};

notesController.getNotes = async (req,res)=>{
    const notes = await Note.find();
    res.json(notes);
};

notesController.createNote = async (req,res)=> {
    const { title, content, author, date } = req.body;

    const newNote = new Note({
        title: title,
        content: content,
        author: author,
        date: date
    })
    console.log(newNote);
    await newNote.save();

    res.json(newNote);
};

notesController.getNoteById = async (req,res)=> {
    const note = await Note.findById(req.params.id);
    res.json(note);
};

notesController.updateNote = async (req,res)=> {
    const { title, content, author } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, content, author } );
    res.json({ message: 'note updated', id: req.params.id });
};

notesController.deleteNote = async (req,res)=> {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: 'note deleted', id: req.params.id });
};

notesController.patchNote = (req,res)=> res.json({ message: 'Note attribute updated' });



module.exports = notesController;