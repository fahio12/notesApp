const express = require("express");
const app = express();
const exphbs = require("express-handlebars")
const path = require("path");
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const session = require('express-session');
const cookieParser = require("cookie-parser")
const MongoStore = require("connect-mongo")(session)

require('./database');

mongoose.Promise = global.Promise;
const db = mongoose.connection

app.use(bodyParser.urlencoded({ extended: false }))

app.use(cookieParser());
app.use(session({
  secret: "secretforcookies",
  resave: false,
  saveUninitialized: true,
  store:new MongoStore({mongooseConnection:db})
}));

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
app.use(require("./routes/notes"))

// static files
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT;
app.listen(port || 80,function(){
  console.log("Server started")
})
