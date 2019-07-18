const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
  title: String,
  content: String,
  priority :Number
}, {
   timestamps:true
});

module.exports = mongoose.model('Note',NoteSchema);
