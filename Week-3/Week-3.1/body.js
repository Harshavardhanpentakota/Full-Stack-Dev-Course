const express= require("express");
const application= express();
const bodyparser=require("body-parser");
application.use(bodyparser.json());
application.listen(3000);
application.use(express.json());

application.get("/sum",function(request,response){
    const number1=request.body.a;
    const number2=request.body.b;
    const result=number1+number2;
    response.json({
        sum:result
    });
})

application.get("/subtract",function(request,response){
    const number1=request.body.a;
    const number2=request.body.b;
    const result=number1-number2;
    response.json({
        subtraction:result
    });
})
