const express = require("express")
const router = express.Router()

const Note = require("../models/Note")

router.get("/notes",function(req,res){
  console.log(req.sessionID);

  res.render("notes/all-notes")
})
router.post("/notes/new",async function(req,res){
  const body = req.body
  newNote = new Note(body);

  res.redirect("/notes")
})
module.exports = router
