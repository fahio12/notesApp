const mongoose = require('mongoose');
// var DateOnly = require('mongoose-dateonly')(mongoose);
const {Schema}  = mongoose;

const NoteSchema = new Schema({
  name: {
    type:String,
    required: true
  },
  Time: {
    type:String,
    required: false
  },
  date: {
    type:Date,
    required: false
  },
  location: {
    type:String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  author: {
    type:String,
    required:true
  }
});

module.exports = mongoose.model('Note', NoteSchema);
