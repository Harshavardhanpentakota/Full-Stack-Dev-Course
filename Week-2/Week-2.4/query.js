// query, body, header
//express

// const, let, var

const express=require("express");
const application=express();
const bodyParser=require("body-parser");
application.listen(3000);
application.use(bodyParser.json())

application.get("/sum",function(request,response){
    const number1=request.body.a;
    const number2=request.body.b;
    const result=number1+number2;
    response.send(result);
})


