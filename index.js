const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
});

 app.post("/", function(req, res){
   console.log(req.body)
   const num1 = Number(req.body.num1)
   const num2 = Number(req.body.num2)
   const result = num1 + num2
  res.send("Thanks for sending that. The answer is"+result)
});

app.listen(3000, function(){
  console.log("Listening to 3000")
});
