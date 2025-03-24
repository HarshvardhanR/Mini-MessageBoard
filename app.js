const express = require('express');
const path = require('node:path');

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];  

app.get("/", (req, res)=>{
    res.render("index", {title:"Mini MessageBoard", messages: messages});
})

app.post("/new", (req,res)=>{
    messages.push({...req.body, added: new Date()})
    console.log(messages);
    res.redirect('/');
})


app.listen(3000, function(){
    console.log("server started");
})
