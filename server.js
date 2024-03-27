// const objecct={
//     name:"akanksha",
//     age:22
// };
// const json=JSON.stringify(objecct);
// console.log(json);
// console.log(typeof json)
const express= require("express");
const app=express();
const db=require("./db");
const person=require('./models/person')
const menuItem=require('./models/menuItem')

const bodyParser=require("body-parser");
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("this is home page:you can place your order")
})

//menuItem
const menuItemRoutes=require('./routes/menuItemRoutes');
app.use('/menuItem',menuItemRoutes);
//person

const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);

app.listen(3000, ()=>{
    console.log("server is listening on  port 3000")
})