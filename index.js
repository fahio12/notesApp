const express = require("express");
const app = express();
const exphbs = require("express-handlebars")
const path = require("path");
const mongoose = require('mongoose');

require('./database');

app.set("views",path.join(__dirname,"views"))

app.engine(".hbs",exphbs({
  defaultLayout:"main",
  layoutsDir:path.join(app.get("views"),"layouts"),
  partialstDir:path.join(app.get("views"),"partials"),
  extname:".hbs"
}))

app.set("view engine",".hbs")

// Routes
app.use(require("./routes/home"))

// static files
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT;
app.listen(port || 80,function(){
  console.log("Server started")
})
