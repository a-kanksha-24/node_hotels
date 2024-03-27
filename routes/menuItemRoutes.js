const express=require('express');
const router=express.Router();
const menuItem=require('./../models/menuItem');
router.post('/',async(req,res)=>{
    try{
    const data=req.body
    const newmenuItem= new menuItem(data);
   const response=await newmenuItem.save()
   res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal server erroe"})
    }
})
router.get('/',async(req,res)=>{
    try{
        const data=await menuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "internal server error"});
    }
})
router.get('/:tasteType',async(req,res)=>{
    try{
        const tasteType=await req.params.tasteType;
        if(tasteType=='sour'||tasteType=='spicy'||tasteType=='sweet'){
            const response=await menuItem.find({taste:tasteType});
            res.status(200).json(response)
        }
        else{
            res.status(404).json({error:'invalid taste type'});
        }
       

    }
    catch(err){
        res.status(500).json({error:'internal server error'});
    }
})
module.exports=router;