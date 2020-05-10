const express = require("express")
const router = express.Router()

router.get("/",function(req,res){
  res.render("homepage")
})
router.get("/plans",function(req,res){
  res.render("plans")
})
router.get("/help",function(req,res){
  res.render("help")
})
router.get("/contact",function(req,res){
  res.render("contact")
})

module.exports = router
