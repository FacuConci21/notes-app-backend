const { Router } = require('express');
const router = Router();

const { getNotes, getNoteById, createNote, updateNote, deleteNote } = require('../controllers/notes-controller');

router.route('/')
    .get(getNotes)
    .post(createNote);

router.route('/:id')
    .get(getNoteById)
    .delete(deleteNote)
    .put(updateNote);

module.exports = router;