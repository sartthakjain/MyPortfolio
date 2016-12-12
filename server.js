var express= require("express");
var path=require("path");

var app=express();

app.use('/app',express.static(__dirname+'/app'));
app.use('/css',express.static(__dirname+'/css'));
app.use('/js',express.static(__dirname+'/js'));
app.use('/images',express.static(__dirname+'/images'));
app.use("/node_modules",express.static(__dirname+'/node_modules'));
//app.use("/socicon-1.3",express.static(__dirname+'/socicon-1.3'));

app.get('/',function(req,resp){
  resp.sendFile('index.html',{root:path.join(__dirname,'/')});
});

app.listen('3000',function engine(request,response){
  console.log("listening to port 3000");
});
