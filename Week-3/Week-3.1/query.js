const express= require("express");
const application=express();
application.listen(3000);

application.use(express.json());

// get = getting some data from backend

application.get("/sum",function(request,response){
    console.log(request.query);
    const number1=request.query.a;
    const number2=request.query.b;
    response.json({
        result:number1+number2
    });
})

application.get("/subtract",function(request,response){
    const number1=request.query.a;
    const number2=request.query.b;
    const result=number1-number2;
    if(result<0){
        response.json({
            subtraction:result,
            msg:"Negative"
        })
    }
    else{
        response.json({
            subtraction:result,
            msg:"Positive"
        })
    }
})
