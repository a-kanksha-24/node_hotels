const mongoose=require("mongoose");
// const mongoURL="mongodb://localhhost:27017/";
const mongoURL=("mongodb://127.0.0.1:27017/person")
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const db=mongoose.connection;
db.on('connected',()=>{
    console.log("connected to db");
});
db.on("error",(err)=>{
    console.log("error in db");
});
db.on("disconnected",()=>{
    console.log("disconnected to db");
});
module.exports=db;