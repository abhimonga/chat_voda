const express=require('express');
const bp=require('body-parser');
const socket=require('socket.io');
const http = require('http');
var app=express();
app.use(bp.json({ limit: '50mb' }));
app.use(bp.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
var port = process.env.PORT || 3000;

var server = app.listen(port,()=>{
    console.log("connected successfully");
})
var io = socket.listen(server);
app.use(express.static(__dirname+"/public"));
io.on("connection",()=>{
    console.log("user connected successfully");
})