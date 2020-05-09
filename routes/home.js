const express = require("express")
const router = express.Router()

router.get("/",function(req,res){
  res.render("homepage")
})
router.get("/plans",function(req,res){
  res.render("plans")
})

module.exports = router
