const express = require("express")
const app=express();

var users=[{
    name: 'John',
    kidneys: [{
        healthy:false
    }/*,{
        healthy:true
    }*/]
}]
//console.log(users[0]);
app.use(express.json());
app.get("/",function(req,res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthKidneys =0;
    for(let i=0;i<johnKidneys.length;i++){
        if (johnKidneys[i].healthy){
            numberOfHealthKidneys = numberOfHealthKidneys+1;    
        }
    
    }
    const numberOfUnhealthKidneys = numberOfKidneys - numberOfHealthKidneys;
    res.json({
        numberOfKidneys,numberOfHealthKidneys,numberOfUnhealthKidneys
    })
})
app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })
})
app.put("/",function(req,res){
    if( isThereAtleastOneUnhelathyKidney()){
        for (let i=0;i<users[0].kidneys.length;i++){
            users[0].kidneys[i].healthy=true;
        }
        res.json({})
    }else{
        res.status(411).json({
            msg:"You have all healthy kidneys"
        })
    } 
})
//only if atleast one unhealthy kidney is there do perform delete else return 411
app.delete("/",function(req,res){
    if(isThereAtleastOneUnhelathyKidney() ){
        const newKidneys = [];
    for (let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newKidneys;
    res.json({msg:"Done!"})
    } else {
        res.status(411).json({
            msg:"You don't have bad kidneys"
        })
    }
})
function isThereAtleastOneUnhelathyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}
app.listen(3000);