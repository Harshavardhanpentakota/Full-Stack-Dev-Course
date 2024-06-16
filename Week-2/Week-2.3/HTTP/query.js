const express=require("express");
const app=express();
app.listen(3000)

app.get("/signup",(req,res)=>{
    let a=req.query.a;
        let b=req.query.b;
        res.send(a+b);
    })