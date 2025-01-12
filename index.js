import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;

app.use(express.static("public"))

app.use(bodyParser.urlencoded({extended:true}))

let year=new Date().getFullYear();

app.get("/",(req,res)=>{
  res.render("index.ejs",{
    year:year
  })
})
app.post("/submit",(req,res)=>{
  let n1=Math.random();
  n1=n1*first.length;
  n1=Math.floor(n1);

  let n2=Math.random();
  n2=n2*last.length;
  n2=Math.floor(n2);

  res.render("index.ejs",{
    first:first[n1],
    last:last[n2],
    year:year
  })
})

app.listen(port,()=>{
  console.log(`Server has been started on port ${port}`);
})

const first=[
  "shreya",
  "shubham",
  "shreyansh",
  "shreyas",
  "ansh",
  "sadhana",
  "sachin",
  "savitree",
  "saurav",
  "saurabh",
  "sahil",
  "sameer"
];

const last=[
  "sharma",
  "shukla",
  "yadav",
  "singh",
  "kumar",
  "gupta",
  "jain",
  "mohite",
  "patil",
  "kamble",
  "shinde",
  "bhagat"

];
