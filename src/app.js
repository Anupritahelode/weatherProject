const express=require('express')
const path =require('path')
const app=express();
const port=process.env.PORT || 8008;
const staic_path=(path.join(__dirname,"../public"))
app.use(express.static(staic_path))


app.get("",(req,res)=>{
    res.send("welcome to our new channel")
})

app.get("/weather",(req,res)=>{
    res.send("welcome to weather page")
})
app.get("*",(req,res)=>{
    res.send("oops 404 error page")
})
app.listen(port,()=>{
    console.log("listening to this port")
})