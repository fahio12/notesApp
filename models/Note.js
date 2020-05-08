const mongoose = require('mongoose');
var DateOnly = require('mongoose-dateonly')(mongoose);
const {Schema}  = mongoose;

const NoteSchema = new Schema({
  name: {
    type:String,
    required: true
  },
  time: {
    type:String,
    required: false
  },
  // saves one day b4 check l8er
  date: {
    type:DateOnly,
    required: true
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
  },
  deleted:{
    type: Boolean,
    default:false,
    required:true
  }
});

module.exports = mongoose.model('Note', NoteSchema);
