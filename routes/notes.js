const express = require("express")
var DateOnly = require('mongoose-dateonly')
const router = express.Router()

const Note = require("../models/Note")

router.get("/notes",async function(req,res){
  currentUser = req.sessionID
  notes = await Note.find({author:currentUser,deleted:false})
  res.render("notes/all-notes",{notes})
})
router.post("/notes/new",async function(req,res){
  var body = req.body
  newNote = new Note(body);
  newNote.author = req.sessionID
  await newNote.save();
  console.log("Note saved!")
  res.redirect("/notes")
})
router.post("/notes/delete/:id",async function(req,res){
  await Note.findByIdAndUpdate(req.params.id, {deleted: true});
  res.redirect("/notes")
})
router.get("/notes/edit/:id",async function(req,res){
  note = await Note.findById(req.params.id)
  res.render("notes/edit",{note})
})
router.post("/notes/edit/:id",async function(req,res){
  const { name, date, time,location,description} = req.body;
  note = await Note.findByIdAndUpdate(req.params.id,{name,date,time,location,description})
  res.redirect("/notes")
})
module.exports = router
