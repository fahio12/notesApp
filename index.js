const express = require("express");
const app = express();

app.use(require("./routes/home"))

const port = process.env.PORT;
app.listen(port || 80,function(){
  console.log("Server started")
})
